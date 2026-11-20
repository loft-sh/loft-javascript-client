import { GroupVersionResource } from "../../types"
import { BareMetalHost } from "./type"

export type Metal3ResourcesList = {
  Metal3BareMetalHost: GroupVersionResource<BareMetalHost>
}

export const Metal3Resources: Metal3ResourcesList = {
  Metal3BareMetalHost: {
    group: "metal3.io",
    version: "v1alpha1",
    resource: "baremetalhosts",
    kind: "BareMetalHost",
    namespaced: true,
  },
}
