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

import { StorageV1TemplateMetadata } from '../models/storageV1TemplateMetadata';


/**
* VirtualClusterInstanceTemplateDefinition holds the virtual cluster instance template
*/
export class StorageV1VirtualClusterInstanceTemplateDefinition {
    'metadata'?: StorageV1TemplateMetadata;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "StorageV1TemplateMetadata",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1VirtualClusterInstanceTemplateDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}

