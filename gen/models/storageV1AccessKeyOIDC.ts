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



export class StorageV1AccessKeyOIDC {
    /**
    * The current access token that was created during login
    */
    'accessToken'?: string;
    /**
    * The current id token that was created during login
    */
    'idToken'?: string;
    /**
    * The last time the id token was refreshed
    */
    'lastRefresh'?: Date;
    /**
    * The current refresh token that was created during login
    */
    'refreshToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "idToken",
            "baseName": "idToken",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "lastRefresh",
            "baseName": "lastRefresh",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "refreshToken",
            "baseName": "refreshToken",
            "type": "string",
            "format": "byte"
        }    ];

    static getAttributeTypeMap() {
        return StorageV1AccessKeyOIDC.attributeTypeMap;
    }

    public constructor() {
    }
}
