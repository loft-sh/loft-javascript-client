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

import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1PersistentVolumeClaimSpec } from '../models/V1PersistentVolumeClaimSpec';


/**
* PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
*/
export class V1PersistentVolumeClaimTemplate {
    'metadata'?: V1ObjectMeta;
    'spec': V1PersistentVolumeClaimSpec;

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
            "type": "V1PersistentVolumeClaimSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimTemplate.attributeTypeMap;
    }

    public constructor() {
    }
}

