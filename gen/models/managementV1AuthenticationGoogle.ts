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

import { ManagementV1AuthenticationGroupClusterAccountTemplate } from './managementV1AuthenticationGroupClusterAccountTemplate';
import { StorageV1UserClusterAccountTemplate } from './storageV1UserClusterAccountTemplate';


export class ManagementV1AuthenticationGoogle {
    /**
    * Required if ServiceAccountFilePath The email of a GSuite super user which the service account will impersonate when listing groups
    */
    'adminEmail'?: string;
    /**
    * Google client id
    */
    'clientId': string;
    /**
    * Google client secret
    */
    'clientSecret': string;
    /**
    * Cluster Account Templates that will be applied for users logging in through this authentication
    */
    'clusterAccountTemplates'?: Array<StorageV1UserClusterAccountTemplate>;
    /**
    * A mapping between groups and cluster account templates. If the user has a certain group, the cluster account template will be added during creation
    */
    'groupClusterAccountTemplates'?: Array<ManagementV1AuthenticationGroupClusterAccountTemplate>;
    /**
    * Optional list of whitelisted groups If this field is nonempty, only users from a listed group will be allowed to log in
    */
    'groups'?: Array<string>;
    /**
    * Optional list of whitelisted domains If this field is nonempty, only users from a listed domain will be allowed to log in
    */
    'hostedDomains'?: Array<string>;
    /**
    * loft redirect uri. E.g. https://loft.my.domain/auth/google/callback
    */
    'redirectURI': string;
    /**
    * defaults to \"profile\" and \"email\"
    */
    'scopes'?: Array<string>;
    /**
    * Optional path to service account json If nonempty, and groups claim is made, will use authentication from file to check groups with the admin directory api
    */
    'serviceAccountFilePath'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "adminEmail",
            "baseName": "adminEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "string",
            "format": ""
        },
        {
            "name": "clusterAccountTemplates",
            "baseName": "clusterAccountTemplates",
            "type": "Array<StorageV1UserClusterAccountTemplate>",
            "format": ""
        },
        {
            "name": "groupClusterAccountTemplates",
            "baseName": "groupClusterAccountTemplates",
            "type": "Array<ManagementV1AuthenticationGroupClusterAccountTemplate>",
            "format": ""
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "hostedDomains",
            "baseName": "hostedDomains",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "redirectURI",
            "baseName": "redirectURI",
            "type": "string",
            "format": ""
        },
        {
            "name": "scopes",
            "baseName": "scopes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "serviceAccountFilePath",
            "baseName": "serviceAccountFilePath",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1AuthenticationGoogle.attributeTypeMap;
    }

    public constructor() {
    }
}
