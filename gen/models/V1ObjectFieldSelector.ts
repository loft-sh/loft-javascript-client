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
* ObjectFieldSelector selects an APIVersioned field of an object.
*/
export class V1ObjectFieldSelector {
    /**
    * Version of the schema the FieldPath is written in terms of, defaults to \"v1\".
    */
    'apiVersion'?: string;
    /**
    * Path of the field to select in the specified API version.
    */
    'fieldPath': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldPath",
            "baseName": "fieldPath",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ObjectFieldSelector.attributeTypeMap;
    }

    public constructor() {
    }
}

