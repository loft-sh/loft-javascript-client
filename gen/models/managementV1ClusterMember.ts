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

import { ClusterV1EntityInfo } from './clusterV1EntityInfo';


export class ManagementV1ClusterMember {
    'info'?: ClusterV1EntityInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "info",
            "baseName": "info",
            "type": "ClusterV1EntityInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1ClusterMember.attributeTypeMap;
    }

    public constructor() {
    }
}
