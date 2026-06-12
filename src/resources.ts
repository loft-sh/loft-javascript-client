import { StorageV1ClusterQuota } from "@gen/models/agentstorageV1ClusterQuota"
import { ClusterV1ChartInfo } from "@gen/models/clusterV1ChartInfo"
import { ClusterV1HelmRelease } from "@gen/models/clusterV1HelmRelease"
import { ClusterV1SleepModeConfig } from "@gen/models/clusterV1SleepModeConfig"
import { VirtualclusterV1HelmRelease } from "@gen/models/virtualclusterV1HelmRelease"
import { GenResources, TGenResources } from "@gen/resources"
import {
  CoreV1Event,
  V1ClusterRole,
  V1ClusterRoleBinding,
  V1ConfigMap,
  V1CustomResourceDefinition,
  V1Deployment,
  V1Ingress,
  V1Namespace,
  V1Node,
  V1Pod,
  V1Role,
  V1RoleBinding,
  V1Secret,
  V1SelfSubjectAccessReview,
  V1Service,
  V1StatefulSet,
  V1StorageClassList,
} from "@kubernetes/client-node"

import {
  APIExtensionsGroup,
  APIExtensionsVersion,
  GroupVersionResource,
  LoftSchemeGroupCluster,
  LoftSchemeGroupVirtualCluster,
  LoftSchemeVersion,
  LoftSchemeVersionCluster,
  LoftSchemeVersionVirtualCluster,
  V1Beta1PodMetrics,
} from "./types"

export const Resources: {
  ClusterV1SleepModeConfig: GroupVersionResource<ClusterV1SleepModeConfig>
  ClusterV1HelmRelease: GroupVersionResource<ClusterV1HelmRelease>
  ClusterV1ChartInfo: GroupVersionResource<ClusterV1ChartInfo>
  VirtualclusterV1HelmRelease: GroupVersionResource<VirtualclusterV1HelmRelease>
  CustomResourceDefinition: GroupVersionResource<V1CustomResourceDefinition>
  StorageV1ClusterQuota: GroupVersionResource<StorageV1ClusterQuota>
  NetworkingV1Ingress: GroupVersionResource<V1Ingress>
  V1StatefulSet: GroupVersionResource<V1StatefulSet>
  V1Deployment: GroupVersionResource<V1Deployment>
  V1Event: GroupVersionResource<CoreV1Event>
  V1Pod: GroupVersionResource<V1Pod>
  V1Service: GroupVersionResource<V1Service>
  V1Node: GroupVersionResource<V1Node>
  V1Namespace: GroupVersionResource<V1Namespace>
  V1SelfSubjectAccessReview: GroupVersionResource<V1SelfSubjectAccessReview>
  V1ClusterRole: GroupVersionResource<V1ClusterRole>
  V1ClusterRoleBinding: GroupVersionResource<V1ClusterRoleBinding>
  V1Role: GroupVersionResource<V1Role>
  V1RoleBinding: GroupVersionResource<V1RoleBinding>
  V1Secret: GroupVersionResource<V1Secret>
  V1ConfigMap: GroupVersionResource<V1ConfigMap>
  V1User: GroupVersionResource<any>
  V1StorageClassList: GroupVersionResource<V1StorageClassList>
  V1Beta1PodMetrics: GroupVersionResource<V1Beta1PodMetrics>
} & TGenResources = {
  ...GenResources,
  ClusterV1SleepModeConfig: {
    group: LoftSchemeGroupCluster,
    version: LoftSchemeVersionCluster,
    resource: "sleepmodeconfigs",
    kind: "SleepModeConfig",
    namespaced: true,
  },
  ClusterV1HelmRelease: {
    group: LoftSchemeGroupCluster,
    version: LoftSchemeVersionCluster,
    resource: "helmreleases",
    kind: "HelmRelease",
    namespaced: true,
  },
  ClusterV1ChartInfo: {
    group: LoftSchemeGroupCluster,
    version: LoftSchemeVersionCluster,
    resource: "chartinfos",
    kind: "ChartInfo",
  },
  VirtualclusterV1HelmRelease: {
    group: LoftSchemeGroupVirtualCluster,
    version: LoftSchemeVersionVirtualCluster,
    resource: "helmreleases",
    kind: "HelmRelease",
    namespaced: true,
  },
  CustomResourceDefinition: {
    group: APIExtensionsGroup,
    version: APIExtensionsVersion,
    resource: "customresourcedefinitions",
    kind: "CustomResourceDefinition",
  },
  StorageV1ClusterQuota: {
    group: "storage.loft.sh",
    version: LoftSchemeVersion,
    resource: "clusterquotas",
    kind: "ClusterQuota",
  },
  NetworkingV1Ingress: {
    group: "networking.k8s.io",
    version: "v1",
    resource: "ingresses",
    kind: "Ingress",
    namespaced: true,
  },
  V1StatefulSet: {
    group: "apps",
    version: "v1",
    resource: "statefulsets",
    kind: "StatefulSet",
    namespaced: true,
  },
  V1Deployment: {
    group: "apps",
    version: "v1",
    resource: "deployments",
    kind: "Deployment",
    namespaced: true,
  },
  V1Event: {
    group: "",
    version: "v1",
    resource: "events",
    kind: "Event",
    namespaced: true,
  },
  V1Pod: {
    group: "",
    version: "v1",
    resource: "pods",
    kind: "Pod",
    namespaced: true,
  },
  V1Node: { group: "", version: "v1", resource: "nodes", kind: "Node" },
  V1Namespace: {
    group: "",
    version: "v1",
    resource: "namespaces",
    kind: "Namespace",
  },
  V1SelfSubjectAccessReview: {
    group: "authorization.k8s.io",
    version: "v1",
    resource: "selfsubjectaccessreviews",
    kind: "SelfSubjectAccessReview",
  },
  V1ClusterRole: {
    group: "rbac.authorization.k8s.io",
    version: "v1",
    resource: "clusterroles",
    kind: "ClusterRole",
  },
  V1ClusterRoleBinding: {
    group: "rbac.authorization.k8s.io",
    version: "v1",
    resource: "clusterrolebindings",
    kind: "ClusterRoleBinding",
  },
  V1Role: {
    group: "rbac.authorization.k8s.io",
    version: "v1",
    resource: "roles",
    kind: "Role",
    namespaced: true,
  },
  V1RoleBinding: {
    group: "rbac.authorization.k8s.io",
    version: "v1",
    resource: "rolebindings",
    kind: "RoleBinding",
    namespaced: true,
  },
  V1Secret: {
    group: "",
    version: "v1",
    resource: "secrets",
    kind: "Secret",
    namespaced: true,
  },
  V1ConfigMap: {
    group: "",
    version: "v1",
    resource: "configmaps",
    kind: "ConfigMap",
    namespaced: true,
  },
  V1Service: {
    group: "",
    version: "v1",
    resource: "services",
    kind: "Service",
    namespaced: true,
  },
  V1User: {
    group: "",
    version: "v1",
    resource: "users",
    kind: "User",
    namespaced: false,
  },
  V1StorageClassList: {
    group: "storage.k8s.io",
    version: "v1",
    resource: "storageclasses",
    kind: "StorageClass",
    namespaced: false,
  },
  V1Beta1PodMetrics: {
    group: "metrics.k8s.io",
    version: "v1beta1",
    resource: "pods",
    kind: "PodMetrics",
    namespaced: true,
  },
}

export function NewResource<T>(
  groupVersionResource: GroupVersionResource<T>,
  name?: string,
  data?: T
): T {
  return {
    apiVersion: groupVersionResource.group
      ? groupVersionResource.group + "/" + groupVersionResource.version
      : groupVersionResource.version,
    kind: groupVersionResource.kind,
    metadata: {
      name: name,
    },
    ...data,
  } as T
}
