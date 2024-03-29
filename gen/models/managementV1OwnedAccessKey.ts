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

import { ManagementV1OwnedAccessKeySpec } from '../models/managementV1OwnedAccessKeySpec';
import { ManagementV1OwnedAccessKeyStatus } from '../models/managementV1OwnedAccessKeyStatus';
import { V1ObjectMeta } from '../models/V1ObjectMeta';


/**
* OwnedAccessKey is an access key that is owned by the current user
*/
export class ManagementV1OwnedAccessKey {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: ManagementV1OwnedAccessKeySpec;
    'status'?: ManagementV1OwnedAccessKeyStatus;

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
            "type": "ManagementV1OwnedAccessKeySpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ManagementV1OwnedAccessKeyStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1OwnedAccessKey.attributeTypeMap;
    }

    public constructor() {
    }
}

