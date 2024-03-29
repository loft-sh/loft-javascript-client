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

import { LicenseApiButton } from '../models/licenseApiButton';


/**
* Announcement contains an announcement that should be shown within the Loft instance. This information is sent to Loft instances when they check in with the license server.
*/
export class LicenseApiAnnouncement {
    /**
    * Body contains the main message of the announcement in HTML format.
    */
    'body'?: string;
    /**
    * Buttons to show alongside the announcement
    */
    'buttons'?: Array<LicenseApiButton>;
    /**
    * Name contains the resource name of the announcement
    */
    'name'?: string;
    /**
    * Title contains the title of the announcement in HTML format.
    */
    'title'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "buttons",
            "baseName": "buttons",
            "type": "Array<LicenseApiButton>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LicenseApiAnnouncement.attributeTypeMap;
    }

    public constructor() {
    }
}

