// The agent's IronicNode (cluster.loft.sh/v1), the Ironic node behind a metal3
// BareMetalHost, served in the BareMetalHost's cluster. Mirrors
// staging/src/github.com/loft-sh/agentapi/v4/pkg/apis/loft/cluster/v1/ironicnode_types.go,
// which no management API references, so no model is generated for it.

import { V1ObjectMeta } from "@gen/models/V1ObjectMeta"

export type IronicNodeStep = {
  driverInterface?: string
  step?: string
  abortable?: boolean
}

export type IronicNodeAgent = {
  started?: boolean
  lastHeartbeat?: string
  version?: string
}

export type IronicNodeHistoryEvent = {
  createdAt?: string
  severity?: string
  eventType?: string
  event?: string
  conductor?: string
}

export type IronicNodeStatus = {
  uuid?: string
  provisionState?: string
  targetProvisionState?: string
  provisionUpdatedAt?: string
  powerState?: string
  targetPowerState?: string
  lastError?: string
  maintenance?: boolean
  maintenanceReason?: string
  fault?: string
  conductor?: string
  reservation?: string
  deployStep?: IronicNodeStep
  cleanStep?: IronicNodeStep
  serviceStep?: IronicNodeStep
  agent?: IronicNodeAgent
  abortable?: boolean
  history?: IronicNodeHistoryEvent[]
}

export type IronicNode = {
  apiVersion?: string
  kind?: string
  metadata?: V1ObjectMeta
  status?: IronicNodeStatus
}

export type IronicNodeAbort = {
  apiVersion?: string
  kind?: string
  metadata?: V1ObjectMeta
  status?: IronicNodeStatus
}
