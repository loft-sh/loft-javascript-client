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



/**
* PredefinedApp holds information about a predefined app
*/
export class ManagementV1PredefinedApp {
    /**
    * Chart holds the repo/chart name of the predefined app
    */
    'chart'?: string;
    /**
    * Holds the cluster names where to display this app
    */
    'clusters'?: Array<string>;
    /**
    * IconURL specifies an url to the icon that should be displayed for this app. If none is specified the icon from the chart metadata is used.
    */
    'iconUrl'?: string;
    /**
    * InitialValues holds the initial values for this app. The values will be prefilled automatically. There are certain placeholders that can be used within the values that are replaced by the loft UI automatically.
    */
    'initialValues'?: string;
    /**
    * InitialVersion holds the initial version of this app. This version will be selected automatically.
    */
    'initialVersion'?: string;
    /**
    * ReadmeURL specifies an url to the readme page of this predefined app. If empty an url will be constructed to artifact hub.
    */
    'readmeUrl'?: string;
    /**
    * Title is the name that should be displayed for the predefined app. If empty the chart name is used.
    */
    'title'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chart",
            "baseName": "chart",
            "type": "string",
            "format": ""
        },
        {
            "name": "clusters",
            "baseName": "clusters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "iconUrl",
            "baseName": "iconUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "initialValues",
            "baseName": "initialValues",
            "type": "string",
            "format": ""
        },
        {
            "name": "initialVersion",
            "baseName": "initialVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "readmeUrl",
            "baseName": "readmeUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1PredefinedApp.attributeTypeMap;
    }

    public constructor() {
    }
}
