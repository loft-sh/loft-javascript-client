/// <reference types="node" />

import { CoreV1Event, V1ClusterRole, V1ClusterRoleBinding, V1ConfigMap, V1CustomResourceDefinition, V1Deployment, V1Ingress, V1Namespace, V1Node, V1Pod, V1Role, V1RoleBinding, V1Secret, V1SelfSubjectAccessReview, V1Service, V1StatefulSet, V1Status, V1StorageClassList, VersionInfo } from '@kubernetes/client-node';

export declare class Err<E, Extra = any> {
	readonly val: E;
	extra: Extra | undefined;
	readonly ok = false;
	readonly err = true;
	constructor(val: E, extra?: Extra | undefined);
}
export declare class Ok<T, Extra = any> {
	readonly val: T;
	extra: Extra | undefined;
	readonly ok = true;
	readonly err = false;
	constructor(val: T, extra?: Extra | undefined);
}
export type ResultError<Extra = any> = Ok<undefined, Extra> | Err<Failed, Extra>;
export type Result<T> = Ok<T> | Err<Failed>;
export declare function isResult<T>(arg: object): arg is Result<T>;
export type ErrorType = string;
export declare const ErrorTypeUnknown: ErrorType;
export declare const ErrorTypeNetwork: ErrorType;
export declare const ErrorTypeForbidden: ErrorType;
export declare const ErrorTypeBadRequest: ErrorType;
export declare const ErrorTypeNotFound: ErrorType;
export declare const ErrorTypeUnauthorized: ErrorType;
export declare const ErrorTypeAlreadyExists: ErrorType;
export declare const ErrorTypeInternalError: ErrorType;
export declare const ErrorTypeNotImplemented: ErrorType;
export declare const ErrorTypeBadGateway: ErrorType;
export declare const ErrorTypeServiceUnavailable: ErrorType;
export declare const ErrorTypeGatewayTimeout: ErrorType;
export declare const MapErrorCode: (code: number) => ErrorType;
export declare class Return {
	static Ok(): Ok<undefined, any>;
	static Value<E>(val: E): Ok<E, any>;
	static Failed(message: string, reason?: string, type?: ErrorType, extra?: any): Err<Failed, any>;
	static Error<E>(val: E): Err<E>;
	static WithExtra<T, K = any>(result: Result<T>, extra?: K | undefined): Result<T>;
}
export declare class Failed {
	readonly message: string;
	readonly type: ErrorType;
	readonly reason: string;
	constructor(message: string, type?: ErrorType, reason?: string);
}
declare class V1ManagedFieldsEntry {
	/**
	* APIVersion defines the version of this resource that this field set applies to. The format is \"group/version\" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
	*/
	"apiVersion"?: string;
	/**
	* FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: \"FieldsV1\"
	*/
	"fieldsType"?: string;
	/**
	* FieldsV1 holds the first JSON version format as described in the \"FieldsV1\" type.
	*/
	"fieldsV1"?: any;
	/**
	* Manager is an identifier of the workflow managing these fields.
	*/
	"manager"?: string;
	/**
	* Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are \'Apply\' and \'Update\'.
	*/
	"operation"?: string;
	/**
	* Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
	*/
	"subresource"?: string;
	/**
	* Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
	*/
	"time"?: Date;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1OwnerReference {
	/**
	* API version of the referent.
	*/
	"apiVersion": string;
	/**
	* If true, AND if the owner has the \"foregroundDeletion\" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs \"delete\" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
	*/
	"blockOwnerDeletion"?: boolean;
	/**
	* If true, this reference points to the managing controller.
	*/
	"controller"?: boolean;
	/**
	* Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind": string;
	/**
	* Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
	*/
	"name": string;
	/**
	* UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
	*/
	"uid": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ObjectMeta {
	/**
	* Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
	*/
	"annotations"?: {
		[key: string]: string;
	};
	/**
	* CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.  Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	*/
	"creationTimestamp"?: Date;
	/**
	* Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
	*/
	"deletionGracePeriodSeconds"?: number;
	/**
	* DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.  Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	*/
	"deletionTimestamp"?: Date;
	/**
	* Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
	*/
	"finalizers"?: Array<string>;
	/**
	* GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.  If this field is specified and the generated name exists, the server will return a 409.  Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
	*/
	"generateName"?: string;
	/**
	* A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
	*/
	"generation"?: number;
	/**
	* Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
	*/
	"labels"?: {
		[key: string]: string;
	};
	/**
	* ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn\'t need to set or understand this field. A workflow can be the user\'s name, a controller\'s name, or the name of a specific apply path like \"ci-cd\". The set of fields is always in the version that the workflow used when modifying the object.
	*/
	"managedFields"?: Array<V1ManagedFieldsEntry>;
	/**
	* Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
	*/
	"name"?: string;
	/**
	* Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the \"default\" namespace, but \"default\" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.  Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
	*/
	"namespace"?: string;
	/**
	* List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
	*/
	"ownerReferences"?: Array<V1OwnerReference>;
	/**
	* An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.  Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
	*/
	"resourceVersion"?: string;
	/**
	* Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
	*/
	"selfLink"?: string;
	/**
	* UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.  Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
	*/
	"uid"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
export interface V1Beta1PodMetrics {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	metadata?: V1ObjectMeta;
	timestamp?: Date;
	window?: string;
	containers?: V1Beta1PodMetricsContainer[];
}
export interface V1Beta1PodMetricsContainer {
	name?: string;
	usage?: {
		cpu?: string;
		memory?: string;
	};
}
export interface V1Table {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	metadata?: V1ObjectMeta;
	columnDefinitions?: Array<V1TableColumnDefinition>;
	rows?: Array<V1TableRow>;
}
export interface V1TableColumnDefinition {
	name?: string;
	type?: string;
	format?: string;
	description?: string;
	priority?: number;
}
export interface V1TableRow {
	cells?: Array<string | number>;
	object?: V1PartialObjectMetadata;
}
export interface V1PartialObjectMetadata {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	metadata?: V1ObjectMeta;
}
export interface V1Token {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	metadata?: V1ObjectMeta;
	token?: string;
}
export interface V1AccessKey {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	metadata?: V1ObjectMeta;
	user?: string;
	accessKey?: string;
}
export interface V1Info {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	metadata?: V1ObjectMeta;
	methods?: V1InfoMethods;
}
export interface V1InfoMethods {
	sso?: V1InfoMethodsSSO[];
	password?: V1InfoMethodsPassword;
	rancher?: V1InfoMethodsRancher;
}
export interface V1InfoMethodsSSO {
	id?: string;
	displayName?: string;
	loginEndpoint?: string;
	logoutEndpoint?: string;
}
export interface V1InfoMethodsPassword {
	enabled?: boolean;
}
export interface V1InfoMethodsRancher {
	enabled?: boolean;
	host?: string;
}
export interface V1OIDCRedirect {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	redirect?: string;
	samlId?: string;
	samlData?: string;
}
export interface V1OIDCToken {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	idToken?: string;
	accessToken?: string;
	refreshToken?: string;
}
export interface V1ClientIDInfo {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	name?: string;
	clientId?: string;
}
export interface V1Code {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	code?: string;
}
export interface VersionV1Version {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	version?: string;
	major?: string;
	minor?: string;
	instance?: string;
	kubeVersion?: string;
	newerVersion?: string;
	shouldUpgrade?: boolean;
}
export interface Unstructured {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	metadata?: V1ObjectMeta;
	[key: string]: any;
}
export declare const LoftSchemeGroupVirtualCluster = "virtualcluster.loft.sh";
export declare const LoftSchemeVersionVirtualCluster = "v1";
export declare const LoftSchemeGroupVersionVirtualCluster = "virtualcluster.loft.sh/v1";
export declare const LoftSchemeGroupCluster = "cluster.loft.sh";
export declare const LoftSchemeVersionCluster = "v1";
export declare const LoftSchemeGroupVersionCluster = "cluster.loft.sh/v1";
export declare const LoftSchemeGroup = "management.loft.sh";
export declare const LoftSchemeVersion = "v1";
export declare const LoftSchemeGroupVersion = "management.loft.sh/v1";
export declare const LoftSchemeGroupStorage = "storage.loft.sh";
export declare const LoftSchemeVersionStorage = "v1";
export declare const LoftSchemeGroupVersionStorage = "storage.loft.sh/v1";
export declare const APIExtensionsGroup = "apiextensions.k8s.io";
export declare const APIExtensionsVersion = "v1";
export declare const APIExtensionsGroupVersion = "apiextensions.k8s.io/v1";
export type AsyncVoidFunction = () => Promise<void>;
export type DeepNullable<T> = {
	[K in keyof T]: T[K] extends object ? DeepNullable<T[K]> | undefined : T[K] | undefined;
};
export interface GetOptions {
	pretty?: string;
	extended?: string;
}
export interface ListOptions {
	pretty?: string;
	labelSelector?: string;
	fieldSelector?: string;
	limit?: string;
	timeoutSeconds?: string;
	extended?: string;
}
export interface CreateOptions {
	pretty?: string;
	dryRun?: string;
}
export interface UpdateOptions {
	pretty?: string;
	dryRun?: string;
}
export interface PatchOptions {
	pretty?: string;
	dryRun?: string;
	force?: "true" | "false";
}
export interface DeleteOptions {
	pretty?: string;
	dryRun?: string;
	gracePeriodSeconds?: string;
	propagationPolicy?: "Orphan" | "Background" | "Foreground";
}
export interface RequestOptions<T> {
	name?: string;
	namespace?: string;
	vCluster?: RequestOptionsVCluster;
	project?: RequestOptionsProject;
	basePath?: string;
	groupVersionResource?: GroupVersionResource<T>;
	headers?: {
		[name: string]: string;
	};
}
export interface RequestOptionsProject {
	project: string;
	space?: string;
	virtualCluster?: string;
	devPodWorkspace?: string;
}
export interface RequestOptionsVCluster {
	cluster: string;
	namespace: string;
	name: string;
}
export interface GroupVersionResource<_T> {
	namespaced?: boolean;
	resource: string;
	subResource?: string;
	group: string;
	version: string;
	kind: string;
	verbs?: string[];
}
export interface LogOptions {
	container?: string;
	follow?: boolean;
	insecureSkipTLSVerifyBackend?: boolean;
	limitBytes?: number;
	pretty?: boolean;
	previous?: boolean;
	sinceSeconds?: number;
	tailLines?: number;
	timestamps?: boolean;
}
export interface ExecOptions {
	container?: string;
	command?: string | string[];
	stdout?: boolean;
	stderr?: boolean;
	stdin?: boolean;
	tty?: boolean;
}
export interface Metadata {
	name?: string;
	/**
	 * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
	 */
	_continue?: string;
	/**
	 * remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
	 */
	remainingItemCount?: number;
	/**
	 * String that identifies the server\'s internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
	 */
	resourceVersion?: string;
	/**
	 * selfLink is a URL representing this object. Populated by the system. Read-only.  DEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.
	 */
	selfLink?: string;
}
export declare class List<T> {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	"apiVersion"?: string;
	"items": Array<T>;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	"kind"?: string;
	"metadata"?: Metadata;
}
export declare function getApiHost(): string;
export interface AuthInfo {
	username: string;
	kubeUser: string;
}
export type RequestVerb = "create" | "get" | "watch" | "list" | "update" | "patch" | "delete" | "deletecollection" | "impersonate" | "bind";
export declare const ManagementBasePath = "/kubernetes/management";
export declare const ClusterBasePath = "/kubernetes/cluster/";
export declare const VClusterBasePath = "/kubernetes/virtualcluster/";
export declare const ProjectBasePath = "/kubernetes/project/";
export declare function getProjectNamespace(name: string | undefined, prefix?: string | undefined): string;
export declare function getProjectFromNamespace(namespace: string | undefined, prefix?: string): string | undefined;
export declare class Client {
	static getAccessKey(): string | null;
	static tryCastToStatus(obj: any): Result<V1Status | null>;
	private readonly apiHost;
	private readonly wsHost;
	private accessKey;
	constructor(accessKey?: string, apiHost?: string, wsHost?: string);
	getUser(): Promise<Result<string>>;
	getAccessKey(): string | null;
	loftVersion(refresh?: boolean): Promise<Result<VersionV1Version>>;
	impersonatedUser(): {
		name: string;
		subject: string;
		groups: string[];
	} | undefined;
	impersonate(name?: string, subject?: string, groups?: string[]): void;
	login(username: string, password: string): Promise<ResultError>;
	loginWithAccessKey(accessKey: string): Promise<ResultError>;
	isLoggedIn(): boolean;
	private setAccessKey;
	stream(path: string, init?: RequestInit): Promise<Result<ReadableStreamDefaultReader<Uint8Array>>>;
	request<E>(path: string, init?: RequestInit): Promise<Result<E>>;
	socket(path: string, protocols: string[] | string | undefined): Promise<WebSocket>;
	private parseResponse;
	management<T>(groupVersionResource: GroupVersionResource<T>): Request<T>;
	managementNonResource: <T>() => Request<T>;
	cluster: <T>(name: string, groupVersionResource: GroupVersionResource<T>) => Request<T>;
	clusterNonResource: <T>(name: string) => Request<T>;
	project: <T>(project: RequestOptionsProject, groupVersionResource: GroupVersionResource<T>) => Request<T>;
	projectNonResource: <T>(project: RequestOptionsProject) => Request<T>;
	vCluster<T>(vCluster: RequestOptionsVCluster, groupVersionResource: GroupVersionResource<T>): Request<T>;
	vClusterNonResource<T>(vCluster: RequestOptionsVCluster): Request<T>;
	auto<T>(cluster: string | undefined, vCluster: RequestOptionsVCluster | undefined, project: RequestOptionsProject | undefined, groupVersionResource: GroupVersionResource<T>): Request<T>;
	autoNonResource(cluster: string | undefined, vCluster: RequestOptionsVCluster | undefined, project: RequestOptionsProject | undefined): Request<unknown>;
	doRawSocket(path: string, protocols?: string[]): Promise<Result<WebSocket>>;
	doRawStream(path: string, init?: RequestInit, headers?: Record<string, string>): Promise<Result<ReadableStreamDefaultReader<Uint8Array>>>;
	doRaw<E>(path: string, init?: RequestInit, headers?: Record<string, string>): Promise<Result<E>>;
	private doRawInternal;
	private impersonationHeaders;
	private clearStorage;
	private refreshCookie;
	logout(): Promise<ResultError>;
}
declare class Request<T> {
	private readonly client;
	private readonly options;
	constructor(client: Client, options: RequestOptions<T>);
	Name(name: string): Request<T>;
	Namespace(namespace?: string): Request<T>;
	Resource(groupVersionResource: GroupVersionResource<T>): Request<T>;
	private buildPath;
	private parseResourceList;
	ApiResources(removeDuplicates?: boolean, includeSubResources?: boolean): Promise<Result<Array<GroupVersionResource<Unstructured>>>>;
	Version(): Promise<Result<VersionInfo>>;
	VirtualClusterInstanceLogs(namespace: string, instance: string, options?: LogOptions): Promise<Result<ReadableStreamDefaultReader<Uint8Array>>>;
	TaskLogs(task: string, options?: LogOptions): Promise<Result<ReadableStreamDefaultReader<Uint8Array>>>;
	Logs(namespace: string, pod: string, options?: LogOptions): Promise<Result<ReadableStreamDefaultReader<Uint8Array>>>;
	Exec(namespace: string, pod: string, options?: ExecOptions): Promise<Result<WebSocket>>;
	Path(path: string, init?: RequestInit, headers?: Record<string, string>): Promise<Result<T>>;
	ResolvePath(name?: string): Result<string>;
	Get(name: string, options?: GetOptions): Promise<Result<T>>;
	List(options?: ListOptions): Promise<Result<List<T>>>;
	ListTable(options?: ListOptions): Promise<Result<V1Table | List<T>>>;
	Create(obj: T, options?: CreateOptions): Promise<Result<T>>;
	PatchObject<O extends object>(before: O, after: O, patchType?: string, options?: PatchOptions): Promise<Result<T>>;
	Patch(name: string, patch: any, patchType?: string, options?: PatchOptions): Promise<Result<T>>;
	Update(name: string, obj: T, options?: UpdateOptions): Promise<Result<T>>;
	Delete(name: string, options?: DeleteOptions): Promise<Result<T>>;
	CanI(verb: RequestVerb): Promise<Result<boolean>>;
}
declare class V1ScopedResourceSelectorRequirement {
	/**
	* Represents a scope\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.  Possible enum values:  - `\"DoesNotExist\"`  - `\"Exists\"`  - `\"In\"`  - `\"NotIn\"`
	*/
	"operator": V1ScopedResourceSelectorRequirementOperatorEnum;
	/**
	* The name of the scope that the selector applies to.  Possible enum values:  - `\"BestEffort\"` Match all pod objects that have best effort quality of service  - `\"CrossNamespacePodAffinity\"` Match all pod objects that have cross-namespace pod (anti)affinity mentioned.  - `\"NotBestEffort\"` Match all pod objects that do not have best effort quality of service  - `\"NotTerminating\"` Match all pod objects where spec.activeDeadlineSeconds is nil  - `\"PriorityClass\"` Match all pod objects that have priority class mentioned  - `\"Terminating\"` Match all pod objects where spec.activeDeadlineSeconds >=0
	*/
	"scopeName": V1ScopedResourceSelectorRequirementScopeNameEnum;
	/**
	* An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
	*/
	"values"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1ScopedResourceSelectorRequirementOperatorEnum {
	DoesNotExist = "DoesNotExist",
	Exists = "Exists",
	In = "In",
	NotIn = "NotIn"
}
declare enum V1ScopedResourceSelectorRequirementScopeNameEnum {
	BestEffort = "BestEffort",
	CrossNamespacePodAffinity = "CrossNamespacePodAffinity",
	NotBestEffort = "NotBestEffort",
	NotTerminating = "NotTerminating",
	PriorityClass = "PriorityClass",
	Terminating = "Terminating"
}
declare class V1ScopeSelector {
	/**
	* A list of scope selector requirements by scope of the resources.
	*/
	"matchExpressions"?: Array<V1ScopedResourceSelectorRequirement>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ResourceQuotaSpec {
	/**
	* hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
	*/
	"hard"?: {
		[key: string]: string;
	};
	"scopeSelector"?: V1ScopeSelector;
	/**
	* A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
	*/
	"scopes"?: Array<V1ResourceQuotaSpecScopesEnum>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1ResourceQuotaSpecScopesEnum {
	BestEffort = "BestEffort",
	CrossNamespacePodAffinity = "CrossNamespacePodAffinity",
	NotBestEffort = "NotBestEffort",
	NotTerminating = "NotTerminating",
	PriorityClass = "PriorityClass",
	Terminating = "Terminating"
}
declare class StorageV1ClusterQuotaSpec {
	/**
	* Project is the project that this cluster quota should apply to
	*/
	"project"?: string;
	"quota"?: V1ResourceQuotaSpec;
	/**
	* Team is the name of the team this quota should apply to
	*/
	"team"?: string;
	/**
	* User is the name of the user this quota should apply to
	*/
	"user"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ResourceQuotaStatus {
	/**
	* Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
	*/
	"hard"?: {
		[key: string]: string;
	};
	/**
	* Used is the current observed total usage of the resource in the namespace.
	*/
	"used"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ClusterQuotaStatusByNamespace {
	/**
	* Namespace of the account this account quota applies to
	*/
	"namespace": string;
	"status"?: V1ResourceQuotaStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ClusterQuotaStatus {
	/**
	* Namespaces slices the usage by project.  This division allows for quick resolution of deletion reconciliation inside of a single project without requiring a recalculation across all projects.  This can be used to pull the deltas for a given project.
	*/
	"namespaces"?: Array<StorageV1ClusterQuotaStatusByNamespace>;
	"total"?: V1ResourceQuotaStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ClusterQuota {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: StorageV1ClusterQuotaSpec;
	"status"?: StorageV1ClusterQuotaStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1ProjectSecretRef {
	/**
	* Key of the project secret to use.
	*/
	"key"?: string;
	/**
	* Name of the project secret to use.
	*/
	"name"?: string;
	/**
	* Project is the project name where the secret is located in.
	*/
	"project"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1ChartSecretRef {
	"projectSecretRef"?: ClusterV1ProjectSecretRef;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1Chart {
	/**
	* If tls certificate checks for the chart download should be skipped
	*/
	"insecureSkipTlsVerify"?: boolean;
	/**
	* Name is the chart name in the repository
	*/
	"name"?: string;
	/**
	* The password that is required for this repository
	*/
	"password"?: string;
	"passwordRef"?: ClusterV1ChartSecretRef;
	/**
	* RepoURL is the repo url where the chart can be found
	*/
	"repoURL"?: string;
	/**
	* The username that is required for this repository
	*/
	"username"?: string;
	"usernameRef"?: ClusterV1ChartSecretRef;
	/**
	* Version is the chart version in the repository
	*/
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1ChartInfoSpec {
	"chart"?: ClusterV1Chart;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1Maintainer {
	/**
	* Email is an optional email address to contact the named maintainer
	*/
	"email"?: string;
	/**
	* Name is a user name or organization name
	*/
	"name"?: string;
	/**
	* URL is an optional URL to an address for the named maintainer
	*/
	"url"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1Metadata {
	/**
	* Annotations are additional mappings uninterpreted by Helm, made available for inspection by other applications.
	*/
	"annotations"?: {
		[key: string]: string;
	};
	/**
	* The API Version of this chart.
	*/
	"apiVersion"?: string;
	/**
	* The version of the application enclosed inside of this chart.
	*/
	"appVersion"?: string;
	/**
	* The condition to check to enable chart
	*/
	"condition"?: string;
	/**
	* Whether or not this chart is deprecated
	*/
	"deprecated"?: boolean;
	/**
	* A one-sentence description of the chart
	*/
	"description"?: string;
	/**
	* The URL to a relevant project page, git repo, or contact person
	*/
	"home"?: string;
	/**
	* The URL to an icon file.
	*/
	"icon"?: string;
	/**
	* A list of string keywords
	*/
	"keywords"?: Array<string>;
	/**
	* KubeVersion is a SemVer constraint specifying the version of Kubernetes required.
	*/
	"kubeVersion"?: string;
	/**
	* A list of name and URL/email address combinations for the maintainer(s)
	*/
	"maintainers"?: Array<ClusterV1Maintainer>;
	/**
	* The name of the chart
	*/
	"name"?: string;
	/**
	* Source is the URL to the source code of this chart
	*/
	"sources"?: Array<string>;
	/**
	* The tags to check to enable chart
	*/
	"tags"?: string;
	/**
	* Specifies the chart type: application or library
	*/
	"type"?: string;
	/**
	* Urls where to find the chart contents
	*/
	"urls"?: Array<string>;
	/**
	* A SemVer 2 conformant version string of the chart
	*/
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1ChartInfoStatus {
	"metadata"?: ClusterV1Metadata;
	/**
	* Readme is the readme of the chart
	*/
	"readme"?: string;
	/**
	* Values are the default values of the chart
	*/
	"values"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1ChartInfo {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ClusterV1ChartInfoSpec;
	"status"?: ClusterV1ChartInfoStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1Bash {
	/**
	* ClusterRole is the cluster role to use for this job
	*/
	"clusterRole"?: string;
	/**
	* Image is the image to use for this app
	*/
	"image"?: string;
	/**
	* Script is the script to execute.
	*/
	"script"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1HelmReleaseSpec {
	/**
	* Annotations are extra annotations for this helm release
	*/
	"annotations"?: {
		[key: string]: string;
	};
	"bash"?: ClusterV1Bash;
	"chart"?: ClusterV1Chart;
	/**
	* Manifests holds kube manifests that will be deployed as a chart
	*/
	"manifests"?: string;
	/**
	* Parameters are additional helm chart values that will get merged with config and are then used to deploy the helm chart.
	*/
	"parameters"?: string;
	/**
	* Values is the set of extra Values added to the chart. These values merge with the default values inside of the chart. You can use golang templating in here with values from parameters.
	*/
	"values"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1Info {
	/**
	* Deleted tracks when this object was deleted.
	*/
	"deleted"?: Date;
	/**
	* Description is human-friendly \"log entry\" about this release.
	*/
	"description"?: string;
	/**
	* FirstDeployed is when the release was first deployed.
	*/
	"first_deployed"?: Date;
	/**
	* LastDeployed is when the release was last deployed.
	*/
	"last_deployed"?: Date;
	/**
	* Contains the rendered templates/NOTES.txt if available
	*/
	"notes"?: string;
	/**
	* Status is the current state of the release
	*/
	"status"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1HelmReleaseStatus {
	"info"?: ClusterV1Info;
	"metadata"?: ClusterV1Metadata;
	/**
	* Revision is an int which represents the revision of the release.
	*/
	"version"?: number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1HelmRelease {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ClusterV1HelmReleaseSpec;
	"status"?: ClusterV1HelmReleaseStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1SleepModeConfigSpec {
	/**
	* DeleteAfter specifies after how many seconds of inactivity the space should be deleted
	*/
	"deleteAfter"?: number;
	/**
	* If force sleep is true the space will sleep
	*/
	"forceSleep"?: boolean;
	/**
	* If force sleep duration is set, this will force the space to sleep for the given duration. It also implies that forceSleep is true. During this period loft will also block certain requests to that space. If this is set to 0, it means the space will sleep until it is manually woken up via the cli or ui.
	*/
	"forceSleepDuration"?: number;
	/**
	* IgnoreActiveConnections ignores active connections on the namespace
	*/
	"ignoreActiveConnections"?: boolean;
	/**
	* IgnoreAll ignores all requests
	*/
	"ignoreAll"?: boolean;
	/**
	* IgnoreGroups are ignored user groups
	*/
	"ignoreGroups"?: string;
	/**
	* IgnoreIngresses ignores all ingresses
	*/
	"ignoreIngresses"?: boolean;
	/**
	* IgnoreResourceNames are ignored resources and names
	*/
	"ignoreResourceNames"?: string;
	/**
	* IgnoreResourceVerbs are ignored resource verbs
	*/
	"ignoreResourceVerbs"?: string;
	/**
	* IgnoreResources are ignored request resources
	*/
	"ignoreResources"?: string;
	/**
	* IgnoreUseragents are ignored user agents with trailing wildcards \'*\' allowed. comma separated
	*/
	"ignoreUserAgents"?: string;
	/**
	* IgnoreVClusters ignores vcluster requests
	*/
	"ignoreVClusters"?: boolean;
	/**
	* IgnoreVerbs are ignored request verbs
	*/
	"ignoreVerbs"?: string;
	/**
	* SleepAfter specifies after how many seconds of inactivity the space should sleep
	*/
	"sleepAfter"?: number;
	/**
	* SleepSchedule specifies scheduled space sleep in Cron format, see https://en.wikipedia.org/wiki/Cron. Note: timezone defined in the schedule string will be ignored. Use \".Spec.Timezone\" field instead.
	*/
	"sleepSchedule"?: string;
	/**
	* Timezone specifies time zone used for scheduled space operations. Defaults to UTC. Accepts the same format as time.LoadLocation() in Go (https://pkg.go.dev/time#LoadLocation). The value should be a location name corresponding to a file in the IANA Time Zone database, such as \"America/New_York\".
	*/
	"timezone"?: string;
	/**
	* WakeupSchedule specifies scheduled wakeup from sleep in Cron format, see https://en.wikipedia.org/wiki/Cron. Note: timezone defined in the schedule string will be ignored. Use \".Spec.Timezone\" field instead.
	*/
	"wakeupSchedule"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1EpochInfo {
	/**
	* Amount of milliseconds the space has slept in the epoch
	*/
	"slept"?: number;
	/**
	* Timestamp when the epoch has started
	*/
	"start"?: number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1LastActivityInfo {
	/**
	* APIGroup is the api group that was used for the request
	*/
	"apiGroup"?: string;
	/**
	* Host is the host where this activity was recorded
	*/
	"host"?: string;
	/**
	* MetricsRefreshInterval is the activity refresh interval. This is used to prevent sleeping instances if the last activity metrics have not been refreshed within the interval. Useful for metrics based activty tracking.
	*/
	"metricsRefreshInterval"?: number;
	/**
	* Name is the name of the resource
	*/
	"name"?: string;
	/**
	* Resource is the resource of the request
	*/
	"resource"?: string;
	/**
	* Subject is the user or team where this activity was recorded
	*/
	"subject"?: string;
	/**
	* Subresource is the subresource of the request
	*/
	"subresource"?: string;
	/**
	* Verb is the verb that was used for the request
	*/
	"verb"?: string;
	/**
	* VirtualCluster is the virtual cluster this activity happened in
	*/
	"virtualCluster"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1SleepModeConfigStatus {
	"currentEpoch"?: ClusterV1EpochInfo;
	/**
	* LastActivity indicates the last activity in the namespace
	*/
	"lastActivity"?: number;
	"lastActivityInfo"?: ClusterV1LastActivityInfo;
	"lastEpoch"?: ClusterV1EpochInfo;
	/**
	* Indicates time of the next scheduled sleep based on .Spec.SleepSchedule and .Spec.ScheduleTimeZone The time is a Unix time, the number of seconds elapsed since January 1, 1970 UTC
	*/
	"scheduledSleep"?: number;
	/**
	* Indicates time of the next scheduled wakeup based on .Spec.WakeupSchedule and .Spec.ScheduleTimeZone The time is a Unix time, the number of seconds elapsed since January 1, 1970 UTC
	*/
	"scheduledWakeup"?: number;
	/**
	* SleepType specifies a type of sleep, which has effect on which actions will cause the space to wake up.
	*/
	"sleepType"?: string;
	/**
	* SleepingSince specifies since when the space is sleeping (if this is not specified, loft assumes the space is not sleeping)
	*/
	"sleepingSince"?: number;
	/**
	* This is a calculated field that will be returned but not saved and describes the percentage since the space was created or the last 7 days the space has slept
	*/
	"sleptLastSevenDays"?: number;
	/**
	* This is a calculated field that will be returned but not saved and describes the percentage since the space was created or the last 30 days the space has slept
	*/
	"sleptLastThirtyDays"?: number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1SleepModeConfig {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ClusterV1SleepModeConfigSpec;
	"status"?: ClusterV1SleepModeConfigStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class VirtualclusterV1HelmReleaseSpec {
	/**
	* Annotations are extra annotations for this helm release
	*/
	"annotations"?: {
		[key: string]: string;
	};
	"bash"?: ClusterV1Bash;
	"chart"?: ClusterV1Chart;
	/**
	* Manifests holds kube manifests that will be deployed as a chart
	*/
	"manifests"?: string;
	/**
	* Parameters are additional helm chart values that will get merged with config and are then used to deploy the helm chart.
	*/
	"parameters"?: string;
	/**
	* Values is the set of extra Values added to the chart. These values merge with the default values inside of the chart. You can use golang templating in here with values from parameters.
	*/
	"values"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class VirtualclusterV1HelmReleaseStatus {
	"info"?: ClusterV1Info;
	"metadata"?: ClusterV1Metadata;
	/**
	* Revision is an int which represents the revision of the release.
	*/
	"version"?: number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class VirtualclusterV1HelmRelease {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: VirtualclusterV1HelmReleaseSpec;
	"status"?: VirtualclusterV1HelmReleaseStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class AuditV1ObjectReference {
	/**
	* APIGroup is the name of the API group that contains the referred object. The empty string represents the core API group.
	*/
	"apiGroup"?: string;
	/**
	* APIVersion is the version of the API group that contains the referred object.
	*/
	"apiVersion"?: string;
	"name"?: string;
	"namespace"?: string;
	"resource"?: string;
	"resourceVersion"?: string;
	"subresource"?: string;
	"uid"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class RuntimeUnknown {
	/**
	* ContentEncoding is encoding used to encode \'Raw\' data. Unspecified means no encoding.
	*/
	"ContentEncoding": string;
	/**
	* ContentType  is serialization method used to serialize \'Raw\'. Unspecified means ContentTypeJSON.
	*/
	"ContentType": string;
	"apiVersion"?: string;
	"kind"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ListMeta {
	/**
	* continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
	*/
	"_continue"?: string;
	/**
	* remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
	*/
	"remainingItemCount"?: number;
	/**
	* String that identifies the server\'s internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
	*/
	"resourceVersion"?: string;
	/**
	* Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
	*/
	"selfLink"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1StatusCause {
	/**
	* The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.  Examples:   \"name\" - the field \"name\" on the current resource   \"items[0].name\" - the field \"name\" on the first array entry in \"items\"
	*/
	"field"?: string;
	/**
	* A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
	*/
	"message"?: string;
	/**
	* A machine-readable description of the cause of the error. If this value is empty there is no information available.
	*/
	"reason"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1StatusDetails {
	/**
	* The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
	*/
	"causes"?: Array<V1StatusCause>;
	/**
	* The group attribute of the resource associated with the status StatusReason.
	*/
	"group"?: string;
	/**
	* The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	/**
	* The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
	*/
	"name"?: string;
	/**
	* If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
	*/
	"retryAfterSeconds"?: number;
	/**
	* UID of the resource. (when there is a single resource which can be described). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
	*/
	"uid"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1Status {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Suggested HTTP return code for this status, 0 if not set.
	*/
	"code"?: number;
	"details"?: V1StatusDetails;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	/**
	* A human-readable description of the status of this operation.
	*/
	"message"?: string;
	"metadata"?: V1ListMeta;
	/**
	* A machine-readable description of why this operation is in the \"Failure\" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
	*/
	"reason"?: string;
	/**
	* Status of the operation. One of: \"Success\" or \"Failure\". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
	*/
	"status"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1UserInfo {
	/**
	* Any additional information provided by the authenticator.
	*/
	"extra"?: {
		[key: string]: Array<string>;
	};
	/**
	* The names of groups this user is a part of.
	*/
	"groups"?: Array<string>;
	/**
	* A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
	*/
	"uid"?: string;
	/**
	* The name that uniquely identifies this user among all active users.
	*/
	"username"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class AuditV1Event {
	/**
	* Annotations is an unstructured key value map stored with an audit event that may be set by plugins invoked in the request serving chain, including authentication, authorization and admission plugins. Note that these annotations are for the audit event, and do not correspond to the metadata.annotations of the submitted object. Keys should uniquely identify the informing component to avoid name collisions (e.g. podsecuritypolicy.admission.k8s.io/policy). Values should be short. Annotations are included in the Metadata level.
	*/
	"annotations"?: {
		[key: string]: string;
	};
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Unique audit ID, generated for each request.
	*/
	"auditID": string;
	"impersonatedUser"?: V1UserInfo;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	/**
	* AuditLevel at which event was generated
	*/
	"level": string;
	"objectRef"?: AuditV1ObjectReference;
	"requestObject"?: RuntimeUnknown;
	/**
	* MicroTime is version of Time with microsecond level precision.
	*/
	"requestReceivedTimestamp"?: Date;
	/**
	* RequestURI is the request URI as sent by the client to a server.
	*/
	"requestURI": string;
	"responseObject"?: RuntimeUnknown;
	"responseStatus"?: V1Status;
	/**
	* Source IPs, from where the request originated and intermediate proxies.
	*/
	"sourceIPs"?: Array<string>;
	/**
	* Stage of the request handling when this event instance was generated.
	*/
	"stage": string;
	/**
	* MicroTime is version of Time with microsecond level precision.
	*/
	"stageTimestamp"?: Date;
	"user": V1UserInfo;
	/**
	* UserAgent records the user agent string reported by the client. Note that the UserAgent is provided by the client, and must not be trusted.
	*/
	"userAgent"?: string;
	/**
	* Verb is the kubernetes verb associated with the request. For non-resource requests, this is the lower-cased HTTP method.
	*/
	"verb": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AgentAuditEventSpec {
	/**
	* Events are the events the agent has recorded
	*/
	"events"?: Array<AuditV1Event>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AgentAuditEvent {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1AgentAuditEventSpec;
	/**
	* AgentAuditEventStatus holds the status
	*/
	"status"?: any;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiButton {
	/**
	* Direct indicates if the Loft front end should directly hit this endpoint. If false, it means that the Loft front end will be hitting the license server first to generate a one time token for the operation; this also means that there will be a redirect URL in the response to the request for this and that link should be followed by the front end.
	*/
	"direct"?: boolean;
	/**
	* DisplayText is the text to display on the button. If display text is unset the button will never be shown in the loft UI.
	*/
	"displayText"?: string;
	/**
	* Name is the name of the button (ButtonName). Optional.
	*/
	"name"?: string;
	/**
	* URL is the link at the other end of the button.
	*/
	"url": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiAnnouncement {
	/**
	* Body contains the main message of the announcement in HTML format.
	*/
	"body"?: string;
	/**
	* Buttons to show alongside the announcement
	*/
	"buttons"?: Array<LicenseApiButton>;
	/**
	* Name contains the resource name of the announcement
	*/
	"name"?: string;
	/**
	* Title contains the title of the announcement in HTML format.
	*/
	"title"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AnnouncementStatus {
	"announcement"?: LicenseApiAnnouncement;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Announcement {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: any;
	"status"?: ManagementV1AnnouncementStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AppCredentials {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* ProjectSecretRefs holds the resolved secret values for the project secret refs.
	*/
	"projectSecretRefs"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ClusterV1HelmReleaseConfig {
	/**
	* Annotations are extra annotations for this helm release
	*/
	"annotations"?: {
		[key: string]: string;
	};
	"bash"?: ClusterV1Bash;
	"chart"?: ClusterV1Chart;
	/**
	* Manifests holds kube manifests that will be deployed as a chart
	*/
	"manifests"?: string;
	/**
	* Parameters are additional helm chart values that will get merged with config and are then used to deploy the helm chart.
	*/
	"parameters"?: string;
	/**
	* Values is the set of extra Values added to the chart. These values merge with the default values inside of the chart. You can use golang templating in here with values from parameters.
	*/
	"values"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1Access {
	/**
	* Name is an optional name that is used for this access rule
	*/
	"name"?: string;
	/**
	* Subresources defines the sub resources that are allowed by this access rule
	*/
	"subresources"?: Array<string>;
	/**
	* Teams specifies which teams should be able to access this secret with the aforementioned verbs
	*/
	"teams"?: Array<string>;
	/**
	* Users specifies which users should be able to access this secret with the aforementioned verbs
	*/
	"users"?: Array<string>;
	/**
	* Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule. VerbAll represents all kinds.
	*/
	"verbs": Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AppParameter {
	/**
	* DefaultValue is the default value if none is specified
	*/
	"defaultValue"?: string;
	/**
	* Description is the description to show for this parameter
	*/
	"description"?: string;
	/**
	* Invalidation regex that if matched will reject the input
	*/
	"invalidation"?: string;
	/**
	* Label is the label to show for this parameter
	*/
	"label"?: string;
	/**
	* Max is the maximum number if type is number
	*/
	"max"?: number;
	/**
	* Min is the minimum number if type is number
	*/
	"min"?: number;
	/**
	* Options is a slice of strings, where each string represents a mutually exclusive choice.
	*/
	"options"?: Array<string>;
	/**
	* Placeholder shown in the UI
	*/
	"placeholder"?: string;
	/**
	* Required specifies if this parameter is required
	*/
	"required"?: boolean;
	/**
	* Section where this app should be displayed. Apps with the same section name will be grouped together
	*/
	"section"?: string;
	/**
	* Type of the parameter. Can be one of: string, multiline, boolean, number and password
	*/
	"type"?: string;
	/**
	* Validation regex that if matched will allow the input
	*/
	"validation"?: string;
	/**
	* Variable is the path of the variable. Can be foo or foo.bar for nested objects.
	*/
	"variable"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1LabelSelectorRequirement {
	/**
	* key is the label key that the selector applies to.
	*/
	"key": string;
	/**
	* operator represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
	*/
	"operator": string;
	/**
	* values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
	*/
	"values"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1LabelSelector {
	/**
	* matchExpressions is a list of label selector requirements. The requirements are ANDed.
	*/
	"matchExpressions"?: Array<V1LabelSelectorRequirement>;
	/**
	* matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed.
	*/
	"matchLabels"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1StreamContainer {
	/**
	* Container is the container name to use
	*/
	"container"?: string;
	"selector"?: V1LabelSelector;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AppVersion {
	"config"?: ClusterV1HelmReleaseConfig;
	/**
	* DefaultNamespace is the default namespace this app should installed in.
	*/
	"defaultNamespace"?: string;
	/**
	* Icon holds an URL to the app icon
	*/
	"icon"?: string;
	/**
	* Parameters define additional app parameters that will set helm values
	*/
	"parameters"?: Array<StorageV1AppParameter>;
	/**
	* Readme is a longer markdown string that describes the app.
	*/
	"readme"?: string;
	"streamContainer"?: StorageV1StreamContainer;
	/**
	* Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) (default 5m0s)
	*/
	"timeout"?: string;
	/**
	* Version is the version. Needs to be in X.X.X format.
	*/
	"version"?: string;
	/**
	* Wait determines if Loft should wait during deploy for the app to become ready
	*/
	"wait"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1HelmConfiguration {
	/**
	* Determines if the remote location uses an insecure TLS certificate.
	*/
	"insecure"?: boolean;
	/**
	* Name of the chart to deploy
	*/
	"name": string;
	/**
	* The password to use for the selected repository
	*/
	"password"?: string;
	/**
	* The repo url to use
	*/
	"repoUrl"?: string;
	/**
	* The username to use for the selected repository
	*/
	"username"?: string;
	/**
	* The additional helm values to use. Expected block string
	*/
	"values"?: string;
	/**
	* Version is the version of the chart to deploy
	*/
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1UserOrTeam {
	/**
	* Team specifies a Loft team.
	*/
	"team"?: string;
	/**
	* User specifies a Loft user.
	*/
	"user"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AppSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* Clusters are the clusters this app can be installed in.
	*/
	"clusters"?: Array<string>;
	"config"?: ClusterV1HelmReleaseConfig;
	/**
	* DefaultNamespace is the default namespace this app should installed in.
	*/
	"defaultNamespace"?: string;
	/**
	* Description describes an app
	*/
	"description"?: string;
	/**
	* DisplayName is the name that should be displayed in the UI
	*/
	"displayName"?: string;
	"helm"?: StorageV1HelmConfiguration;
	/**
	* Icon holds an URL to the app icon
	*/
	"icon"?: string;
	/**
	* DEPRECATED: Use config instead manifest represents kubernetes resources that will be deployed into the target namespace
	*/
	"manifests"?: string;
	"owner"?: StorageV1UserOrTeam;
	/**
	* Parameters define additional app parameters that will set helm values
	*/
	"parameters"?: Array<StorageV1AppParameter>;
	/**
	* Readme is a longer markdown string that describes the app.
	*/
	"readme"?: string;
	/**
	* RecommendedApp specifies where this app should show up as recommended app
	*/
	"recommendedApp"?: Array<string>;
	"streamContainer"?: StorageV1StreamContainer;
	/**
	* Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) (default 5m0s)
	*/
	"timeout"?: string;
	/**
	* Versions are different app versions that can be referenced
	*/
	"versions"?: Array<StorageV1AppVersion>;
	/**
	* Wait determines if Loft should wait during deploy for the app to become ready
	*/
	"wait"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1App {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1AppSpec;
	/**
	* AppStatus holds the status
	*/
	"status"?: any;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1BackupApplySpec {
	/**
	* Raw is the raw backup to apply
	*/
	"raw"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1BackupApply {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1BackupApplySpec;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1BackupStatus {
	"rawBackup"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Backup {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* BackupSpec holds the spec
	*/
	"spec"?: any;
	"status"?: ManagementV1BackupStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterAccessKey {
	/**
	* AccessKey is the access key used by the agent
	*/
	"accessKey"?: string;
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* CaCert is an optional ca cert to use for the loft host connection
	*/
	"caCert"?: string;
	/**
	* Insecure signals if the loft host is insecure
	*/
	"insecure"?: boolean;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	/**
	* LoftHost is the loft host used by the agent
	*/
	"loftHost"?: string;
	"metadata"?: V1ObjectMeta;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ClusterRoleRef {
	/**
	* Name is the cluster role to assign
	*/
	"name"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1LocalClusterAccessSpec {
	/**
	* ClusterRoles define the cluster roles that the users should have assigned in the cluster.
	*/
	"clusterRoles"?: Array<StorageV1ClusterRoleRef>;
	/**
	* Description is the description of this object in human-readable text.
	*/
	"description"?: string;
	/**
	* DisplayName is the name that should be shown in the UI
	*/
	"displayName"?: string;
	/**
	* Priority is a unique value that specifies the priority of this cluster access for the space constraints and quota. A higher priority means the cluster access object will override the space constraints of lower priority cluster access objects
	*/
	"priority"?: number;
	/**
	* Teams are the teams affected by this cluster access object
	*/
	"teams"?: Array<string>;
	/**
	* Users are the users affected by this cluster access object
	*/
	"users"?: Array<StorageV1UserOrTeam>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1LocalClusterAccessTemplate {
	"metadata"?: V1ObjectMeta;
	"spec"?: StorageV1LocalClusterAccessSpec;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterAccessSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* Clusters are the clusters this template should be applied on.
	*/
	"clusters"?: Array<string>;
	/**
	* Description describes a cluster access object
	*/
	"description"?: string;
	/**
	* DisplayName is the name that should be displayed in the UI
	*/
	"displayName"?: string;
	"localClusterAccessTemplate"?: StorageV1LocalClusterAccessTemplate;
	"owner"?: StorageV1UserOrTeam;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1EntityInfo {
	/**
	* The display name shown in the UI
	*/
	"displayName"?: string;
	/**
	* The users email address
	*/
	"email"?: string;
	/**
	* Icon is the icon of the user / team
	*/
	"icon"?: string;
	/**
	* Name is the kubernetes name of the object
	*/
	"name"?: string;
	/**
	* The user subject
	*/
	"subject"?: string;
	/**
	* The username that is used to login
	*/
	"username"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1UserOrTeamEntity {
	"team"?: StorageV1EntityInfo;
	"user"?: StorageV1EntityInfo;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterAccessStatus {
	"clusters"?: Array<StorageV1EntityInfo>;
	"teams"?: Array<StorageV1EntityInfo>;
	"users"?: Array<StorageV1UserOrTeamEntity>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterAccess {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1ClusterAccessSpec;
	"status"?: ManagementV1ClusterAccessStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AgentAnalyticsSpec {
	"analyticsEndpoint"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1GroupResources {
	/**
	* Group is the name of the API group that contains the resources. The empty string represents the core API group.
	*/
	"group"?: string;
	/**
	* ResourceNames is a list of resource instance names that the policy matches. Using this field requires Resources to be specified. An empty list implies that every instance of the resource is matched.
	*/
	"resourceNames"?: Array<string>;
	/**
	* Resources is a list of resources this rule applies to.  For example: \'pods\' matches pods. \'pods/log\' matches the log subresource of pods. \'*\' matches all resources and their subresources. \'pods/_*\' matches all subresources of pods. \'*_/scale\' matches all scale subresources.  If wildcard is present, the validation rule will ensure resources do not overlap with each other.  An empty list implies all resources and subresources in this API groups apply.
	*/
	"resources"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AuditPolicyRule {
	/**
	* Clusters that this rule matches. Only applies to cluster requests. If this is set, no events for non cluster requests will be created. An empty list means no restrictions will apply.
	*/
	"clusters"?: Array<string>;
	/**
	* The Level that requests matching this rule are recorded at.
	*/
	"level": string;
	/**
	* Namespaces that this rule matches. The empty string \"\" matches non-namespaced resources. An empty list implies every namespace.
	*/
	"namespaces"?: Array<string>;
	/**
	* NonResourceURLs is a set of URL paths that should be audited. *s are allowed, but only as the full, final step in the path. Examples:  \"/metrics\" - Log requests for apiserver metrics  \"/healthz*\" - Log all health checks
	*/
	"nonResourceURLs"?: Array<string>;
	/**
	* OmitStages is a list of stages for which no events are created. Note that this can also be specified policy wide in which case the union of both are omitted. An empty list means no restrictions will apply.
	*/
	"omitStages"?: Array<string>;
	/**
	* RequestTargets is a list of request targets for which events are created. An empty list implies every request.
	*/
	"requestTargets"?: Array<string>;
	/**
	* Resources that this rule matches. An empty list implies all kinds in all API groups.
	*/
	"resources"?: Array<ManagementV1GroupResources>;
	/**
	* The user groups this rule applies to. A user is considered matching if it is a member of any of the UserGroups. An empty list implies every user group.
	*/
	"userGroups"?: Array<string>;
	/**
	* The users (by authenticated user name) this rule applies to. An empty list implies every user.
	*/
	"users"?: Array<string>;
	/**
	* The verbs that match this rule. An empty list implies every verb.
	*/
	"verbs"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AuditPolicy {
	/**
	* OmitStages is a list of stages for which no events are created. Note that this can also be specified per rule in which case the union of both are omitted.
	*/
	"omitStages"?: Array<string>;
	/**
	* Rules specify the audit Level a request should be recorded at. A request may match multiple rules, in which case the FIRST matching rule is used. The default audit level is None, but can be overridden by a catch-all rule at the end of the list. PolicyRules are strictly ordered.
	*/
	"rules"?: Array<ManagementV1AuditPolicyRule>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AgentAuditConfig {
	/**
	* Compress determines if the rotated log files should be compressed using gzip. The default is not to perform compression.
	*/
	"compress"?: boolean;
	/**
	* If true, the agent will not send back any audit logs to Loft itself.
	*/
	"disableAgentSyncBack"?: boolean;
	/**
	* If audit is enabled and incoming api requests will be logged based on the supplied policy.
	*/
	"enabled"?: boolean;
	/**
	* Level is an optional log level for audit logs. Cannot be used together with policy
	*/
	"level"?: number;
	/**
	* MaxAge is the maximum number of days to retain old log files based on the timestamp encoded in their filename.  Note that a day is defined as 24 hours and may not exactly correspond to calendar days due to daylight savings, leap seconds, etc. The default is not to remove old log files based on age.
	*/
	"maxAge"?: number;
	/**
	* MaxBackups is the maximum number of old log files to retain.  The default is to retain all old log files (though MaxAge may still cause them to get deleted.)
	*/
	"maxBackups"?: number;
	/**
	* MaxSize is the maximum size in megabytes of the log file before it gets rotated. It defaults to 100 megabytes.
	*/
	"maxSize"?: number;
	/**
	* The path where to save the audit log files. This is required if audit is enabled. Backup log files will be retained in the same directory.
	*/
	"path"?: string;
	"policy"?: ManagementV1AuditPolicy;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterAgentConfig {
	"analyticsSpec": ManagementV1AgentAnalyticsSpec;
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	"audit"?: ManagementV1AgentAuditConfig;
	/**
	* Cluster is the cluster the agent is running in.
	*/
	"cluster"?: string;
	/**
	* DefaultImageRegistry defines if we should prefix the virtual cluster image
	*/
	"defaultImageRegistry"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	/**
	* LoftHost defines the host for the agent\'s loft instance
	*/
	"loftHost"?: string;
	/**
	* LoftInstanceID defines the instance id from the loft instance
	*/
	"loftInstanceID"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* ProjectNamespacePrefix holds the prefix for loft project namespaces
	*/
	"projectNamespacePrefix"?: string;
	/**
	* TokenCaCert is the certificate authority the Loft tokens will be signed with
	*/
	"tokenCaCert"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1HelmChartRepository {
	/**
	* Insecure specifies if the chart should be retrieved without TLS verification
	*/
	"insecure"?: boolean;
	/**
	* Name is the name of the repository
	*/
	"name"?: string;
	/**
	* Password of the repository
	*/
	"password"?: string;
	/**
	* URL is the repository url
	*/
	"url"?: string;
	/**
	* Username of the repository
	*/
	"username"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1HelmChart {
	"metadata"?: ClusterV1Metadata;
	"repository"?: StorageV1HelmChartRepository;
	/**
	* Versions holds all chart versions
	*/
	"versions"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterCharts {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Busy will indicate if the chart parsing is still in progress.
	*/
	"busy"?: boolean;
	/**
	* Holds the available helm charts for this cluster
	*/
	"charts": Array<StorageV1HelmChart>;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterDomain {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	"domain"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"target"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterMember {
	"info"?: StorageV1EntityInfo;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterMemberAccess {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* Teams holds all the teams that the current user has access to the cluster
	*/
	"teams"?: Array<ManagementV1ClusterMember>;
	/**
	* Users holds all the users that the current user has access to the cluster
	*/
	"users"?: Array<ManagementV1ClusterMember>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterMembers {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* Teams holds all the teams that have access to the cluster
	*/
	"teams"?: Array<ManagementV1ClusterMember>;
	/**
	* Users holds all the users that have access to the cluster
	*/
	"users"?: Array<ManagementV1ClusterMember>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterReset {
	"agent"?: boolean;
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"rbac"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1AggregationRule {
	/**
	* ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole\'s permissions will be added
	*/
	"clusterRoleSelectors"?: Array<V1LabelSelector>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1PolicyRule {
	/**
	* APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. \"\" represents the core API group and \"*\" represents all API groups.
	*/
	"apiGroups"?: Array<string>;
	/**
	* NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as \"pods\" or \"secrets\") or non-resource URL paths (such as \"/api\"),  but not both.
	*/
	"nonResourceURLs"?: Array<string>;
	/**
	* ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
	*/
	"resourceNames"?: Array<string>;
	/**
	* Resources is a list of resources this rule applies to. \'*\' represents all resources.
	*/
	"resources"?: Array<string>;
	/**
	* Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. \'*\' represents all verbs.
	*/
	"verbs": Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ClusterRoleTemplateTemplate {
	"aggregationRule"?: V1AggregationRule;
	"metadata"?: V1ObjectMeta;
	/**
	* Rules holds all the PolicyRules for this ClusterRole
	*/
	"rules"?: Array<V1PolicyRule>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1LocalClusterRoleTemplateSpec {
	"clusterRoleTemplate"?: StorageV1ClusterRoleTemplateTemplate;
	/**
	* Description is the description of this object in human-readable text.
	*/
	"description"?: string;
	/**
	* DisplayName is the name that should be shown in the UI
	*/
	"displayName"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1LocalClusterRoleTemplate {
	"metadata"?: V1ObjectMeta;
	"spec"?: StorageV1LocalClusterRoleTemplateSpec;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterRoleTemplateSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	"clusterRoleTemplate"?: StorageV1ClusterRoleTemplateTemplate;
	/**
	* Clusters are the clusters this template should be applied on.
	*/
	"clusters"?: Array<string>;
	/**
	* Description describes a cluster role template object
	*/
	"description"?: string;
	/**
	* DisplayName is the name that should be displayed in the UI
	*/
	"displayName"?: string;
	"localClusterRoleTemplate"?: StorageV1LocalClusterRoleTemplate;
	/**
	* Management defines if this cluster role should be created in the management instance.
	*/
	"management"?: boolean;
	"owner"?: StorageV1UserOrTeam;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterRoleTemplateStatus {
	"clusters"?: Array<StorageV1EntityInfo>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterRoleTemplate {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1ClusterRoleTemplateSpec;
	"status"?: ManagementV1ClusterRoleTemplateStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AppReference {
	/**
	* Name of the target app
	*/
	"name"?: string;
	/**
	* Namespace specifies in which target namespace the app should get deployed in
	*/
	"namespace"?: string;
	/**
	* Parameters to use for the app
	*/
	"parameters"?: string;
	/**
	* ReleaseName is the name of the app release
	*/
	"releaseName"?: string;
	/**
	* Version of the app
	*/
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1InstanceAccessRule {
	/**
	* ClusterRole is the cluster role that should be assigned to the
	*/
	"clusterRole"?: string;
	/**
	* Teams that this rule matches.
	*/
	"teams"?: Array<string>;
	/**
	* Users this rule matches. * means all users.
	*/
	"users"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1InstanceAccess {
	/**
	* Specifies which cluster role should get applied to users or teams that do not match a rule below.
	*/
	"defaultClusterRole"?: string;
	/**
	* Rules defines which users and teams should have which access to the virtual cluster. If no rule matches an authenticated incoming user, the user will get cluster admin access.
	*/
	"rules"?: Array<StorageV1InstanceAccessRule>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1TemplateHelmChart {
	/**
	* If tls certificate checks for the chart download should be skipped
	*/
	"insecureSkipTlsVerify"?: boolean;
	/**
	* Name is the chart name in the repository
	*/
	"name"?: string;
	/**
	* The password that is required for this repository
	*/
	"password"?: string;
	"passwordRef"?: ClusterV1ChartSecretRef;
	/**
	* ReleaseName is the preferred release name of the app
	*/
	"releaseName"?: string;
	/**
	* ReleaseNamespace is the preferred release namespace of the app
	*/
	"releaseNamespace"?: string;
	/**
	* RepoURL is the repo url where the chart can be found
	*/
	"repoURL"?: string;
	/**
	* Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) (default 5m0s)
	*/
	"timeout"?: string;
	/**
	* The username that is required for this repository
	*/
	"username"?: string;
	"usernameRef"?: ClusterV1ChartSecretRef;
	/**
	* Values are the values that should get passed to the chart
	*/
	"values"?: string;
	/**
	* Version is the chart version in the repository
	*/
	"version"?: string;
	/**
	* Wait determines if Loft should wait during deploy for the app to become ready
	*/
	"wait"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1TemplateMetadata {
	/**
	* Annotations are annotations on the object
	*/
	"annotations"?: {
		[key: string]: string;
	};
	/**
	* Labels are labels on the object
	*/
	"labels"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterAccessPointIngressSpec {
	/**
	* Enabled defines if the virtual cluster access point (via ingress) is enabled or not; requires the connected cluster to have the `loft.sh/ingress-suffix` annotation set to define the domain name suffix used for the ingress.
	*/
	"enabled"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterAccessPoint {
	"ingress"?: StorageV1VirtualClusterAccessPointIngressSpec;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterHelmChart {
	/**
	* the name of the helm chart
	*/
	"name"?: string;
	/**
	* The password that is required for this repository
	*/
	"password"?: string;
	/**
	* the repo of the helm chart
	*/
	"repo"?: string;
	/**
	* The username that is required for this repository
	*/
	"username"?: string;
	/**
	* the version of the helm chart to use
	*/
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterHelmRelease {
	"chart"?: StorageV1VirtualClusterHelmChart;
	/**
	* the values for the given chart
	*/
	"values"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterInstanceTemplateDefinition {
	"metadata"?: StorageV1TemplateMetadata;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterProSpec {
	/**
	* Enabled defines if the virtual cluster is a pro cluster or not
	*/
	"enabled"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterSpaceTemplateDefinition {
	/**
	* Apps specifies the apps that should get deployed by this template
	*/
	"apps"?: Array<StorageV1AppReference>;
	/**
	* Charts are helm charts that should get deployed
	*/
	"charts"?: Array<StorageV1TemplateHelmChart>;
	"metadata"?: StorageV1TemplateMetadata;
	/**
	* Objects are Kubernetes style yamls that should get deployed into the virtual cluster namespace
	*/
	"objects"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterTemplateDefinition {
	"access"?: StorageV1InstanceAccess;
	"accessPoint"?: StorageV1VirtualClusterAccessPoint;
	/**
	* Apps specifies the apps that should get deployed by this template
	*/
	"apps"?: Array<StorageV1AppReference>;
	/**
	* Charts are helm charts that should get deployed
	*/
	"charts"?: Array<StorageV1TemplateHelmChart>;
	/**
	* ForwardToken signals the proxy to pass through the used token to the virtual Kubernetes api server and do a TokenReview there.
	*/
	"forwardToken"?: boolean;
	"helmRelease"?: StorageV1VirtualClusterHelmRelease;
	"instanceTemplate"?: StorageV1VirtualClusterInstanceTemplateDefinition;
	"metadata"?: StorageV1TemplateMetadata;
	/**
	* Objects are Kubernetes style yamls that should get deployed into the virtual cluster
	*/
	"objects"?: string;
	"pro"?: StorageV1VirtualClusterProSpec;
	"spaceTemplate"?: StorageV1VirtualClusterSpaceTemplateDefinition;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterTemplateSpaceTemplateRef {
	/**
	* Name of the space template
	*/
	"name"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterTemplateVersion {
	/**
	* Parameters define additional app parameters that will set helm values
	*/
	"parameters"?: Array<StorageV1AppParameter>;
	"template"?: StorageV1VirtualClusterTemplateDefinition;
	/**
	* Version is the version. Needs to be in X.X.X format.
	*/
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterTemplateSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* Description describes the virtual cluster template
	*/
	"description"?: string;
	/**
	* DisplayName is the name that is shown in the UI
	*/
	"displayName"?: string;
	"owner"?: StorageV1UserOrTeam;
	/**
	* Parameters define additional app parameters that will set helm values
	*/
	"parameters"?: Array<StorageV1AppParameter>;
	"spaceTemplateRef"?: StorageV1VirtualClusterTemplateSpaceTemplateRef;
	"template"?: StorageV1VirtualClusterTemplateDefinition;
	/**
	* Versions are different versions of the template that can be referenced as well
	*/
	"versions"?: Array<StorageV1VirtualClusterTemplateVersion>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterTemplate {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: StorageV1VirtualClusterTemplateSpec;
	/**
	* VirtualClusterTemplateStatus holds the status
	*/
	"status"?: any;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterVirtualClusterDefaults {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	"defaultTemplate"?: StorageV1VirtualClusterTemplate;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	/**
	* LatestVersion is the latest virtual cluster version
	*/
	"latestVersion"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* Default values for the virtual cluster chart
	*/
	"values"?: string;
	/**
	* Warning should be somehow shown to the user when there is a problem retrieving the defaults
	*/
	"warning"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1SecretRef {
	"key"?: string;
	"secretName"?: string;
	"secretNamespace"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	"config"?: StorageV1SecretRef;
	/**
	* Description describes a cluster access object
	*/
	"description"?: string;
	/**
	* If specified this name is displayed in the UI instead of the metadata name
	*/
	"displayName"?: string;
	/**
	* Local specifies if it is the local cluster that should be connected, when this is specified, config is optional
	*/
	"local"?: boolean;
	/**
	* The namespace where the cluster components will be installed in
	*/
	"managementNamespace"?: string;
	/**
	* NetworkPeer specifies if the cluster is connected via tailscale, when this is specified, config is optional
	*/
	"networkPeer"?: boolean;
	"owner"?: StorageV1UserOrTeam;
	/**
	* If unusable is true, no spaces or virtual clusters can be scheduled on this cluster.
	*/
	"unusable"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterStatus {
	"message"?: string;
	/**
	* Online is whether the cluster is currently connected to the coordination server.
	*/
	"online"?: boolean;
	"phase"?: string;
	"reason"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Cluster {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1ClusterSpec;
	"status"?: ManagementV1ClusterStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ConfigSpec {
	/**
	* Raw holds the raw config
	*/
	"raw"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1PredefinedApp {
	/**
	* Chart holds the repo/chart name of the predefined app
	*/
	"chart"?: string;
	/**
	* Holds the cluster names where to display this app
	*/
	"clusters"?: Array<string>;
	/**
	* IconURL specifies an url to the icon that should be displayed for this app. If none is specified the icon from the chart metadata is used.
	*/
	"iconUrl"?: string;
	/**
	* InitialValues holds the initial values for this app. The values will be prefilled automatically. There are certain placeholders that can be used within the values that are replaced by the loft UI automatically.
	*/
	"initialValues"?: string;
	/**
	* InitialVersion holds the initial version of this app. This version will be selected automatically.
	*/
	"initialVersion"?: string;
	/**
	* ReadmeURL specifies an url to the readme page of this predefined app. If empty an url will be constructed to artifact hub.
	*/
	"readmeUrl"?: string;
	/**
	* Title is the name that should be displayed for the predefined app. If empty the chart name is used.
	*/
	"title"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Apps {
	/**
	* If this option is true, loft will not try to parse the default apps
	*/
	"noDefault"?: boolean;
	/**
	* Predefined apps that can be selected in the Spaces > Space menu
	*/
	"predefinedApps"?: Array<ManagementV1PredefinedApp>;
	/**
	* These are additional repositories that are parsed by loft
	*/
	"repositories"?: Array<StorageV1HelmChartRepository>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Audit {
	/**
	* Compress determines if the rotated log files should be compressed using gzip. The default is not to perform compression.
	*/
	"compress"?: boolean;
	/**
	* DataStoreEndpoint is an endpoint to store events in.
	*/
	"dataStoreEndpoint"?: string;
	/**
	* DataStoreMaxAge is the maximum number of hours to retain old log events in the datastore
	*/
	"dataStoreTTL"?: number;
	/**
	* If true, the agent will not send back any audit logs to Loft itself.
	*/
	"disableAgentSyncBack"?: boolean;
	/**
	* If audit is enabled and incoming api requests will be logged based on the supplied policy.
	*/
	"enabled"?: boolean;
	/**
	* Level is an optional log level for audit logs. Cannot be used together with policy
	*/
	"level"?: number;
	/**
	* MaxAge is the maximum number of days to retain old log files based on the timestamp encoded in their filename.  Note that a day is defined as 24 hours and may not exactly correspond to calendar days due to daylight savings, leap seconds, etc. The default is not to remove old log files based on age.
	*/
	"maxAge"?: number;
	/**
	* MaxBackups is the maximum number of old log files to retain.  The default is to retain all old log files (though MaxAge may still cause them to get deleted.)
	*/
	"maxBackups"?: number;
	/**
	* MaxSize is the maximum size in megabytes of the log file before it gets rotated. It defaults to 100 megabytes.
	*/
	"maxSize"?: number;
	/**
	* The path where to save the audit log files. This is required if audit is enabled. Backup log files will be retained in the same directory.
	*/
	"path"?: string;
	"policy"?: ManagementV1AuditPolicy;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AuthenticationGithubOrg {
	/**
	* Organization name in github (not slug, full name). Only users in this github organization can authenticate.
	*/
	"name"?: string;
	/**
	* Names of teams in a github organization. A user will be able to authenticate if they are members of at least one of these teams. Users in the organization can authenticate if this field is omitted from the config file.
	*/
	"teams"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AuthenticationGithub {
	/**
	* ClientID holds the github client id
	*/
	"clientId"?: string;
	/**
	* ClientID holds the github client secret
	*/
	"clientSecret": string;
	/**
	* Required ONLY for GitHub Enterprise. This is the Hostname of the GitHub Enterprise account listed on the management console. Ensure this domain is routable on your network.
	*/
	"hostName"?: string;
	/**
	* Loft queries the following organizations for group information. Group claims are formatted as \"(org):(team)\". For example if a user is part of the \"engineering\" team of the \"coreos\" org, the group claim would include \"coreos:engineering\".  If orgs are specified in the config then user MUST be a member of at least one of the specified orgs to authenticate with loft.
	*/
	"orgs"?: Array<ManagementV1AuthenticationGithubOrg>;
	/**
	* RedirectURI holds the redirect URI. Should be https://loft.domain.tld/auth/github/callback
	*/
	"redirectURI": string;
	/**
	* ONLY for GitHub Enterprise. Optional field. Used to support self-signed or untrusted CA root certificates.
	*/
	"rootCA"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AuthenticationGitlab {
	/**
	* BaseURL is optional, default = https://gitlab.com
	*/
	"baseURL"?: string;
	/**
	* Gitlab client id
	*/
	"clientId": string;
	/**
	* Gitlab client secret
	*/
	"clientSecret": string;
	/**
	* Optional groups whitelist, communicated through the \"groups\" scope. If `groups` is omitted, all of the user\'s GitLab groups are returned. If `groups` is provided, this acts as a whitelist - only the user\'s GitLab groups that are in the configured `groups` below will go into the groups claim. Conversely, if the user is not in any of the configured `groups`, the user will not be authenticated.
	*/
	"groups"?: Array<string>;
	/**
	* Redirect URI
	*/
	"redirectURI": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AuthenticationGoogle {
	/**
	* Required if ServiceAccountFilePath The email of a GSuite super user which the service account will impersonate when listing groups
	*/
	"adminEmail"?: string;
	/**
	* Google client id
	*/
	"clientId": string;
	/**
	* Google client secret
	*/
	"clientSecret": string;
	/**
	* Optional list of whitelisted groups If this field is nonempty, only users from a listed group will be allowed to log in
	*/
	"groups"?: Array<string>;
	/**
	* Optional list of whitelisted domains If this field is nonempty, only users from a listed domain will be allowed to log in
	*/
	"hostedDomains"?: Array<string>;
	/**
	* loft redirect uri. E.g. https://loft.my.domain/auth/google/callback
	*/
	"redirectURI": string;
	/**
	* defaults to \"profile\" and \"email\"
	*/
	"scopes"?: Array<string>;
	/**
	* Optional path to service account json If nonempty, and groups claim is made, will use authentication from file to check groups with the admin directory api
	*/
	"serviceAccountFilePath"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AuthenticationMicrosoft {
	/**
	* Microsoft client id
	*/
	"clientId": string;
	/**
	* Microsoft client secret
	*/
	"clientSecret": string;
	/**
	* It is possible to require a user to be a member of a particular group in order to be successfully authenticated in loft.
	*/
	"groups"?: Array<string>;
	/**
	* configuration option restricts the list to include only security groups. By default all groups (security, Office 365, mailing lists) are included.
	*/
	"onlySecurityGroups"?: boolean;
	/**
	* loft redirect uri. Usually https://loft.my.domain/auth/microsoft/callback
	*/
	"redirectURI": string;
	/**
	* tenant configuration parameter controls what kinds of accounts may be authenticated in loft. By default, all types of Microsoft accounts (consumers and organizations) can authenticate in loft via Microsoft. To change this, set the tenant parameter to one of the following:  common - both personal and business/school accounts can authenticate in loft via Microsoft (default) consumers - only personal accounts can authenticate in loft organizations - only business/school accounts can authenticate in loft tenant uuid or tenant name - only accounts belonging to specific tenant identified by either tenant uuid or tenant name can authenticate in loft
	*/
	"tenant"?: string;
	/**
	* Restrict the groups claims to include only the user’s groups that are in the configured groups
	*/
	"useGroupsAsWhitelist"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AuthenticationOIDC {
	/**
	* Path to a PEM encoded root certificate of the provider. Optional
	*/
	"caFile"?: string;
	/**
	* ClientID the JWT must be issued for, the \"sub\" field. This plugin only trusts a single client to ensure the plugin can be used with public providers.  The plugin supports the \"authorized party\" OpenID Connect claim, which allows specialized providers to issue tokens to a client for a different client. See: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
	*/
	"clientId"?: string;
	/**
	* ClientSecret to issue tokens from the OIDC provider
	*/
	"clientSecret"?: string;
	/**
	* EmailClaim is the JWT field to use as the user\'s email.
	*/
	"emailClaim"?: string;
	/**
	* GetUserInfo, if specified, tells the OIDCAuthenticator to try to populate the user\'s information from the UserInfo.
	*/
	"getUserInfo"?: boolean;
	/**
	* If required groups is non empty, access is denied if the user is not part of at least one of the specified groups.
	*/
	"groups"?: Array<string>;
	/**
	* GroupsClaim, if specified, causes the OIDCAuthenticator to try to populate the user\'s groups with an ID Token field. If the GroupsClaim field is present in an ID Token the value must be a string or list of strings.
	*/
	"groupsClaim"?: string;
	/**
	* GroupsPrefix, if specified, causes claims mapping to group names to be prefixed with the value. A value \"oidc:\" would result in groups like \"oidc:engineering\" and \"oidc:marketing\".
	*/
	"groupsPrefix"?: string;
	/**
	* Specify whether to communicate without validating SSL certificates
	*/
	"insecureCa"?: boolean;
	/**
	* IssuerURL is the URL the provider signs ID Tokens as. This will be the \"iss\" field of all tokens produced by the provider and is used for configuration discovery.  The URL is usually the provider\'s URL without a path, for example \"https://accounts.google.com\" or \"https://login.salesforce.com\".  The provider must implement configuration discovery. See: https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig
	*/
	"issuerUrl"?: string;
	/**
	* LoftUsernameClaim is the JWT field to use as the user\'s username.
	*/
	"loftUsernameClaim"?: string;
	/**
	* Loft URI to be redirected to after successful logout by OIDC Provider
	*/
	"postLogoutRedirectURI"?: string;
	/**
	* Configurable key which contains the preferred username claims
	*/
	"preferredUsername"?: string;
	/**
	* loft redirect uri. E.g. https://loft.my.domain/auth/oidc/callback
	*/
	"redirectURI"?: string;
	/**
	* Scopes that should be sent to the server. If empty, defaults to \"email\" and \"profile\".
	*/
	"scopes"?: Array<string>;
	/**
	* Type of the OIDC to show in the UI. Only for displaying purposes
	*/
	"type"?: string;
	/**
	* UsernameClaim is the JWT field to use as the user\'s id.
	*/
	"usernameClaim"?: string;
	/**
	* UsernamePrefix, if specified, causes claims mapping to username to be prefix with the provided value. A value \"oidc:\" would result in usernames like \"oidc:john\".
	*/
	"usernamePrefix"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AuthenticationPassword {
	/**
	* If true login via password is disabled
	*/
	"disabled"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AuthenticationRancher {
	/**
	* BearerToken holds the rancher API key in token username and password form. E.g. my-token:my-secret
	*/
	"bearerToken"?: string;
	/**
	* Host holds the rancher host, e.g. my-domain.com
	*/
	"host"?: string;
	/**
	* Insecure tells Loft if the Rancher endpoint is insecure.
	*/
	"insecure"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1AuthenticationSAML {
	/**
	* List of groups to filter access based on membership
	*/
	"allowedGroups"?: Array<string>;
	/**
	* CA to use when validating the signature of the SAML response.
	*/
	"ca"?: string;
	/**
	* CAData is a base64 encoded string that holds the ca certificate for validating the signature of the SAML response. Either CAData, CA or InsecureSkipSignatureValidation needs to be defined.
	*/
	"caData"?: string;
	/**
	* Name of attribute in the returned assertions to map to email
	*/
	"emailAttr"?: string;
	/**
	* When provided Loft will include this as the Issuer value during AuthnRequest. It will also override the redirectURI as the required audience when evaluating AudienceRestriction elements in the response.
	*/
	"entityIssuer"?: string;
	/**
	* If used with allowed groups, only forwards the allowed groups and not all groups specified.
	*/
	"filterGroups"?: boolean;
	/**
	* Name of attribute in the returned assertions to map to groups
	*/
	"groupsAttr"?: string;
	/**
	* If GroupsDelim is supplied the connector assumes groups are returned as a single string instead of multiple attribute values. This delimiter will be used split the groups string.
	*/
	"groupsDelim"?: string;
	/**
	* Ignore the ca cert
	*/
	"insecureSkipSignatureValidation"?: boolean;
	/**
	* Requested format of the NameID. The NameID value is is mapped to the ID Token \'sub\' claim.  This can be an abbreviated form of the full URI with just the last component. For example, if this value is set to \"emailAddress\" the format will resolve to:    urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress  If no value is specified, this value defaults to:    urn:oasis:names:tc:SAML:2.0:nameid-format:persistent
	*/
	"nameIDPolicyFormat"?: string;
	/**
	* If the response assertion status value contains a Destination element, it must match this value exactly. Usually looks like https://your-loft-domain/auth/saml/callback
	*/
	"redirectURI"?: string;
	/**
	* Issuer value expected in the SAML response. Optional.
	*/
	"ssoIssuer"?: string;
	/**
	* SSO URL used for POST value.
	*/
	"ssoURL"?: string;
	/**
	* Name of attribute in the returned assertions to map to username
	*/
	"usernameAttr"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ConnectorWithName {
	/**
	* DisplayName is the name that should show up in the ui
	*/
	"displayName"?: string;
	"github"?: ManagementV1AuthenticationGithub;
	"gitlab"?: ManagementV1AuthenticationGitlab;
	"google"?: ManagementV1AuthenticationGoogle;
	/**
	* ID is the id that should show up in the url
	*/
	"id"?: string;
	"microsoft"?: ManagementV1AuthenticationMicrosoft;
	"oidc"?: ManagementV1AuthenticationOIDC;
	"saml"?: ManagementV1AuthenticationSAML;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Authentication {
	/**
	* AccessKeyMaxTTLSeconds is the global maximum lifespan of an accesskey in seconds. Leaving it 0 or unspecified will disable it. Specifying 2592000 will mean all keys have a Time-To-Live of 30 days.
	*/
	"accessKeyMaxTTLSeconds"?: number;
	/**
	* Connectors are optional additional connectors for Loft.
	*/
	"connectors"?: Array<ManagementV1ConnectorWithName>;
	/**
	* CustomHttpHeaders are additional headers that should be set for the authentication endpoints
	*/
	"customHttpHeaders"?: {
		[key: string]: string;
	};
	/**
	* Prevents from team creation for the new groups associated with the user at the time of logging in through sso, Default behaviour is false, this means that teams will be created for new groups.
	*/
	"disableTeamCreation"?: boolean;
	/**
	* DisableUserCreation prevents the SSO connectors from creating a new user on a users initial signin through sso. Default behaviour is false, this means that a new user object will be created once a user without a Kubernetes user object logs in.
	*/
	"disableUserCreation"?: boolean;
	"github"?: ManagementV1AuthenticationGithub;
	"gitlab"?: ManagementV1AuthenticationGitlab;
	"google"?: ManagementV1AuthenticationGoogle;
	/**
	* LoginAccessKeyTTLSeconds is the time in seconds an access key is kept until it is deleted. Leaving it unspecified will default to 20 days. Setting it to zero will disable the ttl. Specifying 2592000 will mean all keys have a  default Time-To-Live of 30 days.
	*/
	"loginAccessKeyTTLSeconds"?: number;
	"microsoft"?: ManagementV1AuthenticationMicrosoft;
	"oidc"?: ManagementV1AuthenticationOIDC;
	"password"?: ManagementV1AuthenticationPassword;
	"rancher"?: ManagementV1AuthenticationRancher;
	"saml"?: ManagementV1AuthenticationSAML;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1OIDCClientSpec {
	/**
	* The client id of the client
	*/
	"clientId"?: string;
	/**
	* The client secret of the client
	*/
	"clientSecret"?: string;
	/**
	* The client name
	*/
	"name"?: string;
	/**
	* A registered set of redirect URIs. When redirecting from dex to the client, the URI requested to redirect to MUST match one of these values, unless the client is \"public\".
	*/
	"redirectURIs": Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1OIDC {
	/**
	* The clients that are allowed to request loft tokens
	*/
	"clients"?: Array<ManagementV1OIDCClientSpec>;
	/**
	* If true indicates that loft will act as an OIDC server
	*/
	"enabled"?: boolean;
	/**
	* If true indicates that loft will allow wildcard \'*\' in client redirectURIs
	*/
	"wildcardRedirect"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1SecretKeySelector {
	/**
	* The key of the secret to select from.  Must be a valid secret key.
	*/
	"key": string;
	/**
	* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
	*/
	"name"?: string;
	/**
	* Specify whether the Secret or its key must be defined
	*/
	"optional"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VaultAuthSpec {
	/**
	* Token defines the token to use for authentication.
	*/
	"token"?: string;
	"tokenSecretRef"?: V1SecretKeySelector;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VaultIntegrationSpec {
	/**
	* Address defines the address of the Vault instance to use for this project. Will default to the `VAULT_ADDR` environment variable if not provided.
	*/
	"address"?: string;
	"auth"?: StorageV1VaultAuthSpec;
	/**
	* Enabled indicates if the Vault Integration is enabled for the project -- this knob only enables the syncing of secrets to or from Vault, but does not setup Kubernetes authentication methods or Kubernetes secrets engines for vclusters.
	*/
	"enabled"?: boolean;
	/**
	* Namespace defines the namespace to use when storing secrets in Vault.
	*/
	"namespace"?: string;
	/**
	* SkipTLSVerify defines if TLS verification should be skipped when connecting to Vault.
	*/
	"skipTLSVerify"?: boolean;
	/**
	* SyncInterval defines the interval at which to sync secrets from Vault. Defaults to `1m.` See https://pkg.go.dev/time#ParseDuration for supported formats.
	*/
	"syncInterval"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class UiV1NavBarButton {
	/**
	* Icon holds the url of the icon to display
	*/
	"icon"?: string;
	/**
	* Link holds the link of the navbar button
	*/
	"link"?: string;
	/**
	* Position holds the position of the button, can be one of: TopStart, TopEnd, BottomStart, BottomEnd. Defaults to BottomEnd
	*/
	"position"?: string;
	/**
	* Text holds text for the button
	*/
	"text"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class UiV1UISettingsConfig {
	/**
	* AccentColor is the color value (ex: \"#12345\") to use for the accent
	*/
	"accentColor"?: string;
	/**
	* CustomCSS holds URLs with custom css files that should be included when loading the UI
	*/
	"customCss"?: Array<string>;
	/**
	* CustomJavaScript holds URLs with custom js files that should be included when loading the UI
	*/
	"customJavaScript"?: Array<string>;
	/**
	* LegalTemplate is a text (html) string containing the legal template to prompt to users when authenticating to Loft
	*/
	"legalTemplate"?: string;
	/**
	* LoftVersion holds the current loft version
	*/
	"loftVersion"?: string;
	/**
	* LogoBackgroundColor is the color value (ex: \"#12345\") to use as the background color for the logo
	*/
	"logoBackgroundColor"?: string;
	/**
	* LogoURL is url pointing to the logo to use in the Loft UI. This path must be accessible for clients accessing the Loft UI!
	*/
	"logoURL"?: string;
	/**
	* NavBarButtons holds extra nav bar buttons
	*/
	"navBarButtons"?: Array<UiV1NavBarButton>;
	/**
	* PrimaryColor is the color value (ex: \"#12345\") to use as the primary color
	*/
	"primaryColor"?: string;
	/**
	* SidebarColor is the color value (ex: \"#12345\") to use for the sidebar
	*/
	"sidebarColor"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ConfigStatus {
	"apps"?: ManagementV1Apps;
	"audit"?: ManagementV1Audit;
	"auth"?: ManagementV1Authentication;
	/**
	* DevPodSubDomain holds a subdomain in the following form *.workspace.my-domain.com
	*/
	"devPodSubDomain"?: string;
	/**
	* LoftHost holds the domain where the loft instance is hosted. This should not include https or http. E.g. loft.my-domain.com
	*/
	"loftHost"?: string;
	"oidc"?: ManagementV1OIDC;
	/**
	* ProjectNamespacePrefix holds the prefix for loft project namespaces. Omitted defaults to \"p-\"
	*/
	"projectNamespacePrefix"?: string;
	"uiSettings"?: UiV1UISettingsConfig;
	"vault"?: StorageV1VaultIntegrationSpec;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Config {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1ConfigSpec;
	"status"?: ManagementV1ConfigStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ConvertVirtualClusterConfigSpec {
	/**
	* Annotations are annotations on the virtual cluster
	*/
	"annotations"?: {
		[key: string]: string;
	};
	/**
	* Distro is the distro to be used for the config
	*/
	"distro"?: string;
	/**
	* Values are the config values for the virtual cluster
	*/
	"values"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ConvertVirtualClusterConfigStatus {
	/**
	* Converted signals if the Values have been converted from the old format
	*/
	"converted": boolean;
	/**
	* Values are the converted config values for the virtual cluster
	*/
	"values"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ConvertVirtualClusterConfig {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1ConvertVirtualClusterConfigSpec;
	"status"?: ManagementV1ConvertVirtualClusterConfigStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1DevPodWorkspaceInstanceState {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* State holds the workspaces state as given by \'devpod export\'
	*/
	"state"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1DevPodProviderOptionFrom {
	"projectSecretRef"?: V1SecretKeySelector;
	"sharedSecretRef"?: V1SecretKeySelector;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1DevPodProviderOption {
	/**
	* Value of this option.
	*/
	"value"?: string;
	"valueFrom"?: StorageV1DevPodProviderOptionFrom;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1DevPodWorkspaceInstanceTemplateDefinition {
	"metadata"?: StorageV1TemplateMetadata;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1DevPodWorkspaceProvider {
	/**
	* Env are environment options to set when using the provider.
	*/
	"env"?: {
		[key: string]: StorageV1DevPodProviderOption;
	};
	/**
	* Name is the name of the provider. This can also be an url.
	*/
	"name": string;
	/**
	* Options are the provider option values
	*/
	"options"?: {
		[key: string]: StorageV1DevPodProviderOption;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1SpaceInstanceTemplateDefinition {
	"metadata"?: StorageV1TemplateMetadata;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1SpaceTemplateDefinition {
	"access"?: StorageV1InstanceAccess;
	/**
	* Apps specifies the apps that should get deployed by this template
	*/
	"apps"?: Array<StorageV1AppReference>;
	/**
	* Charts are helm charts that should get deployed
	*/
	"charts"?: Array<StorageV1TemplateHelmChart>;
	"instanceTemplate"?: StorageV1SpaceInstanceTemplateDefinition;
	"metadata"?: StorageV1TemplateMetadata;
	/**
	* Objects are Kubernetes style yamls that should get deployed into the virtual cluster
	*/
	"objects"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1TemplateRef {
	/**
	* Name holds the name of the template to reference.
	*/
	"name"?: string;
	/**
	* SyncOnce tells the controller to sync the instance once with the template. This is useful if you want to sync an instance after a template was changed. To automatically sync an instance with a template, use \'x.x.x\' as version instead.
	*/
	"syncOnce"?: boolean;
	/**
	* Version holds the template version to use. Version is expected to be in semantic versioning format. Alternatively, you can also exchange major, minor or patch with an \'x\' to tell Loft to automatically select the latest major, minor or patch version.
	*/
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1DevPodWorkspaceTemplateDefinition {
	/**
	* GitCloneStrategy specifies how git based workspace are being cloned. Can be \"\" (full, default), treeless, blobless or shallow  Possible enum values:  - `\"\"`  - `\"blobless\"`  - `\"shallow\"`  - `\"treeless\"`
	*/
	"gitCloneStrategy"?: StorageV1DevPodWorkspaceTemplateDefinitionGitCloneStrategyEnum;
	/**
	* InitEnv are environment variables that should be available during the initialization phase of the created workspace.
	*/
	"initEnv"?: {
		[key: string]: StorageV1DevPodProviderOption;
	};
	"instanceTemplate"?: StorageV1DevPodWorkspaceInstanceTemplateDefinition;
	"provider": StorageV1DevPodWorkspaceProvider;
	"spaceTemplate"?: StorageV1SpaceTemplateDefinition;
	"spaceTemplateRef"?: StorageV1TemplateRef;
	/**
	* UseProjectGitCredentials specifies if the project git credentials should be used instead of local ones for this workspace
	*/
	"useProjectGitCredentials"?: boolean;
	/**
	* UseProjectSSHCredentials specifies if the project ssh credentials should be used instead of local ones for this workspace
	*/
	"useProjectSSHCredentials"?: boolean;
	/**
	* WorkspaceEnv are environment variables that should be available within the created workspace.
	*/
	"workspaceEnv"?: {
		[key: string]: StorageV1DevPodProviderOption;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum StorageV1DevPodWorkspaceTemplateDefinitionGitCloneStrategyEnum {
	Empty = "",
	Blobless = "blobless",
	Shallow = "shallow",
	Treeless = "treeless"
}
declare class StorageV1RunnerRef {
	/**
	* Runner is the connected runner the workspace will be created in
	*/
	"runner"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1DevPodWorkspaceInstanceSpec {
	/**
	* Access to the DevPod machine instance object itself
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* Description describes a DevPod machine instance
	*/
	"description"?: string;
	/**
	* DisplayName is the name that should be displayed in the UI
	*/
	"displayName"?: string;
	"owner"?: StorageV1UserOrTeam;
	/**
	* Parameters are values to pass to the template. The values should be encoded as YAML string where each parameter is represented as a top-level field key.
	*/
	"parameters"?: string;
	"runnerRef"?: StorageV1RunnerRef;
	"template"?: StorageV1DevPodWorkspaceTemplateDefinition;
	"templateRef"?: StorageV1TemplateRef;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1Condition {
	/**
	* Last time the condition transitioned from one status to another. This should be when the underlying condition changed. If that is not known, then using the time when the API field changed is acceptable.
	*/
	"lastTransitionTime": Date;
	/**
	* A human readable message indicating details about the transition. This field may be empty.
	*/
	"message"?: string;
	/**
	* The reason for the condition\'s last transition in CamelCase. The specific API may choose whether this field is considered a guaranteed API. This field may not be empty.
	*/
	"reason"?: string;
	/**
	* Severity provides an explicit classification of Reason code, so the users or machines can immediately understand the current situation and act accordingly. The Severity field MUST be set only when Status=False.
	*/
	"severity"?: string;
	/**
	* Status of the condition, one of True, False, Unknown.
	*/
	"status": string;
	/**
	* Type of condition in CamelCase or in foo.example.com/CamelCase. Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important.
	*/
	"type": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1DevPodWorkspaceInstanceStatus {
	/**
	* Conditions holds several conditions the DevPod machine might be in
	*/
	"conditions"?: Array<StorageV1Condition>;
	/**
	* IgnoreReconciliation ignores reconciliation for this object
	*/
	"ignoreReconciliation"?: boolean;
	"instance"?: StorageV1DevPodWorkspaceTemplateDefinition;
	/**
	* LastWorkspaceStatus is the last workspace status reported by the runner.
	*/
	"lastWorkspaceStatus"?: string;
	/**
	* Message describes the reason in human-readable form why the DevPod machine is in the current phase
	*/
	"message"?: string;
	/**
	* Phase describes the current phase the DevPod machine instance is in
	*/
	"phase"?: string;
	/**
	* Reason describes the reason in machine-readable form why the cluster is in the current phase
	*/
	"reason"?: string;
	"sleepModeConfig"?: ClusterV1SleepModeConfig;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1DevPodWorkspaceInstance {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1DevPodWorkspaceInstanceSpec;
	"status"?: ManagementV1DevPodWorkspaceInstanceStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1DevPodWorkspaceTemplateVersion {
	/**
	* Parameters define additional app parameters that will set provider values
	*/
	"parameters"?: Array<StorageV1AppParameter>;
	"template"?: StorageV1DevPodWorkspaceTemplateDefinition;
	/**
	* Version is the version. Needs to be in X.X.X format.
	*/
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1DevPodWorkspaceTemplateSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* Description describes the virtual cluster template
	*/
	"description"?: string;
	/**
	* DisplayName is the name that is shown in the UI
	*/
	"displayName"?: string;
	"owner"?: StorageV1UserOrTeam;
	/**
	* Parameters define additional app parameters that will set provider values
	*/
	"parameters"?: Array<StorageV1AppParameter>;
	"template"?: StorageV1DevPodWorkspaceTemplateDefinition;
	/**
	* Versions are different versions of the template that can be referenced as well
	*/
	"versions"?: Array<StorageV1DevPodWorkspaceTemplateVersion>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1DevPodWorkspaceTemplate {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1DevPodWorkspaceTemplateSpec;
	/**
	* DevPodWorkspaceTemplateStatus holds the status
	*/
	"status"?: any;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AccessKeyScopeCluster {
	/**
	* Cluster is the name of the cluster to access. You can specify * to select all clusters.
	*/
	"cluster"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AccessKeyScopeProject {
	/**
	* Project is the name of the project. You can specify * to select all projects.
	*/
	"project"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AccessKeyScopeRole {
	/**
	* Projects specifies the projects the access key should have access to.
	*/
	"projects"?: Array<string>;
	/**
	* Role is the name of the role to apply to the access key scope.  Possible enum values:  - `\"agent\"`  - `\"loft-cli\"`  - `\"network-peer\"`  - `\"runner\"`  - `\"vcluster\"`
	*/
	"role"?: StorageV1AccessKeyScopeRoleRoleEnum;
	/**
	* VirtualClusters specifies the virtual clusters the access key is allowed to access.
	*/
	"virtualClusters"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum StorageV1AccessKeyScopeRoleRoleEnum {
	Agent = "agent",
	LoftCli = "loft-cli",
	NetworkPeer = "network-peer",
	Runner = "runner",
	Vcluster = "vcluster"
}
declare class StorageV1AccessKeyVirtualCluster {
	/**
	* Name of the virtual cluster. Empty means all virtual clusters.
	*/
	"name"?: string;
	/**
	* Namespace of the virtual cluster. Empty means all namespaces.
	*/
	"namespace"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1GroupResources {
	/**
	* Group is the name of the API group that contains the resources. The empty string represents the core API group.
	*/
	"group"?: string;
	/**
	* ResourceNames is a list of resource instance names that the policy matches. Using this field requires Resources to be specified. An empty list implies that every instance of the resource is matched.
	*/
	"resourceNames"?: Array<string>;
	/**
	* Resources is a list of resources this rule applies to.  For example: \'pods\' matches pods. \'pods/log\' matches the log subresource of pods. \'*\' matches all resources and their subresources. \'pods/_*\' matches all subresources of pods. \'*_/scale\' matches all scale subresources.  If wildcard is present, the validation rule will ensure resources do not overlap with each other.  An empty list implies all resources and subresources in this API groups apply.
	*/
	"resources"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AccessKeyScopeRule {
	/**
	* Cluster that this rule matches. Only applies to cluster requests. If this is set, no requests for non cluster requests are allowed. An empty cluster means no restrictions will apply.
	*/
	"cluster"?: string;
	/**
	* Namespaces that this rule matches. The empty string \"\" matches non-namespaced resources. An empty list implies every namespace.
	*/
	"namespaces"?: Array<string>;
	/**
	* NonResourceURLs is a set of URL paths that should be checked. *s are allowed, but only as the full, final step in the path. Examples:  \"/metrics\" - Log requests for apiserver metrics  \"/healthz*\" - Log all health checks
	*/
	"nonResourceURLs"?: Array<string>;
	/**
	* RequestTargets is a list of request targets that are allowed. An empty list implies every request.
	*/
	"requestTargets"?: Array<string>;
	/**
	* Resources that this rule matches. An empty list implies all kinds in all API groups.
	*/
	"resources"?: Array<StorageV1GroupResources>;
	/**
	* The verbs that match this rule. An empty list implies every verb.
	*/
	"verbs"?: Array<string>;
	/**
	* VirtualClusters that this rule matches. Only applies to virtual cluster requests. An empty list means no restrictions will apply.
	*/
	"virtualClusters"?: Array<StorageV1AccessKeyVirtualCluster>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AccessKeyScopeSpace {
	/**
	* Project is the name of the project.
	*/
	"project"?: string;
	/**
	* Space is the name of the space. You can specify * to select all spaces.
	*/
	"space"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AccessKeyScopeVirtualCluster {
	/**
	* Project is the name of the project.
	*/
	"project"?: string;
	/**
	* VirtualCluster is the name of the virtual cluster to access. You can specify * to select all virtual clusters.
	*/
	"virtualCluster"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AccessKeyScope {
	/**
	* AllowLoftCLI allows certain read-only management requests to make sure loft cli works correctly with this specific access key.  Deprecated: Use the `roles` field instead  ```yaml  # Example:  roles:    - role: loftCLI  ```
	*/
	"allowLoftCli"?: boolean;
	/**
	* Clusters specifies the project cluster the access key is allowed to access.
	*/
	"clusters"?: Array<StorageV1AccessKeyScopeCluster>;
	/**
	* Projects specifies the projects the access key should have access to.
	*/
	"projects"?: Array<StorageV1AccessKeyScopeProject>;
	/**
	* Roles is a set of managed permissions to apply to the access key.
	*/
	"roles"?: Array<StorageV1AccessKeyScopeRole>;
	/**
	* DEPRECATED: Use Projects, Spaces and VirtualClusters instead Rules specifies the rules that should apply to the access key.
	*/
	"rules"?: Array<StorageV1AccessKeyScopeRule>;
	/**
	* Spaces specifies the spaces the access key is allowed to access.
	*/
	"spaces"?: Array<StorageV1AccessKeyScopeSpace>;
	/**
	* VirtualClusters specifies the virtual clusters the access key is allowed to access.
	*/
	"virtualClusters"?: Array<StorageV1AccessKeyScopeVirtualCluster>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1DirectClusterEndpointTokenSpec {
	"scope"?: StorageV1AccessKeyScope;
	/**
	* The time to life for this access token in seconds
	*/
	"ttl"?: number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1DirectClusterEndpointTokenStatus {
	"token"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1DirectClusterEndpointToken {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1DirectClusterEndpointTokenSpec;
	"status"?: ManagementV1DirectClusterEndpointTokenStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1EventStatus {
	/**
	* Annotations is an unstructured key value map stored with an audit event that may be set by plugins invoked in the request serving chain, including authentication, authorization and admission plugins. Note that these annotations are for the audit event, and do not correspond to the metadata.annotations of the submitted object. Keys should uniquely identify the informing component to avoid name collisions (e.g. podsecuritypolicy.admission.k8s.io/policy). Values should be short. Annotations are included in the Metadata level.
	*/
	"annotations"?: {
		[key: string]: string;
	};
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Unique audit ID, generated for each request.
	*/
	"auditID": string;
	"impersonatedUser"?: V1UserInfo;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	/**
	* AuditLevel at which event was generated
	*/
	"level": string;
	"objectRef"?: AuditV1ObjectReference;
	"requestObject"?: RuntimeUnknown;
	/**
	* MicroTime is version of Time with microsecond level precision.
	*/
	"requestReceivedTimestamp"?: Date;
	/**
	* RequestURI is the request URI as sent by the client to a server.
	*/
	"requestURI": string;
	"responseObject"?: RuntimeUnknown;
	"responseStatus"?: V1Status;
	/**
	* Source IPs, from where the request originated and intermediate proxies.
	*/
	"sourceIPs"?: Array<string>;
	/**
	* Stage of the request handling when this event instance was generated.
	*/
	"stage": string;
	/**
	* MicroTime is version of Time with microsecond level precision.
	*/
	"stageTimestamp"?: Date;
	"user": V1UserInfo;
	/**
	* UserAgent records the user agent string reported by the client. Note that the UserAgent is provided by the client, and must not be trusted.
	*/
	"userAgent"?: string;
	/**
	* Verb is the kubernetes verb associated with the request. For non-resource requests, this is the lower-cased HTTP method.
	*/
	"verb": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Event {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* EventSpec holds the specification
	*/
	"spec"?: any;
	"status"?: ManagementV1EventStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1FeatureStatus {
	/**
	* Compatibility contains a series of semver compatibility constraints
	*/
	"compatibility"?: string;
	"description"?: string;
	"displayName"?: string;
	/**
	* Internal marks internal features that should not be shown on the license view
	*/
	"internal"?: boolean;
	/**
	* Labels contains a list of labels to be displayed for this feature (e.g. alpha, beta)
	*/
	"labels"?: Array<string>;
	/**
	* Name is the name of the feature (FeatureName) This cannot be FeatureName because it needs to be downward compatible e.g. older Loft version doesn\'t know a newer feature but it will still be received and still needs to be rendered in the license view
	*/
	"name": string;
	/**
	* Status shows the status of the feature (see type FeatureStatus)
	*/
	"status"?: string;
	/**
	* Used marks features that are currently used in the product
	*/
	"used"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Feature {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* FeatureSpec holds the specification
	*/
	"spec"?: any;
	"status"?: ManagementV1FeatureStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1IngressAuthTokenSpec {
	/**
	* Host is the host where the UI should get redirected
	*/
	"host"?: string;
	/**
	* Signature is the signature of the agent for the host
	*/
	"signature"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1IngressAuthTokenStatus {
	"token"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1IngressAuthToken {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1IngressAuthTokenSpec;
	"status"?: ManagementV1IngressAuthTokenStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiRequest {
	/**
	* Group is the api group.
	*/
	"group"?: string;
	/**
	* Resource is the resource name for the request.
	*/
	"resource"?: string;
	/**
	* Verbs is the list of verbs for the request.
	*/
	"verbs"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiAnalytics {
	/**
	* Endpoint is the endpoint for the analytics server.
	*/
	"endpoint"?: string;
	/**
	* Requests is a slice of requested resources to return analytics for.
	*/
	"requests"?: Array<LicenseApiRequest>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiResourceCount {
	/**
	* Active specifies the number of currently active resource (non-sleeping).
	*/
	"active"?: number;
	/**
	* TotalCreated is a continuous counter of the amount of resources ever created.
	*/
	"created"?: number;
	/**
	* Total specifies the number of currently existing resources.
	*/
	"total"?: number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiBlockRequest {
	/**
	* Group is the api group.
	*/
	"group"?: string;
	"overage"?: LicenseApiResourceCount;
	/**
	* Resource is the resource name for the request.
	*/
	"resource"?: string;
	/**
	* Verbs is the list of verbs for the request.
	*/
	"verbs"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiLicenseAPIRoute {
	/**
	* Tells the frontend whether to make a direct request or to make it via the backend (via generic license api request)
	*/
	"direct"?: boolean;
	"method"?: string;
	"url"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiLicenseAPIRoutes {
	"chatAuth"?: LicenseApiLicenseAPIRoute;
	"checkout"?: LicenseApiLicenseAPIRoute;
	"featureDetails"?: LicenseApiLicenseAPIRoute;
	"featurePreview"?: LicenseApiLicenseAPIRoute;
	"featureSetup"?: LicenseApiLicenseAPIRoute;
	"moduleActivation"?: LicenseApiLicenseAPIRoute;
	"modulePreview"?: LicenseApiLicenseAPIRoute;
	"portal"?: LicenseApiLicenseAPIRoute;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiFeature {
	/**
	* Compatibility contains a series of semver compatibility constraints
	*/
	"compatibility"?: string;
	"description"?: string;
	"displayName"?: string;
	/**
	* Labels contains a list of labels to be displayed for this feature (e.g. alpha, beta)
	*/
	"labels"?: Array<string>;
	/**
	* Name is the name of the feature (FeatureName) This cannot be FeatureName because it needs to be downward compatible e.g. older Loft version doesn\'t know a newer feature but it will still be received and still needs to be rendered in the license view
	*/
	"name": string;
	/**
	* Status shows the status of the feature (see type FeatureStatus)
	*/
	"status"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiLimit {
	/**
	* DisplayName is for display purposes.
	*/
	"displayName"?: string;
	/**
	* Name is the name of the resource (ResourceName)
	*/
	"name"?: string;
	"quantity"?: LicenseApiResourceCount;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiModule {
	"displayName"?: string;
	"features"?: Array<LicenseApiFeature>;
	"limits"?: Array<LicenseApiLimit>;
	/**
	* Name of the module (ModuleName)
	*/
	"name": string;
	"status"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiInvoice {
	/**
	* Currency specifies the currency of Total in 3-character ISO 4217 code Default is: \"\" (representing USD)
	*/
	"currency"?: string;
	/**
	* Date contains the unix timestamp marking the date this invoices was or will be created
	*/
	"date"?: number;
	/**
	* Total is the total of the invoice
	*/
	"total"?: number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiPlanPeriod {
	/**
	* CurrentPeriodEnd contains the unix timestamp marking the end of the current period
	*/
	"end"?: number;
	/**
	* CurrentPeriodStart contains the unix timestamp marking the start of the current period
	*/
	"start"?: number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiPlanExpiration {
	/**
	* ExpiresAt is the unix timestamp of when the plan expires
	*/
	"expiresAt"?: number;
	/**
	* UpgradesTo states the name of the plan that is replacing the current one upon its expiration If this is nil, then this plan just expires (i.e. the subscription may be canceled, paused, etc.)
	*/
	"upgradesTo"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiPriceTier {
	/**
	* Currency specifies the currency of UnitPrice and FlatFee in 3-character ISO 4217 code Default is: \"\" (representing USD)
	*/
	"currency"?: string;
	/**
	* FlatFee is the flat fee for this tier
	*/
	"flatFee"?: number;
	/**
	* MaxQuantity is the max quantity that can be purchased
	*/
	"max"?: number;
	/**
	* MinQuantity is the quantity included in this plan
	*/
	"min"?: number;
	/**
	* UnitPrice is the price per unit in this tier
	*/
	"unitPrice"?: number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiTierResource {
	/**
	* Name of the resource (ResourceName)
	*/
	"name"?: string;
	/**
	* Status defines which resources will be counted towards the limit (e.g. active, total, total created etc.)
	*/
	"status"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiPlanPrice {
	"exp"?: LicenseApiPlanExpiration;
	/**
	* ID of the price
	*/
	"id"?: string;
	/**
	* Interval contains the time span of each period (e.g. month, year)
	*/
	"interval"?: string;
	/**
	* IntervalCount specifies if the number of intervals (e.g. 3 [months])
	*/
	"intervalCount"?: number;
	/**
	* Quantity sets the quantity the TierResource is supposed to be at If this is the active price, then this is the subscription quantity (currently purchased quantity)
	*/
	"quantity"?: number;
	"resource"?: LicenseApiTierResource;
	/**
	* Status is the status of the price (PlanStatus) If the plan is active, one of its prices must be active as well
	*/
	"status"?: string;
	/**
	* TierMode defines how tiers should be used
	*/
	"tierMode"?: string;
	/**
	* Tiers is a list of tiers in this plan
	*/
	"tiers"?: Array<LicenseApiPriceTier>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiTrial {
	/**
	* DisplayName is a display name for the trial
	*/
	"displayName"?: string;
	/**
	* DowngradesTo states the name of the plan that is replacing the current one once the trial expires If this is nil, then this plan just expires (i.e. the subscription may be canceled, paused, etc.)
	*/
	"downgradesTo"?: string;
	/**
	* End is the unix timestamp stating when the trial will end or ended
	*/
	"end"?: number;
	/**
	* ID is the unique id of this trial
	*/
	"id"?: string;
	/**
	* Start is the unix timestamp stating when the trial was started
	*/
	"start"?: number;
	/**
	* Status is the status of this trial (TrialStatus)
	*/
	"status"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiPlan {
	/**
	* AddOns are plans that can be added to this plan
	*/
	"addons"?: Array<LicenseApiPlan>;
	/**
	* DisplayName is the display name of the plan
	*/
	"displayName"?: string;
	/**
	* Features is a list of features included in the plan
	*/
	"features"?: Array<string>;
	/**
	* ID of the plan
	*/
	"id"?: string;
	"invoice"?: LicenseApiInvoice;
	/**
	* Limits is a list of resources included in the plan and their limits
	*/
	"limits"?: Array<LicenseApiLimit>;
	"period"?: LicenseApiPlanPeriod;
	/**
	* Prices provides details about the available prices (depending on the interval, for example)
	*/
	"prices"?: Array<LicenseApiPlanPrice>;
	/**
	* Status is the status of the plan There should only be 1 active plan at the top-level (not including AddOns) The respective price in Prices will have the active status as well
	*/
	"status"?: string;
	"trial"?: LicenseApiTrial;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiLicense {
	"analytics"?: LicenseApiAnalytics;
	/**
	* Announcements is a map string/string such that we can easily add any additional data without needing to change types. For now, we will use the keys \"name\" and \"content\".
	*/
	"announcement"?: Array<LicenseApiAnnouncement>;
	/**
	* BlockRequests specifies which requests the product should block when a limit is exceeded.
	*/
	"block"?: Array<LicenseApiBlockRequest>;
	/**
	* Buttons is a slice of license server endpoints (buttons) that the Loft instance may need to hit. Each Button contains the display text and link for the front end to work with.
	*/
	"buttons"?: Array<LicenseApiButton>;
	/**
	* DomainToken holds the JWT with the URL that the Loft instance is publicly available on. (via Loft router)
	*/
	"domainToken"?: string;
	/**
	* InstanceID contains the instance id of the Loft instance
	*/
	"instance"?: string;
	/**
	* IsOffline indicates if the license is an offline license or not.
	*/
	"isOffline"?: boolean;
	/**
	* Modules is a list of modules.
	*/
	"modules"?: Array<LicenseApiModule>;
	/**
	* Plans contains a list of plans
	*/
	"plans"?: Array<LicenseApiPlan>;
	"routes"?: LicenseApiLicenseAPIRoutes;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1LicenseStatus {
	"license"?: LicenseApiLicense;
	/**
	* ResourceUsage shows the current usage of license limit.
	*/
	"resourceUsage"?: {
		[key: string]: LicenseApiResourceCount;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1License {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: any;
	"status"?: ManagementV1LicenseStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class UiV1UISettingsSpec {
	/**
	* AccentColor is the color value (ex: \"#12345\") to use for the accent
	*/
	"accentColor"?: string;
	/**
	* CustomCSS holds URLs with custom css files that should be included when loading the UI
	*/
	"customCss"?: Array<string>;
	/**
	* CustomJavaScript holds URLs with custom js files that should be included when loading the UI
	*/
	"customJavaScript"?: Array<string>;
	/**
	* DefaultVClusterVersion is the default version of vClusters
	*/
	"defaultVClusterVersion"?: string;
	/**
	* HasHelmRelease indicates whether loft has been installed via Helm
	*/
	"hasHelmRelease"?: boolean;
	/**
	* LegalTemplate is a text (html) string containing the legal template to prompt to users when authenticating to Loft
	*/
	"legalTemplate"?: string;
	/**
	* LoftVersion holds the current loft version
	*/
	"loftVersion"?: string;
	/**
	* LogoBackgroundColor is the color value (ex: \"#12345\") to use as the background color for the logo
	*/
	"logoBackgroundColor"?: string;
	/**
	* LogoURL is url pointing to the logo to use in the Loft UI. This path must be accessible for clients accessing the Loft UI!
	*/
	"logoURL"?: string;
	/**
	* NavBarButtons holds extra nav bar buttons
	*/
	"navBarButtons"?: Array<UiV1NavBarButton>;
	/**
	* Offline is true if loft is running in an airgapped environment
	*/
	"offline"?: boolean;
	/**
	* PrimaryColor is the color value (ex: \"#12345\") to use as the primary color
	*/
	"primaryColor"?: string;
	/**
	* Name is the name of the product
	*/
	"productName"?: string;
	/**
	* SidebarColor is the color value (ex: \"#12345\") to use for the sidebar
	*/
	"sidebarColor"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class UiV1UISettings {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: UiV1UISettingsSpec;
	/**
	* UISettingsStatus holds the status
	*/
	"status"?: any;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1KioskSpec {
	"UISettings"?: UiV1UISettings;
	"chartInfo"?: ClusterV1ChartInfo;
	"helmRelease"?: ClusterV1HelmRelease;
	"license"?: ManagementV1License;
	"sleepModeConfig"?: ClusterV1SleepModeConfig;
	"storageClusterQuota"?: StorageV1ClusterQuota;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Kiosk {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1KioskSpec;
	"status"?: any;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiGenericRequestInput {
	/**
	* Payload provides the json encoded payload
	*/
	"payload"?: string;
	/**
	* ReturnURL is the url from which the request is initiated
	*/
	"returnURL"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1LicenseRequestSpec {
	"input"?: LicenseApiGenericRequestInput;
	/**
	* URL is the url for the request.
	*/
	"url"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiGenericRequestOutput {
	/**
	* Buttons to be shown to the user alongside other content (e.g. HTML).
	*/
	"buttons"?: Array<LicenseApiButton>;
	/**
	* HTML to display to the user.
	*/
	"html"?: string;
	/**
	* RedirectURL to redirect the user to.
	*/
	"redirectURL"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1LicenseRequestStatus {
	"output"?: LicenseApiGenericRequestOutput;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1LicenseRequest {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1LicenseRequestSpec;
	"status"?: ManagementV1LicenseRequestStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1LicenseTokenSpec {
	"payload"?: string;
	"url"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class LicenseApiInstanceTokenAuth {
	/**
	* Certificate is the signing certificate for the token.
	*/
	"certificate": string;
	/**
	* Token is the jwt token identifying the loft instance.
	*/
	"token": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1LicenseTokenStatus {
	"token"?: LicenseApiInstanceTokenAuth;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1LicenseToken {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1LicenseTokenSpec;
	"status"?: ManagementV1LicenseTokenStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1LoftUpgradeSpec {
	/**
	* If specified, updated the release in the given namespace
	*/
	"namespace"?: string;
	/**
	* If specified, uses this as release name
	*/
	"release"?: string;
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1LoftUpgrade {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1LoftUpgradeSpec;
	"status"?: any;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1OIDCClient {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1OIDCClientSpec;
	/**
	* OIDCClientStatus holds the status
	*/
	"status"?: any;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AccessKeyIdentity {
	/**
	* Connector is the name of the connector this access key was created from
	*/
	"connector"?: string;
	/**
	* ConnectorData holds data used by the connector for subsequent requests after initial authentication, such as access tokens for upstream providers.  This data is never shared with end users, OAuth clients, or through the API.
	*/
	"connectorData"?: string;
	/**
	* The user email
	*/
	"email"?: string;
	/**
	* If the user email was verified
	*/
	"emailVerified"?: boolean;
	/**
	* The groups from the identity provider
	*/
	"groups"?: Array<string>;
	/**
	* The preferred username / display name
	*/
	"preferredUsername"?: string;
	/**
	* The subject of the user
	*/
	"userId"?: string;
	/**
	* The username
	*/
	"username"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AccessKeyOIDC {
	/**
	* The current access token that was created during login
	*/
	"accessToken"?: string;
	/**
	* The current id token that was created during login
	*/
	"idToken"?: string;
	/**
	* The last time the id token was refreshed
	*/
	"lastRefresh"?: Date;
	/**
	* The current refresh token that was created during login
	*/
	"refreshToken"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AccessKeyOIDCProvider {
	/**
	* ClientId the token was generated for
	*/
	"clientId"?: string;
	/**
	* Nonce to use
	*/
	"nonce"?: string;
	/**
	* RedirectUri to use
	*/
	"redirectUri"?: string;
	/**
	* Scopes to use
	*/
	"scopes"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1OwnedAccessKeySpec {
	/**
	* Description describes an app
	*/
	"description"?: string;
	/**
	* If this field is true, the access key is still allowed to exist, however will not work to access the api
	*/
	"disabled"?: boolean;
	/**
	* The display name shown in the UI
	*/
	"displayName"?: string;
	/**
	* Groups specifies extra groups to apply when using this access key
	*/
	"groups"?: Array<string>;
	"identity"?: StorageV1AccessKeyIdentity;
	/**
	* The last time the identity was refreshed
	*/
	"identityRefresh"?: Date;
	/**
	* The actual access key that will be used as a bearer token
	*/
	"key"?: string;
	"oidcLogin"?: StorageV1AccessKeyOIDC;
	"oidcProvider"?: StorageV1AccessKeyOIDCProvider;
	/**
	* DEPRECATED: do not use anymore Parent is used to share OIDC and external token information with multiple access keys. Since copying an OIDC refresh token would result in the other access keys becoming invalid after a refresh parent allows access keys to share that information.  The use case for this is primarily user generated access keys, which will have the users current access key as parent if it contains an OIDC token.
	*/
	"parent"?: string;
	"scope"?: StorageV1AccessKeyScope;
	/**
	* Subject is a generic subject that can be used instead of user or team
	*/
	"subject"?: string;
	/**
	* The team this access key refers to
	*/
	"team"?: string;
	/**
	* The time to life for this access key
	*/
	"ttl"?: number;
	/**
	* If this is specified, the time to life for this access key will start after the lastActivity instead of creation timestamp
	*/
	"ttlAfterLastActivity"?: boolean;
	/**
	* The type of an access key, which basically describes if the access key is user managed or managed by loft itself.
	*/
	"type"?: string;
	/**
	* The user this access key refers to
	*/
	"user"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1OwnedAccessKeyStatus {
	/**
	* The last time this access key was used to access the api
	*/
	"lastActivity"?: Date;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1OwnedAccessKey {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1OwnedAccessKeySpec;
	"status"?: ManagementV1OwnedAccessKeyStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectChartInfoSpec {
	"chart"?: ClusterV1Chart;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectChartInfoStatus {
	"metadata"?: ClusterV1Metadata;
	/**
	* Readme is the readme of the chart
	*/
	"readme"?: string;
	/**
	* Values are the default values of the chart
	*/
	"values"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectChartInfo {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1ProjectChartInfoSpec;
	"status"?: ManagementV1ProjectChartInfoStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectCharts {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Busy will indicate if the chart parsing is still in progress.
	*/
	"busy"?: boolean;
	/**
	* Holds the available helm charts for this cluster
	*/
	"charts": Array<StorageV1HelmChart>;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1RunnerPersistentVolumeClaimTemplateSpec {
	/**
	* accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
	*/
	"accessModes"?: Array<StorageV1RunnerPersistentVolumeClaimTemplateSpecAccessModesEnum>;
	/**
	* storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
	*/
	"storageClassName"?: string;
	/**
	* storageSize is the size of the storage to reserve for the pvc
	*/
	"storageSize"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum StorageV1RunnerPersistentVolumeClaimTemplateSpecAccessModesEnum {
	ReadOnlyMany = "ReadOnlyMany",
	ReadWriteMany = "ReadWriteMany",
	ReadWriteOnce = "ReadWriteOnce",
	ReadWriteOncePod = "ReadWriteOncePod"
}
declare class StorageV1RunnerPersistentVolumeClaimTemplate {
	"metadata"?: StorageV1TemplateMetadata;
	"spec"?: StorageV1RunnerPersistentVolumeClaimTemplateSpec;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1NodeSelectorRequirement {
	/**
	* The label key that the selector applies to.
	*/
	"key": string;
	/**
	* Represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.  Possible enum values:  - `\"DoesNotExist\"`  - `\"Exists\"`  - `\"Gt\"`  - `\"In\"`  - `\"Lt\"`  - `\"NotIn\"`
	*/
	"operator": V1NodeSelectorRequirementOperatorEnum;
	/**
	* An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
	*/
	"values"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1NodeSelectorRequirementOperatorEnum {
	DoesNotExist = "DoesNotExist",
	Exists = "Exists",
	Gt = "Gt",
	In = "In",
	Lt = "Lt",
	NotIn = "NotIn"
}
declare class V1NodeSelectorTerm {
	/**
	* A list of node selector requirements by node\'s labels.
	*/
	"matchExpressions"?: Array<V1NodeSelectorRequirement>;
	/**
	* A list of node selector requirements by node\'s fields.
	*/
	"matchFields"?: Array<V1NodeSelectorRequirement>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1NodeSelector {
	/**
	* Required. A list of node selector terms. The terms are ORed.
	*/
	"nodeSelectorTerms": Array<V1NodeSelectorTerm>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1PreferredSchedulingTerm {
	"preference": V1NodeSelectorTerm;
	/**
	* Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
	*/
	"weight": number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1NodeAffinity {
	/**
	* The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
	*/
	"preferredDuringSchedulingIgnoredDuringExecution"?: Array<V1PreferredSchedulingTerm>;
	"requiredDuringSchedulingIgnoredDuringExecution"?: V1NodeSelector;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1PodAffinityTerm {
	"labelSelector"?: V1LabelSelector;
	/**
	* MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod\'s pod (anti) affinity. Keys that don\'t exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn\'t set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
	*/
	"matchLabelKeys"?: Array<string>;
	/**
	* MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod\'s pod (anti) affinity. Keys that don\'t exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn\'t set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
	*/
	"mismatchLabelKeys"?: Array<string>;
	"namespaceSelector"?: V1LabelSelector;
	/**
	* namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means \"this pod\'s namespace\".
	*/
	"namespaces"?: Array<string>;
	/**
	* This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
	*/
	"topologyKey": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1WeightedPodAffinityTerm {
	"podAffinityTerm": V1PodAffinityTerm;
	/**
	* weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
	*/
	"weight": number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1PodAffinity {
	/**
	* The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
	*/
	"preferredDuringSchedulingIgnoredDuringExecution"?: Array<V1WeightedPodAffinityTerm>;
	/**
	* If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
	*/
	"requiredDuringSchedulingIgnoredDuringExecution"?: Array<V1PodAffinityTerm>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1PodAntiAffinity {
	/**
	* The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
	*/
	"preferredDuringSchedulingIgnoredDuringExecution"?: Array<V1WeightedPodAffinityTerm>;
	/**
	* If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
	*/
	"requiredDuringSchedulingIgnoredDuringExecution"?: Array<V1PodAffinityTerm>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1Affinity {
	"nodeAffinity"?: V1NodeAffinity;
	"podAffinity"?: V1PodAffinity;
	"podAntiAffinity"?: V1PodAntiAffinity;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ContainerPort {
	/**
	* Number of port to expose on the pod\'s IP address. This must be a valid port number, 0 < x < 65536.
	*/
	"containerPort": number;
	/**
	* What host IP to bind the external port to.
	*/
	"hostIP"?: string;
	/**
	* Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
	*/
	"hostPort"?: number;
	/**
	* If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
	*/
	"name"?: string;
	/**
	* Protocol for port. Must be UDP, TCP, or SCTP. Defaults to \"TCP\".  Possible enum values:  - `\"SCTP\"` is the SCTP protocol.  - `\"TCP\"` is the TCP protocol.  - `\"UDP\"` is the UDP protocol.
	*/
	"protocol"?: V1ContainerPortProtocolEnum;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1ContainerPortProtocolEnum {
	Sctp = "SCTP",
	Tcp = "TCP",
	Udp = "UDP"
}
declare class V1ContainerResizePolicy {
	/**
	* Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
	*/
	"resourceName": string;
	/**
	* Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
	*/
	"restartPolicy": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ConfigMapEnvSource {
	/**
	* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
	*/
	"name"?: string;
	/**
	* Specify whether the ConfigMap must be defined
	*/
	"optional"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1SecretEnvSource {
	/**
	* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
	*/
	"name"?: string;
	/**
	* Specify whether the Secret must be defined
	*/
	"optional"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1EnvFromSource {
	"configMapRef"?: V1ConfigMapEnvSource;
	/**
	* An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
	*/
	"prefix"?: string;
	"secretRef"?: V1SecretEnvSource;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ConfigMapKeySelector {
	/**
	* The key to select.
	*/
	"key": string;
	/**
	* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
	*/
	"name"?: string;
	/**
	* Specify whether the ConfigMap or its key must be defined
	*/
	"optional"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ObjectFieldSelector {
	/**
	* Version of the schema the FieldPath is written in terms of, defaults to \"v1\".
	*/
	"apiVersion"?: string;
	/**
	* Path of the field to select in the specified API version.
	*/
	"fieldPath": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ResourceFieldSelector {
	/**
	* Container name: required for volumes, optional for env vars
	*/
	"containerName"?: string;
	/**
	* Specifies the output format of the exposed resources, defaults to \"1\"
	*/
	"divisor"?: string;
	/**
	* Required: resource to select
	*/
	"resource": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1EnvVarSource {
	"configMapKeyRef"?: V1ConfigMapKeySelector;
	"fieldRef"?: V1ObjectFieldSelector;
	"resourceFieldRef"?: V1ResourceFieldSelector;
	"secretKeyRef"?: V1SecretKeySelector;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1EnvVar {
	/**
	* Name of the environment variable. Must be a C_IDENTIFIER.
	*/
	"name": string;
	/**
	* Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to \"\".
	*/
	"value"?: string;
	"valueFrom"?: V1EnvVarSource;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ExecAction {
	/**
	* Command is the command line to execute inside the container, the working directory for the command  is root (\'/\') in the container\'s filesystem. The command is simply exec\'d, it is not run inside a shell, so traditional shell instructions (\'|\', etc) won\'t work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
	*/
	"command"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
export type IntOrString = number | string;
declare class V1HTTPHeader {
	/**
	* The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
	*/
	"name": string;
	/**
	* The header field value
	*/
	"value": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1HTTPGetAction {
	/**
	* Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.
	*/
	"host"?: string;
	/**
	* Custom headers to set in the request. HTTP allows repeated headers.
	*/
	"httpHeaders"?: Array<V1HTTPHeader>;
	/**
	* Path to access on the HTTP server.
	*/
	"path"?: string;
	/**
	* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
	*/
	"port": IntOrString;
	/**
	* Scheme to use for connecting to the host. Defaults to HTTP.  Possible enum values:  - `\"HTTP\"` means that the scheme used will be http://  - `\"HTTPS\"` means that the scheme used will be https://
	*/
	"scheme"?: V1HTTPGetActionSchemeEnum;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1HTTPGetActionSchemeEnum {
	Http = "HTTP",
	Https = "HTTPS"
}
declare class V1SleepAction {
	/**
	* Seconds is the number of seconds to sleep.
	*/
	"seconds": number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1TCPSocketAction {
	/**
	* Optional: Host name to connect to, defaults to the pod IP.
	*/
	"host"?: string;
	/**
	* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
	*/
	"port": IntOrString;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1LifecycleHandler {
	"exec"?: V1ExecAction;
	"httpGet"?: V1HTTPGetAction;
	"sleep"?: V1SleepAction;
	"tcpSocket"?: V1TCPSocketAction;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1Lifecycle {
	"postStart"?: V1LifecycleHandler;
	"preStop"?: V1LifecycleHandler;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1GRPCAction {
	/**
	* Port number of the gRPC service. Number must be in the range 1 to 65535.
	*/
	"port": number;
	/**
	* Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).  If this is not specified, the default behavior is defined by gRPC.
	*/
	"service"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1Probe {
	"exec"?: V1ExecAction;
	/**
	* Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
	*/
	"failureThreshold"?: number;
	"grpc"?: V1GRPCAction;
	"httpGet"?: V1HTTPGetAction;
	/**
	* Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
	*/
	"initialDelaySeconds"?: number;
	/**
	* How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
	*/
	"periodSeconds"?: number;
	/**
	* Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
	*/
	"successThreshold"?: number;
	"tcpSocket"?: V1TCPSocketAction;
	/**
	* Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod\'s terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
	*/
	"terminationGracePeriodSeconds"?: number;
	/**
	* Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
	*/
	"timeoutSeconds"?: number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ResourceClaim {
	/**
	* Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
	*/
	"name": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ResourceRequirements {
	/**
	* Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.  This field is immutable. It can only be set for containers.
	*/
	"claims"?: Array<V1ResourceClaim>;
	/**
	* Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
	*/
	"limits"?: {
		[key: string]: string;
	};
	/**
	* Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
	*/
	"requests"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1AppArmorProfile {
	/**
	* localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is \"Localhost\".
	*/
	"localhostProfile"?: string;
	/**
	* type indicates which kind of AppArmor profile will be applied. Valid options are:   Localhost - a profile pre-loaded on the node.   RuntimeDefault - the container runtime\'s default profile.   Unconfined - no AppArmor enforcement.  Possible enum values:  - `\"Localhost\"` indicates that a profile pre-loaded on the node should be used.  - `\"RuntimeDefault\"` indicates that the container runtime\'s default AppArmor profile should be used.  - `\"Unconfined\"` indicates that no AppArmor profile should be enforced.
	*/
	"type": V1AppArmorProfileTypeEnum;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1AppArmorProfileTypeEnum {
	Localhost = "Localhost",
	RuntimeDefault = "RuntimeDefault",
	Unconfined = "Unconfined"
}
declare class V1Capabilities {
	/**
	* Added capabilities
	*/
	"add"?: Array<string>;
	/**
	* Removed capabilities
	*/
	"drop"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1SELinuxOptions {
	/**
	* Level is SELinux level label that applies to the container.
	*/
	"level"?: string;
	/**
	* Role is a SELinux role label that applies to the container.
	*/
	"role"?: string;
	/**
	* Type is a SELinux type label that applies to the container.
	*/
	"type"?: string;
	/**
	* User is a SELinux user label that applies to the container.
	*/
	"user"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1SeccompProfile {
	/**
	* localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet\'s configured seccomp profile location. Must be set if type is \"Localhost\". Must NOT be set for any other type.
	*/
	"localhostProfile"?: string;
	/**
	* type indicates which kind of seccomp profile will be applied. Valid options are:  Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.  Possible enum values:  - `\"Localhost\"` indicates a profile defined in a file on the node should be used. The file\'s location relative to <kubelet-root-dir>/seccomp.  - `\"RuntimeDefault\"` represents the default container runtime seccomp profile.  - `\"Unconfined\"` indicates no seccomp profile is applied (A.K.A. unconfined).
	*/
	"type": V1SeccompProfileTypeEnum;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1SeccompProfileTypeEnum {
	Localhost = "Localhost",
	RuntimeDefault = "RuntimeDefault",
	Unconfined = "Unconfined"
}
declare class V1WindowsSecurityContextOptions {
	/**
	* GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
	*/
	"gmsaCredentialSpec"?: string;
	/**
	* GMSACredentialSpecName is the name of the GMSA credential spec to use.
	*/
	"gmsaCredentialSpecName"?: string;
	/**
	* HostProcess determines if a container should be run as a \'Host Process\' container. All of a Pod\'s containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
	*/
	"hostProcess"?: boolean;
	/**
	* The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
	*/
	"runAsUserName"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1SecurityContext {
	/**
	* AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
	*/
	"allowPrivilegeEscalation"?: boolean;
	"appArmorProfile"?: V1AppArmorProfile;
	"capabilities"?: V1Capabilities;
	/**
	* Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
	*/
	"privileged"?: boolean;
	/**
	* procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.  Possible enum values:  - `\"Default\"` uses the container runtime defaults for readonly and masked paths for /proc. Most container runtimes mask certain paths in /proc to avoid accidental security exposure of special devices or information.  - `\"Unmasked\"` bypasses the default masking behavior of the container runtime and ensures the newly created /proc the container stays in tact with no modifications.
	*/
	"procMount"?: V1SecurityContextProcMountEnum;
	/**
	* Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
	*/
	"readOnlyRootFilesystem"?: boolean;
	/**
	* The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
	*/
	"runAsGroup"?: number;
	/**
	* Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
	*/
	"runAsNonRoot"?: boolean;
	/**
	* The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
	*/
	"runAsUser"?: number;
	"seLinuxOptions"?: V1SELinuxOptions;
	"seccompProfile"?: V1SeccompProfile;
	"windowsOptions"?: V1WindowsSecurityContextOptions;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1SecurityContextProcMountEnum {
	Default = "Default",
	Unmasked = "Unmasked"
}
declare class V1VolumeDevice {
	/**
	* devicePath is the path inside of the container that the device will be mapped to.
	*/
	"devicePath": string;
	/**
	* name must match the name of a persistentVolumeClaim in the pod
	*/
	"name": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1VolumeMount {
	/**
	* Path within the container at which the volume should be mounted.  Must not contain \':\'.
	*/
	"mountPath": string;
	/**
	* mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).  Possible enum values:  - `\"Bidirectional\"` means that the volume in a container will receive new mounts from the host or other containers, and its own mounts will be propagated from the container to the host or other containers. Note that this mode is recursively applied to all mounts in the volume (\"rshared\" in Linux terminology).  - `\"HostToContainer\"` means that the volume in a container will receive new mounts from the host or other containers, but filesystems mounted inside the container won\'t be propagated to the host or other containers. Note that this mode is recursively applied to all mounts in the volume (\"rslave\" in Linux terminology).  - `\"None\"` means that the volume in a container will not receive new mounts from the host or other containers, and filesystems mounted inside the container won\'t be propagated to the host or other containers. Note that this mode corresponds to \"private\" in Linux terminology.
	*/
	"mountPropagation"?: V1VolumeMountMountPropagationEnum;
	/**
	* This must match the Name of a Volume.
	*/
	"name": string;
	/**
	* Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
	*/
	"readOnly"?: boolean;
	/**
	* RecursiveReadOnly specifies whether read-only mounts should be handled recursively.  If ReadOnly is false, this field has no meaning and must be unspecified.  If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only.  If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime.  If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason.  If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None).  If this field is not specified, it is treated as an equivalent of Disabled.
	*/
	"recursiveReadOnly"?: string;
	/**
	* Path within the volume from which the container\'s volume should be mounted. Defaults to \"\" (volume\'s root).
	*/
	"subPath"?: string;
	/**
	* Expanded path within the volume from which the container\'s volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container\'s environment. Defaults to \"\" (volume\'s root). SubPathExpr and SubPath are mutually exclusive.
	*/
	"subPathExpr"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1VolumeMountMountPropagationEnum {
	Bidirectional = "Bidirectional",
	HostToContainer = "HostToContainer",
	None = "None"
}
declare class V1Container {
	/**
	* Arguments to the entrypoint. The container image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
	*/
	"args"?: Array<string>;
	/**
	* Entrypoint array. Not executed within a shell. The container image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. \"$$(VAR_NAME)\" will produce the string literal \"$(VAR_NAME)\". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
	*/
	"command"?: Array<string>;
	/**
	* List of environment variables to set in the container. Cannot be updated.
	*/
	"env"?: Array<V1EnvVar>;
	/**
	* List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
	*/
	"envFrom"?: Array<V1EnvFromSource>;
	/**
	* Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
	*/
	"image"?: string;
	/**
	* Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images  Possible enum values:  - `\"Always\"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.  - `\"IfNotPresent\"` means that kubelet pulls if the image isn\'t present on disk. Container will fail if the image isn\'t present and the pull fails.  - `\"Never\"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn\'t present
	*/
	"imagePullPolicy"?: V1ContainerImagePullPolicyEnum;
	"lifecycle"?: V1Lifecycle;
	"livenessProbe"?: V1Probe;
	/**
	* Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
	*/
	"name": string;
	/**
	* List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default \"0.0.0.0\" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.
	*/
	"ports"?: Array<V1ContainerPort>;
	"readinessProbe"?: V1Probe;
	/**
	* Resources resize policy for the container.
	*/
	"resizePolicy"?: Array<V1ContainerResizePolicy>;
	"resources"?: V1ResourceRequirements;
	/**
	* RestartPolicy defines the restart behavior of individual containers in a pod. This field may only be set for init containers, and the only allowed value is \"Always\". For non-init containers or when this field is not specified, the restart behavior is defined by the Pod\'s restart policy and the container type. Setting the RestartPolicy as \"Always\" for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy \"Always\" will be shut down. This lifecycle differs from normal init containers and is often referred to as a \"sidecar\" container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed.
	*/
	"restartPolicy"?: string;
	"securityContext"?: V1SecurityContext;
	"startupProbe"?: V1Probe;
	/**
	* Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
	*/
	"stdin"?: boolean;
	/**
	* Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
	*/
	"stdinOnce"?: boolean;
	/**
	* Optional: Path at which the file to which the container\'s termination message will be written is mounted into the container\'s filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
	*/
	"terminationMessagePath"?: string;
	/**
	* Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.  Possible enum values:  - `\"FallbackToLogsOnError\"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the terminationMessagePath has no contents.  - `\"File\"` is the default behavior and will set the container status message to the contents of the container\'s terminationMessagePath when the container exits.
	*/
	"terminationMessagePolicy"?: V1ContainerTerminationMessagePolicyEnum;
	/**
	* Whether this container should allocate a TTY for itself, also requires \'stdin\' to be true. Default is false.
	*/
	"tty"?: boolean;
	/**
	* volumeDevices is the list of block devices to be used by the container.
	*/
	"volumeDevices"?: Array<V1VolumeDevice>;
	/**
	* Pod volumes to mount into the container\'s filesystem. Cannot be updated.
	*/
	"volumeMounts"?: Array<V1VolumeMount>;
	/**
	* Container\'s working directory. If not specified, the container runtime\'s default will be used, which might be configured in the container image. Cannot be updated.
	*/
	"workingDir"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1ContainerImagePullPolicyEnum {
	Always = "Always",
	IfNotPresent = "IfNotPresent",
	Never = "Never"
}
declare enum V1ContainerTerminationMessagePolicyEnum {
	FallbackToLogsOnError = "FallbackToLogsOnError",
	File = "File"
}
declare class V1HostAlias {
	/**
	* Hostnames for the above IP address.
	*/
	"hostnames"?: Array<string>;
	/**
	* IP address of the host file entry.
	*/
	"ip": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1Toleration {
	/**
	* Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.  Possible enum values:  - `\"NoExecute\"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.  - `\"NoSchedule\"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.  - `\"PreferNoSchedule\"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.
	*/
	"effect"?: V1TolerationEffectEnum;
	/**
	* Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
	*/
	"key"?: string;
	/**
	* Operator represents a key\'s relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.  Possible enum values:  - `\"Equal\"`  - `\"Exists\"`
	*/
	"operator"?: V1TolerationOperatorEnum;
	/**
	* TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
	*/
	"tolerationSeconds"?: number;
	/**
	* Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
	*/
	"value"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1TolerationEffectEnum {
	NoExecute = "NoExecute",
	NoSchedule = "NoSchedule",
	PreferNoSchedule = "PreferNoSchedule"
}
declare enum V1TolerationOperatorEnum {
	Equal = "Equal",
	Exists = "Exists"
}
declare class V1AWSElasticBlockStoreVolumeSource {
	/**
	* fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
	*/
	"fsType"?: string;
	/**
	* partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty).
	*/
	"partition"?: number;
	/**
	* readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
	*/
	"readOnly"?: boolean;
	/**
	* volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
	*/
	"volumeID": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1AzureDiskVolumeSource {
	/**
	* cachingMode is the Host Caching mode: None, Read Only, Read Write.  Possible enum values:  - `\"None\"`  - `\"ReadOnly\"`  - `\"ReadWrite\"`
	*/
	"cachingMode"?: V1AzureDiskVolumeSourceCachingModeEnum;
	/**
	* diskName is the Name of the data disk in the blob storage
	*/
	"diskName": string;
	/**
	* diskURI is the URI of data disk in the blob storage
	*/
	"diskURI": string;
	/**
	* fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
	*/
	"fsType"?: string;
	/**
	* kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared  Possible enum values:  - `\"Dedicated\"`  - `\"Managed\"`  - `\"Shared\"`
	*/
	"kind"?: V1AzureDiskVolumeSourceKindEnum;
	/**
	* readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
	*/
	"readOnly"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1AzureDiskVolumeSourceCachingModeEnum {
	None = "None",
	ReadOnly = "ReadOnly",
	ReadWrite = "ReadWrite"
}
declare enum V1AzureDiskVolumeSourceKindEnum {
	Dedicated = "Dedicated",
	Managed = "Managed",
	Shared = "Shared"
}
declare class V1AzureFileVolumeSource {
	/**
	* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
	*/
	"readOnly"?: boolean;
	/**
	* secretName is the  name of secret that contains Azure Storage Account Name and Key
	*/
	"secretName": string;
	/**
	* shareName is the azure share Name
	*/
	"shareName": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1LocalObjectReference {
	/**
	* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
	*/
	"name"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1CSIVolumeSource {
	/**
	* driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
	*/
	"driver": string;
	/**
	* fsType to mount. Ex. \"ext4\", \"xfs\", \"ntfs\". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
	*/
	"fsType"?: string;
	"nodePublishSecretRef"?: V1LocalObjectReference;
	/**
	* readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
	*/
	"readOnly"?: boolean;
	/**
	* volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver\'s documentation for supported values.
	*/
	"volumeAttributes"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1CephFSVolumeSource {
	/**
	* monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
	*/
	"monitors": Array<string>;
	/**
	* path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
	*/
	"path"?: string;
	/**
	* readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
	*/
	"readOnly"?: boolean;
	/**
	* secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
	*/
	"secretFile"?: string;
	"secretRef"?: V1LocalObjectReference;
	/**
	* user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
	*/
	"user"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1CinderVolumeSource {
	/**
	* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
	*/
	"fsType"?: string;
	/**
	* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
	*/
	"readOnly"?: boolean;
	"secretRef"?: V1LocalObjectReference;
	/**
	* volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
	*/
	"volumeID": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1KeyToPath {
	/**
	* key is the key to project.
	*/
	"key": string;
	/**
	* mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
	*/
	"mode"?: number;
	/**
	* path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element \'..\'. May not start with the string \'..\'.
	*/
	"path": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ConfigMapVolumeSource {
	/**
	* defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
	*/
	"defaultMode"?: number;
	/**
	* items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
	*/
	"items"?: Array<V1KeyToPath>;
	/**
	* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
	*/
	"name"?: string;
	/**
	* optional specify whether the ConfigMap or its keys must be defined
	*/
	"optional"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1DownwardAPIVolumeFile {
	"fieldRef"?: V1ObjectFieldSelector;
	/**
	* Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
	*/
	"mode"?: number;
	/**
	* Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the \'..\' path. Must be utf-8 encoded. The first item of the relative path must not start with \'..\'
	*/
	"path": string;
	"resourceFieldRef"?: V1ResourceFieldSelector;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1DownwardAPIVolumeSource {
	/**
	* Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
	*/
	"defaultMode"?: number;
	/**
	* Items is a list of downward API volume file
	*/
	"items"?: Array<V1DownwardAPIVolumeFile>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1EmptyDirVolumeSource {
	/**
	* medium represents what type of storage medium should back this directory. The default is \"\" which means to use the node\'s default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
	*/
	"medium"?: string;
	/**
	* sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
	*/
	"sizeLimit"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1TypedLocalObjectReference {
	/**
	* APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
	*/
	"apiGroup"?: string;
	/**
	* Kind is the type of resource being referenced
	*/
	"kind": string;
	/**
	* Name is the name of resource being referenced
	*/
	"name": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1TypedObjectReference {
	/**
	* APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
	*/
	"apiGroup"?: string;
	/**
	* Kind is the type of resource being referenced
	*/
	"kind": string;
	/**
	* Name is the name of resource being referenced
	*/
	"name": string;
	/**
	* Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace\'s owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
	*/
	"namespace"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1VolumeResourceRequirements {
	/**
	* Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
	*/
	"limits"?: {
		[key: string]: string;
	};
	/**
	* Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
	*/
	"requests"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1PersistentVolumeClaimSpec {
	/**
	* accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
	*/
	"accessModes"?: Array<V1PersistentVolumeClaimSpecAccessModesEnum>;
	"dataSource"?: V1TypedLocalObjectReference;
	"dataSourceRef"?: V1TypedObjectReference;
	"resources"?: V1VolumeResourceRequirements;
	"selector"?: V1LabelSelector;
	/**
	* storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
	*/
	"storageClassName"?: string;
	/**
	* volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it\'s not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
	*/
	"volumeAttributesClassName"?: string;
	/**
	* volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.  Possible enum values:  - `\"Block\"` means the volume will not be formatted with a filesystem and will remain a raw block device.  - `\"Filesystem\"` means the volume will be or is formatted with a filesystem.
	*/
	"volumeMode"?: V1PersistentVolumeClaimSpecVolumeModeEnum;
	/**
	* volumeName is the binding reference to the PersistentVolume backing this claim.
	*/
	"volumeName"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1PersistentVolumeClaimSpecAccessModesEnum {
	ReadOnlyMany = "ReadOnlyMany",
	ReadWriteMany = "ReadWriteMany",
	ReadWriteOnce = "ReadWriteOnce",
	ReadWriteOncePod = "ReadWriteOncePod"
}
declare enum V1PersistentVolumeClaimSpecVolumeModeEnum {
	Block = "Block",
	Filesystem = "Filesystem"
}
declare class V1PersistentVolumeClaimTemplate {
	"metadata"?: V1ObjectMeta;
	"spec": V1PersistentVolumeClaimSpec;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1EphemeralVolumeSource {
	"volumeClaimTemplate"?: V1PersistentVolumeClaimTemplate;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1FCVolumeSource {
	/**
	* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
	*/
	"fsType"?: string;
	/**
	* lun is Optional: FC target lun number
	*/
	"lun"?: number;
	/**
	* readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
	*/
	"readOnly"?: boolean;
	/**
	* targetWWNs is Optional: FC target worldwide names (WWNs)
	*/
	"targetWWNs"?: Array<string>;
	/**
	* wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
	*/
	"wwids"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1FlexVolumeSource {
	/**
	* driver is the name of the driver to use for this volume.
	*/
	"driver": string;
	/**
	* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script.
	*/
	"fsType"?: string;
	/**
	* options is Optional: this field holds extra command options if any.
	*/
	"options"?: {
		[key: string]: string;
	};
	/**
	* readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
	*/
	"readOnly"?: boolean;
	"secretRef"?: V1LocalObjectReference;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1FlockerVolumeSource {
	/**
	* datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
	*/
	"datasetName"?: string;
	/**
	* datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
	*/
	"datasetUUID"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1GCEPersistentDiskVolumeSource {
	/**
	* fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
	*/
	"fsType"?: string;
	/**
	* partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
	*/
	"partition"?: number;
	/**
	* pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
	*/
	"pdName": string;
	/**
	* readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
	*/
	"readOnly"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1GitRepoVolumeSource {
	/**
	* directory is the target directory name. Must not contain or start with \'..\'.  If \'.\' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
	*/
	"directory"?: string;
	/**
	* repository is the URL
	*/
	"repository": string;
	/**
	* revision is the commit hash for the specified revision.
	*/
	"revision"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1GlusterfsVolumeSource {
	/**
	* endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
	*/
	"endpoints": string;
	/**
	* path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
	*/
	"path": string;
	/**
	* readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
	*/
	"readOnly"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1HostPathVolumeSource {
	/**
	* path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
	*/
	"path": string;
	/**
	* type for HostPath Volume Defaults to \"\" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath  Possible enum values:  - `\"\"` For backwards compatible, leave it empty if unset  - `\"BlockDevice\"` A block device must exist at the given path  - `\"CharDevice\"` A character device must exist at the given path  - `\"Directory\"` A directory must exist at the given path  - `\"DirectoryOrCreate\"` If nothing exists at the given path, an empty directory will be created there as needed with file mode 0755, having the same group and ownership with Kubelet.  - `\"File\"` A file must exist at the given path  - `\"FileOrCreate\"` If nothing exists at the given path, an empty file will be created there as needed with file mode 0644, having the same group and ownership with Kubelet.  - `\"Socket\"` A UNIX socket must exist at the given path
	*/
	"type"?: V1HostPathVolumeSourceTypeEnum;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum V1HostPathVolumeSourceTypeEnum {
	Empty = "",
	BlockDevice = "BlockDevice",
	CharDevice = "CharDevice",
	Directory = "Directory",
	DirectoryOrCreate = "DirectoryOrCreate",
	File = "File",
	FileOrCreate = "FileOrCreate",
	Socket = "Socket"
}
declare class V1ISCSIVolumeSource {
	/**
	* chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
	*/
	"chapAuthDiscovery"?: boolean;
	/**
	* chapAuthSession defines whether support iSCSI Session CHAP authentication
	*/
	"chapAuthSession"?: boolean;
	/**
	* fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
	*/
	"fsType"?: string;
	/**
	* initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
	*/
	"initiatorName"?: string;
	/**
	* iqn is the target iSCSI Qualified Name.
	*/
	"iqn": string;
	/**
	* iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to \'default\' (tcp).
	*/
	"iscsiInterface"?: string;
	/**
	* lun represents iSCSI Target Lun number.
	*/
	"lun": number;
	/**
	* portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
	*/
	"portals"?: Array<string>;
	/**
	* readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
	*/
	"readOnly"?: boolean;
	"secretRef"?: V1LocalObjectReference;
	/**
	* targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
	*/
	"targetPortal": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1NFSVolumeSource {
	/**
	* path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
	*/
	"path": string;
	/**
	* readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
	*/
	"readOnly"?: boolean;
	/**
	* server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
	*/
	"server": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1PersistentVolumeClaimVolumeSource {
	/**
	* claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
	*/
	"claimName": string;
	/**
	* readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
	*/
	"readOnly"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1PhotonPersistentDiskVolumeSource {
	/**
	* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
	*/
	"fsType"?: string;
	/**
	* pdID is the ID that identifies Photon Controller persistent disk
	*/
	"pdID": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1PortworxVolumeSource {
	/**
	* fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\". Implicitly inferred to be \"ext4\" if unspecified.
	*/
	"fsType"?: string;
	/**
	* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
	*/
	"readOnly"?: boolean;
	/**
	* volumeID uniquely identifies a Portworx volume
	*/
	"volumeID": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ClusterTrustBundleProjection {
	"labelSelector"?: V1LabelSelector;
	/**
	* Select a single ClusterTrustBundle by object name.  Mutually-exclusive with signerName and labelSelector.
	*/
	"name"?: string;
	/**
	* If true, don\'t block pod startup if the referenced ClusterTrustBundle(s) aren\'t available.  If using name, then the named ClusterTrustBundle is allowed not to exist.  If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
	*/
	"optional"?: boolean;
	/**
	* Relative path from the volume root to write the bundle.
	*/
	"path": string;
	/**
	* Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name.  The contents of all selected ClusterTrustBundles will be unified and deduplicated.
	*/
	"signerName"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ConfigMapProjection {
	/**
	* items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
	*/
	"items"?: Array<V1KeyToPath>;
	/**
	* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
	*/
	"name"?: string;
	/**
	* optional specify whether the ConfigMap or its keys must be defined
	*/
	"optional"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1DownwardAPIProjection {
	/**
	* Items is a list of DownwardAPIVolume file
	*/
	"items"?: Array<V1DownwardAPIVolumeFile>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1SecretProjection {
	/**
	* items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
	*/
	"items"?: Array<V1KeyToPath>;
	/**
	* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
	*/
	"name"?: string;
	/**
	* optional field specify whether the Secret or its key must be defined
	*/
	"optional"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ServiceAccountTokenProjection {
	/**
	* audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
	*/
	"audience"?: string;
	/**
	* expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
	*/
	"expirationSeconds"?: number;
	/**
	* path is the path relative to the mount point of the file to project the token into.
	*/
	"path": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1VolumeProjection {
	"clusterTrustBundle"?: V1ClusterTrustBundleProjection;
	"configMap"?: V1ConfigMapProjection;
	"downwardAPI"?: V1DownwardAPIProjection;
	"secret"?: V1SecretProjection;
	"serviceAccountToken"?: V1ServiceAccountTokenProjection;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ProjectedVolumeSource {
	/**
	* defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
	*/
	"defaultMode"?: number;
	/**
	* sources is the list of volume projections
	*/
	"sources"?: Array<V1VolumeProjection>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1QuobyteVolumeSource {
	/**
	* group to map volume access to Default is no group
	*/
	"group"?: string;
	/**
	* readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
	*/
	"readOnly"?: boolean;
	/**
	* registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
	*/
	"registry": string;
	/**
	* tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
	*/
	"tenant"?: string;
	/**
	* user to map volume access to Defaults to serivceaccount user
	*/
	"user"?: string;
	/**
	* volume is a string that references an already created Quobyte volume by name.
	*/
	"volume": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1RBDVolumeSource {
	/**
	* fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
	*/
	"fsType"?: string;
	/**
	* image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
	*/
	"image": string;
	/**
	* keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
	*/
	"keyring"?: string;
	/**
	* monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
	*/
	"monitors": Array<string>;
	/**
	* pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
	*/
	"pool"?: string;
	/**
	* readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
	*/
	"readOnly"?: boolean;
	"secretRef"?: V1LocalObjectReference;
	/**
	* user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
	*/
	"user"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ScaleIOVolumeSource {
	/**
	* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Default is \"xfs\".
	*/
	"fsType"?: string;
	/**
	* gateway is the host address of the ScaleIO API Gateway.
	*/
	"gateway": string;
	/**
	* protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
	*/
	"protectionDomain"?: string;
	/**
	* readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
	*/
	"readOnly"?: boolean;
	"secretRef": V1LocalObjectReference;
	/**
	* sslEnabled Flag enable/disable SSL communication with Gateway, default false
	*/
	"sslEnabled"?: boolean;
	/**
	* storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
	*/
	"storageMode"?: string;
	/**
	* storagePool is the ScaleIO Storage Pool associated with the protection domain.
	*/
	"storagePool"?: string;
	/**
	* system is the name of the storage system as configured in ScaleIO.
	*/
	"system": string;
	/**
	* volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
	*/
	"volumeName"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1SecretVolumeSource {
	/**
	* defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
	*/
	"defaultMode"?: number;
	/**
	* items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
	*/
	"items"?: Array<V1KeyToPath>;
	/**
	* optional field specify whether the Secret or its keys must be defined
	*/
	"optional"?: boolean;
	/**
	* secretName is the name of the secret in the pod\'s namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
	*/
	"secretName"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1StorageOSVolumeSource {
	/**
	* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
	*/
	"fsType"?: string;
	/**
	* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
	*/
	"readOnly"?: boolean;
	"secretRef"?: V1LocalObjectReference;
	/**
	* volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
	*/
	"volumeName"?: string;
	/**
	* volumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to \"default\" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
	*/
	"volumeNamespace"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1VsphereVirtualDiskVolumeSource {
	/**
	* fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
	*/
	"fsType"?: string;
	/**
	* storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
	*/
	"storagePolicyID"?: string;
	/**
	* storagePolicyName is the storage Policy Based Management (SPBM) profile name.
	*/
	"storagePolicyName"?: string;
	/**
	* volumePath is the path that identifies vSphere volume vmdk
	*/
	"volumePath": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1Volume {
	"awsElasticBlockStore"?: V1AWSElasticBlockStoreVolumeSource;
	"azureDisk"?: V1AzureDiskVolumeSource;
	"azureFile"?: V1AzureFileVolumeSource;
	"cephfs"?: V1CephFSVolumeSource;
	"cinder"?: V1CinderVolumeSource;
	"configMap"?: V1ConfigMapVolumeSource;
	"csi"?: V1CSIVolumeSource;
	"downwardAPI"?: V1DownwardAPIVolumeSource;
	"emptyDir"?: V1EmptyDirVolumeSource;
	"ephemeral"?: V1EphemeralVolumeSource;
	"fc"?: V1FCVolumeSource;
	"flexVolume"?: V1FlexVolumeSource;
	"flocker"?: V1FlockerVolumeSource;
	"gcePersistentDisk"?: V1GCEPersistentDiskVolumeSource;
	"gitRepo"?: V1GitRepoVolumeSource;
	"glusterfs"?: V1GlusterfsVolumeSource;
	"hostPath"?: V1HostPathVolumeSource;
	"iscsi"?: V1ISCSIVolumeSource;
	/**
	* name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
	*/
	"name": string;
	"nfs"?: V1NFSVolumeSource;
	"persistentVolumeClaim"?: V1PersistentVolumeClaimVolumeSource;
	"photonPersistentDisk"?: V1PhotonPersistentDiskVolumeSource;
	"portworxVolume"?: V1PortworxVolumeSource;
	"projected"?: V1ProjectedVolumeSource;
	"quobyte"?: V1QuobyteVolumeSource;
	"rbd"?: V1RBDVolumeSource;
	"scaleIO"?: V1ScaleIOVolumeSource;
	"secret"?: V1SecretVolumeSource;
	"storageos"?: V1StorageOSVolumeSource;
	"vsphereVolume"?: V1VsphereVirtualDiskVolumeSource;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1RunnerPodTemplateSpec {
	"affinity"?: V1Affinity;
	/**
	* List of environment variables to set in the container. Cannot be updated.
	*/
	"env"?: Array<V1EnvVar>;
	/**
	* List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
	*/
	"envFrom"?: Array<V1EnvFromSource>;
	/**
	* Set host aliases for the Runner Pod
	*/
	"hostAliases"?: Array<V1HostAlias>;
	/**
	* Runner pod image to use other than default
	*/
	"image"?: string;
	/**
	* Set up Init Containers for the Runner
	*/
	"initContainers"?: Array<V1Container>;
	/**
	* Set the NodeSelector for the Runner Pod
	*/
	"nodeSelector"?: {
		[key: string]: string;
	};
	"resource"?: V1ResourceRequirements;
	/**
	* Set the Tolerations for the Runner Pod
	*/
	"tolerations"?: Array<V1Toleration>;
	/**
	* Set Volume Mounts for the Runner Pod
	*/
	"volumeMounts"?: Array<V1VolumeMount>;
	/**
	* Set Volumes for the Runner Pod
	*/
	"volumes"?: Array<V1Volume>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1RunnerPodTemplate {
	"metadata"?: StorageV1TemplateMetadata;
	"spec"?: StorageV1RunnerPodTemplateSpec;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1RunnerClusterRef {
	/**
	* Cluster is the connected cluster the space will be created in
	*/
	"cluster"?: string;
	/**
	* Namespace is the namespace inside the connected cluster holding the space
	*/
	"namespace"?: string;
	"persistentVolumeClaimTemplate"?: StorageV1RunnerPersistentVolumeClaimTemplate;
	"podTemplate"?: StorageV1RunnerPodTemplate;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1RunnerSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	"clusterRef"?: StorageV1RunnerClusterRef;
	/**
	* Description describes a cluster access object
	*/
	"description"?: string;
	/**
	* The display name shown in the UI
	*/
	"displayName"?: string;
	/**
	* NetworkPeerName is the network peer name used to connect directly to the runner
	*/
	"networkPeerName"?: string;
	"owner"?: StorageV1UserOrTeam;
	/**
	* If unusable is true, no DevPod workspaces can be scheduled on this runner.
	*/
	"unusable"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1RunnerStatus {
	/**
	* Conditions holds several conditions the virtual cluster might be in
	*/
	"conditions"?: Array<StorageV1Condition>;
	/**
	* Message describes the reason in human-readable form
	*/
	"message"?: string;
	/**
	* Phase describes the current phase the space instance is in
	*/
	"phase"?: string;
	/**
	* Reason describes the reason in machine-readable form
	*/
	"reason"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Runner {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1RunnerSpec;
	"status"?: ManagementV1RunnerStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectClusters {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Clusters holds all the allowed clusters
	*/
	"clusters"?: Array<ManagementV1Cluster>;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* Runners holds all the allowed runners
	*/
	"runners"?: Array<ManagementV1Runner>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectImportSpaceSource {
	/**
	* Cluster name of the cluster the space is running on
	*/
	"cluster"?: string;
	/**
	* ImportName is an optional name to use as the spaceinstance name, if not provided the space name will be used
	*/
	"importName"?: string;
	/**
	* Name of the space to import
	*/
	"name"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectImportSpace {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"sourceSpace": ManagementV1ProjectImportSpaceSource;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectMember {
	"info"?: StorageV1EntityInfo;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectMembers {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* Teams holds all the teams that have access to the cluster
	*/
	"teams"?: Array<ManagementV1ProjectMember>;
	/**
	* Users holds all the users that have access to the cluster
	*/
	"users"?: Array<ManagementV1ProjectMember>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectMigrateSpaceInstanceSource {
	/**
	* Name of the spaceinstance to migrate
	*/
	"name"?: string;
	/**
	* Namespace of the spaceinstance to migrate
	*/
	"namespace"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectMigrateSpaceInstance {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"sourceSpaceInstance": ManagementV1ProjectMigrateSpaceInstanceSource;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectMigrateVirtualClusterInstanceSource {
	/**
	* Name of the virtual cluster instance to migrate
	*/
	"name"?: string;
	/**
	* Namespace of the virtual cluster instance to migrate
	*/
	"namespace"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectMigrateVirtualClusterInstance {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"sourceVirtualClusterInstance": ManagementV1ProjectMigrateVirtualClusterInstanceSource;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectSecretSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* Data contains the secret data. Each key must consist of alphanumeric characters, \'-\', \'_\' or \'.\'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
	*/
	"data"?: {
		[key: string]: string;
	};
	/**
	* Description describes a Project secret
	*/
	"description"?: string;
	/**
	* DisplayName is the name that should be displayed in the UI
	*/
	"displayName"?: string;
	"owner"?: StorageV1UserOrTeam;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectSecretStatus {
	/**
	* Conditions holds several conditions the project might be in
	*/
	"conditions"?: Array<StorageV1Condition>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectSecret {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1ProjectSecretSpec;
	"status"?: ManagementV1ProjectSecretStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1SpaceTemplateVersion {
	/**
	* Parameters define additional app parameters that will set helm values
	*/
	"parameters"?: Array<StorageV1AppParameter>;
	"template"?: StorageV1SpaceTemplateDefinition;
	/**
	* Version is the version. Needs to be in X.X.X format.
	*/
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SpaceTemplateSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* Description describes the space template
	*/
	"description"?: string;
	/**
	* DisplayName is the name that is shown in the UI
	*/
	"displayName"?: string;
	"owner"?: StorageV1UserOrTeam;
	/**
	* Parameters define additional app parameters that will set helm values
	*/
	"parameters"?: Array<StorageV1AppParameter>;
	"template"?: StorageV1SpaceTemplateDefinition;
	/**
	* Versions are different space template versions that can be referenced as well
	*/
	"versions"?: Array<StorageV1SpaceTemplateVersion>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SpaceTemplateStatus {
	"apps"?: Array<StorageV1EntityInfo>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SpaceTemplate {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1SpaceTemplateSpec;
	"status"?: ManagementV1SpaceTemplateStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1VirtualClusterTemplateSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* Description describes the virtual cluster template
	*/
	"description"?: string;
	/**
	* DisplayName is the name that is shown in the UI
	*/
	"displayName"?: string;
	"owner"?: StorageV1UserOrTeam;
	/**
	* Parameters define additional app parameters that will set helm values
	*/
	"parameters"?: Array<StorageV1AppParameter>;
	"spaceTemplateRef"?: StorageV1VirtualClusterTemplateSpaceTemplateRef;
	"template"?: StorageV1VirtualClusterTemplateDefinition;
	/**
	* Versions are different versions of the template that can be referenced as well
	*/
	"versions"?: Array<StorageV1VirtualClusterTemplateVersion>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1VirtualClusterTemplateStatus {
	"apps"?: Array<StorageV1EntityInfo>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1VirtualClusterTemplate {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1VirtualClusterTemplateSpec;
	"status"?: ManagementV1VirtualClusterTemplateStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectTemplates {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* DefaultDevPodWorkspaceTemplate
	*/
	"defaultDevPodWorkspaceTemplate"?: string;
	/**
	* DefaultSpaceTemplate
	*/
	"defaultSpaceTemplate"?: string;
	/**
	* DefaultVirtualClusterTemplate is the default template for the project
	*/
	"defaultVirtualClusterTemplate"?: string;
	/**
	* DevPodWorkspaceTemplates holds all the allowed space templates
	*/
	"devPodWorkspaceTemplates"?: Array<ManagementV1DevPodWorkspaceTemplate>;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* SpaceTemplates holds all the allowed space templates
	*/
	"spaceTemplates"?: Array<ManagementV1SpaceTemplate>;
	/**
	* VirtualClusterTemplates holds all the allowed virtual cluster templates
	*/
	"virtualClusterTemplates"?: Array<ManagementV1VirtualClusterTemplate>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AllowedCluster {
	/**
	* Name is the name of the cluster that is allowed to create an environment in.
	*/
	"name"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AllowedRunner {
	/**
	* Name is the name of the runner that is allowed to create an environment in.
	*/
	"name"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AllowedTemplate {
	/**
	* Group of the template that is allowed. Currently only supports storage.loft.sh
	*/
	"group"?: string;
	/**
	* IsDefault specifies if the template should be used as a default
	*/
	"isDefault"?: boolean;
	/**
	* Kind of the template that is allowed. Currently only supports DevPodWorkspaceTemplate, VirtualClusterTemplate & SpaceTemplate
	*/
	"kind"?: string;
	/**
	* Name of the template
	*/
	"name"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ArgoProjectPolicyRule {
	/**
	* Action is one of \"*\", \"get\", \"create\", \"update\", \"delete\", \"sync\", or \"override\".
	*/
	"action"?: string;
	/**
	* Application is the ArgoCD project/repository to apply the rule to.
	*/
	"application"?: string;
	/**
	* Allow applies the \"allow\" permission to the rule, if allow is not set, the permission will always be set to \"deny\".
	*/
	"permission"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ArgoProjectRole {
	/**
	* Description to add to the ArgoCD project.
	*/
	"description"?: string;
	/**
	* Groups is a list of OIDC group names to bind to the role.
	*/
	"groups"?: Array<string>;
	/**
	* Name of the ArgoCD role to attach to the project.
	*/
	"name"?: string;
	/**
	* Rules ist a list of policy rules to attach to the role.
	*/
	"rules"?: Array<StorageV1ArgoProjectPolicyRule>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ArgoProjectSpecMetadata {
	/**
	* Description to add to the ArgoCD project.
	*/
	"description"?: string;
	/**
	* ExtraAnnotations are optional annotations that can be attached to the project in ArgoCD.
	*/
	"extraAnnotations"?: {
		[key: string]: string;
	};
	/**
	* ExtraLabels are optional labels that can be attached to the project in ArgoCD.
	*/
	"extraLabels"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ArgoProjectSpec {
	/**
	* Enabled indicates if the ArgoCD Project Integration is enabled for this project. Enabling this will cause Loft to create an appProject in ArgoCD that is associated with the Loft Project. When Project integration is enabled Loft will override the default assigned role set in the SSO integration spec.
	*/
	"enabled"?: boolean;
	"metadata"?: StorageV1ArgoProjectSpecMetadata;
	/**
	* Roles is a list of roles that should be attached to the ArgoCD project. If roles are provided no loft default roles will be set. If no roles are provided *and* SSO is enabled, loft will configure sane default values.
	*/
	"roles"?: Array<StorageV1ArgoProjectRole>;
	/**
	* SourceRepos is a list of source repositories to attach/allow on the project, if not specified will be \"*\" indicating all source repositories.
	*/
	"sourceRepos"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ArgoSSOSpec {
	/**
	* AssignedRoles is a list of roles to assign for users who authenticate via Loft -- by default this will be the `read-only` role. If any roles are provided this will override the default setting.
	*/
	"assignedRoles"?: Array<string>;
	/**
	* Enabled indicates if the ArgoCD SSO Integration is enabled for this project. Enabling this will cause Loft to configure SSO authentication via Loft in ArgoCD. If Projects are *not* enabled, all users associated with this Project will be assigned either the \'read-only\' (default) role, *or* the roles set under the AssignedRoles field.
	*/
	"enabled"?: boolean;
	/**
	* Host defines the ArgoCD host address that will be used for OIDC authentication between loft and ArgoCD. If not specified OIDC integration will be skipped, but vclusters/spaces will still be synced to ArgoCD.
	*/
	"host"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ArgoIntegrationSpec {
	/**
	* Cluster defines the name of the cluster that ArgoCD is deployed into -- if not provided this will default to \'loft-cluster\'.
	*/
	"cluster"?: string;
	/**
	* Enabled indicates if the ArgoCD Integration is enabled for the project -- this knob only enables the syncing of virtualclusters, but does not enable SSO integration or project creation (see subsequent spec sections!).
	*/
	"enabled"?: boolean;
	/**
	* Namespace defines the namespace in which ArgoCD is running in the cluster.
	*/
	"namespace"?: string;
	"project"?: StorageV1ArgoProjectSpec;
	"sso"?: StorageV1ArgoSSOSpec;
	/**
	* VirtualClusterInstance defines the name of *virtual cluster* (instance) that ArgoCD is deployed into. If provided, Cluster will be ignored and Loft will assume that ArgoCD is running in the specified virtual cluster.
	*/
	"virtualClusterInstance"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1GitProjectSpec {
	/**
	* Token defines the token to use for authentication.
	*/
	"token"?: string;
	"tokenSecretRef"?: V1SecretKeySelector;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1SSHProjectSpec {
	/**
	* Token defines the private ssh key to use for authentication, this is a base64 encoded string.
	*/
	"token"?: string;
	"tokenSecretRef"?: V1SecretKeySelector;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1DevPodProjectSpec {
	/**
	* FallbackImage defines an image all workspace will fall back to if no devcontainer.json could be detected
	*/
	"fallbackImage"?: string;
	"git"?: StorageV1GitProjectSpec;
	"ssh"?: StorageV1SSHProjectSpec;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1Member {
	/**
	* ClusterRole is the assigned role for the above member
	*/
	"clusterRole"?: string;
	/**
	* Group of the member. Currently only supports storage.loft.sh
	*/
	"group"?: string;
	/**
	* Kind is the kind of the member. Currently either User or Team
	*/
	"kind"?: string;
	/**
	* Name of the member
	*/
	"name"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1NamespacePattern {
	/**
	* Space holds the namespace pattern to use for space instances
	*/
	"space"?: string;
	/**
	* VirtualCluster holds the namespace pattern to use for virtual cluster instances
	*/
	"virtualCluster"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1Quotas {
	/**
	* Project holds the quotas for the whole project
	*/
	"project"?: {
		[key: string]: string;
	};
	/**
	* User holds the quotas per user / team
	*/
	"user"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ImportVirtualClustersSpec {
	/**
	* RoleMapping indicates an optional role mapping from a rancher project role to a rancher cluster role. Map to an empty role to exclude users and groups with that role from being synced.
	*/
	"roleMapping"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1RancherProjectRef {
	/**
	* Cluster defines the Rancher cluster ID Needs to be the same id within Loft
	*/
	"cluster"?: string;
	/**
	* Project defines the Rancher project ID
	*/
	"project"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1SyncMembersSpec {
	/**
	* Enabled indicates whether to sync rancher project members to the loft project.
	*/
	"enabled"?: boolean;
	/**
	* RoleMapping indicates an optional role mapping from a rancher role to a loft role. Map to an empty role to exclude users and groups with that role from being synced.
	*/
	"roleMapping"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1RancherIntegrationSpec {
	/**
	* Enabled indicates if the Rancher Project Integration is enabled for this project.
	*/
	"enabled"?: boolean;
	"importVirtualClusters"?: StorageV1ImportVirtualClustersSpec;
	"projectRef"?: StorageV1RancherProjectRef;
	"syncMembers"?: StorageV1SyncMembersSpec;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1RequireTemplate {
	/**
	* If true, all users within the project will be allowed to create a new instance without a template. By default, only admins are allowed to create a new instance without a template.
	*/
	"disabled"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* AllowedClusters are target clusters that are allowed to target with environments.
	*/
	"allowedClusters"?: Array<StorageV1AllowedCluster>;
	/**
	* AllowedRunners are target runners that are allowed to target with DevPod environments.
	*/
	"allowedRunners"?: Array<StorageV1AllowedRunner>;
	/**
	* AllowedTemplates are the templates that are allowed to use in this project.
	*/
	"allowedTemplates"?: Array<StorageV1AllowedTemplate>;
	"argoCD"?: StorageV1ArgoIntegrationSpec;
	/**
	* Description describes an app
	*/
	"description"?: string;
	"devPod"?: StorageV1DevPodProjectSpec;
	/**
	* DisplayName is the name that should be displayed in the UI
	*/
	"displayName"?: string;
	/**
	* Members are the users and teams that are part of this project
	*/
	"members"?: Array<StorageV1Member>;
	"namespacePattern"?: StorageV1NamespacePattern;
	"owner"?: StorageV1UserOrTeam;
	"quotas"?: StorageV1Quotas;
	"rancher"?: StorageV1RancherIntegrationSpec;
	"requireTemplate"?: StorageV1RequireTemplate;
	"vault"?: StorageV1VaultIntegrationSpec;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1QuotaStatusProjectCluster {
	/**
	* Used is the amount currently used. Maps resource name, such as pods, to their used amount.
	*/
	"used"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1QuotaStatusProject {
	/**
	* Clusters holds the used amount per cluster. Maps cluster name to used resources
	*/
	"clusters"?: {
		[key: string]: StorageV1QuotaStatusProjectCluster;
	};
	/**
	* Limit is the amount limited, copied from spec.quotas.project
	*/
	"limit"?: {
		[key: string]: string;
	};
	/**
	* Used is the amount currently used across all clusters
	*/
	"used"?: {
		[key: string]: string;
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1QuotaStatusUserUsed {
	/**
	* Teams is a mapping of teams to used resources
	*/
	"teams"?: {
		[key: string]: {
			[key: string]: string;
		};
	};
	/**
	* Users is a mapping of users to used resources
	*/
	"users"?: {
		[key: string]: {
			[key: string]: string;
		};
	};
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1QuotaStatusUser {
	/**
	* Clusters holds the used amount per cluster. Maps cluster name to used resources
	*/
	"clusters"?: {
		[key: string]: StorageV1QuotaStatusUserUsed;
	};
	/**
	* Limit is the amount limited per user / team
	*/
	"limit"?: {
		[key: string]: string;
	};
	"used"?: StorageV1QuotaStatusUserUsed;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1QuotaStatus {
	"project"?: StorageV1QuotaStatusProject;
	"user"?: StorageV1QuotaStatusUser;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ProjectStatus {
	/**
	* Conditions holds several conditions the project might be in
	*/
	"conditions"?: Array<StorageV1Condition>;
	"quotas"?: StorageV1QuotaStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Project {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1ProjectSpec;
	"status"?: ManagementV1ProjectStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1RedirectTokenSpec {
	/**
	* Token is the token that includes the redirect request
	*/
	"token"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1RedirectTokenStatus {
	"redirectURL"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1RedirectToken {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1RedirectTokenSpec;
	"status"?: ManagementV1RedirectTokenStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1RegisterVirtualClusterSpec {
	/**
	* Chart specifies the vCluster chart.
	*/
	"chart"?: string;
	/**
	* ForceName specifies if the name should be used or creation will fail.
	*/
	"forceName"?: boolean;
	/**
	* Name is the virtual cluster instance name. If the name is already taken, the platform will construct a name for the vcluster based on the service uid and this name.
	*/
	"name"?: string;
	/**
	* Project is the project name the virtual cluster should be in.
	*/
	"project"?: string;
	/**
	* ServiceUID uniquely identifies the virtual cluster based on the service uid.
	*/
	"serviceUID"?: string;
	/**
	* Values specifies the vCluster config.
	*/
	"values"?: string;
	/**
	* Version specifies the vCluster version.
	*/
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1RegisterVirtualClusterStatus {
	/**
	* Name is the actual name of the virtual cluster instance.
	*/
	"name"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1RegisterVirtualCluster {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1RegisterVirtualClusterSpec;
	"status"?: ManagementV1RegisterVirtualClusterStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ResetAccessKeySpec {
	/**
	* Description describes an app
	*/
	"description"?: string;
	/**
	* If this field is true, the access key is still allowed to exist, however will not work to access the api
	*/
	"disabled"?: boolean;
	/**
	* The display name shown in the UI
	*/
	"displayName"?: string;
	/**
	* Groups specifies extra groups to apply when using this access key
	*/
	"groups"?: Array<string>;
	"identity"?: StorageV1AccessKeyIdentity;
	/**
	* The last time the identity was refreshed
	*/
	"identityRefresh"?: Date;
	/**
	* The actual access key that will be used as a bearer token
	*/
	"key"?: string;
	"oidcLogin"?: StorageV1AccessKeyOIDC;
	"oidcProvider"?: StorageV1AccessKeyOIDCProvider;
	/**
	* DEPRECATED: do not use anymore Parent is used to share OIDC and external token information with multiple access keys. Since copying an OIDC refresh token would result in the other access keys becoming invalid after a refresh parent allows access keys to share that information.  The use case for this is primarily user generated access keys, which will have the users current access key as parent if it contains an OIDC token.
	*/
	"parent"?: string;
	"scope"?: StorageV1AccessKeyScope;
	/**
	* Subject is a generic subject that can be used instead of user or team
	*/
	"subject"?: string;
	/**
	* The team this access key refers to
	*/
	"team"?: string;
	/**
	* The time to life for this access key
	*/
	"ttl"?: number;
	/**
	* If this is specified, the time to life for this access key will start after the lastActivity instead of creation timestamp
	*/
	"ttlAfterLastActivity"?: boolean;
	/**
	* The type of an access key, which basically describes if the access key is user managed or managed by loft itself.
	*/
	"type"?: string;
	/**
	* The user this access key refers to
	*/
	"user"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ResetAccessKeyStatus {
	/**
	* The last time this access key was used to access the api
	*/
	"lastActivity"?: Date;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ResetAccessKey {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1ResetAccessKeySpec;
	"status"?: ManagementV1ResetAccessKeyStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1RunnerAccessKey {
	/**
	* AccessKey is the access key used by the runner
	*/
	"accessKey"?: string;
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1RunnerConfig {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* TokenCaCert is the certificate authority the Loft tokens will be signed with
	*/
	"tokenCaCert"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1NonResourceAttributes {
	/**
	* Path is the URL path of the request
	*/
	"path"?: string;
	/**
	* Verb is the standard HTTP verb
	*/
	"verb"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ResourceAttributes {
	/**
	* Group is the API Group of the Resource.  \"*\" means all.
	*/
	"group"?: string;
	/**
	* Name is the name of the resource being requested for a \"get\" or deleted for a \"delete\". \"\" (empty) means all.
	*/
	"name"?: string;
	/**
	* Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces \"\" (empty) is defaulted for LocalSubjectAccessReviews \"\" (empty) is empty for cluster-scoped resources \"\" (empty) means \"all\" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
	*/
	"namespace"?: string;
	/**
	* Resource is one of the existing resource types.  \"*\" means all.
	*/
	"resource"?: string;
	/**
	* Subresource is one of the existing resource types.  \"\" means none.
	*/
	"subresource"?: string;
	/**
	* Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
	*/
	"verb"?: string;
	/**
	* Version is the API Version of the Resource.  \"*\" means all.
	*/
	"version"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SelfSubjectAccessReviewSpec {
	"nonResourceAttributes"?: V1NonResourceAttributes;
	"resourceAttributes"?: V1ResourceAttributes;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SelfSubjectAccessReviewStatus {
	/**
	* Allowed is required. True if the action would be allowed, false otherwise.
	*/
	"allowed": boolean;
	/**
	* Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
	*/
	"denied"?: boolean;
	/**
	* EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
	*/
	"evaluationError"?: string;
	/**
	* Reason is optional.  It indicates why a request was allowed or denied.
	*/
	"reason"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SelfSubjectAccessReview {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1SelfSubjectAccessReviewSpec;
	"status"?: ManagementV1SelfSubjectAccessReviewStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SelfSpec {
	/**
	* AccessKey is an optional access key to use instead of the provided one
	*/
	"accessKey"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1UserInfo {
	/**
	* The display name shown in the UI
	*/
	"displayName"?: string;
	/**
	* The users email address
	*/
	"email"?: string;
	/**
	* Icon is the icon of the user / team
	*/
	"icon"?: string;
	/**
	* Name is the kubernetes name of the object
	*/
	"name"?: string;
	/**
	* The user subject
	*/
	"subject"?: string;
	/**
	* Teams are the teams the user is part of
	*/
	"teams"?: Array<StorageV1EntityInfo>;
	/**
	* The username that is used to login
	*/
	"username"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SelfStatus {
	/**
	* The name of the currently used access key
	*/
	"accessKey"?: string;
	"accessKeyScope"?: StorageV1AccessKeyScope;
	/**
	* The type of the currently used access key
	*/
	"accessKeyType"?: string;
	/**
	* ChatAuthToken is the token used to authenticate with the in-product chat widget in the UI
	*/
	"chatAuthToken"?: string;
	/**
	* The groups of the currently logged in user
	*/
	"groups"?: Array<string>;
	/**
	* InstanceID is the loft instance id
	*/
	"instanceID"?: string;
	/**
	* ProjectNamespacePrefix is the prefix used to name project namespaces after defaulting has been applied
	*/
	"projectNamespacePrefix"?: string;
	/**
	* The subject of the currently logged in user
	*/
	"subject"?: string;
	"team"?: StorageV1EntityInfo;
	/**
	* UID is the user uid
	*/
	"uid"?: string;
	"user"?: ManagementV1UserInfo;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Self {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1SelfSpec;
	"status"?: ManagementV1SelfStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SharedSecretSpec {
	/**
	* Access holds the access rights for users and teams which will be transformed to Roles and RoleBindings
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* Data contains the secret data. Each key must consist of alphanumeric characters, \'-\', \'_\' or \'.\'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
	*/
	"data"?: {
		[key: string]: string;
	};
	/**
	* Description describes a shared secret
	*/
	"description"?: string;
	/**
	* DisplayName is the name that should be displayed in the UI
	*/
	"displayName"?: string;
	"owner"?: StorageV1UserOrTeam;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SharedSecretStatus {
	/**
	* Conditions holds several conditions the project might be in
	*/
	"conditions"?: Array<StorageV1Condition>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SharedSecret {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1SharedSecretSpec;
	"status"?: ManagementV1SharedSecretStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ClusterRef {
	/**
	* Cluster is the connected cluster the space will be created in
	*/
	"cluster"?: string;
	/**
	* Namespace is the namespace inside the connected cluster holding the space
	*/
	"namespace"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SpaceInstanceSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	"clusterRef"?: StorageV1ClusterRef;
	/**
	* Description describes a space instance
	*/
	"description"?: string;
	/**
	* DisplayName is the name that should be displayed in the UI
	*/
	"displayName"?: string;
	/**
	* ExtraAccessRules defines extra rules which users and teams should have which access to the virtual cluster.
	*/
	"extraAccessRules"?: Array<StorageV1InstanceAccessRule>;
	"owner"?: StorageV1UserOrTeam;
	/**
	* Parameters are values to pass to the template. The values should be encoded as YAML string where each parameter is represented as a top-level field key.
	*/
	"parameters"?: string;
	"template"?: StorageV1SpaceTemplateDefinition;
	"templateRef"?: StorageV1TemplateRef;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ChartStatus {
	/**
	* LastAppliedChartConfigHash is the last applied configuration
	*/
	"lastAppliedChartConfigHash"?: string;
	/**
	* Name of the chart that was applied
	*/
	"name"?: string;
	/**
	* Namespace of the chart that was applied
	*/
	"namespace"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ObjectsStatus {
	/**
	* Apps are the apps that were applied
	*/
	"apps"?: Array<StorageV1AppReference>;
	/**
	* Charts are the charts that were applied
	*/
	"charts"?: Array<StorageV1ChartStatus>;
	/**
	* LastAppliedObjects holds the status for the objects that were applied
	*/
	"lastAppliedObjects"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SpaceInstanceStatus {
	/**
	* CanUpdate specifies if the requester can update the instance
	*/
	"canUpdate"?: boolean;
	/**
	* CanUse specifies if the requester can use the instance
	*/
	"canUse"?: boolean;
	/**
	* Conditions holds several conditions the virtual cluster might be in
	*/
	"conditions"?: Array<StorageV1Condition>;
	/**
	* IgnoreReconciliation tells the controller to ignore reconciliation for this instance -- this is primarily used when migrating virtual cluster instances from project to project; this prevents a situation where there are two virtual cluster instances representing the same virtual cluster which could cause issues with concurrent reconciliations of the same object. Once the virtual cluster instance has been cloned and placed into the new project, this (the \"old\") virtual cluster instance can safely be deleted.
	*/
	"ignoreReconciliation"?: boolean;
	/**
	* Message describes the reason in human-readable form
	*/
	"message"?: string;
	/**
	* Phase describes the current phase the space instance is in
	*/
	"phase"?: string;
	/**
	* Reason describes the reason in machine-readable form
	*/
	"reason"?: string;
	"sleepModeConfig"?: ClusterV1SleepModeConfig;
	"space"?: StorageV1SpaceTemplateDefinition;
	"spaceObjects"?: StorageV1ObjectsStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SpaceInstance {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1SpaceInstanceSpec;
	"status"?: ManagementV1SpaceInstanceStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SubjectAccessReviewSpec {
	/**
	* Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
	*/
	"extra"?: {
		[key: string]: Array<string>;
	};
	/**
	* Groups is the groups you\'re testing for.
	*/
	"groups"?: Array<string>;
	"nonResourceAttributes"?: V1NonResourceAttributes;
	"resourceAttributes"?: V1ResourceAttributes;
	/**
	* UID information about the requesting user.
	*/
	"uid"?: string;
	/**
	* User is the user you\'re testing for. If you specify \"User\" but not \"Groups\", then is it interpreted as \"What if User were not a member of any groups
	*/
	"user"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SubjectAccessReviewStatus {
	/**
	* Allowed is required. True if the action would be allowed, false otherwise.
	*/
	"allowed": boolean;
	/**
	* Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
	*/
	"denied"?: boolean;
	/**
	* EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
	*/
	"evaluationError"?: string;
	/**
	* Reason is optional.  It indicates why a request was allowed or denied.
	*/
	"reason"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1SubjectAccessReview {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1SubjectAccessReviewSpec;
	"status"?: ManagementV1SubjectAccessReviewStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1TaskLog {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1TargetCluster {
	/**
	* Cluster is the cluster where the task should get executed
	*/
	"cluster"?: string;
	/**
	* Namespace is the namespace where the task should get executed
	*/
	"namespace"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1TargetInstance {
	/**
	* Name is the name of the instance
	*/
	"name"?: string;
	/**
	* Project where the instance is in
	*/
	"project"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1Target {
	"cluster"?: StorageV1TargetCluster;
	"spaceInstance"?: StorageV1TargetInstance;
	"virtualClusterInstance"?: StorageV1TargetInstance;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1AppTask {
	"appReference"?: StorageV1AppReference;
	/**
	* RollbackRevision is the revision to rollback to
	*/
	"rollbackRevision"?: string;
	/**
	* Type is the task type. Defaults to Upgrade
	*/
	"type"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1HelmTaskRelease {
	"config"?: ClusterV1HelmReleaseConfig;
	/**
	* Labels are additional labels for the helm release.
	*/
	"labels"?: {
		[key: string]: string;
	};
	/**
	* Name is the name of the release
	*/
	"name"?: string;
	/**
	* Namespace of the release, if empty will use the target namespace
	*/
	"namespace"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1HelmTask {
	"release"?: StorageV1HelmTaskRelease;
	/**
	* RollbackRevision is the revision to rollback to
	*/
	"rollbackRevision"?: string;
	/**
	* Type is the task type. Defaults to Upgrade
	*/
	"type"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1TaskDefinition {
	"appTask"?: StorageV1AppTask;
	"helm"?: StorageV1HelmTask;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1TaskSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* DisplayName is the name that should be displayed in the UI
	*/
	"displayName"?: string;
	"owner"?: StorageV1UserOrTeam;
	"scope"?: StorageV1AccessKeyScope;
	"target"?: StorageV1Target;
	"task"?: StorageV1TaskDefinition;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ContainerStateRunning {
	/**
	* Time at which the container was last (re-)started
	*/
	"startedAt"?: Date;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ContainerStateTerminated {
	/**
	* Container\'s ID in the format \'<type>://<container_id>\'
	*/
	"containerID"?: string;
	/**
	* Exit status from the last termination of the container
	*/
	"exitCode": number;
	/**
	* Time at which the container last terminated
	*/
	"finishedAt"?: Date;
	/**
	* Message regarding the last termination of the container
	*/
	"message"?: string;
	/**
	* (brief) reason from the last termination of the container
	*/
	"reason"?: string;
	/**
	* Signal from the last termination of the container
	*/
	"signal"?: number;
	/**
	* Time at which previous execution of the container started
	*/
	"startedAt"?: Date;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ContainerStateWaiting {
	/**
	* Message regarding why the container is not yet running.
	*/
	"message"?: string;
	/**
	* (brief) reason the container is not yet running.
	*/
	"reason"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ContainerState {
	"running"?: V1ContainerStateRunning;
	"terminated"?: V1ContainerStateTerminated;
	"waiting"?: V1ContainerStateWaiting;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1VolumeMountStatus {
	/**
	* MountPath corresponds to the original VolumeMount.
	*/
	"mountPath": string;
	/**
	* Name corresponds to the name of the original VolumeMount.
	*/
	"name": string;
	/**
	* ReadOnly corresponds to the original VolumeMount.
	*/
	"readOnly"?: boolean;
	/**
	* RecursiveReadOnly must be set to Disabled, Enabled, or unspecified (for non-readonly mounts). An IfPossible value in the original VolumeMount must be translated to Disabled or Enabled, depending on the mount result.
	*/
	"recursiveReadOnly"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class V1ContainerStatus {
	/**
	* AllocatedResources represents the compute resources allocated for this container by the node. Kubelet sets this value to Container.Resources.Requests upon successful pod admission and after successfully admitting desired pod resize.
	*/
	"allocatedResources"?: {
		[key: string]: string;
	};
	/**
	* ContainerID is the ID of the container in the format \'<type>://<container_id>\'. Where type is a container runtime identifier, returned from Version call of CRI API (for example \"containerd\").
	*/
	"containerID"?: string;
	/**
	* Image is the name of container image that the container is running. The container image may not match the image used in the PodSpec, as it may have been resolved by the runtime. More info: https://kubernetes.io/docs/concepts/containers/images.
	*/
	"image": string;
	/**
	* ImageID is the image ID of the container\'s image. The image ID may not match the image ID of the image used in the PodSpec, as it may have been resolved by the runtime.
	*/
	"imageID": string;
	"lastState"?: V1ContainerState;
	/**
	* Name is a DNS_LABEL representing the unique name of the container. Each container in a pod must have a unique name across all container types. Cannot be updated.
	*/
	"name": string;
	/**
	* Ready specifies whether the container is currently passing its readiness check. The value will change as readiness probes keep executing. If no readiness probes are specified, this field defaults to true once the container is fully started (see Started field).  The value is typically used to determine whether a container is ready to accept traffic.
	*/
	"ready": boolean;
	"resources"?: V1ResourceRequirements;
	/**
	* RestartCount holds the number of times the container has been restarted. Kubelet makes an effort to always increment the value, but there are cases when the state may be lost due to node restarts and then the value may be reset to 0. The value is never negative.
	*/
	"restartCount": number;
	/**
	* Started indicates whether the container has finished its postStart lifecycle hook and passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. In both cases, startup probes will run again. Is always true when no startupProbe is defined and container is running and has passed the postStart lifecycle hook. The null value must be treated the same as false.
	*/
	"started"?: boolean;
	"state"?: V1ContainerState;
	/**
	* Status of volume mounts.
	*/
	"volumeMounts"?: Array<V1VolumeMountStatus>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1TaskStatus {
	"cluster"?: StorageV1EntityInfo;
	/**
	* Conditions holds several conditions the virtual cluster might be in
	*/
	"conditions"?: Array<StorageV1Condition>;
	"containerState"?: V1ContainerStatus;
	/**
	* ObservedGeneration is the latest generation observed by the controller.
	*/
	"observedGeneration"?: number;
	"owner"?: StorageV1UserOrTeamEntity;
	/**
	* PodPhase describes the phase this task is in  Possible enum values:  - `\"Failed\"` means that all containers in the pod have terminated, and at least one container has terminated in a failure (exited with a non-zero exit code or was stopped by the system).  - `\"Pending\"` means the pod has been accepted by the system, but one or more of the containers has not been started. This includes time before being bound to a node, as well as time spent pulling images onto the host.  - `\"Running\"` means the pod has been bound to a node and all of the containers have been started. At least one container is still running or is in the process of being restarted.  - `\"Succeeded\"` means that all containers in the pod have voluntarily terminated with a container exit code of 0, and the system is not going to restart any of these containers.  - `\"Unknown\"` means that for some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod. Deprecated: It isn\'t being set since 2015 (74da3b14b0c0f658b3bb8d2def5094686d0e9095)
	*/
	"podPhase"?: ManagementV1TaskStatusPodPhaseEnum;
	/**
	* Started determines if the task was started
	*/
	"started"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare enum ManagementV1TaskStatusPodPhaseEnum {
	Failed = "Failed",
	Pending = "Pending",
	Running = "Running",
	Succeeded = "Succeeded",
	Unknown = "Unknown"
}
declare class ManagementV1Task {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1TaskSpec;
	"status"?: ManagementV1TaskStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1TeamAccessKeys {
	"accessKeys"?: Array<ManagementV1OwnedAccessKey>;
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ClusterSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	"config"?: StorageV1SecretRef;
	/**
	* Description describes a cluster access object
	*/
	"description"?: string;
	/**
	* If specified this name is displayed in the UI instead of the metadata name
	*/
	"displayName"?: string;
	/**
	* Local specifies if it is the local cluster that should be connected, when this is specified, config is optional
	*/
	"local"?: boolean;
	/**
	* The namespace where the cluster components will be installed in
	*/
	"managementNamespace"?: string;
	/**
	* NetworkPeer specifies if the cluster is connected via tailscale, when this is specified, config is optional
	*/
	"networkPeer"?: boolean;
	"owner"?: StorageV1UserOrTeam;
	/**
	* If unusable is true, no spaces or virtual clusters can be scheduled on this cluster.
	*/
	"unusable"?: boolean;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1ClusterStatus {
	"message"?: string;
	"phase"?: string;
	"reason"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1Cluster {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: StorageV1ClusterSpec;
	"status"?: StorageV1ClusterStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1ClusterAccounts {
	/**
	* Accounts are the accounts that belong to the user in the cluster
	*/
	"accounts"?: Array<string>;
	"cluster"?: StorageV1Cluster;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1TeamClusters {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	"clusters"?: Array<ManagementV1ClusterAccounts>;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1KindSecretRef {
	/**
	* APIGroup is the api group of the secret
	*/
	"apiGroup"?: string;
	"key"?: string;
	/**
	* Kind is the kind of the secret
	*/
	"kind"?: string;
	"secretName"?: string;
	"secretNamespace"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1TeamSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* ClusterRoles define the cluster roles that the users should have assigned in the cluster.
	*/
	"clusterRoles"?: Array<StorageV1ClusterRoleRef>;
	/**
	* Description describes a cluster access object
	*/
	"description"?: string;
	/**
	* The display name shown in the UI
	*/
	"displayName"?: string;
	/**
	* The groups defined in a token that belong to a team
	*/
	"groups"?: Array<string>;
	/**
	* ImagePullSecrets holds secret references to image pull secrets the team has access to.
	*/
	"imagePullSecrets"?: Array<StorageV1KindSecretRef>;
	"owner"?: StorageV1UserOrTeam;
	/**
	* The username of the team that will be used for identification and docker registry namespace
	*/
	"username"?: string;
	/**
	* The loft users that belong to a team
	*/
	"users"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1Team {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1TeamSpec;
	"status"?: any;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1TranslateVClusterResourceNameSpec {
	/**
	* Name is the name of resource we want to rename
	*/
	"name": string;
	/**
	* Namespace is the name of namespace in which this resource is running
	*/
	"namespace": string;
	/**
	* VClusterName is the name of vCluster in which this resource is running
	*/
	"vclusterName": string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1TranslateVClusterResourceNameStatus {
	/**
	* Name is the converted name of resource
	*/
	"name"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1TranslateVClusterResourceName {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1TranslateVClusterResourceNameSpec;
	"status"?: ManagementV1TranslateVClusterResourceNameStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1UserAccessKeys {
	"accessKeys"?: Array<ManagementV1OwnedAccessKey>;
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1UserClusters {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	"clusters"?: Array<ManagementV1ClusterAccounts>;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1UserPermissionsRole {
	/**
	* ClusterRole is the name of the cluster role assigned to this user.
	*/
	"clusterRole"?: string;
	/**
	* Namespace where this rules are valid.
	*/
	"namespace"?: string;
	/**
	* Role is the name of the role assigned to this user.
	*/
	"role"?: string;
	/**
	* Rules are the roles rules
	*/
	"rules"?: Array<V1PolicyRule>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1UserPermissions {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* ClusterRoles that apply to the user.
	*/
	"clusterRoles"?: Array<ManagementV1UserPermissionsRole>;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* NamespaceRoles that apply to the user. Can be either regular roles or cluster roles that are namespace scoped.
	*/
	"namespaceRoles"?: Array<ManagementV1UserPermissionsRole>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1UserProfile {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* CurrentPassword is the current password of the user
	*/
	"currentPassword"?: string;
	/**
	* Custom is custom information that should be saved of the user
	*/
	"custom"?: string;
	/**
	* The new display name shown in the UI
	*/
	"displayName"?: string;
	/**
	* Email is the new email of the user
	*/
	"email"?: string;
	/**
	* Icon is the new icon of the user
	*/
	"icon"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	/**
	* Password is the new password of the user
	*/
	"password"?: string;
	/**
	* Username is the new username of the user
	*/
	"username"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1UserSpec {
	/**
	* Access holds the access rights for users and teams
	*/
	"access"?: Array<StorageV1Access>;
	/**
	* ClusterRoles define the cluster roles that the users should have assigned in the cluster.
	*/
	"clusterRoles"?: Array<StorageV1ClusterRoleRef>;
	"codesRef"?: StorageV1SecretRef;
	/**
	* Description describes a cluster access object
	*/
	"description"?: string;
	/**
	* If disabled is true, an user will not be able to login anymore. All other user resources are unaffected and other users can still interact with this user
	*/
	"disabled"?: boolean;
	/**
	* The display name shown in the UI
	*/
	"displayName"?: string;
	/**
	* The users email address
	*/
	"email"?: string;
	/**
	* The groups the user has access to
	*/
	"groups"?: Array<string>;
	/**
	* The URL to an icon that should be shown for the user
	*/
	"icon"?: string;
	/**
	* ImagePullSecrets holds secret references to image pull secrets the user has access to.
	*/
	"imagePullSecrets"?: Array<StorageV1KindSecretRef>;
	"owner"?: StorageV1UserOrTeam;
	"passwordRef"?: StorageV1SecretRef;
	/**
	* SSOGroups is used to remember groups that were added from sso.
	*/
	"ssoGroups"?: Array<string>;
	/**
	* The user subject as presented by the token
	*/
	"subject"?: string;
	/**
	* TokenGeneration can be used to invalidate all user tokens
	*/
	"tokenGeneration"?: number;
	/**
	* The username that is used to login
	*/
	"username"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1UserStatus {
	/**
	* Teams the user is currently part of
	*/
	"teams"?: Array<string>;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1User {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1UserSpec;
	"status"?: ManagementV1UserStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1VirtualClusterAccessKey {
	/**
	* AccessKey is the access key used by the agent
	*/
	"accessKey"?: string;
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1VirtualClusterInstanceKubeConfigSpec {
	/**
	* CertificateTTL holds the ttl (in seconds) to set for the certificate associated with the returned kubeconfig. This field is optional, if no value is provided, the certificate TTL will be set to one day. If set to zero, this will cause loft to pass nil to the certificate signing request, which will result in the certificate being valid for the clusters `cluster-signing-duration` value which is typically one year.
	*/
	"certificateTTL"?: number;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1VirtualClusterInstanceKubeConfigStatus {
	/**
	* KubeConfig holds the final kubeconfig output
	*/
	"kubeConfig"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1VirtualClusterInstanceKubeConfig {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1VirtualClusterInstanceKubeConfigSpec;
	"status"?: ManagementV1VirtualClusterInstanceKubeConfigStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1VirtualClusterInstanceLog {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class StorageV1VirtualClusterClusterRef {
	/**
	* Cluster is the connected cluster the space will be created in
	*/
	"cluster"?: string;
	/**
	* Namespace is the namespace inside the connected cluster holding the space
	*/
	"namespace"?: string;
	/**
	* VirtualCluster is the name of the virtual cluster inside the namespace
	*/
	"virtualCluster"?: string;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1VirtualClusterInstanceSpec {
	/**
	* Access to the virtual cluster object itself
	*/
	"access"?: Array<StorageV1Access>;
	"clusterRef"?: StorageV1VirtualClusterClusterRef;
	/**
	* Description describes a virtual cluster instance
	*/
	"description"?: string;
	/**
	* DisplayName is the name that should be displayed in the UI
	*/
	"displayName"?: string;
	/**
	* External specifies if the virtual cluster is managed by the platform agent or externally.
	*/
	"external"?: boolean;
	/**
	* ExtraAccessRules defines extra rules which users and teams should have which access to the virtual cluster.
	*/
	"extraAccessRules"?: Array<StorageV1InstanceAccessRule>;
	/**
	* NetworkPeer specifies if the cluster is connected via tailscale.
	*/
	"networkPeer"?: boolean;
	"owner"?: StorageV1UserOrTeam;
	/**
	* Parameters are values to pass to the template. The values should be encoded as YAML string where each parameter is represented as a top-level field key.
	*/
	"parameters"?: string;
	"template"?: StorageV1VirtualClusterTemplateDefinition;
	"templateRef"?: StorageV1TemplateRef;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1VirtualClusterInstanceStatus {
	/**
	* CanUpdate specifies if the requester can update the instance
	*/
	"canUpdate"?: boolean;
	/**
	* CanUse specifies if the requester can use the instance
	*/
	"canUse"?: boolean;
	/**
	* Conditions holds several conditions the virtual cluster might be in
	*/
	"conditions"?: Array<StorageV1Condition>;
	/**
	* DeployHash is the hash of the last deployed values.
	*/
	"deployHash"?: string;
	/**
	* IgnoreReconciliation tells the controller to ignore reconciliation for this instance -- this is primarily used when migrating virtual cluster instances from project to project; this prevents a situation where there are two virtual cluster instances representing the same virtual cluster which could cause issues with concurrent reconciliations of the same object. Once the virtual cluster instance has been cloned and placed into the new project, this (the \"old\") virtual cluster instance can safely be deleted.
	*/
	"ignoreReconciliation"?: boolean;
	/**
	* Message describes the reason in human-readable form why the cluster is in the current phase
	*/
	"message"?: string;
	/**
	* Online specifies if there is at least one network peer available for an agentless vCluster.
	*/
	"online"?: boolean;
	/**
	* Phase describes the current phase the virtual cluster instance is in
	*/
	"phase"?: string;
	/**
	* Reason describes the reason in machine-readable form why the cluster is in the current phase
	*/
	"reason"?: string;
	/**
	* ServiceUID is the service uid of the virtual cluster to uniquely identify it.
	*/
	"serviceUID"?: string;
	"sleepModeConfig"?: ClusterV1SleepModeConfig;
	"spaceObjects"?: StorageV1ObjectsStatus;
	"virtualCluster"?: StorageV1VirtualClusterTemplateDefinition;
	"virtualClusterObjects"?: StorageV1ObjectsStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
declare class ManagementV1VirtualClusterInstance {
	/**
	* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	*/
	"apiVersion"?: string;
	/**
	* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	*/
	"kind"?: string;
	"metadata"?: V1ObjectMeta;
	"spec"?: ManagementV1VirtualClusterInstanceSpec;
	"status"?: ManagementV1VirtualClusterInstanceStatus;
	static readonly discriminator: string | undefined;
	static readonly attributeTypeMap: Array<{
		name: string;
		baseName: string;
		type: string;
		format: string;
	}>;
	static getAttributeTypeMap(): {
		name: string;
		baseName: string;
		type: string;
		format: string;
	}[];
	constructor();
}
export type TGenResources = {
	ManagementV1AgentAuditEvent: GroupVersionResource<ManagementV1AgentAuditEvent>;
	ManagementV1Announcement: GroupVersionResource<ManagementV1Announcement>;
	ManagementV1App: GroupVersionResource<ManagementV1App>;
	ManagementV1AppCredentials: GroupVersionResource<ManagementV1AppCredentials>;
	ManagementV1Backup: GroupVersionResource<ManagementV1Backup>;
	ManagementV1BackupApply: GroupVersionResource<ManagementV1BackupApply>;
	ManagementV1Cluster: GroupVersionResource<ManagementV1Cluster>;
	ManagementV1ClusterAccess: GroupVersionResource<ManagementV1ClusterAccess>;
	ManagementV1ClusterAccessKey: GroupVersionResource<ManagementV1ClusterAccessKey>;
	ManagementV1ClusterAgentConfig: GroupVersionResource<ManagementV1ClusterAgentConfig>;
	ManagementV1ClusterCharts: GroupVersionResource<ManagementV1ClusterCharts>;
	ManagementV1ClusterDomain: GroupVersionResource<ManagementV1ClusterDomain>;
	ManagementV1ClusterMemberAccess: GroupVersionResource<ManagementV1ClusterMemberAccess>;
	ManagementV1ClusterMembers: GroupVersionResource<ManagementV1ClusterMembers>;
	ManagementV1ClusterReset: GroupVersionResource<ManagementV1ClusterReset>;
	ManagementV1ClusterRoleTemplate: GroupVersionResource<ManagementV1ClusterRoleTemplate>;
	ManagementV1ClusterVirtualClusterDefaults: GroupVersionResource<ManagementV1ClusterVirtualClusterDefaults>;
	ManagementV1Config: GroupVersionResource<ManagementV1Config>;
	ManagementV1ConvertVirtualClusterConfig: GroupVersionResource<ManagementV1ConvertVirtualClusterConfig>;
	ManagementV1DevPodWorkspaceInstance: GroupVersionResource<ManagementV1DevPodWorkspaceInstance>;
	ManagementV1DevPodWorkspaceInstanceState: GroupVersionResource<ManagementV1DevPodWorkspaceInstanceState>;
	ManagementV1DevPodWorkspaceTemplate: GroupVersionResource<ManagementV1DevPodWorkspaceTemplate>;
	ManagementV1DirectClusterEndpointToken: GroupVersionResource<ManagementV1DirectClusterEndpointToken>;
	ManagementV1Event: GroupVersionResource<ManagementV1Event>;
	ManagementV1Feature: GroupVersionResource<ManagementV1Feature>;
	ManagementV1IngressAuthToken: GroupVersionResource<ManagementV1IngressAuthToken>;
	ManagementV1Kiosk: GroupVersionResource<ManagementV1Kiosk>;
	ManagementV1License: GroupVersionResource<ManagementV1License>;
	ManagementV1LicenseRequest: GroupVersionResource<ManagementV1LicenseRequest>;
	ManagementV1LicenseToken: GroupVersionResource<ManagementV1LicenseToken>;
	ManagementV1LoftUpgrade: GroupVersionResource<ManagementV1LoftUpgrade>;
	ManagementV1OIDCClient: GroupVersionResource<ManagementV1OIDCClient>;
	ManagementV1OwnedAccessKey: GroupVersionResource<ManagementV1OwnedAccessKey>;
	ManagementV1Project: GroupVersionResource<ManagementV1Project>;
	ManagementV1ProjectChartInfo: GroupVersionResource<ManagementV1ProjectChartInfo>;
	ManagementV1ProjectCharts: GroupVersionResource<ManagementV1ProjectCharts>;
	ManagementV1ProjectClusters: GroupVersionResource<ManagementV1ProjectClusters>;
	ManagementV1ProjectImportSpace: GroupVersionResource<ManagementV1ProjectImportSpace>;
	ManagementV1ProjectMembers: GroupVersionResource<ManagementV1ProjectMembers>;
	ManagementV1ProjectMigrateSpaceInstance: GroupVersionResource<ManagementV1ProjectMigrateSpaceInstance>;
	ManagementV1ProjectMigrateVirtualClusterInstance: GroupVersionResource<ManagementV1ProjectMigrateVirtualClusterInstance>;
	ManagementV1ProjectSecret: GroupVersionResource<ManagementV1ProjectSecret>;
	ManagementV1ProjectTemplates: GroupVersionResource<ManagementV1ProjectTemplates>;
	ManagementV1RedirectToken: GroupVersionResource<ManagementV1RedirectToken>;
	ManagementV1RegisterVirtualCluster: GroupVersionResource<ManagementV1RegisterVirtualCluster>;
	ManagementV1ResetAccessKey: GroupVersionResource<ManagementV1ResetAccessKey>;
	ManagementV1Runner: GroupVersionResource<ManagementV1Runner>;
	ManagementV1RunnerAccessKey: GroupVersionResource<ManagementV1RunnerAccessKey>;
	ManagementV1RunnerConfig: GroupVersionResource<ManagementV1RunnerConfig>;
	ManagementV1Self: GroupVersionResource<ManagementV1Self>;
	ManagementV1SelfSubjectAccessReview: GroupVersionResource<ManagementV1SelfSubjectAccessReview>;
	ManagementV1SharedSecret: GroupVersionResource<ManagementV1SharedSecret>;
	ManagementV1SpaceInstance: GroupVersionResource<ManagementV1SpaceInstance>;
	ManagementV1SpaceTemplate: GroupVersionResource<ManagementV1SpaceTemplate>;
	ManagementV1SubjectAccessReview: GroupVersionResource<ManagementV1SubjectAccessReview>;
	ManagementV1Task: GroupVersionResource<ManagementV1Task>;
	ManagementV1TaskLog: GroupVersionResource<ManagementV1TaskLog>;
	ManagementV1Team: GroupVersionResource<ManagementV1Team>;
	ManagementV1TeamAccessKeys: GroupVersionResource<ManagementV1TeamAccessKeys>;
	ManagementV1TeamClusters: GroupVersionResource<ManagementV1TeamClusters>;
	ManagementV1TranslateVClusterResourceName: GroupVersionResource<ManagementV1TranslateVClusterResourceName>;
	ManagementV1User: GroupVersionResource<ManagementV1User>;
	ManagementV1UserAccessKeys: GroupVersionResource<ManagementV1UserAccessKeys>;
	ManagementV1UserClusters: GroupVersionResource<ManagementV1UserClusters>;
	ManagementV1UserPermissions: GroupVersionResource<ManagementV1UserPermissions>;
	ManagementV1UserProfile: GroupVersionResource<ManagementV1UserProfile>;
	ManagementV1VirtualClusterAccessKey: GroupVersionResource<ManagementV1VirtualClusterAccessKey>;
	ManagementV1VirtualClusterInstance: GroupVersionResource<ManagementV1VirtualClusterInstance>;
	ManagementV1VirtualClusterInstanceKubeConfig: GroupVersionResource<ManagementV1VirtualClusterInstanceKubeConfig>;
	ManagementV1VirtualClusterInstanceLog: GroupVersionResource<ManagementV1VirtualClusterInstanceLog>;
	ManagementV1VirtualClusterTemplate: GroupVersionResource<ManagementV1VirtualClusterTemplate>;
};
export declare const Resources: {
	ClusterV1SleepModeConfig: GroupVersionResource<ClusterV1SleepModeConfig>;
	ClusterV1HelmRelease: GroupVersionResource<ClusterV1HelmRelease>;
	ClusterV1ChartInfo: GroupVersionResource<ClusterV1ChartInfo>;
	VirtualclusterV1HelmRelease: GroupVersionResource<VirtualclusterV1HelmRelease>;
	CustomResourceDefinition: GroupVersionResource<V1CustomResourceDefinition>;
	StorageV1ClusterQuota: GroupVersionResource<StorageV1ClusterQuota>;
	NetworkingV1Ingress: GroupVersionResource<V1Ingress>;
	V1StatefulSet: GroupVersionResource<V1StatefulSet>;
	V1Deployment: GroupVersionResource<V1Deployment>;
	V1Event: GroupVersionResource<CoreV1Event>;
	V1Pod: GroupVersionResource<V1Pod>;
	V1Service: GroupVersionResource<V1Service>;
	V1Node: GroupVersionResource<V1Node>;
	V1Namespace: GroupVersionResource<V1Namespace>;
	V1SelfSubjectAccessReview: GroupVersionResource<V1SelfSubjectAccessReview>;
	V1ClusterRole: GroupVersionResource<V1ClusterRole>;
	V1ClusterRoleBinding: GroupVersionResource<V1ClusterRoleBinding>;
	V1Role: GroupVersionResource<V1Role>;
	V1RoleBinding: GroupVersionResource<V1RoleBinding>;
	V1Secret: GroupVersionResource<V1Secret>;
	V1ConfigMap: GroupVersionResource<V1ConfigMap>;
	V1User: GroupVersionResource<any>;
	V1StorageClassList: GroupVersionResource<V1StorageClassList>;
	V1Beta1PodMetrics: GroupVersionResource<V1Beta1PodMetrics>;
} & TGenResources;
export declare function NewResource<T>(groupVersionResource: GroupVersionResource<T>, name?: string, data?: T): T;

export {};
