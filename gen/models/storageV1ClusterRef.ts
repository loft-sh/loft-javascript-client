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



export class StorageV1ClusterRef {
    /**
    * Cluster is the connected cluster the space will be created in
    */
    'cluster'?: string;
    /**
    * Namespace is the namespace inside the connected cluster holding the space
    */
    'namespace'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cluster",
            "baseName": "cluster",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1ClusterRef.attributeTypeMap;
    }

    public constructor() {
    }
}

