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



export class ManagementV1MaintenanceWindow {
    /**
    * DayOfWeek specifies the day of the week for the maintenance window. It should be a string representing the day, e.g., \"Monday\", \"Tuesday\", etc.
    */
    'dayOfWeek'?: string;
    /**
    * TimeWindow specifies the time window for the maintenance. It should be a string representing the time range in 24-hour format, e.g., \"02:00-03:00\".
    */
    'timeWindow'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dayOfWeek",
            "baseName": "dayOfWeek",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeWindow",
            "baseName": "timeWindow",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1MaintenanceWindow.attributeTypeMap;
    }

    public constructor() {
    }
}
