// The agent's Metal3BMC subresources (cluster.loft.sh/v1), the BMC of a metal3
// BareMetalHost, served in the BareMetalHost's cluster. Mirrors
// staging/src/github.com/loft-sh/agentapi/v5/pkg/apis/loft/cluster/v1/metal3bmc_types.go,
// which no management API references, so no model is generated for it.

import { V1ObjectMeta } from "@gen/models/V1ObjectMeta"

export type Metal3BMCRedfishSpec = {
  method?: string
  path?: string
  // base64, as Go encodes []byte
  body?: string
}

export type Metal3BMCRedfishStatus = {
  statusCode?: number
  header?: { [key: string]: string[] }
  // base64, as Go encodes []byte
  body?: string
}

export type Metal3BMCRedfish = {
  apiVersion?: string
  kind?: string
  metadata?: V1ObjectMeta
  spec?: Metal3BMCRedfishSpec
  status?: Metal3BMCRedfishStatus
}

export type Metal3BMCConsole = {
  apiVersion?: string
  kind?: string
  metadata?: V1ObjectMeta
}
