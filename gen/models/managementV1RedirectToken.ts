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

import { ManagementV1RedirectTokenSpec } from './managementV1RedirectTokenSpec';
import { ManagementV1RedirectTokenStatus } from './managementV1RedirectTokenStatus';
import { V1ObjectMeta } from './V1ObjectMeta';


/**
* RedirectToken holds the object information
*/
export class ManagementV1RedirectToken {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: ManagementV1RedirectTokenSpec;
    'status'?: ManagementV1RedirectTokenStatus;

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
            "type": "ManagementV1RedirectTokenSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ManagementV1RedirectTokenStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1RedirectToken.attributeTypeMap;
    }

    public constructor() {
    }
}
