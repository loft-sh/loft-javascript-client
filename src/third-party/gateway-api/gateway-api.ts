import { GroupVersionResource, Unstructured } from "../../types"

export type GatewayApiResourcesList = {
  GatewayNetworkingV1Gateway: GroupVersionResource<Unstructured>
}

export const GatewayApiResources: GatewayApiResourcesList = {
  GatewayNetworkingV1Gateway: {
    group: "gateway.networking.k8s.io",
    version: "v1",
    resource: "gateways",
    kind: "Gateway",
    namespaced: true,
  },
}
