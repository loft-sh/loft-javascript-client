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



export class ManagementV1ProjectImportVirtualClusterSource {
    /**
    * Cluster name of the cluster the virtual cluster is running on
    */
    'cluster'?: string;
    /**
    * ImportName is an optional name to use as the virtualclusterinstance name, if not provided the vcluster name will be used
    */
    'importName'?: string;
    /**
    * Name of the virtual cluster to import
    */
    'name'?: string;
    /**
    * Namespace of the virtual cluster to import
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
            "name": "importName",
            "baseName": "importName",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
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
        return ManagementV1ProjectImportVirtualClusterSource.attributeTypeMap;
    }

    public constructor() {
    }
}
