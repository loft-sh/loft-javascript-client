import { GatewayApiResources, GatewayApiResourcesList } from "./gateway-api/gateway-api"
import { KubeVirtResources, KubeVirtResourcesList } from "./kubevirt/kubevirt"
import { Metal3Resources, Metal3ResourcesList } from "./metal3/metal3"
import { MultusResources, MultusResourcesList } from "./multus/multus"

export type ThirdPartyResourcesList = Metal3ResourcesList &
  KubeVirtResourcesList &
  MultusResourcesList &
  GatewayApiResourcesList

export const ThirdPartyResources: ThirdPartyResourcesList = {
  ...Metal3Resources,
  ...KubeVirtResources,
  ...MultusResources,
  ...GatewayApiResources,
} as const
