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

import { StorageV1VirtualClusterHelmRelease } from './agentstorageV1VirtualClusterHelmRelease';


export class StorageV1VirtualClusterHelmReleaseStatus {
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'lastTransitionTime'?: Date;
    'message'?: string;
    'phase'?: string;
    'reason'?: string;
    'release'?: StorageV1VirtualClusterHelmRelease;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "release",
            "baseName": "release",
            "type": "StorageV1VirtualClusterHelmRelease",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1VirtualClusterHelmReleaseStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
