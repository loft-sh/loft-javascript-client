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

import { PolicyV1beta1RequestInfo } from './policyV1beta1RequestInfo';
import { PolicyV1beta1UserInfo } from './policyV1beta1UserInfo';


export class PolicyV1beta1PolicyViolation {
    /**
    * Action holds the the action type the webhook reacted with
    */
    'action'?: string;
    /**
    * Code is the error code that was returned to the client
    */
    'code'?: number;
    /**
    * Message holds the message that was sent to the client
    */
    'message'?: string;
    /**
    * Reason is the error reason that was returned to the client
    */
    'reason'?: string;
    'requestInfo'?: PolicyV1beta1RequestInfo;
    /**
    * The timestamp when this violation has occurred
    */
    'timestamp'?: Date;
    'userInfo'?: PolicyV1beta1UserInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestInfo",
            "baseName": "requestInfo",
            "type": "PolicyV1beta1RequestInfo",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "userInfo",
            "baseName": "userInfo",
            "type": "PolicyV1beta1UserInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PolicyV1beta1PolicyViolation.attributeTypeMap;
    }

    public constructor() {
    }
}
