import { KubeVirtResources, KubeVirtResourcesList } from "./kubevirt/kubevirt"
import { Metal3Resources, Metal3ResourcesList } from "./metal3/metal3"

export type ThirdPartyResourcesList = Metal3ResourcesList & KubeVirtResourcesList

export const ThirdPartyResources: ThirdPartyResourcesList = {
  ...Metal3Resources,
  ...KubeVirtResources,
} as const
