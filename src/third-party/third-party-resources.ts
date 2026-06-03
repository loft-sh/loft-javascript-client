import { KubeVirtResources, KubeVirtResourcesList } from "./kubevirt/kubevirt"
import { Metal3Resources, Metal3ResourcesList } from "./metal3/metal3"
import { MultusResources, MultusResourcesList } from "./multus/multus"

export type ThirdPartyResourcesList = Metal3ResourcesList &
  KubeVirtResourcesList &
  MultusResourcesList

export const ThirdPartyResources: ThirdPartyResourcesList = {
  ...Metal3Resources,
  ...KubeVirtResources,
  ...MultusResources,
} as const
