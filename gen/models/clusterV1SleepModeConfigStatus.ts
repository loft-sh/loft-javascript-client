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

import { ClusterV1EpochInfo } from './clusterV1EpochInfo';
import { ClusterV1LastActivityInfo } from './clusterV1LastActivityInfo';


export class ClusterV1SleepModeConfigStatus {
    'currentEpoch'?: ClusterV1EpochInfo;
    /**
    * LastActivity indicates the last activity in the namespace
    */
    'lastActivity'?: number;
    'lastActivityInfo'?: ClusterV1LastActivityInfo;
    'lastEpoch'?: ClusterV1EpochInfo;
    /**
    * Indicates time of the next scheduled sleep based on .Spec.SleepSchedule and .Spec.ScheduleTimeZone The time is a Unix time, the number of seconds elapsed since January 1, 1970 UTC
    */
    'scheduledSleep'?: number;
    /**
    * Indicates time of the next scheduled wakeup based on .Spec.WakeupSchedule and .Spec.ScheduleTimeZone The time is a Unix time, the number of seconds elapsed since January 1, 1970 UTC
    */
    'scheduledWakeup'?: number;
    /**
    * SleepType specifies a type of sleep, which has effect on which actions will cause the space to wake up.
    */
    'sleepType'?: string;
    /**
    * SleepingSince specifies since when the space is sleeping (if this is not specified, loft assumes the space is not sleeping)
    */
    'sleepingSince'?: number;
    /**
    * This is a calculated field that will be returned but not saved and describes the percentage since the space was created or the last 7 days the space has slept
    */
    'sleptLastSevenDays'?: number;
    /**
    * This is a calculated field that will be returned but not saved and describes the percentage since the space was created or the last 30 days the space has slept
    */
    'sleptLastThirtyDays'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currentEpoch",
            "baseName": "currentEpoch",
            "type": "ClusterV1EpochInfo",
            "format": ""
        },
        {
            "name": "lastActivity",
            "baseName": "lastActivity",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "lastActivityInfo",
            "baseName": "lastActivityInfo",
            "type": "ClusterV1LastActivityInfo",
            "format": ""
        },
        {
            "name": "lastEpoch",
            "baseName": "lastEpoch",
            "type": "ClusterV1EpochInfo",
            "format": ""
        },
        {
            "name": "scheduledSleep",
            "baseName": "scheduledSleep",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "scheduledWakeup",
            "baseName": "scheduledWakeup",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sleepType",
            "baseName": "sleepType",
            "type": "string",
            "format": ""
        },
        {
            "name": "sleepingSince",
            "baseName": "sleepingSince",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sleptLastSevenDays",
            "baseName": "sleptLastSevenDays",
            "type": "number",
            "format": "double"
        },
        {
            "name": "sleptLastThirtyDays",
            "baseName": "sleptLastThirtyDays",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return ClusterV1SleepModeConfigStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
