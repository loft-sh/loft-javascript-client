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
* ConfigSpec holds the specification
*/
export class ManagementV1ConfigSpec {
    /**
    * Raw holds the raw config
    */
    'raw'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "raw",
            "baseName": "raw",
            "type": "string",
            "format": "byte"
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1ConfigSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
