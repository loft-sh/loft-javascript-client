/**
 * Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: master
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LabelSelector } from '../models/V1LabelSelector';


export class PolicyV1beta1JsPolicySpec {
    /**
    * APIGroups is the API groups the resources belong to. \'*\' is all groups. If \'*\' is present, the length of the slice must be one.
    */
    'apiGroups'?: Array<string>;
    /**
    * APIVersions is the API versions the resources belong to. \'*\' is all versions. If \'*\' is present, the length of the slice must be one.
    */
    'apiVersions'?: Array<string>;
    /**
    * AuditLogSize defines how many violations should be logged in the status. Defaults to 10
    */
    'auditLogSize'?: number;
    /**
    * AuditPolicy defines if violations should be logged to the webhook status or not. By default, violations will be logged to the CRD status.
    */
    'auditPolicy'?: string;
    /**
    * Dependencies is a map of npm modules this webhook should be bundled with
    */
    'dependencies'?: { [key: string]: string; };
    /**
    * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.  Possible enum values:  - `\"Fail\"` means that an error calling the webhook causes the admission to fail.  - `\"Ignore\"` means that an error calling the webhook is ignored.
    */
    'failurePolicy'?: PolicyV1beta1JsPolicySpecFailurePolicyEnum;
    /**
    * JavaScript is the payload of the webhook that will be executed. If this is not defined, jsPolicy expects the user to create a JsPolicyBundle for this policy.
    */
    'javascript'?: string;
    /**
    * matchPolicy defines how the \"rules\" list is used to match incoming requests. Allowed values are \"Exact\" or \"Equivalent\".  - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but \"rules\" only included `apiGroups:[\"apps\"], apiVersions:[\"v1\"], resources: [\"deployments\"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.  - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and \"rules\" only included `apiGroups:[\"apps\"], apiVersions:[\"v1\"], resources: [\"deployments\"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.  Defaults to \"Equivalent\"  Possible enum values:  - `\"Equivalent\"` means requests should be sent to the webhook if they modify a resource listed in rules via another API group or version.  - `\"Exact\"` means requests should only be sent to the webhook if they exactly match a given rule.
    */
    'matchPolicy'?: PolicyV1beta1JsPolicySpecMatchPolicyEnum;
    'namespaceSelector'?: V1LabelSelector;
    'objectSelector'?: V1LabelSelector;
    /**
    * Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If \'*\' is present, the length of the slice must be one. Required.
    */
    'operations'?: Array<string>;
    /**
    * Resources is a list of resources this rule applies to.  For example: \'pods\' means pods. \'pods/log\' means the log subresource of pods. \'*\' means all resources, but not subresources. \'pods/_*\' means all subresources of pods. \'*_/scale\' means all scale subresources. \'*_/_*\' means all resources and their subresources.  If wildcard is present, the validation rule will ensure resources do not overlap with each other.  Depending on the enclosing object, subresources might not be allowed. Required.
    */
    'resources'?: Array<string>;
    /**
    * scope specifies the scope of this rule. Valid values are \"Cluster\", \"Namespaced\", and \"*\" \"Cluster\" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. \"Namespaced\" means that only namespaced resources will match this rule. \"*\" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is \"*\".
    */
    'scope'?: string;
    /**
    * TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.
    */
    'timeoutSeconds'?: number;
    /**
    * Type defines what kind of policy the object represents. Valid values are Validating, Mutating and Controller. Defaults to Validating.
    */
    'type'?: string;
    /**
    * Violation policy describes how violations should be handled. You can either specify deny (which is the default), warn or dry.
    */
    'violationPolicy'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiGroups",
            "baseName": "apiGroups",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "apiVersions",
            "baseName": "apiVersions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "auditLogSize",
            "baseName": "auditLogSize",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "auditPolicy",
            "baseName": "auditPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "dependencies",
            "baseName": "dependencies",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "failurePolicy",
            "baseName": "failurePolicy",
            "type": "PolicyV1beta1JsPolicySpecFailurePolicyEnum",
            "format": ""
        },
        {
            "name": "javascript",
            "baseName": "javascript",
            "type": "string",
            "format": ""
        },
        {
            "name": "matchPolicy",
            "baseName": "matchPolicy",
            "type": "PolicyV1beta1JsPolicySpecMatchPolicyEnum",
            "format": ""
        },
        {
            "name": "namespaceSelector",
            "baseName": "namespaceSelector",
            "type": "V1LabelSelector",
            "format": ""
        },
        {
            "name": "objectSelector",
            "baseName": "objectSelector",
            "type": "V1LabelSelector",
            "format": ""
        },
        {
            "name": "operations",
            "baseName": "operations",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeoutSeconds",
            "baseName": "timeoutSeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "violationPolicy",
            "baseName": "violationPolicy",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PolicyV1beta1JsPolicySpec.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PolicyV1beta1JsPolicySpecFailurePolicyEnum {
    Fail = 'Fail',
    Ignore = 'Ignore'
}
export enum PolicyV1beta1JsPolicySpecMatchPolicyEnum {
    Equivalent = 'Equivalent',
    Exact = 'Exact'
}

