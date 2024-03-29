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
* GenericRequestInput defines the payload that needs to be sent to a button\'s action URL
*/
export class LicenseApiGenericRequestInput {
    /**
    * Payload provides the json encoded payload
    */
    'payload'?: string;
    /**
    * ReturnURL is the url from which the request is initiated
    */
    'returnURL'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "payload",
            "baseName": "payload",
            "type": "string",
            "format": ""
        },
        {
            "name": "returnURL",
            "baseName": "returnURL",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LicenseApiGenericRequestInput.attributeTypeMap;
    }

    public constructor() {
    }
}

