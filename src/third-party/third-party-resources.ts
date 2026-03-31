import { Metal3Resources, Metal3ResourcesList } from "./metal3/metal3"

export type ThirdPartyResourcesList = Metal3ResourcesList

export const ThirdPartyResources: ThirdPartyResourcesList = {
  ...Metal3Resources,
} as const
