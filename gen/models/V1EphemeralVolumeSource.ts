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

import { V1PersistentVolumeClaimTemplate } from '../models/V1PersistentVolumeClaimTemplate';


/**
* Represents an ephemeral volume that is handled by a normal storage driver.
*/
export class V1EphemeralVolumeSource {
    'volumeClaimTemplate'?: V1PersistentVolumeClaimTemplate;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "volumeClaimTemplate",
            "baseName": "volumeClaimTemplate",
            "type": "V1PersistentVolumeClaimTemplate",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1EphemeralVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

