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

import { AuditV1Event } from './auditV1Event';


/**
* AgentAuditEventSpec holds the specification
*/
export class ManagementV1AgentAuditEventSpec {
    /**
    * Events are the events the agent has recorded
    */
    'events'?: Array<AuditV1Event>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<AuditV1Event>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1AgentAuditEventSpec.attributeTypeMap;
    }

    public constructor() {
    }
}
