/// <reference types="node" />

import { V1Status, VersionInfo } from '@kubernetes/client-node';

declare class Err<E> {
	readonly val: E;
	extra: any;
	readonly ok = false;
	readonly err = true;
	constructor(val: E, extra?: any);
}
declare class Ok<T> {
	readonly val: T;
	extra: any;
	readonly ok = true;
	readonly err = false;
	constructor(val: T, extra?: any);
}
export type ResultError = Ok<undefined> | Err<Failed>;
export type Result<T> = Ok<T> | Err<Failed>;
export type ErrorType = string;
declare class Failed {
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
	* Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
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
	* Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
	*/
	"name": string;
	/**
	* UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
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
	* Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
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
	* Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
	*/
	"labels"?: {
		[key: string]: string;
	};
	/**
	* ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like \"ci-cd\". The set of fields is always in the version that the workflow used when modifying the object.
	*/
	"managedFields"?: Array<V1ManagedFieldsEntry>;
	/**
	* Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
	*/
	"name"?: string;
	/**
	* Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the \"default\" namespace, but \"default\" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.  Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
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
	* UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.  Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
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
export declare function getProjectNamespace(name: string): string;
declare class Client {
	static getAccessKey(): string | null;
	static tryCastToStatus(obj: any): Result<V1Status | null>;
	private readonly apiHost;
	private readonly wsHost;
	private accessKey;
	constructor();
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
	socket(path: string): Promise<WebSocket>;
	private parseResponse;
	management<T>(groupVersionResource: GroupVersionResource<T>): Request<T>;
	managementNonResource<T>(): Request<T>;
	cluster<T>(name: string, groupVersionResource: GroupVersionResource<T>): Request<T>;
	clusterNonResource<T>(name: string): Request<T>;
	project<T>(project: RequestOptionsProject, groupVersionResource: GroupVersionResource<T>): Request<T>;
	projectNonResource<T>(project: RequestOptionsProject): Request<T>;
	vCluster<T>(vCluster: RequestOptionsVCluster, groupVersionResource: GroupVersionResource<T>): Request<T>;
	vClusterNonResource<T>(vCluster: RequestOptionsVCluster): Request<T>;
	auto<T>(cluster: string | undefined, vCluster: RequestOptionsVCluster | undefined, project: RequestOptionsProject | undefined, groupVersionResource: GroupVersionResource<T>): Request<T>;
	autoNonResource(cluster: string | undefined, vCluster: RequestOptionsVCluster | undefined, project: RequestOptionsProject | undefined): Request<unknown>;
	doRawSocket(path: string): Promise<Result<WebSocket>>;
	doRawStream(path: string, init?: RequestInit, headers?: Record<string, string>): Promise<Result<ReadableStreamDefaultReader<Uint8Array>>>;
	doRaw<E>(path: string, init?: RequestInit, headers?: Record<string, string>): Promise<Result<E>>;
	private doRawInternal;
	private impersonationHeaders;
	private clearStorage;
	private refreshCookie;
	logout(): Promise<ResultError>;
}
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
declare class Request<T> {
	private readonly options;
	constructor(options: RequestOptions<T>);
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
export declare const client: Client;

export {};
