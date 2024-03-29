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

import { V1ExecAction } from '../models/V1ExecAction';
import { V1HTTPGetAction } from '../models/V1HTTPGetAction';
import { V1SleepAction } from '../models/V1SleepAction';
import { V1TCPSocketAction } from '../models/V1TCPSocketAction';


/**
* LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
*/
export class V1LifecycleHandler {
    'exec'?: V1ExecAction;
    'httpGet'?: V1HTTPGetAction;
    'sleep'?: V1SleepAction;
    'tcpSocket'?: V1TCPSocketAction;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "V1ExecAction",
            "format": ""
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "V1HTTPGetAction",
            "format": ""
        },
        {
            "name": "sleep",
            "baseName": "sleep",
            "type": "V1SleepAction",
            "format": ""
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "V1TCPSocketAction",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1LifecycleHandler.attributeTypeMap;
    }

    public constructor() {
    }
}

