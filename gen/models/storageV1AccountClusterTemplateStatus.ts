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



export class StorageV1AccountClusterTemplateStatus {
    /**
    * Account is the name of the account in the cluster
    */
    'account'?: string;
    /**
    * AccountTemplateHash is the hash of the account template that was applied
    */
    'accountTemplateHash'?: string;
    /**
    * Last time the condition transitioned from one status to another.
    */
    'lastTransitionTime'?: Date;
    /**
    * Message describes why loft couldn\'t sync the account in human language
    */
    'message'?: string;
    /**
    * Name is the name of the cluster account template
    */
    'name'?: string;
    /**
    * OwnsHash is the hash of the owns part of the cluster account template that was applied
    */
    'ownsHash'?: string;
    /**
    * Status holds the status of the account in the target cluster
    */
    'phase'?: string;
    /**
    * Reason describes why loft couldn\'t sync the account with a machine readable identifier
    */
    'reason'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountTemplateHash",
            "baseName": "accountTemplateHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastTransitionTime",
            "baseName": "lastTransitionTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "message",
            "baseName": "message",
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
            "name": "ownsHash",
            "baseName": "ownsHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1AccountClusterTemplateStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

