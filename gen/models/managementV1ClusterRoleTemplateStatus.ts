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

import { StorageV1EntityInfo } from '../models/storageV1EntityInfo';


/**
* ClusterRoleTemplateStatus holds the status
*/
export class ManagementV1ClusterRoleTemplateStatus {
    'clusters'?: Array<StorageV1EntityInfo>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clusters",
            "baseName": "clusters",
            "type": "Array<StorageV1EntityInfo>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1ClusterRoleTemplateStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

