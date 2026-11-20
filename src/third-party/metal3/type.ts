import { V1ObjectMeta } from "@kubernetes/client-node"

export interface BareMetalHost {
  apiVersion?: string
  kind?: string
  metadata?: V1ObjectMeta
  spec?: BareMetalHostSpec
  status?: BareMetalHostStatus
}

export interface BareMetalHostSpec {
  architecture?: string
  automatedCleaningMode?: string
  bmc?: BMCConfig
  bootMACAddress?: string
  bootMode?: string
  consumerRef?: BareMetalHostConsumerRef
  customDeploy?: BareMetalHostCustomDeploy
  description?: string
  disablePowerOff?: boolean
  externallyProvisioned?: boolean
  firmware?: BareMetalHostFirmware
  hardwareProfile?: string
  image?: BareMetalHostImage
  metaData?: BareMetalHostMetaDataRef
  networkData?: BareMetalHostNetworkDataRef
  online?: boolean
  preprovisioningNetworkDataName?: string
  raid?: BareMetalHostRaid
  rootDeviceHints?: BareMetalHostRootDeviceHints
  taints?: object[]
  userData?: BareMetalHostUserDataRef
}

export interface BareMetalHostConsumerRef {
  apiVersion?: string
  fieldPath?: string
  kind?: string
  name?: string
  namespace?: string
  resourceVersion?: string
  uid?: string
}

export interface BareMetalHostCustomDeploy {
  method?: string
}

export interface BareMetalHostFirmware {
  simultaneousMultithreadingEnabled?: boolean
  sriovEnabled?: boolean
  virtualizationEnabled?: boolean
}

export interface BareMetalHostImage {
  checksum?: string
  checksumType?: string
  format?: string
  url?: string
}

export interface BareMetalHostMetaDataRef {
  name?: string
  namespace?: string
}

export interface BareMetalHostNetworkDataRef {
  name?: string
  namespace?: string
}

export interface BareMetalHostRaid {
  hardwareRAIDVolumes?: object[]
  softwareRAIDVolumes?: object[]
}

export interface BareMetalHostRootDeviceHints {
  deviceName?: string
  hctl?: string
  minSizeGigabytes?: number
  model?: string
  rotational?: boolean
  serialNumber?: string
  vendor?: string
  wwn?: string
  wwnVendorExtension?: string
  wwnWithExtension?: string
}

export interface BareMetalHostUserDataRef {
  name?: string
  namespace?: string
}

export interface BMCConfig {
  address?: string
  credentialsName?: string
  disableCertificateVerification?: boolean
  // TODO: These technically shouldn't be part of this?
  // https://docs.okd.io/4.19/rest_api/provisioning_apis/baremetalhost-metal3-io-v1alpha1.html
  username?: string
  password?: string
}

export interface BareMetalHostStatus {
  errorCount?: number
  errorMessage?: string
  errorType?: string
  goodCredentials?: BareMetalHostGoodCredentials
  hardware?: BareMetalHostHardware
  hardwareProfile?: string
  lastUpdated?: string
  operationHistory?: BareMetalHostOperationHistory
  operationalStatus?: string
  provisioning?: BareMetalHostProvisioning
  poweredOn?: boolean
  triedCredentials?: BareMetalHostTriedCredentials
}

export interface BareMetalHostGoodCredentials {
  credentials?: BareMetalHostCredentials
  credentialsVersion?: string
}

export interface BareMetalHostCredentials {
  name?: string
  namespace?: string
}

export interface BareMetalHostHardware {
  cpu?: HardwareCPU
  firmware?: HardwareFirmware
  hostname?: string
  nics?: HardwareNIC[]
  ramMebibytes?: number
  storage?: HardwareStorage[]
  systemVendor?: HardwareSystemVendor
}

export interface HardwareCPU {
  arch?: string
  clockMegahertz?: number
  count?: number
  flags?: string[]
  model?: string
}

export interface HardwareFirmware {
  bios?: HardwareBIOS
}

export interface HardwareBIOS {
  date?: string
  vendor?: string
  version?: string
}

export interface HardwareNIC {
  ip?: string
  mac?: string
  model?: string
  name?: string
  pxe?: boolean
  speedGbps?: number
  vlanId?: number
  vlans?: HardwareVLAN[]
}

export interface HardwareVLAN {
  id?: number
  name?: string
}

export interface HardwareStorage {
  alternateNames?: string[]
  hctl?: string
  model?: string
  name?: string
  rotational?: boolean
  serialNumber?: string
  sizeBytes?: number
  type?: string
  vendor?: string
  wwn?: string
  wwnVendorExtension?: string
  wwnWithExtension?: string
}

export interface HardwareSystemVendor {
  manufacturer?: string
  productName?: string
  serialNumber?: string
}

export interface BareMetalHostOperationHistory {
  register?: OperationMetric
  provision?: OperationMetric
  inspect?: OperationMetric
  deprovision?: OperationMetric
}

export interface OperationMetric {
  start?: string
  end?: string
}

export interface BareMetalHostProvisioning {
  ID?: string
  bootMode?: string
  customDeploy?: BareMetalHostCustomDeploy
  firmware?: BareMetalHostFirmware
  image?: BareMetalHostImage
  raid?: BareMetalHostRaid
  rootDeviceHints?: BareMetalHostRootDeviceHints
  state?: string
}

export interface BareMetalHostTriedCredentials {
  credentials?: BareMetalHostCredentials
  credentialsVersion?: string
}
