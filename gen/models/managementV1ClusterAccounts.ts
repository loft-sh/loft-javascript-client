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

import { StorageV1Cluster } from './storageV1Cluster';


export class ManagementV1ClusterAccounts {
    /**
    * Accounts are the accounts that belong to the user in the cluster
    */
    'accounts'?: Array<string>;
    'cluster'?: StorageV1Cluster;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "cluster",
            "baseName": "cluster",
            "type": "StorageV1Cluster",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1ClusterAccounts.attributeTypeMap;
    }

    public constructor() {
    }
}
