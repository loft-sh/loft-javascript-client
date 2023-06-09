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

import { ClusterV1EntityInfo } from './clusterV1EntityInfo';
import { ManagementV1UserInfo } from './managementV1UserInfo';


export class ManagementV1SelfStatus {
    /**
    * The name of the currently used access key
    */
    'accessKey'?: string;
    /**
    * The type of the currently used access key
    */
    'accessKeyType'?: string;
    /**
    * The groups of the currently logged in user
    */
    'groups'?: Array<string>;
    /**
    * InstanceID is the loft instance id
    */
    'instanceID'?: string;
    /**
    * IntercomHash is the hmac used to link a user/instance to intercomm
    */
    'intercomHash'?: string;
    /**
    * The subject of the currently logged in user
    */
    'subject'?: string;
    'team'?: ClusterV1EntityInfo;
    'user'?: ManagementV1UserInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessKey",
            "baseName": "accessKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "accessKeyType",
            "baseName": "accessKeyType",
            "type": "string",
            "format": ""
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "instanceID",
            "baseName": "instanceID",
            "type": "string",
            "format": ""
        },
        {
            "name": "intercomHash",
            "baseName": "intercomHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "ClusterV1EntityInfo",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "ManagementV1UserInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1SelfStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

