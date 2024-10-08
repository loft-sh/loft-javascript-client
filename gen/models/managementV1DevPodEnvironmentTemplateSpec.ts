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
import { StorageV1DevPodEnvironmentTemplateVersion } from '../models/storageV1DevPodEnvironmentTemplateVersion';
import { StorageV1GitEnvironmentTemplate } from '../models/storageV1GitEnvironmentTemplate';
import { StorageV1UserOrTeam } from '../models/storageV1UserOrTeam';


/**
* DevPodEnvironmentTemplateSpec holds the specification
*/
export class ManagementV1DevPodEnvironmentTemplateSpec {
    /**
    * Access to the DevPod machine instance object itself
    */
    'access'?: Array<StorageV1Access>;
    /**
    * DisplayName is the name that should be displayed in the UI
    */
    'displayName'?: string;
    'git'?: StorageV1GitEnvironmentTemplate;
    'owner'?: StorageV1UserOrTeam;
    /**
    * Versions are different versions of the template that can be referenced as well
    */
    'versions'?: Array<StorageV1DevPodEnvironmentTemplateVersion>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "access",
            "baseName": "access",
            "type": "Array<StorageV1Access>",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "git",
            "baseName": "git",
            "type": "StorageV1GitEnvironmentTemplate",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "StorageV1UserOrTeam",
            "format": ""
        },
        {
            "name": "versions",
            "baseName": "versions",
            "type": "Array<StorageV1DevPodEnvironmentTemplateVersion>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1DevPodEnvironmentTemplateSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

