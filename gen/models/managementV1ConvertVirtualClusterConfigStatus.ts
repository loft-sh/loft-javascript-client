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
* ConvertVirtualClusterConfigStatus holds the status
*/
export class ManagementV1ConvertVirtualClusterConfigStatus {
    /**
    * Converted signals if the Values have been converted from the old format
    */
    'converted': boolean;
    /**
    * Values are the converted config values for the virtual cluster
    */
    'values'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "converted",
            "baseName": "converted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1ConvertVirtualClusterConfigStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

