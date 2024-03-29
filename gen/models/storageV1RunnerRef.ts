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



export class StorageV1RunnerRef {
    /**
    * Runner is the connected runner the workspace will be created in
    */
    'runner'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "runner",
            "baseName": "runner",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1RunnerRef.attributeTypeMap;
    }

    public constructor() {
    }
}

