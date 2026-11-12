import { V1beta1DataVolume } from "@kubevirt-ui/kubevirt-api/containerized-data-importer"
import {
  V1beta1VirtualMachineRestore,
  V1beta1VirtualMachineSnapshot,
  V1DataVolumeTemplateSpec,
  V1Disk,
  V1Interface,
  V1Network,
  V1PauseOptions,
  V1RestartOptions,
  V1StartOptions,
  V1StopOptions,
  V1UnpauseOptions,
  V1VirtualMachine,
  V1VirtualMachineInstance,
  V1Volume,
} from "@kubevirt-ui/kubevirt-api/kubevirt"

import { DeepPartial } from "@loft-enterprise/shared"

// Re-export types for ease of access
export type KubeVirtVirtualMachine = DeepPartial<V1VirtualMachine>
export type KubeVirtVirtualMachineInstance = DeepPartial<V1VirtualMachineInstance>
export type KubeVirtStartOptions = DeepPartial<V1StartOptions>
export type KubeVirtStopOptions = DeepPartial<V1StopOptions>
export type KubeVirtRestartOptions = DeepPartial<V1RestartOptions>
export type KubeVirtPauseOptions = DeepPartial<V1PauseOptions>
export type KubeVirtUnpauseOptions = DeepPartial<V1UnpauseOptions>
export type KubeVirtDataVolume = DeepPartial<V1beta1DataVolume>
export type KubeVirtVirtualMachineSnapshot = DeepPartial<V1beta1VirtualMachineSnapshot>
export type KubeVirtVirtualMachineRestore = DeepPartial<V1beta1VirtualMachineRestore>
export type KubeVirtVolume = DeepPartial<V1Volume>
export type KubeVirtDisk = DeepPartial<V1Disk>
export type KubeVirtInterface = DeepPartial<V1Interface>
export type KubeVirtNetwork = DeepPartial<V1Network>
export type KubeVirtDataVolumeTemplate = DeepPartial<V1DataVolumeTemplateSpec>

// https://github.com/kubevirt/kubevirt/blob/main/staging/src/kubevirt.io/api/core/v1/types.go
export type VirtualMachineInstancePhase =
  | ""
  | "Pending"
  | "Scheduling"
  | "Scheduled"
  | "Running"
  | "Succeeded"
  | "Failed"
  | "WaitingForSync"
  | "Unknown"

// https://github.com/kubevirt/containerized-data-importer/blob/main/staging/src/kubevirt.io/containerized-data-importer-api/pkg/apis/core/v1beta1/types.go
export type DataVolumePhase =
  | ""
  | "Pending"
  | "PVCBound"
  | "ImportScheduled"
  | "ImportInProgress"
  | "CloneScheduled"
  | "CloneInProgress"
  | "SnapshotForSmartCloneInProgress"
  | "CloneFromSnapshotSourceInProgress"
  | "SmartClonePVCInProgress"
  | "CSICloneInProgress"
  | "ExpansionInProgress"
  | "NamespaceTransferInProgress"
  | "UploadScheduled"
  | "UploadReady"
  | "WaitForFirstConsumer"
  | "PendingPopulation"
  | "Succeeded"
  | "Failed"
  | "Unknown"
  | "Paused"
  | "PrepClaimInProgress"
  | "RebindInProgress"

// https://github.com/kubevirt/kubevirt/blob/main/staging/src/kubevirt.io/api/snapshot/v1beta1/types.go
export type VirtualMachineSnapshotPhase =
  | ""
  | "InProgress"
  | "Succeeded"
  | "Failed"
  | "Deleting"
  | "Unknown"
