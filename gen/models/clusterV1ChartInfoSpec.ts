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

import { ClusterV1Chart } from '../models/clusterV1Chart';


export class ClusterV1ChartInfoSpec {
    'chart'?: ClusterV1Chart;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chart",
            "baseName": "chart",
            "type": "ClusterV1Chart",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterV1ChartInfoSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

