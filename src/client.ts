import { ManagementV1Self } from "@gen/models/managementV1Self"
import { ManagementV1SelfSubjectAccessReview } from "@gen/models/managementV1SelfSubjectAccessReview"
import {
  V1APIGroup,
  V1APIGroupList,
  V1APIResourceList,
  V1APIVersions,
  V1SelfSubjectAccessReview,
  V1Status,
  VersionInfo,
} from "@kubernetes/client-node"
import Cookies from "js-cookie"
import jsonmergepatch from "json-merge-patch"

import constants from "./constants"
import { arr } from "./helpers"
import { NewResource, Resources } from "./resources"
import {
  ErrorTypeNetwork,
  ErrorTypeNotFound,
  ErrorTypeServiceUnavailable,
  ErrorTypeUnauthorized,
  MapErrorCode,
  Result,
  ResultError,
  Return,
} from "./result"
import {
  CreateOptions,
  DeleteOptions,
  ExecOptions,
  GetOptions,
  GroupVersionResource,
  List,
  ListOptions,
  LogOptions,
  PatchOptions,
  RequestOptions,
  RequestOptionsProject,
  RequestOptionsVCluster,
  Unstructured,
  UpdateOptions,
  V1AccessKey,
  V1Table,
  VersionV1Version,
} from "./types"

const CookieOptions: Cookies.CookieAttributes = {
  secure: true,
  expires: 365 * 10,
  sameSite: "strict",
}

const LOFT_ACCESS_KEY_IDENTIFIER = constants.loftAccessKeyIdentifier
const LOFT_IMPERSONATE_SUBJECT_IDENTIFIER = constants.loftImpersonateSubjectIdentifier
const LOFT_IMPERSONATE_JOINED_GROUP_IDENTIFIER = constants.loftImpersonateJoinedGroupIdentifier

const K8S_WEBSOCKET_PROTOCOLS = [
  "v4.channel.k8s.io",
  "v3.channel.k8s.io",
  "v2.channel.k8s.io",
  "channel.k8s.io",
]

export function getApiHost(): string {
  // development
  if (typeof window !== "undefined" && window.location.href.startsWith("http://localhost:3000")) {
    return "https://localhost:9898"
  }

  return ""
}

function getWebSocketHost(): string {
  // Go with the default if nothing is specified to allow SSR
  if (typeof window === "undefined") {
    return `wss://localhost:8080`
  }
  if (window.location.host === "localhost:3000") {
    return `wss://localhost:8080`
  }

  const protocol = window.location.protocol === "https:" ? "wss" : "ws"

  return `${protocol}://${window.location.host}`
}

function getProjectExtraGroups(project: RequestOptionsProject): string[] {
  return [
    project.virtualCluster
      ? "loft:vcluster:main"
      : `loft:space:${project.project}:${project.space}`,
  ]
}

export interface AuthInfo {
  username: string
  kubeUser: string
}

export type RequestVerb =
  | "create"
  | "get"
  | "watch"
  | "list"
  | "update"
  | "patch"
  | "delete"
  | "deletecollection"
  | "impersonate"
  | "bind"

export const ManagementBasePath = "/kubernetes/management"
export const ClusterBasePath = "/kubernetes/cluster/"
export const VClusterBasePath = "/kubernetes/virtualcluster/"
export const ProjectBasePath = "/kubernetes/project/"

export const getProjectNamespace = (name?: string, prefix?: string): string =>
  !name ? "p-" : prefix ? `${prefix}${name}` : `p-${name}`

export function getProjectFromNamespace(
  namespace: string | undefined,
  prefix?: string
): string | undefined {
  if (!namespace) {
    return undefined
  }

  if (prefix) {
    const prefixHasDash = prefix.endsWith("-")

    if (prefixHasDash) {
      return namespace.replace(new RegExp(`^${prefix}`), "")
    } else {
      return namespace.replace(new RegExp(`^${prefix}-`), "")
    }
  }

  return namespace.replace(/^p-/, "")
}

class Client {
  static getAccessKey(): string | null {
    return localStorage.getItem(LOFT_ACCESS_KEY_IDENTIFIER)
  }

  static tryCastToStatus(obj: any): Result<V1Status | null> {
    if (!obj.kind) {
      return Return.Value(null)
    } else if (obj.kind !== "Status" || obj.apiVersion !== "v1") {
      return Return.Value(null)
    }

    return Return.Value(obj)
  }

  private readonly apiHost: string | null = ""
  private readonly wsHost: string | null = ""
  private accessKey: string | null = ""

  constructor(accessKey?: string, apiHost?: string, wsHost?: string) {
    this.apiHost = apiHost || getApiHost()
    this.wsHost = wsHost || getWebSocketHost()
    this.accessKey = accessKey || Client.getAccessKey()
  }

  public async getUser(): Promise<Result<string>> {
    const selfResult = await this.management(Resources.ManagementV1Self).Create(
      NewResource<ManagementV1Self>(Resources.ManagementV1Self)
    )
    if (selfResult.err) {
      return selfResult
    } else if (!selfResult.val.status?.user) {
      return Return.Failed("no user found")
    }

    if (typeof window !== "undefined") {
      if (!(window as any).loft) {
        ;(window as any).loft = {}
      }

      ;(window as any).loft.instanceID = selfResult.val.status.instanceID
      ;(window as any).loft.chatAuthToken = selfResult.val.status.chatAuthToken
      ;(window as any).loft.user = selfResult.val.status.user
    }

    return Return.Value(selfResult.val.status.user.name!)
  }

  public getAccessKey(): string | null {
    return this.accessKey
  }

  public async loftVersion(refresh?: boolean): Promise<Result<VersionV1Version>> {
    try {
      let path = this.apiHost + "/version"
      if (refresh) {
        path += "?refresh=true"
      }

      const versionRequest = await fetch(path)
      const version = (await versionRequest.json()) as VersionV1Version

      return Return.Value(version)
    } catch (err) {
      console.error(err)

      return Return.Failed("error during version retrieval")
    }
  }

  public impersonatedUser(): { name: string; subject: string; groups: string[] } | undefined {
    try {
      const impersonationHeaders = localStorage.getItem(LOFT_IMPERSONATE_SUBJECT_IDENTIFIER)
      if (impersonationHeaders) {
        return JSON.parse(impersonationHeaders) as {
          name: string
          subject: string
          groups: string[]
        }
      }
    } catch (e) {
      console.error(e)
    }

    return undefined
  }

  public impersonate(name?: string, subject?: string, groups?: string[]) {
    if (!subject) {
      // Remove from local storage
      localStorage.removeItem(LOFT_IMPERSONATE_SUBJECT_IDENTIFIER)

      // Remove from cookies
      Cookies.remove(LOFT_IMPERSONATE_SUBJECT_IDENTIFIER)
      Cookies.remove(LOFT_IMPERSONATE_JOINED_GROUP_IDENTIFIER)
    } else {
      // Store in local storage
      localStorage.setItem(
        LOFT_IMPERSONATE_SUBJECT_IDENTIFIER,
        JSON.stringify({
          name,
          subject,
          groups,
        })
      )

      // Store in cookies
      if (subject) {
        Cookies.set(LOFT_IMPERSONATE_SUBJECT_IDENTIFIER, subject, CookieOptions)
      }
      groups?.forEach((group) => {
        let existingGroup = Cookies.get(LOFT_IMPERSONATE_JOINED_GROUP_IDENTIFIER)
        if (existingGroup) {
          existingGroup += ", " + group
          Cookies.set(LOFT_IMPERSONATE_JOINED_GROUP_IDENTIFIER, existingGroup, CookieOptions)
        } else {
          Cookies.set(LOFT_IMPERSONATE_JOINED_GROUP_IDENTIFIER, group, CookieOptions)
        }
      })
    }
  }

  public async login(username: string, password: string): Promise<ResultError> {
    const response = await this.request<V1AccessKey>(`/auth/password/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    if (response.err) {
      return response
    }

    const accessKey = response.val
    this.setAccessKey(accessKey.accessKey!)

    return Return.Ok()
  }

  public async loginWithAccessKey(accessKey: string): Promise<ResultError> {
    if (this.isLoggedIn()) {
      await this.logout()
    }

    this.accessKey = accessKey
    const result = await this.management(Resources.ManagementV1Self).Create(
      NewResource(Resources.ManagementV1Self)
    )
    if (result.err) {
      this.clearStorage()

      return result
    }

    this.setAccessKey(accessKey)

    return Return.Ok()
  }

  public isLoggedIn(): boolean {
    return !!this.accessKey
  }

  private setAccessKey(key: string) {
    this.accessKey = key

    localStorage.setItem(LOFT_ACCESS_KEY_IDENTIFIER, key)
    Cookies.set(LOFT_ACCESS_KEY_IDENTIFIER, key, CookieOptions)
  }

  public async stream(
    path: string,
    init?: RequestInit
  ): Promise<Result<ReadableStreamDefaultReader<Uint8Array>>> {
    try {
      const response = await fetch(this.apiHost + path, init)
      if (response.status >= 400 || !response.body) {
        return await this.parseResponse(path, response)
      }

      return Return.Value(response.body.getReader())
    } catch (err) {
      return Return.Failed(err + "", "NetworkError", ErrorTypeNetwork)
    }
  }

  public async request<E>(path: string, init?: RequestInit): Promise<Result<E>> {
    try {
      const response = await fetch(this.apiHost + path, {
        ...init,
        credentials: "same-origin",
      })

      if (!response.ok) {
        const responseCopy = response.clone()
        const body = await responseCopy.text()

        if (response.status === 401) {
          try {
            const error = JSON.parse(body) as {
              message?: string
              reason?: string
            }

            if (error?.message === constants.platformAccessKeyNotFound) {
              return Return.Failed(
                error.message || "Unauthorized",
                error.reason,
                ErrorTypeUnauthorized
              )
            }
          } catch (e) {
            // noop
          }
        }
      }

      return await this.parseResponse(path, response)
    } catch (err) {
      const error = err as {
        reason: string
        message: string
      }

      if (error.message === constants.platformAccessKeyNotFound) {
        window.location.href = `/login?error=${error.message}&errorType=${error.reason}`
      }

      return Return.Failed(err + "", "NetworkError", ErrorTypeNetwork)
    }
  }

  public async socket(path: string, protocols: string[] | string | undefined): Promise<WebSocket> {
    this.refreshCookie()

    return new Promise<WebSocket>((resolve, reject) => {
      const client = new WebSocket(`${this.wsHost}${path}`, protocols)
      let resolved = false
      client.onopen = () => {
        resolved = true
        resolve(client)
      }

      client.onerror = (err) => {
        if (!resolved) {
          const isAuthenticated = Cookies.get(LOFT_ACCESS_KEY_IDENTIFIER) != ""
          if (isAuthenticated) {
            reject(err)
          } else {
            reject(new Error("Web socket is not authenticated. Please log in again"))
          }
        }
      }
    })
  }

  private async parseResponse<E>(path: string, response: Response): Promise<Result<E>> {
    const text = await response.text()
    let obj: any = undefined
    try {
      obj = JSON.parse(text)
    } catch (err) {
      if (response.status === 404) {
        return Return.Failed("page not found", "NotFound", ErrorTypeNotFound)
      } else if (response.status === 503) {
        if (path.includes("kiosk.sh") || path.includes("cluster.loft.sh")) {
          const splitted = path.split("/")
          if (
            splitted.length >= 4 &&
            splitted[0] === "" &&
            splitted[1] === "kubernetes" &&
            splitted[2] === "cluster"
          ) {
            return Return.Failed(
              `Agent seems to be currently unavailable, it is maybe just starting up. Click <a href="/spaces/${splitted[3]}/loft">here</a> for more information</span>`,
              "LoftAgentUnavailable",
              ErrorTypeServiceUnavailable
            )
          }

          return Return.Failed(
            "Agent seems to be currently unavailable, it is maybe just starting up",
            "LoftAgentUnavailable",
            ErrorTypeServiceUnavailable
          )
        }
      } else if (response.status === 200) {
        // the request succeeded, maybe we wanted text all along
        return Return.Value(text as any)
      }

      console.info("Unexpected Server Response", text)

      return Return.Failed(
        "Unexpected server response",
        MapErrorCode(response.status),
        MapErrorCode(response.status)
      )
    }

    const status = Client.tryCastToStatus(obj)
    if (status.err) {
      return status
    } else if (status.val !== null) {
      if (status.val.status === "Failure") {
        // vcluster is not ready, improve the error message a little bit
        if (
          status.val.code === 500 &&
          (status.val.message?.indexOf("vcluster secret not found") !== -1 ||
            status.val.message.indexOf("no ready pod for virtual cluster") !== -1)
        ) {
          return Return.Failed(
            "vcluster seems to be not ready. Please refresh in a second",
            status.val.reason,
            MapErrorCode(status.val.code!)
          )
        }

        return Return.Failed(status.val.message!, status.val.reason, MapErrorCode(status.val.code!))
      }
    }

    // return other non status responses with error codes as error
    if (response.status >= 400) {
      return Return.Failed("unknown error", "Unknown", MapErrorCode(response.status!))
    }

    return Return.Value(obj)
  }

  public management<T>(groupVersionResource: GroupVersionResource<T>) {
    return new Request<T>(this, {
      basePath: ManagementBasePath,
      groupVersionResource,
      headers: this.impersonationHeaders(),
    })
  }

  public managementNonResource = <T>() => {
    return new Request<T>(this, {
      basePath: ManagementBasePath,
      headers: this.impersonationHeaders(),
    })
  }

  public cluster = <T>(name: string, groupVersionResource: GroupVersionResource<T>) => {
    return new Request<T>(this, {
      basePath: ClusterBasePath + name,
      groupVersionResource,
      headers: this.impersonationHeaders(),
    })
  }

  public clusterNonResource = <T>(name: string) => {
    return new Request<T>(this, {
      basePath: ClusterBasePath + name,
      headers: this.impersonationHeaders(),
    })
  }

  public project = <T>(
    project: RequestOptionsProject,
    groupVersionResource: GroupVersionResource<T>
  ) => {
    return new Request<T>(this, {
      basePath:
        ProjectBasePath +
        project.project +
        "/" +
        (project.space ? "space/" + project.space : "virtualcluster/" + project.virtualCluster),
      groupVersionResource,
      project,
      headers: this.impersonationHeaders(getProjectExtraGroups(project)),
    })
  }

  public projectNonResource = <T>(project: RequestOptionsProject) => {
    return new Request<T>(this, {
      basePath:
        ProjectBasePath +
        project.project +
        "/" +
        (project.space ? "space/" + project.space : "virtualcluster/" + project.virtualCluster),
      project,
      headers: this.impersonationHeaders(getProjectExtraGroups(project)),
    })
  }

  public vCluster<T>(
    vCluster: RequestOptionsVCluster,
    groupVersionResource: GroupVersionResource<T>
  ) {
    return new Request<T>(this, {
      basePath:
        VClusterBasePath + vCluster.cluster + "/" + vCluster.namespace + "/" + vCluster.name,
      groupVersionResource,
      vCluster,
      headers: this.impersonationHeaders(),
    })
  }

  public vClusterNonResource<T>(vCluster: RequestOptionsVCluster) {
    return new Request<T>(this, {
      basePath:
        VClusterBasePath + vCluster.cluster + "/" + vCluster.namespace + "/" + vCluster.name,
      vCluster,
      headers: this.impersonationHeaders(),
    })
  }

  public auto<T>(
    cluster: string | undefined,
    vCluster: RequestOptionsVCluster | undefined,
    project: RequestOptionsProject | undefined,
    groupVersionResource: GroupVersionResource<T>
  ) {
    return project
      ? this.project(project, groupVersionResource)
      : vCluster
        ? this.vCluster(vCluster, groupVersionResource)
        : cluster
          ? this.cluster(cluster!, groupVersionResource)
          : this.management(groupVersionResource)
  }

  public autoNonResource(
    cluster: string | undefined,
    vCluster: RequestOptionsVCluster | undefined,
    project: RequestOptionsProject | undefined
  ) {
    return project
      ? this.projectNonResource(project)
      : vCluster
        ? this.vClusterNonResource(vCluster)
        : cluster
          ? this.clusterNonResource(cluster!)
          : this.managementNonResource()
  }

  public async doRawSocket(path: string, protocols?: string[]): Promise<Result<WebSocket>> {
    try {
      return Return.Value(await this.socket(path, protocols))
    } catch (err) {
      console.error(err)

      return Return.Failed((err as Error).message || JSON.stringify(err))
    }
  }

  public async doRawStream(
    path: string,
    init?: RequestInit,
    headers?: Record<string, string>
  ): Promise<Result<ReadableStreamDefaultReader<Uint8Array>>> {
    return this.doRawInternal(path, init, headers, true)
  }

  public async doRaw<E>(
    path: string,
    init?: RequestInit,
    headers?: Record<string, string>
  ): Promise<Result<E>> {
    return this.doRawInternal(path, init, headers)
  }

  private async doRawInternal(
    path: string,
    init?: RequestInit,
    headers?: Record<string, string>,
    stream?: boolean
  ): Promise<Result<any>> {
    const requestToken = this.accessKey
    const mergedHeaders = requestToken
      ? new Headers({
          ...headers,
          Authorization: "bearer " + requestToken,
          "X-Sleep-Mode-Ignore": "true",
          "X-Platform-Client": "true",
        })
      : new Headers({
          ...headers,
          "X-Sleep-Mode-Ignore": "true",
          "X-Platform-Client": "true",
        })

    // merge headers
    const response = !stream
      ? await this.request(path, {
          ...init,
          headers: mergedHeaders,
        })
      : await this.stream(path, {
          ...init,
          headers: mergedHeaders,
        })

    // refetch the token when its expired
    if (response.err && response.val.type === ErrorTypeUnauthorized) {
      if (
        response.val.message === "Access key not found. Please login again" ||
        response.val.message === "invalid bearer token"
      ) {
        this.clearStorage()
        if (typeof window !== "undefined") {
          window.location.href = "/"
        }

        // Never ending promise
        await new Promise(() => {})
      }
    }

    return response
  }

  private impersonationHeaders(extraGroups?: string[]): {
    [name: string]: string
  } {
    const impersonatedUser = this.impersonatedUser()
    const headers: { [name: string]: string } = {}
    if (impersonatedUser) {
      if (impersonatedUser.subject) {
        headers["Impersonate-User"] = impersonatedUser.subject
      }

      ;[...arr(impersonatedUser.groups), ...arr(extraGroups)].forEach((group) => {
        if (headers["Impersonate-Joined-Group"]) {
          headers["Impersonate-Joined-Group"] += ", " + group
        } else {
          headers["Impersonate-Joined-Group"] = group
        }
      })
    }

    return headers
  }

  private clearStorage() {
    this.accessKey = null

    localStorage.removeItem(LOFT_ACCESS_KEY_IDENTIFIER)
    localStorage.removeItem(LOFT_IMPERSONATE_SUBJECT_IDENTIFIER)

    Cookies.remove(LOFT_ACCESS_KEY_IDENTIFIER, { secure: true })
    Cookies.remove(LOFT_IMPERSONATE_SUBJECT_IDENTIFIER, { secure: true })
    Cookies.remove(LOFT_IMPERSONATE_JOINED_GROUP_IDENTIFIER, { secure: true })
  }

  private refreshCookie() {
    const accessKey = this.accessKey || localStorage.getItem(LOFT_ACCESS_KEY_IDENTIFIER)
    const cookieAccessKey = Cookies.get(LOFT_ACCESS_KEY_IDENTIFIER)
    if (accessKey && accessKey != cookieAccessKey) {
      Cookies.set(LOFT_ACCESS_KEY_IDENTIFIER, accessKey, CookieOptions)
    }
  }

  public async logout(): Promise<ResultError> {
    const result = await this.management(Resources.ManagementV1Self).Create(
      NewResource(Resources.ManagementV1Self)
    )
    if (result.err) {
      this.clearStorage()

      return result
    } else if (!result.val.status?.accessKey) {
      this.clearStorage()

      return Return.Ok()
    }

    const deleteResult = await this.management(Resources.ManagementV1OwnedAccessKey).Delete(
      result.val.status.accessKey
    )
    if (deleteResult.err) {
      this.clearStorage()

      return deleteResult
    }

    this.clearStorage()

    return Return.Ok()
  }
}

class Request<T> {
  private readonly client: Client
  private readonly options: RequestOptions<T>

  constructor(client: Client, options: RequestOptions<T>) {
    this.client = client
    this.options = options
  }

  public Name(name: string) {
    return new Request(this.client, { ...this.options, name })
  }

  public Namespace(namespace?: string) {
    if (!namespace) {
      return new Request(this.client, { ...this.options })
    }

    return new Request(this.client, { ...this.options, namespace })
  }

  public Resource(groupVersionResource: GroupVersionResource<T>) {
    return new Request(this.client, { ...this.options, groupVersionResource })
  }

  private buildPath(options?: any): Result<string> {
    if (!this.options.groupVersionResource) {
      return Return.Failed("groupVersionResource is missing")
    } else if (!this.options.basePath) {
      return Return.Failed("basePath is missing")
    } else if (!this.options.name && this.options.groupVersionResource.subResource) {
      return Return.Failed("resource name required when subresource is used")
    }

    const path = [this.options.basePath]
    if (this.options.groupVersionResource.group) {
      path.push("apis", this.options.groupVersionResource.group)
    } else {
      path.push("api")
    }

    path.push(this.options.groupVersionResource.version)
    if (this.options.namespace) {
      path.push("namespaces", this.options.namespace)
    }
    path.push(this.options.groupVersionResource.resource)
    if (this.options.name) {
      path.push(this.options.name)
    }
    if (this.options.groupVersionResource.subResource) {
      path.push(this.options.groupVersionResource.subResource)
    }

    // build options
    let optionsStr = ""
    if (options) {
      const optionsArr = []
      for (const key of Object.keys(options)) {
        if (options[key]) {
          if (Array.isArray(options[key])) {
            options[key].forEach((value: string) => {
              optionsArr.push(key + "=" + encodeURIComponent(value))
            })
          } else {
            optionsArr.push(key + "=" + encodeURIComponent(options[key]))
          }
        }
      }
      if (optionsArr.length > 0) {
        optionsStr = "?" + optionsArr.join("&")
      }
    } else {
      optionsStr = "?timeout=180s"
    }

    return Return.Value(path.join("/") + optionsStr)
  }

  private parseResourceList(
    group: string,
    version: string,
    resourceList: V1APIResourceList,
    resultArray: Array<GroupVersionResource<Unstructured>>,
    removeDuplicates?: boolean,
    includeSubResources?: boolean
  ) {
    for (let k = 0; k < arr(resourceList.resources).length; k++) {
      const resource = resourceList.resources[k]
      if (resource === undefined) {
        continue
      }

      // check if subresource & duplicate
      const splitted = resource.name.split("/")
      const resourceName = splitted[0] ?? ""
      if (!includeSubResources && splitted.length > 1) {
        continue
      } else if (
        removeDuplicates &&
        resultArray.find((r) => r.group === group && r.resource === resourceName)
      ) {
        continue
      }

      resultArray.push({
        resource: resourceName,
        subResource: splitted.length > 1 ? splitted[1] : undefined,
        group: group,
        version: version,
        kind: resource.kind,
        namespaced: resource.namespaced,
        verbs: resource.verbs,
      })
    }
  }

  public async ApiResources(
    removeDuplicates?: boolean,
    includeSubResources?: boolean
  ): Promise<Result<Array<GroupVersionResource<Unstructured>>>> {
    const returnValue: Array<GroupVersionResource<Unstructured>> = []

    // parse api resources
    const apiVersionsResult = await this.client.doRaw<V1APIVersions>(
      [this.options.basePath, "api"].join("/")
    )
    if (apiVersionsResult.err) {
      return apiVersionsResult
    }

    let promises = []
    for (let j = 0; j < arr(apiVersionsResult.val.versions).length; j++) {
      promises.push(
        (async (index: number) => {
          const version = apiVersionsResult.val.versions[index]
          if (version === undefined) {
            return
          }
          const resourcesResult = await this.client.doRaw<V1APIResourceList>(
            [this.options.basePath, "api", version].join("/")
          )
          if (resourcesResult.err) {
            console.error(resourcesResult.val.message)

            return
          }

          this.parseResourceList(
            "",
            version,
            resourcesResult.val,
            returnValue,
            removeDuplicates,
            includeSubResources
          )
        })(j)
      )

      if (promises.length > 20) {
        await Promise.all(promises)
        promises = []
      }
    }
    if (promises.length > 0) {
      await Promise.all(promises)
      promises = []
    }

    // parse apis resources
    const apisGroupListResult = await this.client.doRaw<V1APIGroupList>(
      [this.options.basePath, "apis"].join("/")
    )
    if (apisGroupListResult.err) {
      return apisGroupListResult
    }

    // get all versions and retrieve resources
    for (let i = 0; i < arr(apisGroupListResult.val.groups).length; i++) {
      const group = apisGroupListResult.val.groups[i]
      if (group === undefined) {
        continue
      }
      for (let j = 0; j < arr(group.versions).length; j++) {
        promises.push(
          (async (index: number, group: V1APIGroup) => {
            const version = group.versions[index]
            if (version === undefined) {
              return
            }
            const resourcesResult = await this.client.doRaw<V1APIResourceList>(
              [this.options.basePath, "apis", group.name, version.version].join("/")
            )
            if (resourcesResult.err) {
              console.error(resourcesResult.val.message)

              return
            }

            this.parseResourceList(
              group.name,
              version.version,
              resourcesResult.val,
              returnValue,
              removeDuplicates,
              includeSubResources
            )
          })(j, group)
        )
        if (promises.length > 20) {
          await Promise.all(promises)
          promises = []
        }
      }
    }
    if (promises.length > 0) {
      await Promise.all(promises)
    }

    return Return.Value(returnValue)
  }

  public async Version(): Promise<Result<VersionInfo>> {
    const path = [this.options.basePath, "version"]

    return await this.client.doRaw<VersionInfo>(path.join("/"))
  }

  public async VirtualClusterInstanceLogs(
    namespace: string,
    instance: string,
    options?: LogOptions
  ): Promise<Result<ReadableStreamDefaultReader<Uint8Array>>> {
    let requestPath = [
      this.options.basePath,
      `apis/management.loft.sh/v1/namespaces/${namespace}/virtualclusterinstances/${instance}/log`,
    ].join("/")
    const parameters: string[] = []
    if (options) {
      for (const key of Object.keys(options)) {
        parameters.push(`${key}=${encodeURIComponent((options as any)[key])}`)
      }
    }
    if (parameters.length > 0) {
      requestPath += "?" + parameters.join("&")
    }

    return await this.client.doRawStream(requestPath, undefined, this.options.headers)
  }

  public async TaskLogs(
    task: string,
    options?: LogOptions
  ): Promise<Result<ReadableStreamDefaultReader<Uint8Array>>> {
    let requestPath = [this.options.basePath, `apis/management.loft.sh/v1/tasks/${task}/log`].join(
      "/"
    )

    const parameters: string[] = []
    if (options) {
      for (const key of Object.keys(options)) {
        parameters.push(`${key}=${encodeURIComponent((options as any)[key])}`)
      }
    }
    if (parameters.length > 0) {
      requestPath += "?" + parameters.join("&")
    }

    return await this.client.doRawStream(requestPath, undefined, this.options.headers)
  }

  public async Logs(
    namespace: string,
    pod: string,
    options?: LogOptions
  ): Promise<Result<ReadableStreamDefaultReader<Uint8Array>>> {
    let requestPath = [
      this.options.basePath,
      `api/v1/namespaces/${namespace}/pods/${pod}/log`,
    ].join("/")
    const queryString: string = toQueryString(options)
    if (queryString.length > 0) {
      requestPath += "?" + queryString
    }

    return await this.client.doRawStream(requestPath, undefined, this.options.headers)
  }

  public async Exec(
    namespace: string,
    pod: string,
    options?: ExecOptions
  ): Promise<Result<WebSocket>> {
    let requestPath = [
      this.options.basePath,
      `api/v1/namespaces/${namespace}/pods/${pod}/exec`,
    ].join("/")
    const queryString: string = toQueryString(options)
    if (queryString.length > 0) {
      requestPath += "?" + queryString
    }

    return await this.client.doRawSocket(requestPath, K8S_WEBSOCKET_PROTOCOLS)
  }

  public async Path(
    path: string,
    init?: RequestInit,
    headers?: Record<string, string>
  ): Promise<Result<T>> {
    const requestPath = [this.options.basePath, path]

    return await this.client.doRaw<T>(requestPath.join("/"), init, {
      ...headers,
      ...this.options.headers,
    })
  }

  public ResolvePath(name?: string): Result<string> {
    if (name) {
      this.options.name = name
    }

    return this.buildPath()
  }

  public async Get(name: string, options?: GetOptions): Promise<Result<T>> {
    this.options.name = name
    const path = this.buildPath(options)
    if (path.err) {
      return path
    }

    return Return.WithExtra(
      await this.client.doRaw<T>(path.val, undefined, this.options.headers),
      this.options
    )
  }

  public async List(options?: ListOptions): Promise<Result<List<T>>> {
    if (this.options.name) {
      return Return.Failed("name is set on a list request")
    }

    const path = this.buildPath(options)
    if (path.err) {
      return path
    }

    return Return.WithExtra(
      await this.client.doRaw<List<T>>(path.val, undefined, this.options.headers),
      this.options
    )
  }

  public async ListTable(options?: ListOptions): Promise<Result<V1Table | List<T>>> {
    if (this.options.name) {
      return Return.Failed("name is set on a list request")
    }

    const path = this.buildPath(options)
    if (path.err) {
      return path
    }

    return Return.WithExtra(
      await this.client.doRaw<List<T>>(path.val, undefined, {
        ...this.options.headers,
        Accept:
          "application/json;as=Table;v=v1;g=meta.k8s.io,application/json;as=Table;v=v1beta1;g=meta.k8s.io,application/json",
      }),
      this.options
    )
  }

  public async Create(obj: T, options?: CreateOptions): Promise<Result<T>> {
    const path = this.buildPath(options)
    if (path.err) {
      return path
    }

    return Return.WithExtra(
      await this.client.doRaw<T>(
        path.val,
        {
          method: "POST",
          body: JSON.stringify(obj),
        },
        { ...this.options.headers, "Content-Type": "application/json" }
      ),
      this.options
    )
  }

  public async PatchObject<O extends object>(
    before: O,
    after: O,
    patchType?: string,
    options?: PatchOptions
  ): Promise<Result<T>> {
    const patch = jsonmergepatch.generate(before, after)

    return this.Patch((after as any).metadata?.name, patch, patchType, options)
  }

  public async Patch(
    name: string,
    patch: any,
    patchType?: string,
    options?: PatchOptions
  ): Promise<Result<T>> {
    this.options.name = name

    const path = this.buildPath(options)
    if (path.err) {
      return path
    }

    return Return.WithExtra(
      await this.client.doRaw<T>(
        path.val,
        {
          method: "PATCH",
          body: JSON.stringify(patch, function (_k, v) {
            return v === undefined ? null : v
          }),
        },
        {
          ...this.options.headers,
          "Content-Type": patchType || "application/merge-patch+json",
        }
      ),
      this.options
    )
  }

  public async Update(name: string, obj: T, options?: UpdateOptions): Promise<Result<T>> {
    this.options.name = name

    const path = this.buildPath(options)
    if (path.err) {
      return path
    }

    return Return.WithExtra(
      await this.client.doRaw<T>(
        path.val,
        {
          method: "PUT",
          body: JSON.stringify(obj),
        },
        { ...this.options.headers, "Content-Type": "application/json" }
      ),
      this.options
    )
  }

  public async Delete(name: string, options?: DeleteOptions): Promise<Result<T>> {
    this.options.name = name

    const path = this.buildPath(options)
    if (path.err) {
      return path
    }

    return Return.WithExtra(
      await this.client.doRaw<T>(
        path.val,
        {
          method: "DELETE",
        },
        this.options.headers
      ),
      this.options
    )
  }

  public async CanI(verb: RequestVerb): Promise<Result<boolean>> {
    const resource = this.options.groupVersionResource!
    const cluster =
      this.options.basePath?.indexOf(ClusterBasePath) === 0
        ? this.options.basePath.substring(ClusterBasePath.length)
        : undefined

    let request: Request<V1SelfSubjectAccessReview | ManagementV1SelfSubjectAccessReview>
    let selfSubjectAccessReview: V1SelfSubjectAccessReview | ManagementV1SelfSubjectAccessReview
    if (this.options.project) {
      request = this.client.project(this.options.project, Resources.V1SelfSubjectAccessReview)
      selfSubjectAccessReview = NewResource(Resources.V1SelfSubjectAccessReview)
    } else if (this.options.vCluster) {
      request = this.client.vCluster(this.options.vCluster, Resources.V1SelfSubjectAccessReview)
      selfSubjectAccessReview = NewResource(Resources.V1SelfSubjectAccessReview)
    } else if (cluster) {
      request = this.client.cluster(cluster, Resources.V1SelfSubjectAccessReview)
      selfSubjectAccessReview = NewResource(Resources.V1SelfSubjectAccessReview)
    } else {
      request = this.client.management(Resources.ManagementV1SelfSubjectAccessReview)
      selfSubjectAccessReview = NewResource(Resources.ManagementV1SelfSubjectAccessReview)
    }

    selfSubjectAccessReview.spec = {
      resourceAttributes: {
        verb,
        name: this.options.name,
        namespace: this.options.namespace,
        group: resource.group,
        version: resource.version,
        resource: resource.resource,
        subresource: resource.subResource,
      },
    }

    const response = await request.Create(selfSubjectAccessReview)
    if (response.err) {
      return response
    }

    return Return.Value(!!(response.val.status?.allowed && !response.val.status.denied))
  }
}

function toQueryString(options: any): string {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(options)) {
    if (Array.isArray(value)) {
      // append must be called for each item of the array
      // otherwise the array will be encoded as a single
      // query parameter.
      value.forEach((item) => {
        params.append(key, item as string)
      })
    } else {
      params.append(key, value as string)
    }
  }

  return params.toString()
}

export default Client
