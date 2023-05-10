
import {GroupVersionResource} from "../src"
import {ManagementV1ProjectMembers} from "./models/managementV1ProjectMembers"
import {ManagementV1VirtualClusterInstance} from "./models/managementV1VirtualClusterInstance"
import {ManagementV1VirtualClusterInstanceLog} from "./models/managementV1VirtualClusterInstanceLog"
import {ManagementV1UserAccessKeys} from "./models/managementV1UserAccessKeys"
import {ManagementV1License} from "./models/managementV1License"
import {ManagementV1LicenseRequest} from "./models/managementV1LicenseRequest"
import {ManagementV1ProjectImportSpace} from "./models/managementV1ProjectImportSpace"
import {ManagementV1TaskLog} from "./models/managementV1TaskLog"
import {ManagementV1Task} from "./models/managementV1Task"
import {ManagementV1ResetAccessKey} from "./models/managementV1ResetAccessKey"
import {ManagementV1DirectClusterEndpointToken} from "./models/managementV1DirectClusterEndpointToken"
import {ManagementV1ProjectMigrateSpaceInstance} from "./models/managementV1ProjectMigrateSpaceInstance"
import {ManagementV1SpaceInstance} from "./models/managementV1SpaceInstance"
import {ManagementV1ProjectChartInfo} from "./models/managementV1ProjectChartInfo"
import {ManagementV1IngressAuthToken} from "./models/managementV1IngressAuthToken"
import {ManagementV1Cluster} from "./models/managementV1Cluster"
import {ManagementV1ClusterReset} from "./models/managementV1ClusterReset"
import {ManagementV1Project} from "./models/managementV1Project"
import {ManagementV1PolicyViolation} from "./models/managementV1PolicyViolation"
import {ManagementV1ClusterMembers} from "./models/managementV1ClusterMembers"
import {ManagementV1Event} from "./models/managementV1Event"
import {ManagementV1ClusterAccess} from "./models/managementV1ClusterAccess"
import {ManagementV1Config} from "./models/managementV1Config"
import {ManagementV1ClusterRoleTemplate} from "./models/managementV1ClusterRoleTemplate"
import {ManagementV1TeamClusters} from "./models/managementV1TeamClusters"
import {ManagementV1UserClusters} from "./models/managementV1UserClusters"
import {ManagementV1SpaceConstraint} from "./models/managementV1SpaceConstraint"
import {ManagementV1SpaceTemplate} from "./models/managementV1SpaceTemplate"
import {ManagementV1VirtualClusterInstanceKubeConfig} from "./models/managementV1VirtualClusterInstanceKubeConfig"
import {ManagementV1Team} from "./models/managementV1Team"
import {ManagementV1OwnedAccessKey} from "./models/managementV1OwnedAccessKey"
import {ManagementV1Feature} from "./models/managementV1Feature"
import {ManagementV1ProjectCharts} from "./models/managementV1ProjectCharts"
import {ManagementV1ProjectSecret} from "./models/managementV1ProjectSecret"
import {ManagementV1SharedSecret} from "./models/managementV1SharedSecret"
import {ManagementV1ClusterCharts} from "./models/managementV1ClusterCharts"
import {ManagementV1TeamAccessKeys} from "./models/managementV1TeamAccessKeys"
import {ManagementV1ProjectTemplates} from "./models/managementV1ProjectTemplates"
import {ManagementV1ProjectMigrateVirtualClusterInstance} from "./models/managementV1ProjectMigrateVirtualClusterInstance"
import {ManagementV1User} from "./models/managementV1User"
import {ManagementV1SubjectAccessReview} from "./models/managementV1SubjectAccessReview"
import {ManagementV1Kiosk} from "./models/managementV1Kiosk"
import {ManagementV1LoftUpgrade} from "./models/managementV1LoftUpgrade"
import {ManagementV1ProjectImportVirtualCluster} from "./models/managementV1ProjectImportVirtualCluster"
import {ManagementV1UserProfile} from "./models/managementV1UserProfile"
import {ManagementV1App} from "./models/managementV1App"
import {ManagementV1Announcement} from "./models/managementV1Announcement"
import {ManagementV1ClusterVirtualClusterDefaults} from "./models/managementV1ClusterVirtualClusterDefaults"
import {ManagementV1SelfSubjectAccessReview} from "./models/managementV1SelfSubjectAccessReview"
import {ManagementV1AgentAuditEvent} from "./models/managementV1AgentAuditEvent"
import {ManagementV1Self} from "./models/managementV1Self"
import {ManagementV1ProjectClusters} from "./models/managementV1ProjectClusters"
import {ManagementV1LicenseToken} from "./models/managementV1LicenseToken"
import {ManagementV1ClusterMemberAccess} from "./models/managementV1ClusterMemberAccess"
import {ManagementV1ClusterConnect} from "./models/managementV1ClusterConnect"
import {ManagementV1VirtualClusterTemplate} from "./models/managementV1VirtualClusterTemplate"
import {ManagementV1ClusterDomain} from "./models/managementV1ClusterDomain"

export type TGenResources = {
  ManagementV1ProjectMembers: GroupVersionResource<ManagementV1ProjectMembers>
  ManagementV1VirtualClusterInstance: GroupVersionResource<ManagementV1VirtualClusterInstance>
  ManagementV1VirtualClusterInstanceLog: GroupVersionResource<ManagementV1VirtualClusterInstanceLog>
  ManagementV1UserAccessKeys: GroupVersionResource<ManagementV1UserAccessKeys>
  ManagementV1License: GroupVersionResource<ManagementV1License>
  ManagementV1LicenseRequest: GroupVersionResource<ManagementV1LicenseRequest>
  ManagementV1ProjectImportSpace: GroupVersionResource<ManagementV1ProjectImportSpace>
  ManagementV1TaskLog: GroupVersionResource<ManagementV1TaskLog>
  ManagementV1Task: GroupVersionResource<ManagementV1Task>
  ManagementV1ResetAccessKey: GroupVersionResource<ManagementV1ResetAccessKey>
  ManagementV1DirectClusterEndpointToken: GroupVersionResource<ManagementV1DirectClusterEndpointToken>
  ManagementV1ProjectMigrateSpaceInstance: GroupVersionResource<ManagementV1ProjectMigrateSpaceInstance>
  ManagementV1SpaceInstance: GroupVersionResource<ManagementV1SpaceInstance>
  ManagementV1ProjectChartInfo: GroupVersionResource<ManagementV1ProjectChartInfo>
  ManagementV1IngressAuthToken: GroupVersionResource<ManagementV1IngressAuthToken>
  ManagementV1Cluster: GroupVersionResource<ManagementV1Cluster>
  ManagementV1ClusterReset: GroupVersionResource<ManagementV1ClusterReset>
  ManagementV1Project: GroupVersionResource<ManagementV1Project>
  ManagementV1PolicyViolation: GroupVersionResource<ManagementV1PolicyViolation>
  ManagementV1ClusterMembers: GroupVersionResource<ManagementV1ClusterMembers>
  ManagementV1Event: GroupVersionResource<ManagementV1Event>
  ManagementV1ClusterAccess: GroupVersionResource<ManagementV1ClusterAccess>
  ManagementV1Config: GroupVersionResource<ManagementV1Config>
  ManagementV1ClusterRoleTemplate: GroupVersionResource<ManagementV1ClusterRoleTemplate>
  ManagementV1TeamClusters: GroupVersionResource<ManagementV1TeamClusters>
  ManagementV1UserClusters: GroupVersionResource<ManagementV1UserClusters>
  ManagementV1SpaceConstraint: GroupVersionResource<ManagementV1SpaceConstraint>
  ManagementV1SpaceTemplate: GroupVersionResource<ManagementV1SpaceTemplate>
  ManagementV1VirtualClusterInstanceKubeConfig: GroupVersionResource<ManagementV1VirtualClusterInstanceKubeConfig>
  ManagementV1Team: GroupVersionResource<ManagementV1Team>
  ManagementV1OwnedAccessKey: GroupVersionResource<ManagementV1OwnedAccessKey>
  ManagementV1Feature: GroupVersionResource<ManagementV1Feature>
  ManagementV1ProjectCharts: GroupVersionResource<ManagementV1ProjectCharts>
  ManagementV1ProjectSecret: GroupVersionResource<ManagementV1ProjectSecret>
  ManagementV1SharedSecret: GroupVersionResource<ManagementV1SharedSecret>
  ManagementV1ClusterCharts: GroupVersionResource<ManagementV1ClusterCharts>
  ManagementV1TeamAccessKeys: GroupVersionResource<ManagementV1TeamAccessKeys>
  ManagementV1ProjectTemplates: GroupVersionResource<ManagementV1ProjectTemplates>
  ManagementV1ProjectMigrateVirtualClusterInstance: GroupVersionResource<ManagementV1ProjectMigrateVirtualClusterInstance>
  ManagementV1User: GroupVersionResource<ManagementV1User>
  ManagementV1SubjectAccessReview: GroupVersionResource<ManagementV1SubjectAccessReview>
  ManagementV1Kiosk: GroupVersionResource<ManagementV1Kiosk>
  ManagementV1LoftUpgrade: GroupVersionResource<ManagementV1LoftUpgrade>
  ManagementV1ProjectImportVirtualCluster: GroupVersionResource<ManagementV1ProjectImportVirtualCluster>
  ManagementV1UserProfile: GroupVersionResource<ManagementV1UserProfile>
  ManagementV1App: GroupVersionResource<ManagementV1App>
  ManagementV1Announcement: GroupVersionResource<ManagementV1Announcement>
  ManagementV1ClusterVirtualClusterDefaults: GroupVersionResource<ManagementV1ClusterVirtualClusterDefaults>
  ManagementV1SelfSubjectAccessReview: GroupVersionResource<ManagementV1SelfSubjectAccessReview>
  ManagementV1AgentAuditEvent: GroupVersionResource<ManagementV1AgentAuditEvent>
  ManagementV1Self: GroupVersionResource<ManagementV1Self>
  ManagementV1ProjectClusters: GroupVersionResource<ManagementV1ProjectClusters>
  ManagementV1LicenseToken: GroupVersionResource<ManagementV1LicenseToken>
  ManagementV1ClusterMemberAccess: GroupVersionResource<ManagementV1ClusterMemberAccess>
  ManagementV1ClusterConnect: GroupVersionResource<ManagementV1ClusterConnect>
  ManagementV1VirtualClusterTemplate: GroupVersionResource<ManagementV1VirtualClusterTemplate>
  ManagementV1ClusterDomain: GroupVersionResource<ManagementV1ClusterDomain>
}

export const GenResources: TGenResources = {
  ManagementV1ProjectMembers: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "members",
    namespaced: false,
    kind: "ProjectMembers",
  },
  ManagementV1VirtualClusterInstance: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "",
    namespaced: true,
    kind: "VirtualClusterInstance",
  },
  ManagementV1VirtualClusterInstanceLog: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "log",
    namespaced: true,
    kind: "VirtualClusterInstanceLog",
  },
  ManagementV1UserAccessKeys: {
    group: "management.loft.sh",
    version: "v1",
    resource: "users",
    subResource: "accesskeys",
    namespaced: false,
    kind: "UserAccessKeys",
  },
  ManagementV1License: {
    group: "management.loft.sh",
    version: "v1",
    resource: "licenses",
    subResource: "",
    namespaced: false,
    kind: "License",
  },
  ManagementV1LicenseRequest: {
    group: "management.loft.sh",
    version: "v1",
    resource: "licenses",
    subResource: "request",
    namespaced: false,
    kind: "LicenseRequest",
  },
  ManagementV1ProjectImportSpace: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "importspace",
    namespaced: false,
    kind: "ProjectImportSpace",
  },
  ManagementV1TaskLog: {
    group: "management.loft.sh",
    version: "v1",
    resource: "tasks",
    subResource: "log",
    namespaced: false,
    kind: "TaskLog",
  },
  ManagementV1Task: {
    group: "management.loft.sh",
    version: "v1",
    resource: "tasks",
    subResource: "",
    namespaced: false,
    kind: "Task",
  },
  ManagementV1ResetAccessKey: {
    group: "management.loft.sh",
    version: "v1",
    resource: "resetaccesskeys",
    subResource: "",
    namespaced: false,
    kind: "ResetAccessKey",
  },
  ManagementV1DirectClusterEndpointToken: {
    group: "management.loft.sh",
    version: "v1",
    resource: "directclusterendpointtokens",
    subResource: "",
    namespaced: false,
    kind: "DirectClusterEndpointToken",
  },
  ManagementV1ProjectMigrateSpaceInstance: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "migratespaceinstance",
    namespaced: false,
    kind: "ProjectMigrateSpaceInstance",
  },
  ManagementV1SpaceInstance: {
    group: "management.loft.sh",
    version: "v1",
    resource: "spaceinstances",
    subResource: "",
    namespaced: true,
    kind: "SpaceInstance",
  },
  ManagementV1ProjectChartInfo: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "chartinfo",
    namespaced: false,
    kind: "ProjectChartInfo",
  },
  ManagementV1IngressAuthToken: {
    group: "management.loft.sh",
    version: "v1",
    resource: "ingressauthtokens",
    subResource: "",
    namespaced: false,
    kind: "IngressAuthToken",
  },
  ManagementV1Cluster: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "",
    namespaced: false,
    kind: "Cluster",
  },
  ManagementV1ClusterReset: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "reset",
    namespaced: false,
    kind: "ClusterReset",
  },
  ManagementV1Project: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "",
    namespaced: false,
    kind: "Project",
  },
  ManagementV1PolicyViolation: {
    group: "management.loft.sh",
    version: "v1",
    resource: "policyviolations",
    subResource: "",
    namespaced: false,
    kind: "PolicyViolation",
  },
  ManagementV1ClusterMembers: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "members",
    namespaced: false,
    kind: "ClusterMembers",
  },
  ManagementV1Event: {
    group: "management.loft.sh",
    version: "v1",
    resource: "events",
    subResource: "",
    namespaced: false,
    kind: "Event",
  },
  ManagementV1ClusterAccess: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusteraccesses",
    subResource: "",
    namespaced: false,
    kind: "ClusterAccess",
  },
  ManagementV1Config: {
    group: "management.loft.sh",
    version: "v1",
    resource: "configs",
    subResource: "",
    namespaced: false,
    kind: "Config",
  },
  ManagementV1ClusterRoleTemplate: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusterroletemplates",
    subResource: "",
    namespaced: false,
    kind: "ClusterRoleTemplate",
  },
  ManagementV1TeamClusters: {
    group: "management.loft.sh",
    version: "v1",
    resource: "teams",
    subResource: "clusters",
    namespaced: false,
    kind: "TeamClusters",
  },
  ManagementV1UserClusters: {
    group: "management.loft.sh",
    version: "v1",
    resource: "users",
    subResource: "clusters",
    namespaced: false,
    kind: "UserClusters",
  },
  ManagementV1SpaceConstraint: {
    group: "management.loft.sh",
    version: "v1",
    resource: "spaceconstraints",
    subResource: "",
    namespaced: false,
    kind: "SpaceConstraint",
  },
  ManagementV1SpaceTemplate: {
    group: "management.loft.sh",
    version: "v1",
    resource: "spacetemplates",
    subResource: "",
    namespaced: false,
    kind: "SpaceTemplate",
  },
  ManagementV1VirtualClusterInstanceKubeConfig: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "kubeconfig",
    namespaced: true,
    kind: "VirtualClusterInstanceKubeConfig",
  },
  ManagementV1Team: {
    group: "management.loft.sh",
    version: "v1",
    resource: "teams",
    subResource: "",
    namespaced: false,
    kind: "Team",
  },
  ManagementV1OwnedAccessKey: {
    group: "management.loft.sh",
    version: "v1",
    resource: "ownedaccesskeys",
    subResource: "",
    namespaced: false,
    kind: "OwnedAccessKey",
  },
  ManagementV1Feature: {
    group: "management.loft.sh",
    version: "v1",
    resource: "features",
    subResource: "",
    namespaced: false,
    kind: "Feature",
  },
  ManagementV1ProjectCharts: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "charts",
    namespaced: false,
    kind: "ProjectCharts",
  },
  ManagementV1ProjectSecret: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projectsecrets",
    subResource: "",
    namespaced: true,
    kind: "ProjectSecret",
  },
  ManagementV1SharedSecret: {
    group: "management.loft.sh",
    version: "v1",
    resource: "sharedsecrets",
    subResource: "",
    namespaced: true,
    kind: "SharedSecret",
  },
  ManagementV1ClusterCharts: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "charts",
    namespaced: false,
    kind: "ClusterCharts",
  },
  ManagementV1TeamAccessKeys: {
    group: "management.loft.sh",
    version: "v1",
    resource: "teams",
    subResource: "accesskeys",
    namespaced: false,
    kind: "TeamAccessKeys",
  },
  ManagementV1ProjectTemplates: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "templates",
    namespaced: false,
    kind: "ProjectTemplates",
  },
  ManagementV1ProjectMigrateVirtualClusterInstance: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "migratevirtualclusterinstance",
    namespaced: false,
    kind: "ProjectMigrateVirtualClusterInstance",
  },
  ManagementV1User: {
    group: "management.loft.sh",
    version: "v1",
    resource: "users",
    subResource: "",
    namespaced: false,
    kind: "User",
  },
  ManagementV1SubjectAccessReview: {
    group: "management.loft.sh",
    version: "v1",
    resource: "subjectaccessreviews",
    subResource: "",
    namespaced: false,
    kind: "SubjectAccessReview",
  },
  ManagementV1Kiosk: {
    group: "management.loft.sh",
    version: "v1",
    resource: "kiosk",
    subResource: "",
    namespaced: false,
    kind: "Kiosk",
  },
  ManagementV1LoftUpgrade: {
    group: "management.loft.sh",
    version: "v1",
    resource: "loftupgrades",
    subResource: "",
    namespaced: false,
    kind: "LoftUpgrade",
  },
  ManagementV1ProjectImportVirtualCluster: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "importvirtualcluster",
    namespaced: false,
    kind: "ProjectImportVirtualCluster",
  },
  ManagementV1UserProfile: {
    group: "management.loft.sh",
    version: "v1",
    resource: "users",
    subResource: "profile",
    namespaced: false,
    kind: "UserProfile",
  },
  ManagementV1App: {
    group: "management.loft.sh",
    version: "v1",
    resource: "apps",
    subResource: "",
    namespaced: false,
    kind: "App",
  },
  ManagementV1Announcement: {
    group: "management.loft.sh",
    version: "v1",
    resource: "announcements",
    subResource: "",
    namespaced: false,
    kind: "Announcement",
  },
  ManagementV1ClusterVirtualClusterDefaults: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "virtualclusterdefaults",
    namespaced: false,
    kind: "ClusterVirtualClusterDefaults",
  },
  ManagementV1SelfSubjectAccessReview: {
    group: "management.loft.sh",
    version: "v1",
    resource: "selfsubjectaccessreviews",
    subResource: "",
    namespaced: false,
    kind: "SelfSubjectAccessReview",
  },
  ManagementV1AgentAuditEvent: {
    group: "management.loft.sh",
    version: "v1",
    resource: "agentauditevents",
    subResource: "",
    namespaced: false,
    kind: "AgentAuditEvent",
  },
  ManagementV1Self: {
    group: "management.loft.sh",
    version: "v1",
    resource: "selves",
    subResource: "",
    namespaced: false,
    kind: "Self",
  },
  ManagementV1ProjectClusters: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "clusters",
    namespaced: false,
    kind: "ProjectClusters",
  },
  ManagementV1LicenseToken: {
    group: "management.loft.sh",
    version: "v1",
    resource: "licensetokens",
    subResource: "",
    namespaced: false,
    kind: "LicenseToken",
  },
  ManagementV1ClusterMemberAccess: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "memberaccess",
    namespaced: false,
    kind: "ClusterMemberAccess",
  },
  ManagementV1ClusterConnect: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusterconnect",
    subResource: "",
    namespaced: false,
    kind: "ClusterConnect",
  },
  ManagementV1VirtualClusterTemplate: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclustertemplates",
    subResource: "",
    namespaced: false,
    kind: "VirtualClusterTemplate",
  },
  ManagementV1ClusterDomain: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "domain",
    namespaced: false,
    kind: "ClusterDomain",
  }
}
