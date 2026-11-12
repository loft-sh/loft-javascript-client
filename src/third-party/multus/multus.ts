import { GroupVersionResource } from "../../types"
import { NetworkAttachmentDefinition } from "./type"

export type MultusResourcesList = {
  MultusNetworkAttachmentDefinition: GroupVersionResource<NetworkAttachmentDefinition>
}

export const MultusResources: MultusResourcesList = {
  MultusNetworkAttachmentDefinition: {
    group: "k8s.cni.cncf.io",
    version: "v1",
    resource: "network-attachment-definitions",
    kind: "NetworkAttachmentDefinition",
    namespaced: true,
  },
}
