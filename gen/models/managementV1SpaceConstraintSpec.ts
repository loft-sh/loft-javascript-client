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

import { StorageV1Access } from '../models/storageV1Access';
import { StorageV1LocalSpaceConstraintTemplate } from '../models/storageV1LocalSpaceConstraintTemplate';
import { StorageV1UserOrTeam } from '../models/storageV1UserOrTeam';


/**
* SpaceConstraintSpec holds the specification
*/
export class ManagementV1SpaceConstraintSpec {
    /**
    * Access holds the access rights for users and teams
    */
    'access'?: Array<StorageV1Access>;
    /**
    * Clusters are the clusters this template should be applied on.
    */
    'clusters'?: Array<string>;
    /**
    * Description describes a space constraint object
    */
    'description'?: string;
    /**
    * DisplayName is the name that should be displayed in the UI
    */
    'displayName'?: string;
    'localSpaceConstraintTemplate'?: StorageV1LocalSpaceConstraintTemplate;
    'owner'?: StorageV1UserOrTeam;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "access",
            "baseName": "access",
            "type": "Array<StorageV1Access>",
            "format": ""
        },
        {
            "name": "clusters",
            "baseName": "clusters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "localSpaceConstraintTemplate",
            "baseName": "localSpaceConstraintTemplate",
            "type": "StorageV1LocalSpaceConstraintTemplate",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "StorageV1UserOrTeam",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1SpaceConstraintSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

