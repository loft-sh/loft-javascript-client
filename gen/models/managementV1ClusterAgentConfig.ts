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

import { ManagementV1AgentAnalyticsSpec } from '../models/managementV1AgentAnalyticsSpec';
import { ManagementV1AgentAuditConfig } from '../models/managementV1AgentAuditConfig';
import { V1ObjectMeta } from '../models/V1ObjectMeta';


/**
* ClusterAgentConfig holds the loft agent configuration
*/
export class ManagementV1ClusterAgentConfig {
    'analyticsSpec': ManagementV1AgentAnalyticsSpec;
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    'audit'?: ManagementV1AgentAuditConfig;
    /**
    * Cluster is the cluster the agent is running in.
    */
    'cluster'?: string;
    /**
    * DefaultImageRegistry defines if we should prefix the virtual cluster image
    */
    'defaultImageRegistry'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    /**
    * LoftHost defines the host for the agent\'s loft instance
    */
    'loftHost'?: string;
    /**
    * LoftInstanceID defines the instance id from the loft instance
    */
    'loftInstanceID'?: string;
    'metadata'?: V1ObjectMeta;
    /**
    * ProjectNamespacePrefix holds the prefix for loft project namespaces
    */
    'projectNamespacePrefix'?: string;
    /**
    * TokenCaCert is the certificate authority the Loft tokens will be signed with
    */
    'tokenCaCert'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "analyticsSpec",
            "baseName": "analyticsSpec",
            "type": "ManagementV1AgentAnalyticsSpec",
            "format": ""
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "audit",
            "baseName": "audit",
            "type": "ManagementV1AgentAuditConfig",
            "format": ""
        },
        {
            "name": "cluster",
            "baseName": "cluster",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultImageRegistry",
            "baseName": "defaultImageRegistry",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "loftHost",
            "baseName": "loftHost",
            "type": "string",
            "format": ""
        },
        {
            "name": "loftInstanceID",
            "baseName": "loftInstanceID",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "projectNamespacePrefix",
            "baseName": "projectNamespacePrefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenCaCert",
            "baseName": "tokenCaCert",
            "type": "string",
            "format": "byte"
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1ClusterAgentConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

