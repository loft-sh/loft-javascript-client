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



/**
* TierResource provides details about the main resource the tier quantity relates to
*/
export class LicenseApiTierResource {
    /**
    * Name of the resource (ResourceName)
    */
    'name'?: string;
    /**
    * Status defines which resources will be counted towards the limit (e.g. active, total, total created etc.)
    */
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LicenseApiTierResource.attributeTypeMap;
    }

    public constructor() {
    }
}
