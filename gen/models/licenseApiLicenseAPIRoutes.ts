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

import { LicenseApiLicenseAPIRoute } from './licenseApiLicenseAPIRoute';


/**
* LicenseAPIRoutes contains all key routes of the license api
*/
export class LicenseApiLicenseAPIRoutes {
    'chatAuth'?: LicenseApiLicenseAPIRoute;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chatAuth",
            "baseName": "chatAuth",
            "type": "LicenseApiLicenseAPIRoute",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LicenseApiLicenseAPIRoutes.attributeTypeMap;
    }

    public constructor() {
    }
}
