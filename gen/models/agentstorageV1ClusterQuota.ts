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

import { StorageV1ClusterQuotaSpec } from './agentstorageV1ClusterQuotaSpec';
import { StorageV1ClusterQuotaStatus } from './agentstorageV1ClusterQuotaStatus';
import { V1ObjectMeta } from './V1ObjectMeta';


/**
* ClusterQuota is the Schema for the cluster quotas api
*/
export class StorageV1ClusterQuota {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: StorageV1ClusterQuotaSpec;
    'status'?: StorageV1ClusterQuotaStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "StorageV1ClusterQuotaSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "StorageV1ClusterQuotaStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1ClusterQuota.attributeTypeMap;
    }

    public constructor() {
    }
}
