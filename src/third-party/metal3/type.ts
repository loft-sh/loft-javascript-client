import { V1ObjectMeta } from "@kubernetes/client-node"

export interface BareMetalHost {
  apiVersion?: string
  kind?: string
  metadata?: V1ObjectMeta
  spec?: BareMetalHostSpec
  status?: BareMetalHostStatus
}

export interface BareMetalHostSpec {
  automatedCleaningMode?: "metadata" | "disabled"
  bmc?: BMCConfig
  bootMACAddress?: string
  image?: { url?: string; checksum?: string; checksumType?: string }
  online?: boolean
}

export interface BMCConfig {
  address?: string
  credentialsName?: string
  username?: string
  password?: string
  disableCertificateVerification?: boolean
}

export interface OperationMetric {
  start?: string
  end?: string
}

export interface BareMetalHostStatus {
  provisioning?: { state?: string }
  operationHistory?: {
    register?: OperationMetric
    provision?: OperationMetric
    inspect?: OperationMetric
    deprovision?: OperationMetric
  }
  poweredOn?: boolean
  hardware?: {
    cpu?: Record<string, unknown>
    ramMebibytes?: number
    storage?: Record<string, unknown>[]
    nics?: Record<string, unknown>[]
    systemVendor?: Record<string, unknown>
    firmware?: Record<string, unknown>
    hostname?: string
  }
  errorCount?: number
  errorMessage?: string
  errorType?: string
  operationalStatus?: string
}
