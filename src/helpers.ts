import { V1APIResourceList } from "@kubernetes/client-node"

import { GroupVersionResource, Unstructured } from "./types"

export function arr<T>(array: T[] | undefined | null): T[] {
  return !array ? [] : array
}

export function parseResourceList(
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
