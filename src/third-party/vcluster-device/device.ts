import { GroupVersionResource } from "../../types"
import { HostDevice } from "./type"

export type VClusterDeviceResourcesList = {
  HostDevice: GroupVersionResource<HostDevice>
}

export const VClusterDeviceResources: VClusterDeviceResourcesList = {
  HostDevice: {
    group: "devices.vcluster.com",
    version: "v1alpha1",
    resource: "hostdevices",
    kind: "HostDevice",
    namespaced: false,
  },
}
