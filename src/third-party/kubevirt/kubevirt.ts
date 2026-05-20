import { GroupVersionResource } from "../../types"
import {
  KubeVirtDataVolume,
  KubeVirtPauseOptions,
  KubeVirtRestartOptions,
  KubeVirtStartOptions,
  KubeVirtStopOptions,
  KubeVirtUnpauseOptions,
  KubeVirtVirtualMachine,
  KubeVirtVirtualMachineInstance,
  KubeVirtVirtualMachineRestore,
  KubeVirtVirtualMachineSnapshot,
} from "./type"

export type KubeVirtResourcesList = {
  KubeVirtDataVolume: GroupVersionResource<KubeVirtDataVolume>
  KubeVirtVirtualMachineSnapshot: GroupVersionResource<KubeVirtVirtualMachineSnapshot>
  KubeVirtVirtualMachineRestore: GroupVersionResource<KubeVirtVirtualMachineRestore>
  KubeVirtVirtualMachineInstance: GroupVersionResource<KubeVirtVirtualMachineInstance>
  KubeVirtVirtualMachine: GroupVersionResource<KubeVirtVirtualMachine>
  KubeVirtVirtualMachineInstanceConsole: GroupVersionResource<KubeVirtVirtualMachineInstance>
  KubeVirtVirtualMachineInstancePause: GroupVersionResource<KubeVirtPauseOptions>
  KubeVirtVirtualMachineInstanceUnpause: GroupVersionResource<KubeVirtUnpauseOptions>
  KubeVirtVirtualMachineStart: GroupVersionResource<KubeVirtStartOptions>
  KubeVirtVirtualMachineStop: GroupVersionResource<KubeVirtStopOptions>
  KubeVirtVirtualMachineRestart: GroupVersionResource<KubeVirtRestartOptions>
}

export const KubeVirtResources: KubeVirtResourcesList = {
  KubeVirtDataVolume: {
    group: "cdi.kubevirt.io",
    version: "v1beta1",
    resource: "datavolumes",
    kind: "DataVolume",
    namespaced: true,
  },
  KubeVirtVirtualMachineSnapshot: {
    group: "snapshot.kubevirt.io",
    version: "v1beta1",
    resource: "virtualmachinesnapshots",
    kind: "VirtualMachineSnapshot",
    namespaced: true,
  },
  KubeVirtVirtualMachineRestore: {
    group: "snapshot.kubevirt.io",
    version: "v1beta1",
    resource: "virtualmachinerestores",
    kind: "VirtualMachineRestore",
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
  KubeVirtVirtualMachineInstanceConsole: {
    group: "subresources.kubevirt.io",
    version: "v1",
    resource: "virtualmachineinstances",
    subResource: "console",
    kind: "VirtualMachineInstance",
    namespaced: true,
  },
  KubeVirtVirtualMachineInstancePause: {
    group: "subresources.kubevirt.io",
    version: "v1",
    resource: "virtualmachineinstances",
    kind: "PauseOptions",
    namespaced: true,
    subResource: "pause",
  },
  KubeVirtVirtualMachineInstanceUnpause: {
    group: "subresources.kubevirt.io",
    version: "v1",
    resource: "virtualmachineinstances",
    kind: "UnpauseOptions",
    namespaced: true,
    subResource: "unpause",
  },
  KubeVirtVirtualMachineStart: {
    group: "subresources.kubevirt.io",
    version: "v1",
    resource: "virtualmachines",
    kind: "StartOptions",
    namespaced: true,
    subResource: "start",
  },
  KubeVirtVirtualMachineStop: {
    group: "subresources.kubevirt.io",
    version: "v1",
    resource: "virtualmachines",
    kind: "StopOptions",
    namespaced: true,
    subResource: "stop",
  },
  KubeVirtVirtualMachineRestart: {
    group: "subresources.kubevirt.io",
    version: "v1",
    resource: "virtualmachines",
    kind: "RestartOptions",
    namespaced: true,
    subResource: "restart",
  },
}
