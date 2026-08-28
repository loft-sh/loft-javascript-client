import { V1ObjectMeta } from "@kubernetes/client-node"

// Multus NetworkAttachmentDefinition (k8s.cni.cncf.io/v1). There is no published TypeScript model
// for this CRD, so it is described here directly. `spec.config` holds a CNI configuration as a JSON
// string (either a single plugin config or a `plugins` conflist).
export interface NetworkAttachmentDefinitionSpec {
  config?: string
}

export interface NetworkAttachmentDefinition {
  apiVersion?: string
  kind?: string
  metadata?: V1ObjectMeta
  spec?: NetworkAttachmentDefinitionSpec
}
