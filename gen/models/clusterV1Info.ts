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
* Info describes release information.
*/
export class ClusterV1Info {
    /**
    * Deleted tracks when this object was deleted.
    */
    'deleted'?: Date;
    /**
    * Description is human-friendly \"log entry\" about this release.
    */
    'description'?: string;
    /**
    * FirstDeployed is when the release was first deployed.
    */
    'first_deployed'?: Date;
    /**
    * LastDeployed is when the release was last deployed.
    */
    'last_deployed'?: Date;
    /**
    * Contains the rendered templates/NOTES.txt if available
    */
    'notes'?: string;
    /**
    * Status is the current state of the release
    */
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "first_deployed",
            "baseName": "first_deployed",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "last_deployed",
            "baseName": "last_deployed",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterV1Info.attributeTypeMap;
    }

    public constructor() {
    }
}

