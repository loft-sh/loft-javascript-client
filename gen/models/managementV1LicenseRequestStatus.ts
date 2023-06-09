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

import { ServerStandardRequestOutput } from './licenseServerStandardRequestOutput';


export class ManagementV1LicenseRequestStatus {
    /**
    * OK indicates if the license request operation was successful or not. If OK is true, the front end should follow the link in the output.
    */
    'ok'?: boolean;
    'output'?: ServerStandardRequestOutput;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ok",
            "baseName": "ok",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "output",
            "baseName": "output",
            "type": "ServerStandardRequestOutput",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1LicenseRequestStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

