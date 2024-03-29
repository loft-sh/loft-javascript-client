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
import { ClusterV1UserOrTeam } from '../models/clusterV1UserOrTeam';


/**
* ClusterAccessStatus holds the status
*/
export class ManagementV1ClusterAccessStatus {
    'clusters'?: Array<ClusterV1EntityInfo>;
    'spaceConstraint'?: ClusterV1EntityInfo;
    'teams'?: Array<ClusterV1EntityInfo>;
    'users'?: Array<ClusterV1UserOrTeam>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clusters",
            "baseName": "clusters",
            "type": "Array<ClusterV1EntityInfo>",
            "format": ""
        },
        {
            "name": "spaceConstraint",
            "baseName": "spaceConstraint",
            "type": "ClusterV1EntityInfo",
            "format": ""
        },
        {
            "name": "teams",
            "baseName": "teams",
            "type": "Array<ClusterV1EntityInfo>",
            "format": ""
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<ClusterV1UserOrTeam>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1ClusterAccessStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

