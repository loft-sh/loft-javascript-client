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



export class ManagementV1VirtualClusterInstanceKubeConfigSpec {
    /**
    * CertificateTTL holds the ttl (in seconds) to set for the certificate associated with the returned kubeconfig. This field is optional, if no value is provided, the certificate TTL will be set to one day. If set to zero, this will cause loft to pass nil to the certificate signing request, which will result in the certificate being valid for the clusters `cluster-signing-duration` value which is typically one year.
    */
    'certificateTTL'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "certificateTTL",
            "baseName": "certificateTTL",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1VirtualClusterInstanceKubeConfigSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
