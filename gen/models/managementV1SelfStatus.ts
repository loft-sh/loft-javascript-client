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

import { ManagementV1UserInfo } from '../models/managementV1UserInfo';
import { StorageV1AccessKeyScope } from '../models/storageV1AccessKeyScope';
import { StorageV1EntityInfo } from '../models/storageV1EntityInfo';


export class ManagementV1SelfStatus {
    /**
    * The name of the currently used access key
    */
    'accessKey'?: string;
    'accessKeyScope'?: StorageV1AccessKeyScope;
    /**
    * The type of the currently used access key
    */
    'accessKeyType'?: string;
    /**
    * ChatAuthToken is the token used to authenticate with the in-product chat widget in the UI
    */
    'chatAuthToken'?: string;
    /**
    * The groups of the currently logged in user
    */
    'groups'?: Array<string>;
    /**
    * InstanceID is the loft instance id
    */
    'instanceID'?: string;
    /**
    * ProjectNamespacePrefix is the prefix used to name project namespaces after defaulting has been applied
    */
    'projectNamespacePrefix'?: string;
    /**
    * The subject of the currently logged in user
    */
    'subject'?: string;
    'team'?: StorageV1EntityInfo;
    /**
    * UID is the user uid
    */
    'uid'?: string;
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
            "name": "accessKeyScope",
            "baseName": "accessKeyScope",
            "type": "StorageV1AccessKeyScope",
            "format": ""
        },
        {
            "name": "accessKeyType",
            "baseName": "accessKeyType",
            "type": "string",
            "format": ""
        },
        {
            "name": "chatAuthToken",
            "baseName": "chatAuthToken",
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
            "name": "projectNamespacePrefix",
            "baseName": "projectNamespacePrefix",
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
            "type": "StorageV1EntityInfo",
            "format": ""
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string",
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

