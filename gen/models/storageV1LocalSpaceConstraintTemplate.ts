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

import { StorageV1LocalSpaceConstraintSpec } from '../models/storageV1LocalSpaceConstraintSpec';
import { V1ObjectMeta } from '../models/V1ObjectMeta';


export class StorageV1LocalSpaceConstraintTemplate {
    'metadata'?: V1ObjectMeta;
    'spec'?: StorageV1LocalSpaceConstraintSpec;

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
            "type": "StorageV1LocalSpaceConstraintSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1LocalSpaceConstraintTemplate.attributeTypeMap;
    }

    public constructor() {
    }
}

