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
* LocalTeamStatus holds the status of a user access
*/
export class StorageV1LocalTeamStatus {
    /**
    * Annotations are the annotations of the user
    */
    'annotations'?: { [key: string]: string; };
    /**
    * The display name shown in the UI
    */
    'displayName'?: string;
    /**
    * The groups defined in a token that belong to a team
    */
    'groups'?: Array<string>;
    /**
    * Labels are the labels of the user
    */
    'labels'?: { [key: string]: string; };
    /**
    * The username of the team that will be used for identification and docker registry namespace
    */
    'username'?: string;
    /**
    * The loft users that belong to a team
    */
    'users'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "annotations",
            "baseName": "annotations",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1LocalTeamStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

