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

import { ServerAnalytics } from './licenseServerAnalytics';
import { ServerButton } from './licenseServerButton';
import { ServerRequest } from './licenseServerRequest';
import { ServerResourceQuantity } from './licenseServerResourceQuantity';


/**
* License is a struct representing the license data sent to a Loft instance after checking in with the license server.
*/
export class ServerLicense {
    'analytics'?: ServerAnalytics;
    /**
    * Announcements is a map string/string such that we can easily add any additional data without needing to change types. For now, we will use the keys \"name\" and \"content\".
    */
    'announcement'?: { [key: string]: string; };
    /**
    * BlockRequests is a slice of Request objects that the Loft instance should block from being created due to license usage overrun.
    */
    'blockRequests'?: Array<ServerRequest>;
    /**
    * Buttons is a slice of license server endpoints (buttons) that the Loft instance may need to hit. Each Button contains the display text and link for the front end to work with.
    */
    'buttons'?: Array<ServerButton>;
    /**
    * Features is a map of enabled features.
    */
    'features'?: { [key: string]: boolean; };
    /**
    * IsOffline indicates if the license is an offline license or not.
    */
    'isOffline'?: boolean;
    /**
    * Limits is the number of resources allowed by the current license.
    */
    'limits'?: Array<ServerResourceQuantity>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "analytics",
            "baseName": "analytics",
            "type": "ServerAnalytics",
            "format": ""
        },
        {
            "name": "announcement",
            "baseName": "announcement",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "blockRequests",
            "baseName": "blockRequests",
            "type": "Array<ServerRequest>",
            "format": ""
        },
        {
            "name": "buttons",
            "baseName": "buttons",
            "type": "Array<ServerButton>",
            "format": ""
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "{ [key: string]: boolean; }",
            "format": ""
        },
        {
            "name": "isOffline",
            "baseName": "isOffline",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "Array<ServerResourceQuantity>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServerLicense.attributeTypeMap;
    }

    public constructor() {
    }
}
