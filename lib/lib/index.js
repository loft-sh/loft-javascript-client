"use strict";var ce=Object.create;var j=Object.defineProperty;var le=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var me=Object.getPrototypeOf,ge=Object.prototype.hasOwnProperty;var Ve=(o,e)=>{for(var s in e)j(o,s,{get:e[s],enumerable:!0})},_=(o,e,s,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of pe(e))!ge.call(o,t)&&t!==s&&j(o,t,{get:()=>e[t],enumerable:!(r=le(e,t))||r.enumerable});return o};var Q=(o,e,s)=>(s=o!=null?ce(me(o)):{},_(e||!o||!o.__esModule?j(s,"default",{value:o,enumerable:!0}):s,o)),de=o=>_(j({},"__esModule",{value:!0}),o);var Ae={};Ve(Ae,{APIExtensionsGroup:()=>B,APIExtensionsGroupVersion:()=>ke,APIExtensionsVersion:()=>W,Client:()=>ue,ClusterBasePath:()=>I,Err:()=>S,ErrorTypeAlreadyExists:()=>Z,ErrorTypeBadGateway:()=>re,ErrorTypeBadRequest:()=>Y,ErrorTypeForbidden:()=>X,ErrorTypeGatewayTimeout:()=>te,ErrorTypeInternalError:()=>ee,ErrorTypeNetwork:()=>O,ErrorTypeNotFound:()=>L,ErrorTypeNotImplemented:()=>se,ErrorTypeServiceUnavailable:()=>T,ErrorTypeUnauthorized:()=>K,ErrorTypeUnknown:()=>E,Failed:()=>x,List:()=>N,LoftSchemeGroup:()=>Re,LoftSchemeGroupCluster:()=>V,LoftSchemeGroupStorage:()=>Me,LoftSchemeGroupVersion:()=>ve,LoftSchemeGroupVersionCluster:()=>he,LoftSchemeGroupVersionStorage:()=>Ce,LoftSchemeGroupVersionVirtualCluster:()=>fe,LoftSchemeGroupVirtualCluster:()=>q,LoftSchemeVersion:()=>y,LoftSchemeVersionCluster:()=>d,LoftSchemeVersionStorage:()=>be,LoftSchemeVersionVirtualCluster:()=>F,ManagementBasePath:()=>H,MapErrorCode:()=>M,NewResource:()=>f,Ok:()=>P,ProjectBasePath:()=>$,Resources:()=>c,Return:()=>a,VClusterBasePath:()=>J,getApiHost:()=>ie,getProjectFromNamespace:()=>we,getProjectNamespace:()=>Te,isResult:()=>ye});module.exports=de(Ae);var p=Q(require("js-cookie")),ae=Q(require("json-merge-patch"));var G={loftAccessKeyIdentifier:"loft_access_key",loftImpersonateSubjectIdentifier:"loft_impersonate_subject",loftImpersonateJoinedGroupIdentifier:"loft_impersonate_joined_group"};function v(o){return o||[]}var z={ManagementV1AgentAuditEvent:{group:"management.loft.sh",version:"v1",resource:"agentauditevents",subResource:"",namespaced:!1,kind:"AgentAuditEvent"},ManagementV1Announcement:{group:"management.loft.sh",version:"v1",resource:"announcements",subResource:"",namespaced:!1,kind:"Announcement"},ManagementV1App:{group:"management.loft.sh",version:"v1",resource:"apps",subResource:"",namespaced:!1,kind:"App"},ManagementV1AppCredentials:{group:"management.loft.sh",version:"v1",resource:"apps",subResource:"credentials",namespaced:!1,kind:"AppCredentials"},ManagementV1Backup:{group:"management.loft.sh",version:"v1",resource:"backups",subResource:"",namespaced:!1,kind:"Backup"},ManagementV1BackupApply:{group:"management.loft.sh",version:"v1",resource:"backups",subResource:"apply",namespaced:!1,kind:"BackupApply"},ManagementV1Cluster:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"",namespaced:!1,kind:"Cluster"},ManagementV1ClusterAccess:{group:"management.loft.sh",version:"v1",resource:"clusteraccesses",subResource:"",namespaced:!1,kind:"ClusterAccess"},ManagementV1ClusterAccessKey:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"accesskey",namespaced:!1,kind:"ClusterAccessKey"},ManagementV1ClusterAgentConfig:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"agentconfig",namespaced:!1,kind:"ClusterAgentConfig"},ManagementV1ClusterCharts:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"charts",namespaced:!1,kind:"ClusterCharts"},ManagementV1ClusterConnect:{group:"management.loft.sh",version:"v1",resource:"clusterconnect",subResource:"",namespaced:!1,kind:"ClusterConnect"},ManagementV1ClusterDomain:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"domain",namespaced:!1,kind:"ClusterDomain"},ManagementV1ClusterMemberAccess:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"memberaccess",namespaced:!1,kind:"ClusterMemberAccess"},ManagementV1ClusterMembers:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"members",namespaced:!1,kind:"ClusterMembers"},ManagementV1ClusterReset:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"reset",namespaced:!1,kind:"ClusterReset"},ManagementV1ClusterRoleTemplate:{group:"management.loft.sh",version:"v1",resource:"clusterroletemplates",subResource:"",namespaced:!1,kind:"ClusterRoleTemplate"},ManagementV1ClusterVirtualClusterDefaults:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"virtualclusterdefaults",namespaced:!1,kind:"ClusterVirtualClusterDefaults"},ManagementV1Config:{group:"management.loft.sh",version:"v1",resource:"configs",subResource:"",namespaced:!1,kind:"Config"},ManagementV1DevPodWorkspaceInstance:{group:"management.loft.sh",version:"v1",resource:"devpodworkspaceinstances",subResource:"",namespaced:!0,kind:"DevPodWorkspaceInstance"},ManagementV1DevPodWorkspaceInstanceState:{group:"management.loft.sh",version:"v1",resource:"devpodworkspaceinstances",subResource:"state",namespaced:!0,kind:"DevPodWorkspaceInstanceState"},ManagementV1DevPodWorkspaceTemplate:{group:"management.loft.sh",version:"v1",resource:"devpodworkspacetemplates",subResource:"",namespaced:!1,kind:"DevPodWorkspaceTemplate"},ManagementV1DirectClusterEndpointToken:{group:"management.loft.sh",version:"v1",resource:"directclusterendpointtokens",subResource:"",namespaced:!1,kind:"DirectClusterEndpointToken"},ManagementV1Event:{group:"management.loft.sh",version:"v1",resource:"events",subResource:"",namespaced:!1,kind:"Event"},ManagementV1Feature:{group:"management.loft.sh",version:"v1",resource:"features",subResource:"",namespaced:!1,kind:"Feature"},ManagementV1IngressAuthToken:{group:"management.loft.sh",version:"v1",resource:"ingressauthtokens",subResource:"",namespaced:!1,kind:"IngressAuthToken"},ManagementV1Kiosk:{group:"management.loft.sh",version:"v1",resource:"kiosk",subResource:"",namespaced:!1,kind:"Kiosk"},ManagementV1License:{group:"management.loft.sh",version:"v1",resource:"licenses",subResource:"",namespaced:!1,kind:"License"},ManagementV1LicenseRequest:{group:"management.loft.sh",version:"v1",resource:"licenses",subResource:"request",namespaced:!1,kind:"LicenseRequest"},ManagementV1LicenseToken:{group:"management.loft.sh",version:"v1",resource:"licensetokens",subResource:"",namespaced:!1,kind:"LicenseToken"},ManagementV1LoftUpgrade:{group:"management.loft.sh",version:"v1",resource:"loftupgrades",subResource:"",namespaced:!1,kind:"LoftUpgrade"},ManagementV1OwnedAccessKey:{group:"management.loft.sh",version:"v1",resource:"ownedaccesskeys",subResource:"",namespaced:!1,kind:"OwnedAccessKey"},ManagementV1PolicyViolation:{group:"management.loft.sh",version:"v1",resource:"policyviolations",subResource:"",namespaced:!1,kind:"PolicyViolation"},ManagementV1Project:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"",namespaced:!1,kind:"Project"},ManagementV1ProjectChartInfo:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"chartinfo",namespaced:!1,kind:"ProjectChartInfo"},ManagementV1ProjectCharts:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"charts",namespaced:!1,kind:"ProjectCharts"},ManagementV1ProjectClusters:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"clusters",namespaced:!1,kind:"ProjectClusters"},ManagementV1ProjectImportSpace:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"importspace",namespaced:!1,kind:"ProjectImportSpace"},ManagementV1ProjectImportVirtualCluster:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"importvirtualcluster",namespaced:!1,kind:"ProjectImportVirtualCluster"},ManagementV1ProjectMembers:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"members",namespaced:!1,kind:"ProjectMembers"},ManagementV1ProjectMigrateSpaceInstance:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"migratespaceinstance",namespaced:!1,kind:"ProjectMigrateSpaceInstance"},ManagementV1ProjectMigrateVirtualClusterInstance:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"migratevirtualclusterinstance",namespaced:!1,kind:"ProjectMigrateVirtualClusterInstance"},ManagementV1ProjectSecret:{group:"management.loft.sh",version:"v1",resource:"projectsecrets",subResource:"",namespaced:!0,kind:"ProjectSecret"},ManagementV1ProjectTemplates:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"templates",namespaced:!1,kind:"ProjectTemplates"},ManagementV1RedirectToken:{group:"management.loft.sh",version:"v1",resource:"redirecttokens",subResource:"",namespaced:!1,kind:"RedirectToken"},ManagementV1ResetAccessKey:{group:"management.loft.sh",version:"v1",resource:"resetaccesskeys",subResource:"",namespaced:!1,kind:"ResetAccessKey"},ManagementV1Runner:{group:"management.loft.sh",version:"v1",resource:"runners",subResource:"",namespaced:!1,kind:"Runner"},ManagementV1RunnerAccessKey:{group:"management.loft.sh",version:"v1",resource:"runners",subResource:"accesskey",namespaced:!1,kind:"RunnerAccessKey"},ManagementV1RunnerConfig:{group:"management.loft.sh",version:"v1",resource:"runners",subResource:"config",namespaced:!1,kind:"RunnerConfig"},ManagementV1Self:{group:"management.loft.sh",version:"v1",resource:"selves",subResource:"",namespaced:!1,kind:"Self"},ManagementV1SelfSubjectAccessReview:{group:"management.loft.sh",version:"v1",resource:"selfsubjectaccessreviews",subResource:"",namespaced:!1,kind:"SelfSubjectAccessReview"},ManagementV1SharedSecret:{group:"management.loft.sh",version:"v1",resource:"sharedsecrets",subResource:"",namespaced:!0,kind:"SharedSecret"},ManagementV1SpaceConstraint:{group:"management.loft.sh",version:"v1",resource:"spaceconstraints",subResource:"",namespaced:!1,kind:"SpaceConstraint"},ManagementV1SpaceInstance:{group:"management.loft.sh",version:"v1",resource:"spaceinstances",subResource:"",namespaced:!0,kind:"SpaceInstance"},ManagementV1SpaceTemplate:{group:"management.loft.sh",version:"v1",resource:"spacetemplates",subResource:"",namespaced:!1,kind:"SpaceTemplate"},ManagementV1SubjectAccessReview:{group:"management.loft.sh",version:"v1",resource:"subjectaccessreviews",subResource:"",namespaced:!1,kind:"SubjectAccessReview"},ManagementV1Task:{group:"management.loft.sh",version:"v1",resource:"tasks",subResource:"",namespaced:!1,kind:"Task"},ManagementV1TaskLog:{group:"management.loft.sh",version:"v1",resource:"tasks",subResource:"log",namespaced:!1,kind:"TaskLog"},ManagementV1Team:{group:"management.loft.sh",version:"v1",resource:"teams",subResource:"",namespaced:!1,kind:"Team"},ManagementV1TeamAccessKeys:{group:"management.loft.sh",version:"v1",resource:"teams",subResource:"accesskeys",namespaced:!1,kind:"TeamAccessKeys"},ManagementV1TeamClusters:{group:"management.loft.sh",version:"v1",resource:"teams",subResource:"clusters",namespaced:!1,kind:"TeamClusters"},ManagementV1User:{group:"management.loft.sh",version:"v1",resource:"users",subResource:"",namespaced:!1,kind:"User"},ManagementV1UserAccessKeys:{group:"management.loft.sh",version:"v1",resource:"users",subResource:"accesskeys",namespaced:!1,kind:"UserAccessKeys"},ManagementV1UserClusters:{group:"management.loft.sh",version:"v1",resource:"users",subResource:"clusters",namespaced:!1,kind:"UserClusters"},ManagementV1UserPermissions:{group:"management.loft.sh",version:"v1",resource:"users",subResource:"permissions",namespaced:!1,kind:"UserPermissions"},ManagementV1UserProfile:{group:"management.loft.sh",version:"v1",resource:"users",subResource:"profile",namespaced:!1,kind:"UserProfile"},ManagementV1VirtualClusterInstance:{group:"management.loft.sh",version:"v1",resource:"virtualclusterinstances",subResource:"",namespaced:!0,kind:"VirtualClusterInstance"},ManagementV1VirtualClusterInstanceKubeConfig:{group:"management.loft.sh",version:"v1",resource:"virtualclusterinstances",subResource:"kubeconfig",namespaced:!0,kind:"VirtualClusterInstanceKubeConfig"},ManagementV1VirtualClusterInstanceLog:{group:"management.loft.sh",version:"v1",resource:"virtualclusterinstances",subResource:"log",namespaced:!0,kind:"VirtualClusterInstanceLog"},ManagementV1VirtualClusterInstanceWorkloadKubeConfig:{group:"management.loft.sh",version:"v1",resource:"virtualclusterinstances",subResource:"workloadkubeconfig",namespaced:!0,kind:"VirtualClusterInstanceWorkloadKubeConfig"},ManagementV1VirtualClusterTemplate:{group:"management.loft.sh",version:"v1",resource:"virtualclustertemplates",subResource:"",namespaced:!1,kind:"VirtualClusterTemplate"}};var q="virtualcluster.loft.sh",F="v1",fe="virtualcluster.loft.sh/v1",V="cluster.loft.sh",d="v1",he="cluster.loft.sh/v1",Re="management.loft.sh",y="v1",ve="management.loft.sh/v1",Me="storage.loft.sh",be="v1",Ce="storage.loft.sh/v1",B="apiextensions.k8s.io",W="v1",ke="apiextensions.k8s.io/v1",N=class{};var c={...z,ClusterV1SleepModeConfig:{group:V,version:d,resource:"sleepmodeconfigs",kind:"SleepModeConfig",namespaced:!0},ClusterV1Space:{group:V,version:d,resource:"spaces",kind:"Space"},ClusterV1ClusterQuota:{group:V,version:d,resource:"clusterquotas",kind:"ClusterQuota"},ClusterV1HelmRelease:{group:V,version:d,resource:"helmreleases",kind:"HelmRelease",namespaced:!0},ClusterV1VirtualCluster:{group:V,version:d,resource:"virtualclusters",kind:"VirtualCluster",namespaced:!0},ClusterV1LocalClusterAccess:{group:V,version:d,resource:"localclusteraccesses",kind:"LocalClusterAccess"},ClusterV1ChartInfo:{group:V,version:d,resource:"chartinfos",kind:"ChartInfo"},VirtualclusterV1HelmRelease:{group:q,version:F,resource:"helmreleases",kind:"HelmRelease",namespaced:!0},CustomResourceDefinition:{group:B,version:W,resource:"customresourcedefinitions",kind:"CustomResourceDefinition"},PolicyV1beta1JsPolicy:{group:"policy.jspolicy.com",version:"v1beta1",resource:"jspolicies",kind:"JsPolicy"},PolicyV1beta1JsPolicyViolations:{group:"policy.jspolicy.com",version:"v1beta1",resource:"jspolicyviolations",kind:"JsPolicyViolations"},StorageV1VirtualCluster:{group:"storage.loft.sh",version:y,resource:"virtualclusters",kind:"VirtualCluster",namespaced:!0},StorageV1ClusterQuota:{group:"storage.loft.sh",version:y,resource:"clusterquotas",kind:"ClusterQuota"},StorageV1LocalUser:{group:"storage.loft.sh",version:y,resource:"localusers",kind:"LocalUser"},NetworkingV1Ingress:{group:"networking.k8s.io",version:"v1",resource:"ingresses",kind:"Ingress",namespaced:!0},V1StatefulSet:{group:"apps",version:"v1",resource:"statefulsets",kind:"StatefulSet",namespaced:!0},V1Deployment:{group:"apps",version:"v1",resource:"deployments",kind:"Deployment",namespaced:!0},V1Event:{group:"",version:"v1",resource:"events",kind:"Event",namespaced:!0},V1Pod:{group:"",version:"v1",resource:"pods",kind:"Pod",namespaced:!0},V1Node:{group:"",version:"v1",resource:"nodes",kind:"Node"},V1Namespace:{group:"",version:"v1",resource:"namespaces",kind:"Namespace"},V1SelfSubjectAccessReview:{group:"authorization.k8s.io",version:"v1",resource:"selfsubjectaccessreviews",kind:"SelfSubjectAccessReview"},V1ClusterRole:{group:"rbac.authorization.k8s.io",version:"v1",resource:"clusterroles",kind:"ClusterRole"},V1ClusterRoleBinding:{group:"rbac.authorization.k8s.io",version:"v1",resource:"clusterrolebindings",kind:"ClusterRoleBinding"},V1Role:{group:"rbac.authorization.k8s.io",version:"v1",resource:"roles",kind:"Role",namespaced:!0},V1RoleBinding:{group:"rbac.authorization.k8s.io",version:"v1",resource:"rolebindings",kind:"RoleBinding",namespaced:!0},V1Secret:{group:"",version:"v1",resource:"secrets",kind:"Secret",namespaced:!0},V1ConfigMap:{group:"",version:"v1",resource:"configmaps",kind:"ConfigMap",namespaced:!0},V1Service:{group:"",version:"v1",resource:"services",kind:"Service",namespaced:!0},V1User:{group:"",version:"v1",resource:"users",kind:"User",namespaced:!1},V1StorageClassList:{group:"storage.k8s.io",version:"v1",resource:"storageclasses",kind:"StorageClass",namespaced:!1},V1Beta1PodMetrics:{group:"metrics.k8s.io",version:"v1beta1",resource:"pods",kind:"PodMetrics",namespaced:!0}};function f(o,e,s){return{apiVersion:o.group?o.group+"/"+o.version:o.version,kind:o.kind,metadata:{name:e},...s}}var S=class{constructor(e,s=void 0){this.val=e;this.extra=s;this.ok=!1;this.err=!0}},P=class{constructor(e,s=void 0){this.val=e;this.extra=s;this.ok=!0;this.err=!1}};function ye(o){return"ok"in o&&typeof o.ok=="boolean"&&"err"in o&&typeof o.err=="boolean"}var E="",O="Network",X="Forbidden",Y="BadRequest",L="NotFound",K="Unauthorized",Z="AlreadyExists",ee="InternalServerError",se="NotImplemented",re="BadGateway",T="ServiceUnavailable",te="GatewayTimeout",M=o=>{switch(o){case 400:return Y;case 401:return K;case 403:return X;case 404:return L;case 409:return Z;case 500:return ee;case 501:return se;case 502:return re;case 503:return T;case 504:return te}return E},a=class{static Ok(){return new P(void 0)}static Value(e){return new P(e)}static Failed(e,s="",r=E,t=void 0){return new S(new x(e,r,s),t)}static Error(e){return new S(e)}static WithExtra(e,s=void 0){return e.extra=s,e}},x=class{constructor(e,s=E,r=""){this.message=e;this.type=s;this.reason=r}};var w={secure:!0,expires:365*10,sameSite:"strict"},h=G.loftAccessKeyIdentifier,b=G.loftImpersonateSubjectIdentifier,A=G.loftImpersonateJoinedGroupIdentifier,Se=["v4.channel.k8s.io","v3.channel.k8s.io","v2.channel.k8s.io","channel.k8s.io"];function ie(){return typeof window<"u"&&window.location.href.startsWith("http://localhost:3000")?"https://localhost:9898":""}function Pe(){return typeof window>"u"||window.location.host==="localhost:3000"?"wss://localhost:8080":`${window.location.protocol==="https:"?"wss":"ws"}://${window.location.host}`}function ne(o){return[o.virtualCluster?"loft:vcluster:main":`loft:space:${o.project}:${o.space}`]}var H="/kubernetes/management",I="/kubernetes/cluster/",J="/kubernetes/virtualcluster/",$="/kubernetes/project/";function Te(o){return o?"loft-p-"+o:"loft-p-"}function we(o){if(o)return o.replace(/^loft-p-/,"")}var k=class{constructor(e,s,r){this.apiHost="";this.wsHost="";this.accessKey="";this.managementNonResource=()=>new l(this,{basePath:H,headers:this.impersonationHeaders()});this.cluster=(e,s)=>new l(this,{basePath:I+e,groupVersionResource:s,headers:this.impersonationHeaders()});this.clusterNonResource=e=>new l(this,{basePath:I+e,headers:this.impersonationHeaders()});this.project=(e,s)=>new l(this,{basePath:$+e.project+"/"+(e.space?"space/"+e.space:"virtualcluster/"+e.virtualCluster),groupVersionResource:s,project:e,headers:this.impersonationHeaders(ne(e))});this.projectNonResource=e=>new l(this,{basePath:$+e.project+"/"+(e.space?"space/"+e.space:"virtualcluster/"+e.virtualCluster),project:e,headers:this.impersonationHeaders(ne(e))});this.apiHost=s||ie(),this.wsHost=r||Pe(),this.accessKey=e||k.getAccessKey()}static getAccessKey(){return localStorage.getItem(h)}static tryCastToStatus(e){if(e.kind){if(e.kind!=="Status"||e.apiVersion!=="v1")return a.Value(null)}else return a.Value(null);return a.Value(e)}async getUser(){let e=await this.management(c.ManagementV1Self).Create(f(c.ManagementV1Self));return e.err?e:e.val.status?.user?(typeof window<"u"&&(window.loft||(window.loft={}),window.loft.instanceID=e.val.status.instanceID,window.loft.chatAuthToken=e.val.status.chatAuthToken,window.loft.user=e.val.status.user),a.Value(e.val.status.user.name)):a.Failed("no user found")}getAccessKey(){return this.accessKey}async loftVersion(e){try{let s=this.apiHost+"/version";e&&(s+="?refresh=true");let t=await(await fetch(s)).json();return a.Value(t)}catch(s){return console.error(s),a.Failed("error during version retrieval")}}impersonatedUser(){try{let e=localStorage.getItem(b);if(e)return JSON.parse(e)}catch(e){console.error(e)}}impersonate(e,s,r){s?(localStorage.setItem(b,JSON.stringify({name:e,subject:s,groups:r})),s&&p.default.set(b,s,w),r?.forEach(t=>{let n=p.default.get(A);n?(n+=", "+t,p.default.set(A,n,w)):p.default.set(A,t,w)})):(localStorage.removeItem(b),p.default.remove(b),p.default.remove(A))}async login(e,s){let r=await this.request("/auth/password/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:s})});if(r.err)return r;let t=r.val;return this.setAccessKey(t.accessKey),a.Ok()}async loginWithAccessKey(e){this.isLoggedIn()&&await this.logout(),this.accessKey=e;let s=await this.management(c.ManagementV1Self).Create(f(c.ManagementV1Self));return s.err?(this.clearStorage(),s):(this.setAccessKey(e),a.Ok())}isLoggedIn(){return!!this.accessKey}setAccessKey(e){this.accessKey=e,localStorage.setItem(h,e),p.default.set(h,e,w)}async stream(e,s){try{let r=await fetch(this.apiHost+e,s);return r.status>=400||!r.body?await this.parseResponse(e,r):a.Value(r.body.getReader())}catch(r){return a.Failed(r+"","NetworkError",O)}}async request(e,s){try{let r=await fetch(this.apiHost+e,{...s,credentials:"same-origin"});return await this.parseResponse(e,r)}catch(r){return a.Failed(r+"","NetworkError",O)}}async socket(e,s){return this.refreshCookie(),new Promise((r,t)=>{let n=new WebSocket(`${this.wsHost}${e}`,s),u=!1;n.onopen=()=>{u=!0,r(n)},n.onerror=i=>{if(!u){let m=p.default.get(h)!="";t(m?i:new Error("Web socket is not authenticated. Please log in again"))}}})}async parseResponse(e,s){let r=await s.text(),t;try{t=JSON.parse(r)}catch{if(s.status===404)return a.Failed("page not found","NotFound",L);if(s.status===503){if(e.includes("kiosk.sh")||e.includes("cluster.loft.sh")){let i=e.split("/");return i.length>=4&&i[0]===""&&i[1]==="kubernetes"&&i[2]==="cluster"?a.Failed(`Agent seems to be currently unavailable, it is maybe just starting up. Click <a href="/spaces/${i[3]}/loft">here</a> for more information</span>`,"LoftAgentUnavailable",T):a.Failed("Agent seems to be currently unavailable, it is maybe just starting up","LoftAgentUnavailable",T)}}else if(s.status===200)return a.Value(r);return console.info("Unexpected Server Response",r),a.Failed("Unexpected server response",M(s.status),M(s.status))}let n=k.tryCastToStatus(t);return n.err?n:n.val!==null&&n.val.status==="Failure"?n.val.code===500&&(n.val.message?.indexOf("vcluster secret not found")!==-1||n.val.message.indexOf("no ready pod for virtual cluster")!==-1)?a.Failed("vcluster seems to be not ready. Please refresh in a second",n.val.reason,M(n.val.code)):a.Failed(n.val.message,n.val.reason,M(n.val.code)):s.status>=400?a.Failed("unknown error","Unknown",M(s.status)):a.Value(t)}management(e){return new l(this,{basePath:H,groupVersionResource:e,headers:this.impersonationHeaders()})}vCluster(e,s){return new l(this,{basePath:J+e.cluster+"/"+e.namespace+"/"+e.name,groupVersionResource:s,vCluster:e,headers:this.impersonationHeaders()})}vClusterNonResource(e){return new l(this,{basePath:J+e.cluster+"/"+e.namespace+"/"+e.name,vCluster:e,headers:this.impersonationHeaders()})}auto(e,s,r,t){return r?this.project(r,t):s?this.vCluster(s,t):e?this.cluster(e,t):this.management(t)}autoNonResource(e,s,r){return r?this.projectNonResource(r):s?this.vClusterNonResource(s):e?this.clusterNonResource(e):this.managementNonResource()}async doRawSocket(e,s){try{return a.Value(await this.socket(e,s))}catch(r){return console.error(r),a.Failed(r.message||JSON.stringify(r))}}async doRawStream(e,s,r){return this.doRawInternal(e,s,r,!0)}async doRaw(e,s,r){return this.doRawInternal(e,s,r)}async doRawInternal(e,s,r,t){let n=this.accessKey,u=n?new Headers({...r,Authorization:"bearer "+n,"X-Sleep-Mode-Ignore":"true"}):new Headers({...r,"X-Sleep-Mode-Ignore":"true"}),i=t?await this.stream(e,{...s,headers:u}):await this.request(e,{...s,headers:u});return i.err&&i.val.type===K&&(i.val.message==="Access key not found. Please login again"||i.val.message==="invalid bearer token")&&(this.clearStorage(),typeof window<"u"&&(window.location.href="/"),await new Promise(()=>{})),i}impersonationHeaders(e){let s=this.impersonatedUser(),r={};return s&&(s.subject&&(r["Impersonate-User"]=s.subject),[...v(s.groups),...v(e)].forEach(t=>{r["Impersonate-Joined-Group"]?r["Impersonate-Joined-Group"]+=", "+t:r["Impersonate-Joined-Group"]=t})),r}clearStorage(){this.accessKey=null,localStorage.removeItem(h),localStorage.removeItem(b),p.default.remove(h,{secure:!0}),p.default.remove(b,{secure:!0}),p.default.remove(A,{secure:!0})}refreshCookie(){let e=this.accessKey||localStorage.getItem(h),s=p.default.get(h);e&&e!=s&&p.default.set(h,e,w)}async logout(){let e=await this.management(c.ManagementV1Self).Create(f(c.ManagementV1Self));if(e.err)return this.clearStorage(),e;if(!e.val.status?.accessKey)return this.clearStorage(),a.Ok();let s=await this.management(c.ManagementV1OwnedAccessKey).Delete(e.val.status.accessKey);return s.err?(this.clearStorage(),s):(this.clearStorage(),a.Ok())}},l=class{constructor(e,s){this.client=e,this.options=s}Name(e){return new l(this.client,{...this.options,name:e})}Namespace(e){return e?new l(this.client,{...this.options,namespace:e}):new l(this.client,{...this.options})}Resource(e){return new l(this.client,{...this.options,groupVersionResource:e})}buildPath(e){if(this.options.groupVersionResource)if(this.options.basePath){if(!this.options.name&&this.options.groupVersionResource.subResource)return a.Failed("resource name required when subresource is used")}else return a.Failed("basePath is missing");else return a.Failed("groupVersionResource is missing");let s=[this.options.basePath];this.options.groupVersionResource.group?s.push("apis",this.options.groupVersionResource.group):s.push("api"),s.push(this.options.groupVersionResource.version),this.options.namespace&&s.push("namespaces",this.options.namespace),s.push(this.options.groupVersionResource.resource),this.options.name&&s.push(this.options.name),this.options.groupVersionResource.subResource&&s.push(this.options.groupVersionResource.subResource);let r="";if(e){let t=[];for(let n of Object.keys(e))e[n]&&(Array.isArray(e[n])?e[n].forEach(u=>{t.push(n+"="+encodeURIComponent(u))}):t.push(n+"="+encodeURIComponent(e[n])));t.length>0&&(r="?"+t.join("&"))}else r="?timeout=180s";return a.Value(s.join("/")+r)}parseResourceList(e,s,r,t,n,u){for(let i=0;i<v(r.resources).length;i++){let m=r.resources[i];if(m===void 0)continue;let g=m.name.split("/"),R=g[0]??"";!u&&g.length>1||n&&t.find(C=>C.group===e&&C.resource===R)||t.push({resource:R,subResource:g.length>1?g[1]:void 0,group:e,version:s,kind:m.kind,namespaced:m.namespaced,verbs:m.verbs})}}async ApiResources(e,s){let r=[],t=await this.client.doRaw([this.options.basePath,"api"].join("/"));if(t.err)return t;let n=[];for(let i=0;i<v(t.val.versions).length;i++)n.push((async m=>{let g=t.val.versions[m];if(g===void 0)return;let R=await this.client.doRaw([this.options.basePath,"api",g].join("/"));if(R.err){console.error(R.val.message);return}this.parseResourceList("",g,R.val,r,e,s)})(i)),n.length>20&&(await Promise.all(n),n=[]);n.length>0&&(await Promise.all(n),n=[]);let u=await this.client.doRaw([this.options.basePath,"apis"].join("/"));if(u.err)return u;for(let i=0;i<v(u.val.groups).length;i++){let m=u.val.groups[i];if(m!==void 0)for(let g=0;g<v(m.versions).length;g++)n.push((async(R,C)=>{let U=C.versions[R];if(U===void 0)return;let D=await this.client.doRaw([this.options.basePath,"apis",C.name,U.version].join("/"));if(D.err){console.error(D.val.message);return}this.parseResourceList(C.name,U.version,D.val,r,e,s)})(g,m)),n.length>20&&(await Promise.all(n),n=[])}return n.length>0&&await Promise.all(n),a.Value(r)}async Version(){let e=[this.options.basePath,"version"];return await this.client.doRaw(e.join("/"))}async VirtualClusterInstanceLogs(e,s,r){let t=[this.options.basePath,`apis/management.loft.sh/v1/namespaces/${e}/virtualclusterinstances/${s}/log`].join("/"),n=[];if(r)for(let u of Object.keys(r))n.push(`${u}=${encodeURIComponent(r[u])}`);return n.length>0&&(t+="?"+n.join("&")),await this.client.doRawStream(t,void 0,this.options.headers)}async TaskLogs(e,s){let r=[this.options.basePath,`apis/management.loft.sh/v1/tasks/${e}/log`].join("/"),t=[];if(s)for(let n of Object.keys(s))t.push(`${n}=${encodeURIComponent(s[n])}`);return t.length>0&&(r+="?"+t.join("&")),await this.client.doRawStream(r,void 0,this.options.headers)}async Logs(e,s,r){let t=[this.options.basePath,`api/v1/namespaces/${e}/pods/${s}/log`].join("/"),n=oe(r);return n.length>0&&(t+="?"+n),await this.client.doRawStream(t,void 0,this.options.headers)}async Exec(e,s,r){let t=[this.options.basePath,`api/v1/namespaces/${e}/pods/${s}/exec`].join("/"),n=oe(r);return n.length>0&&(t+="?"+n),await this.client.doRawSocket(t,Se)}async Path(e,s,r){let t=[this.options.basePath,e];return await this.client.doRaw(t.join("/"),s,{...r,...this.options.headers})}ResolvePath(e){return e&&(this.options.name=e),this.buildPath()}async Get(e,s){this.options.name=e;let r=this.buildPath(s);return r.err?r:a.WithExtra(await this.client.doRaw(r.val,void 0,this.options.headers),this.options)}async List(e){if(this.options.name)return a.Failed("name is set on a list request");let s=this.buildPath(e);return s.err?s:a.WithExtra(await this.client.doRaw(s.val,void 0,this.options.headers),this.options)}async ListTable(e){if(this.options.name)return a.Failed("name is set on a list request");let s=this.buildPath(e);return s.err?s:a.WithExtra(await this.client.doRaw(s.val,void 0,{...this.options.headers,Accept:"application/json;as=Table;v=v1;g=meta.k8s.io,application/json;as=Table;v=v1beta1;g=meta.k8s.io,application/json"}),this.options)}async Create(e,s){let r=this.buildPath(s);return r.err?r:a.WithExtra(await this.client.doRaw(r.val,{method:"POST",body:JSON.stringify(e)},{...this.options.headers,"Content-Type":"application/json"}),this.options)}async PatchObject(e,s,r,t){let n=ae.default.generate(e,s);return this.Patch(s.metadata?.name,n,r,t)}async Patch(e,s,r,t){this.options.name=e;let n=this.buildPath(t);return n.err?n:a.WithExtra(await this.client.doRaw(n.val,{method:"PATCH",body:JSON.stringify(s,function(u,i){return i===void 0?null:i})},{...this.options.headers,"Content-Type":r||"application/merge-patch+json"}),this.options)}async Update(e,s,r){this.options.name=e;let t=this.buildPath(r);return t.err?t:a.WithExtra(await this.client.doRaw(t.val,{method:"PUT",body:JSON.stringify(s)},{...this.options.headers,"Content-Type":"application/json"}),this.options)}async Delete(e,s){this.options.name=e;let r=this.buildPath(s);return r.err?r:a.WithExtra(await this.client.doRaw(r.val,{method:"DELETE"},this.options.headers),this.options)}async CanI(e){let s=this.options.groupVersionResource,r=this.options.basePath?.indexOf(I)===0?this.options.basePath.substring(I.length):void 0,t,n;this.options.project?(t=this.client.project(this.options.project,c.V1SelfSubjectAccessReview),n=f(c.V1SelfSubjectAccessReview)):this.options.vCluster?(t=this.client.vCluster(this.options.vCluster,c.V1SelfSubjectAccessReview),n=f(c.V1SelfSubjectAccessReview)):r?(t=this.client.cluster(r,c.V1SelfSubjectAccessReview),n=f(c.V1SelfSubjectAccessReview)):(t=this.client.management(c.ManagementV1SelfSubjectAccessReview),n=f(c.ManagementV1SelfSubjectAccessReview)),n.spec={resourceAttributes:{verb:e,name:this.options.name,namespace:this.options.namespace,group:s.group,version:s.version,resource:s.resource,subresource:s.subResource}};let u=await t.Create(n);return u.err?u:a.Value(!!(u.val.status?.allowed&&!u.val.status.denied))}};function oe(o){let e=new URLSearchParams;for(let[s,r]of Object.entries(o))Array.isArray(r)?r.forEach(t=>{e.append(s,t)}):e.append(s,r);return e.toString()}var ue=k;0&&(module.exports={APIExtensionsGroup,APIExtensionsGroupVersion,APIExtensionsVersion,Client,ClusterBasePath,Err,ErrorTypeAlreadyExists,ErrorTypeBadGateway,ErrorTypeBadRequest,ErrorTypeForbidden,ErrorTypeGatewayTimeout,ErrorTypeInternalError,ErrorTypeNetwork,ErrorTypeNotFound,ErrorTypeNotImplemented,ErrorTypeServiceUnavailable,ErrorTypeUnauthorized,ErrorTypeUnknown,Failed,List,LoftSchemeGroup,LoftSchemeGroupCluster,LoftSchemeGroupStorage,LoftSchemeGroupVersion,LoftSchemeGroupVersionCluster,LoftSchemeGroupVersionStorage,LoftSchemeGroupVersionVirtualCluster,LoftSchemeGroupVirtualCluster,LoftSchemeVersion,LoftSchemeVersionCluster,LoftSchemeVersionStorage,LoftSchemeVersionVirtualCluster,ManagementBasePath,MapErrorCode,NewResource,Ok,ProjectBasePath,Resources,Return,VClusterBasePath,getApiHost,getProjectFromNamespace,getProjectNamespace,isResult});