import m from"js-cookie";import ne from"json-merge-patch";var P={loftAccessKeyIdentifier:"loft_access_key",loftImpersonateSubjectIdentifier:"loft_impersonate_subject",loftImpersonateJoinedGroupIdentifier:"loft_impersonate_joined_group"};function v(a){return a||[]}var D={ManagementV1AgentAuditEvent:{group:"management.loft.sh",version:"v1",resource:"agentauditevents",subResource:"",namespaced:!1,kind:"AgentAuditEvent"},ManagementV1Announcement:{group:"management.loft.sh",version:"v1",resource:"announcements",subResource:"",namespaced:!1,kind:"Announcement"},ManagementV1App:{group:"management.loft.sh",version:"v1",resource:"apps",subResource:"",namespaced:!1,kind:"App"},ManagementV1Cluster:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"",namespaced:!1,kind:"Cluster"},ManagementV1ClusterAccess:{group:"management.loft.sh",version:"v1",resource:"clusteraccesses",subResource:"",namespaced:!1,kind:"ClusterAccess"},ManagementV1ClusterAgentConfig:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"agentconfig",namespaced:!1,kind:"ClusterAgentConfig"},ManagementV1ClusterCharts:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"charts",namespaced:!1,kind:"ClusterCharts"},ManagementV1ClusterConnect:{group:"management.loft.sh",version:"v1",resource:"clusterconnect",subResource:"",namespaced:!1,kind:"ClusterConnect"},ManagementV1ClusterDomain:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"domain",namespaced:!1,kind:"ClusterDomain"},ManagementV1ClusterMemberAccess:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"memberaccess",namespaced:!1,kind:"ClusterMemberAccess"},ManagementV1ClusterMembers:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"members",namespaced:!1,kind:"ClusterMembers"},ManagementV1ClusterReset:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"reset",namespaced:!1,kind:"ClusterReset"},ManagementV1ClusterRoleTemplate:{group:"management.loft.sh",version:"v1",resource:"clusterroletemplates",subResource:"",namespaced:!1,kind:"ClusterRoleTemplate"},ManagementV1ClusterVirtualClusterDefaults:{group:"management.loft.sh",version:"v1",resource:"clusters",subResource:"virtualclusterdefaults",namespaced:!1,kind:"ClusterVirtualClusterDefaults"},ManagementV1Config:{group:"management.loft.sh",version:"v1",resource:"configs",subResource:"",namespaced:!1,kind:"Config"},ManagementV1DevPodWorkspaceInstance:{group:"management.loft.sh",version:"v1",resource:"devpodworkspaceinstances",subResource:"",namespaced:!0,kind:"DevPodWorkspaceInstance"},ManagementV1DevPodWorkspaceTemplate:{group:"management.loft.sh",version:"v1",resource:"devpodworkspacetemplates",subResource:"",namespaced:!1,kind:"DevPodWorkspaceTemplate"},ManagementV1DirectClusterEndpointToken:{group:"management.loft.sh",version:"v1",resource:"directclusterendpointtokens",subResource:"",namespaced:!1,kind:"DirectClusterEndpointToken"},ManagementV1Event:{group:"management.loft.sh",version:"v1",resource:"events",subResource:"",namespaced:!1,kind:"Event"},ManagementV1Feature:{group:"management.loft.sh",version:"v1",resource:"features",subResource:"",namespaced:!1,kind:"Feature"},ManagementV1IngressAuthToken:{group:"management.loft.sh",version:"v1",resource:"ingressauthtokens",subResource:"",namespaced:!1,kind:"IngressAuthToken"},ManagementV1Kiosk:{group:"management.loft.sh",version:"v1",resource:"kiosk",subResource:"",namespaced:!1,kind:"Kiosk"},ManagementV1License:{group:"management.loft.sh",version:"v1",resource:"licenses",subResource:"",namespaced:!1,kind:"License"},ManagementV1LicenseRequest:{group:"management.loft.sh",version:"v1",resource:"licenses",subResource:"request",namespaced:!1,kind:"LicenseRequest"},ManagementV1LicenseToken:{group:"management.loft.sh",version:"v1",resource:"licensetokens",subResource:"",namespaced:!1,kind:"LicenseToken"},ManagementV1LoftUpgrade:{group:"management.loft.sh",version:"v1",resource:"loftupgrades",subResource:"",namespaced:!1,kind:"LoftUpgrade"},ManagementV1OwnedAccessKey:{group:"management.loft.sh",version:"v1",resource:"ownedaccesskeys",subResource:"",namespaced:!1,kind:"OwnedAccessKey"},ManagementV1PolicyViolation:{group:"management.loft.sh",version:"v1",resource:"policyviolations",subResource:"",namespaced:!1,kind:"PolicyViolation"},ManagementV1Project:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"",namespaced:!1,kind:"Project"},ManagementV1ProjectChartInfo:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"chartinfo",namespaced:!1,kind:"ProjectChartInfo"},ManagementV1ProjectCharts:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"charts",namespaced:!1,kind:"ProjectCharts"},ManagementV1ProjectClusters:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"clusters",namespaced:!1,kind:"ProjectClusters"},ManagementV1ProjectImportSpace:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"importspace",namespaced:!1,kind:"ProjectImportSpace"},ManagementV1ProjectImportVirtualCluster:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"importvirtualcluster",namespaced:!1,kind:"ProjectImportVirtualCluster"},ManagementV1ProjectMembers:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"members",namespaced:!1,kind:"ProjectMembers"},ManagementV1ProjectMigrateSpaceInstance:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"migratespaceinstance",namespaced:!1,kind:"ProjectMigrateSpaceInstance"},ManagementV1ProjectMigrateVirtualClusterInstance:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"migratevirtualclusterinstance",namespaced:!1,kind:"ProjectMigrateVirtualClusterInstance"},ManagementV1ProjectSecret:{group:"management.loft.sh",version:"v1",resource:"projectsecrets",subResource:"",namespaced:!0,kind:"ProjectSecret"},ManagementV1ProjectTemplates:{group:"management.loft.sh",version:"v1",resource:"projects",subResource:"templates",namespaced:!1,kind:"ProjectTemplates"},ManagementV1RedirectToken:{group:"management.loft.sh",version:"v1",resource:"redirecttokens",subResource:"",namespaced:!1,kind:"RedirectToken"},ManagementV1ResetAccessKey:{group:"management.loft.sh",version:"v1",resource:"resetaccesskeys",subResource:"",namespaced:!1,kind:"ResetAccessKey"},ManagementV1Runner:{group:"management.loft.sh",version:"v1",resource:"runners",subResource:"",namespaced:!1,kind:"Runner"},ManagementV1RunnerAccessKey:{group:"management.loft.sh",version:"v1",resource:"runners",subResource:"accesskey",namespaced:!1,kind:"RunnerAccessKey"},ManagementV1RunnerConfig:{group:"management.loft.sh",version:"v1",resource:"runners",subResource:"config",namespaced:!1,kind:"RunnerConfig"},ManagementV1Self:{group:"management.loft.sh",version:"v1",resource:"selves",subResource:"",namespaced:!1,kind:"Self"},ManagementV1SelfSubjectAccessReview:{group:"management.loft.sh",version:"v1",resource:"selfsubjectaccessreviews",subResource:"",namespaced:!1,kind:"SelfSubjectAccessReview"},ManagementV1SharedSecret:{group:"management.loft.sh",version:"v1",resource:"sharedsecrets",subResource:"",namespaced:!0,kind:"SharedSecret"},ManagementV1SpaceConstraint:{group:"management.loft.sh",version:"v1",resource:"spaceconstraints",subResource:"",namespaced:!1,kind:"SpaceConstraint"},ManagementV1SpaceInstance:{group:"management.loft.sh",version:"v1",resource:"spaceinstances",subResource:"",namespaced:!0,kind:"SpaceInstance"},ManagementV1SpaceTemplate:{group:"management.loft.sh",version:"v1",resource:"spacetemplates",subResource:"",namespaced:!1,kind:"SpaceTemplate"},ManagementV1SubjectAccessReview:{group:"management.loft.sh",version:"v1",resource:"subjectaccessreviews",subResource:"",namespaced:!1,kind:"SubjectAccessReview"},ManagementV1Task:{group:"management.loft.sh",version:"v1",resource:"tasks",subResource:"",namespaced:!1,kind:"Task"},ManagementV1TaskLog:{group:"management.loft.sh",version:"v1",resource:"tasks",subResource:"log",namespaced:!1,kind:"TaskLog"},ManagementV1Team:{group:"management.loft.sh",version:"v1",resource:"teams",subResource:"",namespaced:!1,kind:"Team"},ManagementV1TeamAccessKeys:{group:"management.loft.sh",version:"v1",resource:"teams",subResource:"accesskeys",namespaced:!1,kind:"TeamAccessKeys"},ManagementV1TeamClusters:{group:"management.loft.sh",version:"v1",resource:"teams",subResource:"clusters",namespaced:!1,kind:"TeamClusters"},ManagementV1User:{group:"management.loft.sh",version:"v1",resource:"users",subResource:"",namespaced:!1,kind:"User"},ManagementV1UserAccessKeys:{group:"management.loft.sh",version:"v1",resource:"users",subResource:"accesskeys",namespaced:!1,kind:"UserAccessKeys"},ManagementV1UserClusters:{group:"management.loft.sh",version:"v1",resource:"users",subResource:"clusters",namespaced:!1,kind:"UserClusters"},ManagementV1UserPermissions:{group:"management.loft.sh",version:"v1",resource:"users",subResource:"permissions",namespaced:!1,kind:"UserPermissions"},ManagementV1UserProfile:{group:"management.loft.sh",version:"v1",resource:"users",subResource:"profile",namespaced:!1,kind:"UserProfile"},ManagementV1VirtualClusterInstance:{group:"management.loft.sh",version:"v1",resource:"virtualclusterinstances",subResource:"",namespaced:!0,kind:"VirtualClusterInstance"},ManagementV1VirtualClusterInstanceKubeConfig:{group:"management.loft.sh",version:"v1",resource:"virtualclusterinstances",subResource:"kubeconfig",namespaced:!0,kind:"VirtualClusterInstanceKubeConfig"},ManagementV1VirtualClusterInstanceLog:{group:"management.loft.sh",version:"v1",resource:"virtualclusterinstances",subResource:"log",namespaced:!0,kind:"VirtualClusterInstanceLog"},ManagementV1VirtualClusterInstanceWorkloadKubeConfig:{group:"management.loft.sh",version:"v1",resource:"virtualclusterinstances",subResource:"workloadkubeconfig",namespaced:!0,kind:"VirtualClusterInstanceWorkloadKubeConfig"},ManagementV1VirtualClusterTemplate:{group:"management.loft.sh",version:"v1",resource:"virtualclustertemplates",subResource:"",namespaced:!1,kind:"VirtualClusterTemplate"}};var q="virtualcluster.loft.sh",F="v1",pe="virtualcluster.loft.sh/v1",f="cluster.loft.sh",h="v1",me="cluster.loft.sh/v1",ge="management.loft.sh",T="v1",Ve="management.loft.sh/v1",de="storage.loft.sh",fe="v1",he="storage.loft.sh/v1",H="apiextensions.k8s.io",W="v1",Re="apiextensions.k8s.io/v1",N=class{};var c={...D,ClusterV1SleepModeConfig:{group:f,version:h,resource:"sleepmodeconfigs",kind:"SleepModeConfig",namespaced:!0},ClusterV1Space:{group:f,version:h,resource:"spaces",kind:"Space"},ClusterV1ClusterQuota:{group:f,version:h,resource:"clusterquotas",kind:"ClusterQuota"},ClusterV1HelmRelease:{group:f,version:h,resource:"helmreleases",kind:"HelmRelease",namespaced:!0},ClusterV1VirtualCluster:{group:f,version:h,resource:"virtualclusters",kind:"VirtualCluster",namespaced:!0},ClusterV1LocalClusterAccess:{group:f,version:h,resource:"localclusteraccesses",kind:"LocalClusterAccess"},ClusterV1ChartInfo:{group:f,version:h,resource:"chartinfos",kind:"ChartInfo"},VirtualclusterV1HelmRelease:{group:q,version:F,resource:"helmreleases",kind:"HelmRelease",namespaced:!0},CustomResourceDefinition:{group:H,version:W,resource:"customresourcedefinitions",kind:"CustomResourceDefinition"},PolicyV1beta1JsPolicy:{group:"policy.jspolicy.com",version:"v1beta1",resource:"jspolicies",kind:"JsPolicy"},PolicyV1beta1JsPolicyViolations:{group:"policy.jspolicy.com",version:"v1beta1",resource:"jspolicyviolations",kind:"JsPolicyViolations"},StorageV1VirtualCluster:{group:"storage.loft.sh",version:T,resource:"virtualclusters",kind:"VirtualCluster",namespaced:!0},StorageV1ClusterQuota:{group:"storage.loft.sh",version:T,resource:"clusterquotas",kind:"ClusterQuota"},StorageV1LocalUser:{group:"storage.loft.sh",version:T,resource:"localusers",kind:"LocalUser"},NetworkingV1beta1Ingress:{group:"networking.k8s.io",version:"v1beta1",resource:"ingresses",kind:"Ingress",namespaced:!0},NetworkingV1Ingress:{group:"networking.k8s.io",version:"v1",resource:"ingresses",kind:"Ingress",namespaced:!0},V1StatefulSet:{group:"apps",version:"v1",resource:"statefulsets",kind:"StatefulSet",namespaced:!0},V1Deployment:{group:"apps",version:"v1",resource:"deployments",kind:"Deployment",namespaced:!0},V1Event:{group:"",version:"v1",resource:"events",kind:"Event",namespaced:!0},V1Pod:{group:"",version:"v1",resource:"pods",kind:"Pod",namespaced:!0},V1Node:{group:"",version:"v1",resource:"nodes",kind:"Node"},V1Namespace:{group:"",version:"v1",resource:"namespaces",kind:"Namespace"},V1SelfSubjectAccessReview:{group:"authorization.k8s.io",version:"v1",resource:"selfsubjectaccessreviews",kind:"SelfSubjectAccessReview"},V1ClusterRole:{group:"rbac.authorization.k8s.io",version:"v1",resource:"clusterroles",kind:"ClusterRole"},V1ClusterRoleBinding:{group:"rbac.authorization.k8s.io",version:"v1",resource:"clusterrolebindings",kind:"ClusterRoleBinding"},V1Role:{group:"rbac.authorization.k8s.io",version:"v1",resource:"roles",kind:"Role",namespaced:!0},V1RoleBinding:{group:"rbac.authorization.k8s.io",version:"v1",resource:"rolebindings",kind:"RoleBinding",namespaced:!0},V1Secret:{group:"",version:"v1",resource:"secrets",kind:"Secret",namespaced:!0},V1ConfigMap:{group:"",version:"v1",resource:"configmaps",kind:"ConfigMap",namespaced:!0},V1Service:{group:"",version:"v1",resource:"services",kind:"Service",namespaced:!0},V1User:{group:"",version:"v1",resource:"users",kind:"User",namespaced:!1},V1StorageClassList:{group:"storage.k8s.io",version:"v1",resource:"storageclasses",kind:"StorageClass",namespaced:!1},V1Beta1PodMetrics:{group:"metrics.k8s.io",version:"v1beta1",resource:"pods",kind:"PodMetrics",namespaced:!0}};function R(a,e,r){return{apiVersion:a.group?a.group+"/"+a.version:a.version,kind:a.kind,metadata:{name:e},...r}}var w=class{constructor(e,r=void 0){this.val=e;this.extra=r;this.ok=!1;this.err=!0}},I=class{constructor(e,r=void 0){this.val=e;this.extra=r;this.ok=!0;this.err=!1}};function Pe(a){return"ok"in a&&typeof a.ok=="boolean"&&"err"in a&&typeof a.err=="boolean"}var O="",L="Network",X="Forbidden",Y="BadRequest",U="NotFound",K="Unauthorized",Z="AlreadyExists",ee="InternalServerError",re="NotImplemented",se="BadGateway",A="ServiceUnavailable",te="GatewayTimeout",C=a=>{switch(a){case 400:return Y;case 401:return K;case 403:return X;case 404:return U;case 409:return Z;case 500:return ee;case 501:return re;case 502:return se;case 503:return A;case 504:return te}return O},o=class{static Ok(){return new I(void 0)}static Value(e){return new I(e)}static Failed(e,r="",s=O,n=void 0){return new w(new E(e,s,r),n)}static Error(e){return new w(e)}static WithExtra(e,r=void 0){return e.extra=r,e}},E=class{constructor(e,r=O,s=""){this.message=e;this.type=r;this.reason=s}};var k={secure:!0,expires:365*10,sameSite:"strict"},V=P.loftAccessKeyIdentifier,b=P.loftImpersonateSubjectIdentifier,S=P.loftImpersonateJoinedGroupIdentifier,oe=["v4.channel.k8s.io","v3.channel.k8s.io","v2.channel.k8s.io","channel.k8s.io"];function B(){return typeof window<"u"&&window.location.href.startsWith("http://localhost:3000")?"https://localhost:9898":""}function ae(){return typeof window>"u"||window.location.host==="localhost:3000"?"wss://localhost:8080":`${window.location.protocol==="https:"?"wss":"ws"}://${window.location.host}`}function J(a){return[a.virtualCluster?"loft:vcluster:main":`loft:space:${a.project}:${a.space}`]}var $="/kubernetes/management",j="/kubernetes/cluster/",_="/kubernetes/virtualcluster/",Q="/kubernetes/project/";function Le(a){return a?"loft-p-"+a:"loft-p-"}function Ue(a){if(a)return a.replace(/^loft-p-/,"")}var y=class{constructor(e,r,s){this.apiHost="";this.wsHost="";this.accessKey="";this.managementNonResource=()=>new l(this,{basePath:$,headers:this.impersonationHeaders()});this.cluster=(e,r)=>new l(this,{basePath:j+e,groupVersionResource:r,headers:this.impersonationHeaders()});this.clusterNonResource=e=>new l(this,{basePath:j+e,headers:this.impersonationHeaders()});this.project=(e,r)=>new l(this,{basePath:Q+e.project+"/"+(e.space?"space/"+e.space:"virtualcluster/"+e.virtualCluster),groupVersionResource:r,project:e,headers:this.impersonationHeaders(J(e))});this.projectNonResource=e=>new l(this,{basePath:Q+e.project+"/"+(e.space?"space/"+e.space:"virtualcluster/"+e.virtualCluster),project:e,headers:this.impersonationHeaders(J(e))});this.apiHost=r||B(),this.wsHost=s||ae(),this.accessKey=e||y.getAccessKey()}static getAccessKey(){return localStorage.getItem(V)}static tryCastToStatus(e){if(e.kind){if(e.kind!=="Status"||e.apiVersion!=="v1")return o.Value(null)}else return o.Value(null);return o.Value(e)}async getUser(){let e=await this.management(c.ManagementV1Self).Create(R(c.ManagementV1Self));return e.err?e:e.val.status?.user?(typeof window<"u"&&(window.loft||(window.loft={}),window.loft.instanceID=e.val.status.instanceID,window.loft.intercomHash=e.val.status.intercomHash,window.loft.user=e.val.status.user),o.Value(e.val.status.user.name)):o.Failed("no user found")}getAccessKey(){return this.accessKey}async loftVersion(e){try{let r=B()+"/version";e&&(r+="?refresh=true");let n=await(await fetch(r)).json();return o.Value(n)}catch(r){return console.error(r),o.Failed("error during version retrieval")}}impersonatedUser(){try{let e=localStorage.getItem(b);if(e)return JSON.parse(e)}catch(e){console.error(e)}}impersonate(e,r,s){r?(localStorage.setItem(b,JSON.stringify({name:e,subject:r,groups:s})),r&&m.set(b,r,k),s?.forEach(n=>{let t=m.get(S);t?(t+=", "+n,m.set(S,t,k)):m.set(S,n,k)})):(localStorage.removeItem(b),m.remove(b),m.remove(S))}async login(e,r){let s=await this.request("/auth/password/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:r})});if(s.err)return s;let n=s.val;return this.setAccessKey(n.accessKey),o.Ok()}async loginWithAccessKey(e){this.isLoggedIn()&&await this.logout(),this.accessKey=e;let r=await this.management(c.ManagementV1Self).Create(R(c.ManagementV1Self));return r.err?(this.clearStorage(),r):(this.setAccessKey(e),o.Ok())}isLoggedIn(){return!!this.accessKey}setAccessKey(e){this.accessKey=e,localStorage.setItem(V,e),m.set(V,e,k)}async stream(e,r){try{let s=await fetch(this.apiHost+e,r);return s.status>=400||!s.body?await this.parseResponse(e,s):o.Value(s.body.getReader())}catch(s){return o.Failed(s+"","NetworkError",L)}}async request(e,r){try{let s=await fetch(this.apiHost+e,{...r,credentials:"same-origin"});return await this.parseResponse(e,s)}catch(s){return o.Failed(s+"","NetworkError",L)}}async socket(e,r){return this.refreshCookie(),new Promise((s,n)=>{let t=new WebSocket(`${this.wsHost}${e}`,r),u=!1;t.onopen=()=>{u=!0,s(t)},t.onerror=i=>{if(!u){let p=m.get(V)!="";n(p?i:new Error("Web socket is not authenticated. Please log in again"))}}})}async parseResponse(e,r){let s=await r.text(),n;try{n=JSON.parse(s)}catch{if(r.status===404)return o.Failed("page not found","NotFound",U);if(r.status===503){if(e.includes("kiosk.sh")||e.includes("cluster.loft.sh")){let i=e.split("/");return i.length>=4&&i[0]===""&&i[1]==="kubernetes"&&i[2]==="cluster"?o.Failed(`Agent seems to be currently unavailable, it is maybe just starting up. Click <a href="/spaces/${i[3]}/loft">here</a> for more information</span>`,"LoftAgentUnavailable",A):o.Failed("Agent seems to be currently unavailable, it is maybe just starting up","LoftAgentUnavailable",A)}}else if(r.status===200)return o.Value(s);return console.info("Unexpected Server Response",s),o.Failed("Unexpected server response",C(r.status),C(r.status))}let t=y.tryCastToStatus(n);return t.err?t:t.val!==null&&t.val.status==="Failure"?t.val.code===500&&(t.val.message?.indexOf("vcluster secret not found")!==-1||t.val.message.indexOf("no ready pod for virtual cluster")!==-1)?o.Failed("vcluster seems to be not ready. Please refresh in a second",t.val.reason,C(t.val.code)):o.Failed(t.val.message,t.val.reason,C(t.val.code)):r.status>=400?o.Failed("unknown error","Unknown",C(r.status)):o.Value(n)}management(e){return new l(this,{basePath:$,groupVersionResource:e,headers:this.impersonationHeaders()})}vCluster(e,r){return new l(this,{basePath:_+e.cluster+"/"+e.namespace+"/"+e.name,groupVersionResource:r,vCluster:e,headers:this.impersonationHeaders()})}vClusterNonResource(e){return new l(this,{basePath:_+e.cluster+"/"+e.namespace+"/"+e.name,vCluster:e,headers:this.impersonationHeaders()})}auto(e,r,s,n){return s?this.project(s,n):r?this.vCluster(r,n):e?this.cluster(e,n):this.management(n)}autoNonResource(e,r,s){return s?this.projectNonResource(s):r?this.vClusterNonResource(r):e?this.clusterNonResource(e):this.managementNonResource()}async doRawSocket(e,r){try{return o.Value(await this.socket(e,r))}catch(s){return console.error(s),o.Failed(s.message||JSON.stringify(s))}}async doRawStream(e,r,s){return this.doRawInternal(e,r,s,!0)}async doRaw(e,r,s){return this.doRawInternal(e,r,s)}async doRawInternal(e,r,s,n){let t=this.accessKey,u=t?new Headers({...s,Authorization:"bearer "+t,"X-Sleep-Mode-Ignore":"true"}):new Headers({...s,"X-Sleep-Mode-Ignore":"true"}),i=n?await this.stream(e,{...r,headers:u}):await this.request(e,{...r,headers:u});return i.err&&i.val.type===K&&(i.val.message==="Access key not found. Please login again"||i.val.message==="invalid bearer token")&&(this.clearStorage(),typeof window<"u"&&(window.location.href="/"),await new Promise(()=>{})),i}impersonationHeaders(e){let r=this.impersonatedUser(),s={};return r&&(r.subject&&(s["Impersonate-User"]=r.subject),[...v(r.groups),...v(e)].forEach(n=>{s["Impersonate-Joined-Group"]?s["Impersonate-Joined-Group"]+=", "+n:s["Impersonate-Joined-Group"]=n})),s}clearStorage(){this.accessKey=null,localStorage.removeItem(V),localStorage.removeItem(b),m.remove(V,{secure:!0}),m.remove(b,{secure:!0}),m.remove(S,{secure:!0})}refreshCookie(){let e=this.accessKey||localStorage.getItem(V),r=m.get(V);e&&e!=r&&m.set(V,e,k)}async logout(){let e=await this.management(c.ManagementV1Self).Create(R(c.ManagementV1Self));if(e.err)return this.clearStorage(),e;if(!e.val.status?.accessKey)return this.clearStorage(),o.Ok();let r=await this.management(c.ManagementV1OwnedAccessKey).Delete(e.val.status.accessKey);return r.err?(this.clearStorage(),r):(this.clearStorage(),o.Ok())}},l=class{constructor(e,r){this.client=e,this.options=r}Name(e){return new l(this.client,{...this.options,name:e})}Namespace(e){return e?new l(this.client,{...this.options,namespace:e}):new l(this.client,{...this.options})}Resource(e){return new l(this.client,{...this.options,groupVersionResource:e})}buildPath(e){if(this.options.groupVersionResource)if(this.options.basePath){if(!this.options.name&&this.options.groupVersionResource.subResource)return o.Failed("resource name required when subresource is used")}else return o.Failed("basePath is missing");else return o.Failed("groupVersionResource is missing");let r=[this.options.basePath];this.options.groupVersionResource.group?r.push("apis",this.options.groupVersionResource.group):r.push("api"),r.push(this.options.groupVersionResource.version),this.options.namespace&&r.push("namespaces",this.options.namespace),r.push(this.options.groupVersionResource.resource),this.options.name&&r.push(this.options.name),this.options.groupVersionResource.subResource&&r.push(this.options.groupVersionResource.subResource);let s="";if(e){let n=[];for(let t of Object.keys(e))e[t]&&(Array.isArray(e[t])?e[t].forEach(u=>{n.push(t+"="+encodeURIComponent(u))}):n.push(t+"="+encodeURIComponent(e[t])));n.length>0&&(s="?"+n.join("&"))}else s="?timeout=180s";return o.Value(r.join("/")+s)}parseResourceList(e,r,s,n,t,u){for(let i=0;i<v(s.resources).length;i++){let p=s.resources[i];if(p===void 0)continue;let g=p.name.split("/"),d=g[0]??"";!u&&g.length>1||t&&n.find(M=>M.group===e&&M.resource===d)||n.push({resource:d,subResource:g.length>1?g[1]:void 0,group:e,version:r,kind:p.kind,namespaced:p.namespaced,verbs:p.verbs})}}async ApiResources(e,r){let s=[],n=await this.client.doRaw([this.options.basePath,"api"].join("/"));if(n.err)return n;let t=[];for(let i=0;i<v(n.val.versions).length;i++)t.push((async p=>{let g=n.val.versions[p];if(g===void 0)return;let d=await this.client.doRaw([this.options.basePath,"api",g].join("/"));if(d.err){console.error(d.val.message);return}this.parseResourceList("",g,d.val,s,e,r)})(i)),t.length>20&&(await Promise.all(t),t=[]);t.length>0&&(await Promise.all(t),t=[]);let u=await this.client.doRaw([this.options.basePath,"apis"].join("/"));if(u.err)return u;for(let i=0;i<v(u.val.groups).length;i++){let p=u.val.groups[i];if(p!==void 0)for(let g=0;g<v(p.versions).length;g++)t.push((async(d,M)=>{let G=M.versions[d];if(G===void 0)return;let x=await this.client.doRaw([this.options.basePath,"apis",M.name,G.version].join("/"));if(x.err){console.error(x.val.message);return}this.parseResourceList(M.name,G.version,x.val,s,e,r)})(g,p)),t.length>20&&(await Promise.all(t),t=[])}return t.length>0&&await Promise.all(t),o.Value(s)}async Version(){let e=[this.options.basePath,"version"];return await this.client.doRaw(e.join("/"))}async VirtualClusterInstanceLogs(e,r,s){let n=[this.options.basePath,`apis/management.loft.sh/v1/namespaces/${e}/virtualclusterinstances/${r}/log`].join("/"),t=[];if(s)for(let u of Object.keys(s))t.push(`${u}=${encodeURIComponent(s[u])}`);return t.length>0&&(n+="?"+t.join("&")),await this.client.doRawStream(n,void 0,this.options.headers)}async TaskLogs(e,r){let s=[this.options.basePath,`apis/management.loft.sh/v1/tasks/${e}/log`].join("/"),n=[];if(r)for(let t of Object.keys(r))n.push(`${t}=${encodeURIComponent(r[t])}`);return n.length>0&&(s+="?"+n.join("&")),await this.client.doRawStream(s,void 0,this.options.headers)}async Logs(e,r,s){let n=[this.options.basePath,`api/v1/namespaces/${e}/pods/${r}/log`].join("/"),t=z(s);return t.length>0&&(n+="?"+t),await this.client.doRawStream(n,void 0,this.options.headers)}async Exec(e,r,s){let n=[this.options.basePath,`api/v1/namespaces/${e}/pods/${r}/exec`].join("/"),t=z(s);return t.length>0&&(n+="?"+t),await this.client.doRawSocket(n,oe)}async Path(e,r,s){let n=[this.options.basePath,e];return await this.client.doRaw(n.join("/"),r,{...s,...this.options.headers})}ResolvePath(e){return e&&(this.options.name=e),this.buildPath()}async Get(e,r){this.options.name=e;let s=this.buildPath(r);return s.err?s:o.WithExtra(await this.client.doRaw(s.val,void 0,this.options.headers),this.options)}async List(e){if(this.options.name)return o.Failed("name is set on a list request");let r=this.buildPath(e);return r.err?r:o.WithExtra(await this.client.doRaw(r.val,void 0,this.options.headers),this.options)}async ListTable(e){if(this.options.name)return o.Failed("name is set on a list request");let r=this.buildPath(e);return r.err?r:o.WithExtra(await this.client.doRaw(r.val,void 0,{...this.options.headers,Accept:"application/json;as=Table;v=v1;g=meta.k8s.io,application/json;as=Table;v=v1beta1;g=meta.k8s.io,application/json"}),this.options)}async Create(e,r){let s=this.buildPath(r);return s.err?s:o.WithExtra(await this.client.doRaw(s.val,{method:"POST",body:JSON.stringify(e)},{...this.options.headers,"Content-Type":"application/json"}),this.options)}async PatchObject(e,r,s,n){let t=ne.generate(e,r);return this.Patch(r.metadata?.name,t,s,n)}async Patch(e,r,s,n){this.options.name=e;let t=this.buildPath(n);return t.err?t:o.WithExtra(await this.client.doRaw(t.val,{method:"PATCH",body:JSON.stringify(r,function(u,i){return i===void 0?null:i})},{...this.options.headers,"Content-Type":s||"application/merge-patch+json"}),this.options)}async Update(e,r,s){this.options.name=e;let n=this.buildPath(s);return n.err?n:o.WithExtra(await this.client.doRaw(n.val,{method:"PUT",body:JSON.stringify(r)},{...this.options.headers,"Content-Type":"application/json"}),this.options)}async Delete(e,r){this.options.name=e;let s=this.buildPath(r);return s.err?s:o.WithExtra(await this.client.doRaw(s.val,{method:"DELETE"},this.options.headers),this.options)}async CanI(e){let r=this.options.groupVersionResource,s=this.options.basePath?.indexOf(j)===0?this.options.basePath.substring(j.length):void 0,n,t;this.options.project?(n=this.client.project(this.options.project,c.V1SelfSubjectAccessReview),t=R(c.V1SelfSubjectAccessReview)):this.options.vCluster?(n=this.client.vCluster(this.options.vCluster,c.V1SelfSubjectAccessReview),t=R(c.V1SelfSubjectAccessReview)):s?(n=this.client.cluster(s,c.V1SelfSubjectAccessReview),t=R(c.V1SelfSubjectAccessReview)):(n=this.client.management(c.ManagementV1SelfSubjectAccessReview),t=R(c.ManagementV1SelfSubjectAccessReview)),t.spec={resourceAttributes:{verb:e,name:this.options.name,namespace:this.options.namespace,group:r.group,version:r.version,resource:r.resource,subresource:r.subResource}};let u=await n.Create(t);return u.err?u:o.Value(!!(u.val.status?.allowed&&!u.val.status.denied))}};function z(a){let e=new URLSearchParams;for(let[r,s]of Object.entries(a))Array.isArray(s)?s.forEach(n=>{e.append(r,n)}):e.append(r,s);return e.toString()}var ie=y;export{H as APIExtensionsGroup,Re as APIExtensionsGroupVersion,W as APIExtensionsVersion,ie as Client,j as ClusterBasePath,w as Err,Z as ErrorTypeAlreadyExists,se as ErrorTypeBadGateway,Y as ErrorTypeBadRequest,X as ErrorTypeForbidden,te as ErrorTypeGatewayTimeout,ee as ErrorTypeInternalError,L as ErrorTypeNetwork,U as ErrorTypeNotFound,re as ErrorTypeNotImplemented,A as ErrorTypeServiceUnavailable,K as ErrorTypeUnauthorized,O as ErrorTypeUnknown,E as Failed,N as List,ge as LoftSchemeGroup,f as LoftSchemeGroupCluster,de as LoftSchemeGroupStorage,Ve as LoftSchemeGroupVersion,me as LoftSchemeGroupVersionCluster,he as LoftSchemeGroupVersionStorage,pe as LoftSchemeGroupVersionVirtualCluster,q as LoftSchemeGroupVirtualCluster,T as LoftSchemeVersion,h as LoftSchemeVersionCluster,fe as LoftSchemeVersionStorage,F as LoftSchemeVersionVirtualCluster,$ as ManagementBasePath,C as MapErrorCode,R as NewResource,I as Ok,Q as ProjectBasePath,c as Resources,o as Return,_ as VClusterBasePath,B as getApiHost,Ue as getProjectFromNamespace,Le as getProjectNamespace,Pe as isResult};