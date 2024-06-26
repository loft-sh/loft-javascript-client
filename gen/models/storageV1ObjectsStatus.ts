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

import { StorageV1AppReference } from '../models/storageV1AppReference';
import { StorageV1ChartStatus } from '../models/storageV1ChartStatus';


export class StorageV1ObjectsStatus {
    /**
    * Apps are the apps that were applied
    */
    'apps'?: Array<StorageV1AppReference>;
    /**
    * Charts are the charts that were applied
    */
    'charts'?: Array<StorageV1ChartStatus>;
    /**
    * LastAppliedObjects holds the status for the objects that were applied
    */
    'lastAppliedObjects'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apps",
            "baseName": "apps",
            "type": "Array<StorageV1AppReference>",
            "format": ""
        },
        {
            "name": "charts",
            "baseName": "charts",
            "type": "Array<StorageV1ChartStatus>",
            "format": ""
        },
        {
            "name": "lastAppliedObjects",
            "baseName": "lastAppliedObjects",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1ObjectsStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

