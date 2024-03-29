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

import { ClusterV1EntityInfo } from '../models/clusterV1EntityInfo';


/**
* SpaceConstraintStatus holds the status
*/
export class ManagementV1SpaceConstraintStatus {
    'clusterRole'?: ClusterV1EntityInfo;
    'clusters'?: Array<ClusterV1EntityInfo>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clusterRole",
            "baseName": "clusterRole",
            "type": "ClusterV1EntityInfo",
            "format": ""
        },
        {
            "name": "clusters",
            "baseName": "clusters",
            "type": "Array<ClusterV1EntityInfo>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1SpaceConstraintStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

