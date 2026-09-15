import { V1Condition, V1ObjectMeta } from "@kubernetes/client-node"

// HostDevice (devices.vcluster.com/v1alpha1) from the vCluster device operator
// (github.com/loft-sh/vcluster-device-operator). There is no published TypeScript model for this
// CRD, so it is described here directly, mirroring the operator's Go API types. The resource is
// cluster-scoped: it selects nodes that hold PCI devices (GPUs by default) and prepares them for
// PCI passthrough to KubeVirt virtual machines.

// DeviceSelector selects PCI devices by class, vendor, and optional device IDs.
export interface DeviceSelector {
  /**
   * Restricts the selection to PCI device classes. Each entry is a hex prefix of the device's
   * 4-digit class/subclass code without the "0x" prefix, e.g. "03" for display controllers
   * (GPUs). Entries are OR'd. Defaults to ["03"] (display controllers).
   */
  classes?: string[]
  /** PCI vendor ID in hex without the "0x" prefix, e.g. "10de" for NVIDIA. Empty matches any vendor. */
  vendor?: string
  /** PCI device IDs in hex without the "0x" prefix, e.g. "20b5". An empty list matches all devices of the vendor. */
  deviceIDs?: string[]
}

// IOMMUConfig configures IOMMU handling for PCI passthrough.
export interface IOMMUConfig {
  /**
   * Whether the operator configures IOMMU on the kernel command line and reboots the node to
   * activate it. Defaults to false: the operator assumes IOMMU is already active on the nodes.
   * Set to true to have the operator manage IOMMU.
   */
  enabled?: boolean
}

// KubeVirtConfig exposes the devices selected by spec.deviceSelector to KubeVirt for PCI
// passthrough. The operator binds the matching devices to vfio-pci and advertises them to
// KubeVirt under resourceName. Mutually exclusive with nvidiaGPUOperator.
export interface KubeVirtConfig {
  /**
   * The extended resource name KubeVirt advertises for the selected devices, e.g.
   * "nvidia.com/A100". When empty, the devices are bound to vfio-pci but not advertised to
   * KubeVirt.
   */
  resourceName?: string
  /**
   * Extra KubeVirt feature gates to ensure are enabled, in addition to the ones the operator
   * derives automatically. Use it for gates still gated on the running KubeVirt version, such as
   * "GPU" or "HostDevices". Gates are only added to the KubeVirt custom resource, never removed.
   */
  featureGates?: string[]
}

// NVIDIAGPUOperatorConfig prepares nodes for the NVIDIA GPU Operator to manage GPU passthrough.
// The operator does node preparation (IOMMU, hugepages, kubelet NUMA) and labels the nodes; the
// NVIDIA GPU Operator's VFIO Manager and sandbox device plugin bind the GPUs and advertise them
// to KubeVirt or Kata Containers. Mutually exclusive with kubevirt.
export interface NVIDIAGPUOperatorConfig {
  /**
   * Sets the nvidia.com/gpu.workload.config label on the selected nodes: "vm-passthrough" for
   * full-GPU passthrough to VMs, "vm-vgpu" for vGPU, or "container" for the default container
   * runtime. When empty, the operator does not manage the label and only prepares the nodes.
   */
  workloadConfig?: "vm-passthrough" | "vm-vgpu" | "container"
}

// HugePages configures boot-time hugepage allocation on a node.
export interface HugePages {
  /** Hugepage size to allocate. Defaults to "1Gi". */
  pageSize?: string
  /** Number of pages of pageSize to allocate at boot on each selected node. */
  count?: number
}

// NUMAConfig configures kubelet NUMA policies on a node.
export interface NUMAConfig {
  /** cpuset reserved for the host system, e.g. "0" or "0-1". Defaults to "0". */
  reservedCPUs?: string
  /** Enables the kubelet static memory manager policy for NUMA-local memory guarantees. */
  memoryManager?: boolean
  /** kubelet systemReserved memory, e.g. "6Gi". Only used when memoryManager is enabled. */
  systemReservedMemory?: string
  /** kubelet kubeReserved memory, e.g. "1Gi". Only used when memoryManager is enabled. Defaults to "1Gi". */
  kubeReservedMemory?: string
  /** kubelet evictionHard memory.available threshold, e.g. "1Gi". Only used when memoryManager is enabled. Defaults to "100Mi". */
  evictionHardMemory?: string
  /**
   * Splits the static memory manager reservation across NUMA nodes. When set, the sum of the
   * entries must equal systemReserved + kubeReserved + evictionHard memory. When empty, the whole
   * reservation is placed on NUMA node 0. Only used when memoryManager is enabled.
   */
  reservedMemory?: NUMAMemoryReservation[]
}

// NUMAMemoryReservation reserves memory on a single NUMA node for the kubelet static memory manager.
export interface NUMAMemoryReservation {
  /** The NUMA node the reservation applies to. */
  numaNode: number
  /** The amount of memory to reserve on the node, e.g. "4Gi". */
  memory: string
}

// HostDeviceSpec defines the desired state of a HostDevice.
export interface HostDeviceSpec {
  /** Selects the nodes that hold the devices to be configured. An empty selector selects no nodes. */
  nodeSelector?: Record<string, string>
  /** When set, configures how the operator manages IOMMU (Intel VT-d / AMD-Vi) on the selected nodes. */
  iommu?: IOMMUConfig
  /** When set, configures boot-time hugepage allocation on the selected nodes. */
  hugePages?: HugePages
  /** When set, configures the kubelet for NUMA-aligned GPU passthrough VMs. */
  numa?: NUMAConfig
  /**
   * Selects which discovered PCI devices on the matched nodes this HostDevice manages. An empty
   * selector selects all discovered devices of the default classes (display controllers).
   */
  deviceSelector?: DeviceSelector
  /** When set, exposes the selected devices to KubeVirt for PCI passthrough. Mutually exclusive with nvidiaGPUOperator. */
  kubevirt?: KubeVirtConfig
  /** When set, prepares the selected nodes for the NVIDIA GPU Operator. Mutually exclusive with kubevirt. */
  nvidiaGPUOperator?: NVIDIAGPUOperatorConfig
}

// NodeDeviceStatus reports a single discovered device and whether it is prepared for passthrough.
export interface NodeDeviceStatus {
  address: string
  vendor?: string
  deviceID?: string
  driver?: string
  iommuGroup?: string
  selected?: boolean
  bound?: boolean
}

// IOMMUStatus reports the IOMMU configuration state of a node.
export interface IOMMUStatus {
  active?: boolean
  vendor?: string
}

// HugePageStatus reports boot-time hugepage allocation on a node.
export interface HugePageStatus {
  pageSize?: string
  requested?: number
  allocated?: number
}

// NUMAStatus reports the kubelet NUMA configuration state of a node.
export interface NUMAStatus {
  configured?: boolean
  reservedCPUs?: string
}

// NodePhase summarizes where a single node is in the preparation flow.
export type NodePhase =
  | "Pending"
  | "RebootPending"
  | "Rebooting"
  | "Configuring"
  | "Binding"
  | "Ready"
  | "Failed"

// NodeStatus reports the preparation state of a single node.
export interface NodeStatus {
  name: string
  phase?: NodePhase
  iommu?: IOMMUStatus
  hugePages?: HugePageStatus
  numa?: NUMAStatus
  devices?: NodeDeviceStatus[]
  message?: string
}

// HostDeviceStatus defines the observed state of a HostDevice.
export interface HostDeviceStatus {
  observedGeneration?: number
  /** Number of nodes matched by the node selector. */
  selectedNodes?: number
  /** Number of matched nodes with IOMMU active. */
  readyNodes?: number
  nodes?: NodeStatus[]
  conditions?: V1Condition[]
}

export interface HostDevice {
  apiVersion?: string
  kind?: string
  metadata?: V1ObjectMeta
  spec?: HostDeviceSpec
  status?: HostDeviceStatus
}
