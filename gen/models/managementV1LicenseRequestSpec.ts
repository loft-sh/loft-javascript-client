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

import { LicenseApiGenericRequestInput } from '../models/licenseApiGenericRequestInput';


export class ManagementV1LicenseRequestSpec {
    'input'?: LicenseApiGenericRequestInput;
    /**
    * URL is the url for the request.
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "input",
            "baseName": "input",
            "type": "LicenseApiGenericRequestInput",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1LicenseRequestSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

