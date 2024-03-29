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

import { StorageV1DevPodProviderOption } from '../models/storageV1DevPodProviderOption';
import { StorageV1DevPodWorkspaceProvider } from '../models/storageV1DevPodWorkspaceProvider';
import { StorageV1TemplateRef } from '../models/storageV1TemplateRef';


export class StorageV1DevPodWorkspaceTemplateDefinition {
    'provider': StorageV1DevPodWorkspaceProvider;
    'spaceTemplate'?: StorageV1TemplateRef;
    'virtualClusterTemplate'?: StorageV1TemplateRef;
    /**
    * WorkspaceEnv are environment variables that should be available within the created workspace.
    */
    'workspaceEnv'?: { [key: string]: StorageV1DevPodProviderOption; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "StorageV1DevPodWorkspaceProvider",
            "format": ""
        },
        {
            "name": "spaceTemplate",
            "baseName": "spaceTemplate",
            "type": "StorageV1TemplateRef",
            "format": ""
        },
        {
            "name": "virtualClusterTemplate",
            "baseName": "virtualClusterTemplate",
            "type": "StorageV1TemplateRef",
            "format": ""
        },
        {
            "name": "workspaceEnv",
            "baseName": "workspaceEnv",
            "type": "{ [key: string]: StorageV1DevPodProviderOption; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1DevPodWorkspaceTemplateDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}

