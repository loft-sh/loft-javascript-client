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


export class StorageV1DevPodWorkspaceProvider {
    /**
    * Env are environment options to set when using the provider.
    */
    'env'?: { [key: string]: StorageV1DevPodProviderOption; };
    /**
    * Name is the name of the provider. This can also be an url.
    */
    'name': string;
    /**
    * Options are the provider option values
    */
    'options'?: { [key: string]: StorageV1DevPodProviderOption; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "env",
            "baseName": "env",
            "type": "{ [key: string]: StorageV1DevPodProviderOption; }",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "{ [key: string]: StorageV1DevPodProviderOption; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1DevPodWorkspaceProvider.attributeTypeMap;
    }

    public constructor() {
    }
}

