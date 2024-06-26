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

import { StorageV1Access } from '../models/storageV1Access';
import { StorageV1InstanceAccessRule } from '../models/storageV1InstanceAccessRule';
import { StorageV1TemplateRef } from '../models/storageV1TemplateRef';
import { StorageV1UserOrTeam } from '../models/storageV1UserOrTeam';
import { StorageV1VirtualClusterClusterRef } from '../models/storageV1VirtualClusterClusterRef';
import { StorageV1VirtualClusterTemplateDefinition } from '../models/storageV1VirtualClusterTemplateDefinition';


/**
* VirtualClusterInstanceSpec holds the specification
*/
export class ManagementV1VirtualClusterInstanceSpec {
    /**
    * Access to the virtual cluster object itself
    */
    'access'?: Array<StorageV1Access>;
    'clusterRef'?: StorageV1VirtualClusterClusterRef;
    /**
    * Description describes a virtual cluster instance
    */
    'description'?: string;
    /**
    * DisplayName is the name that should be displayed in the UI
    */
    'displayName'?: string;
    /**
    * External specifies if the virtual cluster is managed by the platform agent or externally.
    */
    'external'?: boolean;
    /**
    * ExtraAccessRules defines extra rules which users and teams should have which access to the virtual cluster.
    */
    'extraAccessRules'?: Array<StorageV1InstanceAccessRule>;
    /**
    * NetworkPeer specifies if the cluster is connected via tailscale.
    */
    'networkPeer'?: boolean;
    'owner'?: StorageV1UserOrTeam;
    /**
    * Parameters are values to pass to the template. The values should be encoded as YAML string where each parameter is represented as a top-level field key.
    */
    'parameters'?: string;
    'template'?: StorageV1VirtualClusterTemplateDefinition;
    'templateRef'?: StorageV1TemplateRef;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "access",
            "baseName": "access",
            "type": "Array<StorageV1Access>",
            "format": ""
        },
        {
            "name": "clusterRef",
            "baseName": "clusterRef",
            "type": "StorageV1VirtualClusterClusterRef",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "external",
            "baseName": "external",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "extraAccessRules",
            "baseName": "extraAccessRules",
            "type": "Array<StorageV1InstanceAccessRule>",
            "format": ""
        },
        {
            "name": "networkPeer",
            "baseName": "networkPeer",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "StorageV1UserOrTeam",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "string",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "StorageV1VirtualClusterTemplateDefinition",
            "format": ""
        },
        {
            "name": "templateRef",
            "baseName": "templateRef",
            "type": "StorageV1TemplateRef",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1VirtualClusterInstanceSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

