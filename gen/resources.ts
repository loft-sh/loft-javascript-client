
import {GroupVersionResource} from "../src"
import {ManagementV1AgentAuditEvent} from "./models/managementV1AgentAuditEvent"
import {ManagementV1Announcement} from "./models/managementV1Announcement"
import {ManagementV1AppCredentials} from "./models/managementV1AppCredentials"
import {ManagementV1App} from "./models/managementV1App"
import {ManagementV1BackupApply} from "./models/managementV1BackupApply"
import {ManagementV1Backup} from "./models/managementV1Backup"
import {ManagementV1ClusterAccessKey} from "./models/managementV1ClusterAccessKey"
import {ManagementV1ClusterAccess} from "./models/managementV1ClusterAccess"
import {ManagementV1ClusterAgentConfig} from "./models/managementV1ClusterAgentConfig"
import {ManagementV1ClusterCharts} from "./models/managementV1ClusterCharts"
import {ManagementV1ClusterDomain} from "./models/managementV1ClusterDomain"
import {ManagementV1ClusterMemberAccess} from "./models/managementV1ClusterMemberAccess"
import {ManagementV1ClusterMembers} from "./models/managementV1ClusterMembers"
import {ManagementV1ClusterReset} from "./models/managementV1ClusterReset"
import {ManagementV1ClusterRoleTemplate} from "./models/managementV1ClusterRoleTemplate"
import {ManagementV1Cluster} from "./models/managementV1Cluster"
import {ManagementV1Config} from "./models/managementV1Config"
import {ManagementV1ConvertVirtualClusterConfig} from "./models/managementV1ConvertVirtualClusterConfig"
import {ManagementV1DatabaseConnector} from "./models/managementV1DatabaseConnector"
import {ManagementV1DirectClusterEndpointToken} from "./models/managementV1DirectClusterEndpointToken"
import {ManagementV1Event} from "./models/managementV1Event"
import {ManagementV1Feature} from "./models/managementV1Feature"
import {ManagementV1IngressAuthToken} from "./models/managementV1IngressAuthToken"
import {ManagementV1Kiosk} from "./models/managementV1Kiosk"
import {ManagementV1LicenseRequest} from "./models/managementV1LicenseRequest"
import {ManagementV1LicenseToken} from "./models/managementV1LicenseToken"
import {ManagementV1License} from "./models/managementV1License"
import {ManagementV1LoftUpgrade} from "./models/managementV1LoftUpgrade"
import {ManagementV1NodeClaim} from "./models/managementV1NodeClaim"
import {ManagementV1NodeEnvironment} from "./models/managementV1NodeEnvironment"
import {ManagementV1NodeProviderExec} from "./models/managementV1NodeProviderExec"
import {ManagementV1NodeProvider} from "./models/managementV1NodeProvider"
import {ManagementV1NodeType} from "./models/managementV1NodeType"
import {ManagementV1OIDCClient} from "./models/managementV1OIDCClient"
import {ManagementV1OwnedAccessKey} from "./models/managementV1OwnedAccessKey"
import {ManagementV1ProjectChartInfo} from "./models/managementV1ProjectChartInfo"
import {ManagementV1ProjectCharts} from "./models/managementV1ProjectCharts"
import {ManagementV1ProjectClusters} from "./models/managementV1ProjectClusters"
import {ManagementV1ProjectImportSpace} from "./models/managementV1ProjectImportSpace"
import {ManagementV1ProjectMembers} from "./models/managementV1ProjectMembers"
import {ManagementV1ProjectMigrateSpaceInstance} from "./models/managementV1ProjectMigrateSpaceInstance"
import {ManagementV1ProjectMigrateVirtualClusterInstance} from "./models/managementV1ProjectMigrateVirtualClusterInstance"
import {ManagementV1ProjectNodeTypes} from "./models/managementV1ProjectNodeTypes"
import {ManagementV1ProjectSecret} from "./models/managementV1ProjectSecret"
import {ManagementV1ProjectTemplates} from "./models/managementV1ProjectTemplates"
import {ManagementV1Project} from "./models/managementV1Project"
import {ManagementV1RedirectToken} from "./models/managementV1RedirectToken"
import {ManagementV1RegisterVirtualCluster} from "./models/managementV1RegisterVirtualCluster"
import {ManagementV1ResetAccessKey} from "./models/managementV1ResetAccessKey"
import {ManagementV1SelfSubjectAccessReview} from "./models/managementV1SelfSubjectAccessReview"
import {ManagementV1Self} from "./models/managementV1Self"
import {ManagementV1SharedSecret} from "./models/managementV1SharedSecret"
import {ManagementV1SpaceInstance} from "./models/managementV1SpaceInstance"
import {ManagementV1SpaceTemplate} from "./models/managementV1SpaceTemplate"
import {ManagementV1SubjectAccessReview} from "./models/managementV1SubjectAccessReview"
import {ManagementV1TaskLog} from "./models/managementV1TaskLog"
import {ManagementV1Task} from "./models/managementV1Task"
import {ManagementV1TeamAccessKeys} from "./models/managementV1TeamAccessKeys"
import {ManagementV1TeamClusters} from "./models/managementV1TeamClusters"
import {ManagementV1TeamObjectPermissions} from "./models/managementV1TeamObjectPermissions"
import {ManagementV1TeamPermissions} from "./models/managementV1TeamPermissions"
import {ManagementV1Team} from "./models/managementV1Team"
import {ManagementV1TranslateVClusterResourceName} from "./models/managementV1TranslateVClusterResourceName"
import {ManagementV1UsageDownload} from "./models/managementV1UsageDownload"
import {ManagementV1UserAccessKeys} from "./models/managementV1UserAccessKeys"
import {ManagementV1UserClusters} from "./models/managementV1UserClusters"
import {ManagementV1UserObjectPermissions} from "./models/managementV1UserObjectPermissions"
import {ManagementV1UserPermissions} from "./models/managementV1UserPermissions"
import {ManagementV1UserProfile} from "./models/managementV1UserProfile"
import {ManagementV1User} from "./models/managementV1User"
import {ManagementV1VirtualClusterAccessKey} from "./models/managementV1VirtualClusterAccessKey"
import {ManagementV1VirtualClusterExternalDatabase} from "./models/managementV1VirtualClusterExternalDatabase"
import {ManagementV1VirtualClusterInstanceKubeConfig} from "./models/managementV1VirtualClusterInstanceKubeConfig"
import {ManagementV1VirtualClusterInstanceLog} from "./models/managementV1VirtualClusterInstanceLog"
import {ManagementV1VirtualClusterInstanceShell} from "./models/managementV1VirtualClusterInstanceShell"
import {ManagementV1VirtualClusterInstanceSnapshot} from "./models/managementV1VirtualClusterInstanceSnapshot"
import {ManagementV1VirtualClusterInstance} from "./models/managementV1VirtualClusterInstance"
import {ManagementV1VirtualClusterNodeAccessKey} from "./models/managementV1VirtualClusterNodeAccessKey"
import {ManagementV1VirtualClusterSchema} from "./models/managementV1VirtualClusterSchema"
import {ManagementV1VirtualClusterStandalone} from "./models/managementV1VirtualClusterStandalone"
import {ManagementV1VirtualClusterTemplate} from "./models/managementV1VirtualClusterTemplate"

export type TGenResources = {
  ManagementV1AgentAuditEvent: GroupVersionResource<ManagementV1AgentAuditEvent>
  ManagementV1Announcement: GroupVersionResource<ManagementV1Announcement>
  ManagementV1App: GroupVersionResource<ManagementV1App>
  ManagementV1AppCredentials: GroupVersionResource<ManagementV1AppCredentials>
  ManagementV1Backup: GroupVersionResource<ManagementV1Backup>
  ManagementV1BackupApply: GroupVersionResource<ManagementV1BackupApply>
  ManagementV1Cluster: GroupVersionResource<ManagementV1Cluster>
  ManagementV1ClusterAccess: GroupVersionResource<ManagementV1ClusterAccess>
  ManagementV1ClusterAccessKey: GroupVersionResource<ManagementV1ClusterAccessKey>
  ManagementV1ClusterAgentConfig: GroupVersionResource<ManagementV1ClusterAgentConfig>
  ManagementV1ClusterCharts: GroupVersionResource<ManagementV1ClusterCharts>
  ManagementV1ClusterDomain: GroupVersionResource<ManagementV1ClusterDomain>
  ManagementV1ClusterMemberAccess: GroupVersionResource<ManagementV1ClusterMemberAccess>
  ManagementV1ClusterMembers: GroupVersionResource<ManagementV1ClusterMembers>
  ManagementV1ClusterReset: GroupVersionResource<ManagementV1ClusterReset>
  ManagementV1ClusterRoleTemplate: GroupVersionResource<ManagementV1ClusterRoleTemplate>
  ManagementV1Config: GroupVersionResource<ManagementV1Config>
  ManagementV1ConvertVirtualClusterConfig: GroupVersionResource<ManagementV1ConvertVirtualClusterConfig>
  ManagementV1DatabaseConnector: GroupVersionResource<ManagementV1DatabaseConnector>
  ManagementV1DirectClusterEndpointToken: GroupVersionResource<ManagementV1DirectClusterEndpointToken>
  ManagementV1Event: GroupVersionResource<ManagementV1Event>
  ManagementV1Feature: GroupVersionResource<ManagementV1Feature>
  ManagementV1IngressAuthToken: GroupVersionResource<ManagementV1IngressAuthToken>
  ManagementV1Kiosk: GroupVersionResource<ManagementV1Kiosk>
  ManagementV1License: GroupVersionResource<ManagementV1License>
  ManagementV1LicenseRequest: GroupVersionResource<ManagementV1LicenseRequest>
  ManagementV1LicenseToken: GroupVersionResource<ManagementV1LicenseToken>
  ManagementV1LoftUpgrade: GroupVersionResource<ManagementV1LoftUpgrade>
  ManagementV1NodeClaim: GroupVersionResource<ManagementV1NodeClaim>
  ManagementV1NodeEnvironment: GroupVersionResource<ManagementV1NodeEnvironment>
  ManagementV1NodeProvider: GroupVersionResource<ManagementV1NodeProvider>
  ManagementV1NodeProviderExec: GroupVersionResource<ManagementV1NodeProviderExec>
  ManagementV1NodeType: GroupVersionResource<ManagementV1NodeType>
  ManagementV1OIDCClient: GroupVersionResource<ManagementV1OIDCClient>
  ManagementV1OwnedAccessKey: GroupVersionResource<ManagementV1OwnedAccessKey>
  ManagementV1Project: GroupVersionResource<ManagementV1Project>
  ManagementV1ProjectChartInfo: GroupVersionResource<ManagementV1ProjectChartInfo>
  ManagementV1ProjectCharts: GroupVersionResource<ManagementV1ProjectCharts>
  ManagementV1ProjectClusters: GroupVersionResource<ManagementV1ProjectClusters>
  ManagementV1ProjectImportSpace: GroupVersionResource<ManagementV1ProjectImportSpace>
  ManagementV1ProjectMembers: GroupVersionResource<ManagementV1ProjectMembers>
  ManagementV1ProjectMigrateSpaceInstance: GroupVersionResource<ManagementV1ProjectMigrateSpaceInstance>
  ManagementV1ProjectMigrateVirtualClusterInstance: GroupVersionResource<ManagementV1ProjectMigrateVirtualClusterInstance>
  ManagementV1ProjectNodeTypes: GroupVersionResource<ManagementV1ProjectNodeTypes>
  ManagementV1ProjectSecret: GroupVersionResource<ManagementV1ProjectSecret>
  ManagementV1ProjectTemplates: GroupVersionResource<ManagementV1ProjectTemplates>
  ManagementV1RedirectToken: GroupVersionResource<ManagementV1RedirectToken>
  ManagementV1RegisterVirtualCluster: GroupVersionResource<ManagementV1RegisterVirtualCluster>
  ManagementV1ResetAccessKey: GroupVersionResource<ManagementV1ResetAccessKey>
  ManagementV1Self: GroupVersionResource<ManagementV1Self>
  ManagementV1SelfSubjectAccessReview: GroupVersionResource<ManagementV1SelfSubjectAccessReview>
  ManagementV1SharedSecret: GroupVersionResource<ManagementV1SharedSecret>
  ManagementV1SpaceInstance: GroupVersionResource<ManagementV1SpaceInstance>
  ManagementV1SpaceTemplate: GroupVersionResource<ManagementV1SpaceTemplate>
  ManagementV1SubjectAccessReview: GroupVersionResource<ManagementV1SubjectAccessReview>
  ManagementV1Task: GroupVersionResource<ManagementV1Task>
  ManagementV1TaskLog: GroupVersionResource<ManagementV1TaskLog>
  ManagementV1Team: GroupVersionResource<ManagementV1Team>
  ManagementV1TeamAccessKeys: GroupVersionResource<ManagementV1TeamAccessKeys>
  ManagementV1TeamClusters: GroupVersionResource<ManagementV1TeamClusters>
  ManagementV1TeamObjectPermissions: GroupVersionResource<ManagementV1TeamObjectPermissions>
  ManagementV1TeamPermissions: GroupVersionResource<ManagementV1TeamPermissions>
  ManagementV1TranslateVClusterResourceName: GroupVersionResource<ManagementV1TranslateVClusterResourceName>
  ManagementV1UsageDownload: GroupVersionResource<ManagementV1UsageDownload>
  ManagementV1User: GroupVersionResource<ManagementV1User>
  ManagementV1UserAccessKeys: GroupVersionResource<ManagementV1UserAccessKeys>
  ManagementV1UserClusters: GroupVersionResource<ManagementV1UserClusters>
  ManagementV1UserObjectPermissions: GroupVersionResource<ManagementV1UserObjectPermissions>
  ManagementV1UserPermissions: GroupVersionResource<ManagementV1UserPermissions>
  ManagementV1UserProfile: GroupVersionResource<ManagementV1UserProfile>
  ManagementV1VirtualClusterAccessKey: GroupVersionResource<ManagementV1VirtualClusterAccessKey>
  ManagementV1VirtualClusterExternalDatabase: GroupVersionResource<ManagementV1VirtualClusterExternalDatabase>
  ManagementV1VirtualClusterInstance: GroupVersionResource<ManagementV1VirtualClusterInstance>
  ManagementV1VirtualClusterInstanceKubeConfig: GroupVersionResource<ManagementV1VirtualClusterInstanceKubeConfig>
  ManagementV1VirtualClusterInstanceLog: GroupVersionResource<ManagementV1VirtualClusterInstanceLog>
  ManagementV1VirtualClusterInstanceShell: GroupVersionResource<ManagementV1VirtualClusterInstanceShell>
  ManagementV1VirtualClusterInstanceSnapshot: GroupVersionResource<ManagementV1VirtualClusterInstanceSnapshot>
  ManagementV1VirtualClusterNodeAccessKey: GroupVersionResource<ManagementV1VirtualClusterNodeAccessKey>
  ManagementV1VirtualClusterSchema: GroupVersionResource<ManagementV1VirtualClusterSchema>
  ManagementV1VirtualClusterStandalone: GroupVersionResource<ManagementV1VirtualClusterStandalone>
  ManagementV1VirtualClusterTemplate: GroupVersionResource<ManagementV1VirtualClusterTemplate>
}

export const GenResources: TGenResources = {
  ManagementV1AgentAuditEvent: {
    group: "management.loft.sh",
    version: "v1",
    resource: "agentauditevents",
    subResource: "",
    namespaced: false,
    kind: "AgentAuditEvent",
  },
  ManagementV1Announcement: {
    group: "management.loft.sh",
    version: "v1",
    resource: "announcements",
    subResource: "",
    namespaced: false,
    kind: "Announcement",
  },
  ManagementV1App: {
    group: "management.loft.sh",
    version: "v1",
    resource: "apps",
    subResource: "",
    namespaced: false,
    kind: "App",
  },
  ManagementV1AppCredentials: {
    group: "management.loft.sh",
    version: "v1",
    resource: "apps",
    subResource: "credentials",
    namespaced: false,
    kind: "AppCredentials",
  },
  ManagementV1Backup: {
    group: "management.loft.sh",
    version: "v1",
    resource: "backups",
    subResource: "",
    namespaced: false,
    kind: "Backup",
  },
  ManagementV1BackupApply: {
    group: "management.loft.sh",
    version: "v1",
    resource: "backups",
    subResource: "apply",
    namespaced: false,
    kind: "BackupApply",
  },
  ManagementV1Cluster: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "",
    namespaced: false,
    kind: "Cluster",
  },
  ManagementV1ClusterAccess: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusteraccesses",
    subResource: "",
    namespaced: false,
    kind: "ClusterAccess",
  },
  ManagementV1ClusterAccessKey: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "accesskey",
    namespaced: false,
    kind: "ClusterAccessKey",
  },
  ManagementV1ClusterAgentConfig: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "agentconfig",
    namespaced: false,
    kind: "ClusterAgentConfig",
  },
  ManagementV1ClusterCharts: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "charts",
    namespaced: false,
    kind: "ClusterCharts",
  },
  ManagementV1ClusterDomain: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "domain",
    namespaced: false,
    kind: "ClusterDomain",
  },
  ManagementV1ClusterMemberAccess: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "memberaccess",
    namespaced: false,
    kind: "ClusterMemberAccess",
  },
  ManagementV1ClusterMembers: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "members",
    namespaced: false,
    kind: "ClusterMembers",
  },
  ManagementV1ClusterReset: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusters",
    subResource: "reset",
    namespaced: false,
    kind: "ClusterReset",
  },
  ManagementV1ClusterRoleTemplate: {
    group: "management.loft.sh",
    version: "v1",
    resource: "clusterroletemplates",
    subResource: "",
    namespaced: false,
    kind: "ClusterRoleTemplate",
  },
  ManagementV1Config: {
    group: "management.loft.sh",
    version: "v1",
    resource: "configs",
    subResource: "",
    namespaced: false,
    kind: "Config",
  },
  ManagementV1ConvertVirtualClusterConfig: {
    group: "management.loft.sh",
    version: "v1",
    resource: "convertvirtualclusterconfig",
    subResource: "",
    namespaced: false,
    kind: "ConvertVirtualClusterConfig",
  },
  ManagementV1DatabaseConnector: {
    group: "management.loft.sh",
    version: "v1",
    resource: "databaseconnectors",
    subResource: "",
    namespaced: false,
    kind: "DatabaseConnector",
  },
  ManagementV1DirectClusterEndpointToken: {
    group: "management.loft.sh",
    version: "v1",
    resource: "directclusterendpointtokens",
    subResource: "",
    namespaced: false,
    kind: "DirectClusterEndpointToken",
  },
  ManagementV1Event: {
    group: "management.loft.sh",
    version: "v1",
    resource: "events",
    subResource: "",
    namespaced: false,
    kind: "Event",
  },
  ManagementV1Feature: {
    group: "management.loft.sh",
    version: "v1",
    resource: "features",
    subResource: "",
    namespaced: false,
    kind: "Feature",
  },
  ManagementV1IngressAuthToken: {
    group: "management.loft.sh",
    version: "v1",
    resource: "ingressauthtokens",
    subResource: "",
    namespaced: false,
    kind: "IngressAuthToken",
  },
  ManagementV1Kiosk: {
    group: "management.loft.sh",
    version: "v1",
    resource: "kiosk",
    subResource: "",
    namespaced: false,
    kind: "Kiosk",
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
  ManagementV1LicenseToken: {
    group: "management.loft.sh",
    version: "v1",
    resource: "licensetokens",
    subResource: "",
    namespaced: false,
    kind: "LicenseToken",
  },
  ManagementV1LoftUpgrade: {
    group: "management.loft.sh",
    version: "v1",
    resource: "loftupgrades",
    subResource: "",
    namespaced: false,
    kind: "LoftUpgrade",
  },
  ManagementV1NodeClaim: {
    group: "management.loft.sh",
    version: "v1",
    resource: "nodeclaims",
    subResource: "",
    namespaced: true,
    kind: "NodeClaim",
  },
  ManagementV1NodeEnvironment: {
    group: "management.loft.sh",
    version: "v1",
    resource: "nodeenvironments",
    subResource: "",
    namespaced: true,
    kind: "NodeEnvironment",
  },
  ManagementV1NodeProvider: {
    group: "management.loft.sh",
    version: "v1",
    resource: "nodeproviders",
    subResource: "",
    namespaced: false,
    kind: "NodeProvider",
  },
  ManagementV1NodeProviderExec: {
    group: "management.loft.sh",
    version: "v1",
    resource: "nodeproviders",
    subResource: "exec",
    namespaced: false,
    kind: "NodeProviderExec",
  },
  ManagementV1NodeType: {
    group: "management.loft.sh",
    version: "v1",
    resource: "nodetypes",
    subResource: "",
    namespaced: false,
    kind: "NodeType",
  },
  ManagementV1OIDCClient: {
    group: "management.loft.sh",
    version: "v1",
    resource: "oidcclients",
    subResource: "",
    namespaced: false,
    kind: "OIDCClient",
  },
  ManagementV1OwnedAccessKey: {
    group: "management.loft.sh",
    version: "v1",
    resource: "ownedaccesskeys",
    subResource: "",
    namespaced: false,
    kind: "OwnedAccessKey",
  },
  ManagementV1Project: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "",
    namespaced: false,
    kind: "Project",
  },
  ManagementV1ProjectChartInfo: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "chartinfo",
    namespaced: false,
    kind: "ProjectChartInfo",
  },
  ManagementV1ProjectCharts: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "charts",
    namespaced: false,
    kind: "ProjectCharts",
  },
  ManagementV1ProjectClusters: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "clusters",
    namespaced: false,
    kind: "ProjectClusters",
  },
  ManagementV1ProjectImportSpace: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "importspace",
    namespaced: false,
    kind: "ProjectImportSpace",
  },
  ManagementV1ProjectMembers: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "members",
    namespaced: false,
    kind: "ProjectMembers",
  },
  ManagementV1ProjectMigrateSpaceInstance: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "migratespaceinstance",
    namespaced: false,
    kind: "ProjectMigrateSpaceInstance",
  },
  ManagementV1ProjectMigrateVirtualClusterInstance: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "migratevirtualclusterinstance",
    namespaced: false,
    kind: "ProjectMigrateVirtualClusterInstance",
  },
  ManagementV1ProjectNodeTypes: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "nodetypes",
    namespaced: false,
    kind: "ProjectNodeTypes",
  },
  ManagementV1ProjectSecret: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projectsecrets",
    subResource: "",
    namespaced: true,
    kind: "ProjectSecret",
  },
  ManagementV1ProjectTemplates: {
    group: "management.loft.sh",
    version: "v1",
    resource: "projects",
    subResource: "templates",
    namespaced: false,
    kind: "ProjectTemplates",
  },
  ManagementV1RedirectToken: {
    group: "management.loft.sh",
    version: "v1",
    resource: "redirecttokens",
    subResource: "",
    namespaced: false,
    kind: "RedirectToken",
  },
  ManagementV1RegisterVirtualCluster: {
    group: "management.loft.sh",
    version: "v1",
    resource: "registervirtualclusters",
    subResource: "",
    namespaced: false,
    kind: "RegisterVirtualCluster",
  },
  ManagementV1ResetAccessKey: {
    group: "management.loft.sh",
    version: "v1",
    resource: "resetaccesskeys",
    subResource: "",
    namespaced: false,
    kind: "ResetAccessKey",
  },
  ManagementV1Self: {
    group: "management.loft.sh",
    version: "v1",
    resource: "selves",
    subResource: "",
    namespaced: false,
    kind: "Self",
  },
  ManagementV1SelfSubjectAccessReview: {
    group: "management.loft.sh",
    version: "v1",
    resource: "selfsubjectaccessreviews",
    subResource: "",
    namespaced: false,
    kind: "SelfSubjectAccessReview",
  },
  ManagementV1SharedSecret: {
    group: "management.loft.sh",
    version: "v1",
    resource: "sharedsecrets",
    subResource: "",
    namespaced: true,
    kind: "SharedSecret",
  },
  ManagementV1SpaceInstance: {
    group: "management.loft.sh",
    version: "v1",
    resource: "spaceinstances",
    subResource: "",
    namespaced: true,
    kind: "SpaceInstance",
  },
  ManagementV1SpaceTemplate: {
    group: "management.loft.sh",
    version: "v1",
    resource: "spacetemplates",
    subResource: "",
    namespaced: false,
    kind: "SpaceTemplate",
  },
  ManagementV1SubjectAccessReview: {
    group: "management.loft.sh",
    version: "v1",
    resource: "subjectaccessreviews",
    subResource: "",
    namespaced: false,
    kind: "SubjectAccessReview",
  },
  ManagementV1Task: {
    group: "management.loft.sh",
    version: "v1",
    resource: "tasks",
    subResource: "",
    namespaced: false,
    kind: "Task",
  },
  ManagementV1TaskLog: {
    group: "management.loft.sh",
    version: "v1",
    resource: "tasks",
    subResource: "log",
    namespaced: false,
    kind: "TaskLog",
  },
  ManagementV1Team: {
    group: "management.loft.sh",
    version: "v1",
    resource: "teams",
    subResource: "",
    namespaced: false,
    kind: "Team",
  },
  ManagementV1TeamAccessKeys: {
    group: "management.loft.sh",
    version: "v1",
    resource: "teams",
    subResource: "accesskeys",
    namespaced: false,
    kind: "TeamAccessKeys",
  },
  ManagementV1TeamClusters: {
    group: "management.loft.sh",
    version: "v1",
    resource: "teams",
    subResource: "clusters",
    namespaced: false,
    kind: "TeamClusters",
  },
  ManagementV1TeamObjectPermissions: {
    group: "management.loft.sh",
    version: "v1",
    resource: "teams",
    subResource: "object-permissions",
    namespaced: false,
    kind: "TeamObjectPermissions",
  },
  ManagementV1TeamPermissions: {
    group: "management.loft.sh",
    version: "v1",
    resource: "teams",
    subResource: "permissions",
    namespaced: false,
    kind: "TeamPermissions",
  },
  ManagementV1TranslateVClusterResourceName: {
    group: "management.loft.sh",
    version: "v1",
    resource: "translatevclusterresourcenames",
    subResource: "",
    namespaced: false,
    kind: "TranslateVClusterResourceName",
  },
  ManagementV1UsageDownload: {
    group: "management.loft.sh",
    version: "v1",
    resource: "usagedownload",
    subResource: "",
    namespaced: false,
    kind: "UsageDownload",
  },
  ManagementV1User: {
    group: "management.loft.sh",
    version: "v1",
    resource: "users",
    subResource: "",
    namespaced: false,
    kind: "User",
  },
  ManagementV1UserAccessKeys: {
    group: "management.loft.sh",
    version: "v1",
    resource: "users",
    subResource: "accesskeys",
    namespaced: false,
    kind: "UserAccessKeys",
  },
  ManagementV1UserClusters: {
    group: "management.loft.sh",
    version: "v1",
    resource: "users",
    subResource: "clusters",
    namespaced: false,
    kind: "UserClusters",
  },
  ManagementV1UserObjectPermissions: {
    group: "management.loft.sh",
    version: "v1",
    resource: "users",
    subResource: "object-permissions",
    namespaced: false,
    kind: "UserObjectPermissions",
  },
  ManagementV1UserPermissions: {
    group: "management.loft.sh",
    version: "v1",
    resource: "users",
    subResource: "permissions",
    namespaced: false,
    kind: "UserPermissions",
  },
  ManagementV1UserProfile: {
    group: "management.loft.sh",
    version: "v1",
    resource: "users",
    subResource: "profile",
    namespaced: false,
    kind: "UserProfile",
  },
  ManagementV1VirtualClusterAccessKey: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "accesskey",
    namespaced: true,
    kind: "VirtualClusterAccessKey",
  },
  ManagementV1VirtualClusterExternalDatabase: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "externaldatabase",
    namespaced: true,
    kind: "VirtualClusterExternalDatabase",
  },
  ManagementV1VirtualClusterInstance: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "",
    namespaced: true,
    kind: "VirtualClusterInstance",
  },
  ManagementV1VirtualClusterInstanceKubeConfig: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "kubeconfig",
    namespaced: true,
    kind: "VirtualClusterInstanceKubeConfig",
  },
  ManagementV1VirtualClusterInstanceLog: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "log",
    namespaced: true,
    kind: "VirtualClusterInstanceLog",
  },
  ManagementV1VirtualClusterInstanceShell: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "shell",
    namespaced: true,
    kind: "VirtualClusterInstanceShell",
  },
  ManagementV1VirtualClusterInstanceSnapshot: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "snapshot",
    namespaced: true,
    kind: "VirtualClusterInstanceSnapshot",
  },
  ManagementV1VirtualClusterNodeAccessKey: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "nodeaccesskey",
    namespaced: true,
    kind: "VirtualClusterNodeAccessKey",
  },
  ManagementV1VirtualClusterSchema: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterschemas",
    subResource: "",
    namespaced: false,
    kind: "VirtualClusterSchema",
  },
  ManagementV1VirtualClusterStandalone: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclusterinstances",
    subResource: "standalone",
    namespaced: true,
    kind: "VirtualClusterStandalone",
  },
  ManagementV1VirtualClusterTemplate: {
    group: "management.loft.sh",
    version: "v1",
    resource: "virtualclustertemplates",
    subResource: "",
    namespaced: false,
    kind: "VirtualClusterTemplate",
  }
}
