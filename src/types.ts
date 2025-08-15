import { V1ObjectMeta } from "@gen/models/V1ObjectMeta"

export interface V1Beta1PodMetrics {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: V1ObjectMeta

  timestamp?: Date
  window?: string
  containers?: V1Beta1PodMetricsContainer[]
}

export interface V1Beta1PodMetricsContainer {
  name?: string
  usage?: {
    cpu?: string
    memory?: string
  }
}

export interface V1Table {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: V1ObjectMeta

  columnDefinitions?: Array<V1TableColumnDefinition>

  rows?: Array<V1TableRow>
}

export interface V1TableColumnDefinition {
  name?: string
  type?: string
  format?: string
  description?: string
  priority?: number
}

export interface V1TableRow {
  cells?: Array<string | number>
  object?: V1PartialObjectMetadata
}

export interface V1PartialObjectMetadata {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: V1ObjectMeta
}

export interface V1Token {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: V1ObjectMeta
  token?: string
}

export interface V1AccessKey {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: V1ObjectMeta
  user?: string
  accessKey?: string
}

export interface V1Info {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: V1ObjectMeta
  methods?: V1InfoMethods
}

export interface V1InfoMethods {
  sso?: V1InfoMethodsSSO[]
  password?: V1InfoMethodsPassword
  rancher?: V1InfoMethodsRancher
}

export interface V1InfoMethodsSSO {
  id?: string
  displayName?: string
  loginEndpoint?: string
  logoutEndpoint?: string
}

export interface V1InfoMethodsPassword {
  enabled?: boolean
}

export interface V1InfoMethodsRancher {
  enabled?: boolean
  host?: string
}

export interface V1OIDCRedirect {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  redirect?: string
  samlId?: string
  samlData?: string
}

export interface V1OIDCToken {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  idToken?: string
  accessToken?: string
  refreshToken?: string
}

export interface V1ClientIDInfo {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  name?: string
  clientId?: string
}

export interface V1Code {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  code?: string
}

export interface VersionV1Version {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  version?: string
  major?: string
  minor?: string

  instance?: string
  kubeVersion?: string

  newerVersion?: string
  shouldUpgrade?: boolean
}

export interface Unstructured {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string
  metadata?: V1ObjectMeta

  // Additional properties
  [key: string]: any
}

export const LoftSchemeGroupVirtualCluster = "virtualcluster.loft.sh"
export const LoftSchemeVersionVirtualCluster = "v1"
export const LoftSchemeGroupVersionVirtualCluster = "virtualcluster.loft.sh/v1"

export const LoftSchemeGroupCluster = "cluster.loft.sh"
export const LoftSchemeVersionCluster = "v1"
export const LoftSchemeGroupVersionCluster = "cluster.loft.sh/v1"

export const LoftSchemeGroup = "management.loft.sh"
export const LoftSchemeVersion = "v1"
export const LoftSchemeGroupVersion = "management.loft.sh/v1"

export const LoftSchemeGroupStorage = "storage.loft.sh"
export const LoftSchemeVersionStorage = "v1"
export const LoftSchemeGroupVersionStorage = "storage.loft.sh/v1"

export const APIExtensionsGroup = "apiextensions.k8s.io"
export const APIExtensionsVersion = "v1"
export const APIExtensionsGroupVersion = "apiextensions.k8s.io/v1"

export type AsyncVoidFunction = () => Promise<void>

export type DeepNullable<T> = {
  [K in keyof T]: T[K] extends object ? DeepNullable<T[K]> | undefined : T[K] | undefined
}

export interface GetOptions {
  pretty?: string

  extended?: string
}

export interface ListOptions {
  pretty?: string
  labelSelector?: string
  fieldSelector?: string
  limit?: string
  timeoutSeconds?: string

  extended?: string
}

export interface CreateOptions {
  pretty?: string
  dryRun?: string
}

export interface UpdateOptions {
  pretty?: string
  dryRun?: string
}

export interface PatchOptions {
  pretty?: string
  dryRun?: string
  force?: "true" | "false"
}

export interface DeleteOptions {
  pretty?: string
  dryRun?: string
  gracePeriodSeconds?: string
  propagationPolicy?: "Orphan" | "Background" | "Foreground"
}

export interface RequestOptions<T> {
  name?: string
  namespace?: string

  vCluster?: RequestOptionsVCluster
  project?: RequestOptionsProject
  basePath?: string
  groupVersionResource?: GroupVersionResource<T>

  headers?: { [name: string]: string }
}

export interface RequestOptionsProject {
  project: string
  space?: string
  virtualCluster?: string
  devPodWorkspace?: string
}

export interface RequestOptionsVCluster {
  cluster: string
  namespace: string
  name: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface GroupVersionResource<_T> {
  namespaced?: boolean
  resource: string
  subResource?: string
  group: string
  version: string
  kind: string
  verbs?: string[]
}

export interface LogOptions {
  container?: string
  follow?: boolean
  insecureSkipTLSVerifyBackend?: boolean
  limitBytes?: number
  pretty?: boolean
  previous?: boolean
  sinceSeconds?: number
  tailLines?: number
  timestamps?: boolean
}

export interface ExecOptions {
  container?: string
  command?: string | string[]
  stdout?: boolean
  stderr?: boolean
  stdin?: boolean
  tty?: boolean
}

export interface Metadata {
  name?: string
  /**
   * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
   */
  _continue?: string
  /**
   * remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
   */
  remainingItemCount?: number
  /**
   * String that identifies the server\'s internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
   */
  resourceVersion?: string
  /**
   * selfLink is a URL representing this object. Populated by the system. Read-only.  DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.
   */
  selfLink?: string
}

export class List<T> {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion"?: string
  "items": Array<T>
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind"?: string
  "metadata"?: Metadata
}
