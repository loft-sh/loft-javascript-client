import { GroupVersionResource } from "../../types"
import { KubeVirtDataVolume, KubeVirtVirtualMachine, KubeVirtVirtualMachineInstance } from "./type"

export type KubeVirtResourcesList = {
  KubeVirtDataVolume: GroupVersionResource<KubeVirtDataVolume>
  KubeVirtVirtualMachineInstance: GroupVersionResource<KubeVirtVirtualMachineInstance>
  KubeVirtVirtualMachine: GroupVersionResource<KubeVirtVirtualMachine>
}

export const KubeVirtResources: KubeVirtResourcesList = {
  KubeVirtDataVolume: {
    group: "cdi.kubevirt.io",
    version: "v1beta1",
    resource: "datavolumes",
    kind: "DataVolume",
    namespaced: true,
  },
  KubeVirtVirtualMachineInstance: {
    group: "kubevirt.io",
    version: "v1",
    resource: "virtualmachineinstances",
    kind: "VirtualMachineInstance",
    namespaced: true,
  },
  KubeVirtVirtualMachine: {
    group: "kubevirt.io",
    version: "v1",
    resource: "virtualmachines",
    kind: "VirtualMachine",
    namespaced: true,
  },
}
