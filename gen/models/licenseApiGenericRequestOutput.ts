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

import { LicenseApiButton } from './licenseApiButton';


/**
* GenericRequestOutput specifies the response
*/
export class LicenseApiGenericRequestOutput {
    /**
    * Buttons to be shown to the user alongside other content (e.g. HTML).
    */
    'buttons'?: Array<LicenseApiButton>;
    /**
    * HTML to display to the user.
    */
    'html'?: string;
    /**
    * RedirectURL to redirect the user to.
    */
    'redirectURL'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "buttons",
            "baseName": "buttons",
            "type": "Array<LicenseApiButton>",
            "format": ""
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string",
            "format": ""
        },
        {
            "name": "redirectURL",
            "baseName": "redirectURL",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LicenseApiGenericRequestOutput.attributeTypeMap;
    }

    public constructor() {
    }
}
