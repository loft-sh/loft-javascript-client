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



export class ManagementV1VirtualClusterExternalDatabaseSpec {
    /**
    * Connector specifies the secret that should be used to connect to an external database server. The connection is used to manage a user and database for the vCluster. A data source endpoint constructed from the created user and database is returned on status. The secret specified by connector should contain the following fields: endpoint - the endpoint where the database server can be accessed user - the database username password - the password for the database username port - the port to be used in conjunction with the endpoint to connect to the databse server. This is commonly 3306
    */
    'connector'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "connector",
            "baseName": "connector",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1VirtualClusterExternalDatabaseSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

