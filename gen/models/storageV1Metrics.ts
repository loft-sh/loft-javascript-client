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

import { StorageV1Storage } from '../models/storageV1Storage';
import { V1ResourceRequirements } from '../models/V1ResourceRequirements';


export class StorageV1Metrics {
    /**
    * Replicas is the number of desired replicas.
    */
    'replicas'?: number;
    'resources'?: V1ResourceRequirements;
    /**
    * Retention is the metrics data retention period. Default is 1y
    */
    'retention'?: string;
    'storage'?: StorageV1Storage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "V1ResourceRequirements",
            "format": ""
        },
        {
            "name": "retention",
            "baseName": "retention",
            "type": "string",
            "format": ""
        },
        {
            "name": "storage",
            "baseName": "storage",
            "type": "StorageV1Storage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1Metrics.attributeTypeMap;
    }

    public constructor() {
    }
}
