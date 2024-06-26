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

import { StorageV1LocalClusterAccessSpec } from '../models/storageV1LocalClusterAccessSpec';
import { V1ObjectMeta } from '../models/V1ObjectMeta';


export class StorageV1LocalClusterAccessTemplate {
    'metadata'?: V1ObjectMeta;
    'spec'?: StorageV1LocalClusterAccessSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "StorageV1LocalClusterAccessSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1LocalClusterAccessTemplate.attributeTypeMap;
    }

    public constructor() {
    }
}

