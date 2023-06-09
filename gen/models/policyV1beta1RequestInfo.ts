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



export class PolicyV1beta1RequestInfo {
    /**
    * Kind is the type of object being submitted (for example, Pod or Deployment)
    */
    'apiVersion'?: string;
    /**
    * Kind is the type of object being submitted (for example, Pod or Deployment)
    */
    'kind'?: string;
    /**
    * Name is the name of the object as presented in the request. On a CREATE operation, the client may omit name and rely on the server to generate the name. If that is the case, this field will contain an empty string.
    */
    'name'?: string;
    /**
    * Namespace is the namespace associated with the request (if any).
    */
    'namespace'?: string;
    /**
    * Operation is the operation being performed. This may be different than the operation requested. e.g. a patch can result in either a CREATE or UPDATE Operation.
    */
    'operation'?: string;

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
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PolicyV1beta1RequestInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

