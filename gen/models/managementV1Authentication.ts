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

import { ManagementV1AuthenticationGithub } from '../models/managementV1AuthenticationGithub';
import { ManagementV1AuthenticationGitlab } from '../models/managementV1AuthenticationGitlab';
import { ManagementV1AuthenticationGoogle } from '../models/managementV1AuthenticationGoogle';
import { ManagementV1AuthenticationMicrosoft } from '../models/managementV1AuthenticationMicrosoft';
import { ManagementV1AuthenticationOIDC } from '../models/managementV1AuthenticationOIDC';
import { ManagementV1AuthenticationPassword } from '../models/managementV1AuthenticationPassword';
import { ManagementV1AuthenticationRancher } from '../models/managementV1AuthenticationRancher';
import { ManagementV1AuthenticationSAML } from '../models/managementV1AuthenticationSAML';
import { ManagementV1ConnectorWithName } from '../models/managementV1ConnectorWithName';


/**
* Authentication holds authentication relevant information
*/
export class ManagementV1Authentication {
    /**
    * AccessKeyMaxTTLSeconds is the global maximum lifespan of an accesskey in seconds. Leaving it 0 or unspecified will disable it. Specifying 2592000 will mean all keys have a Time-To-Live of 30 days.
    */
    'accessKeyMaxTTLSeconds'?: number;
    /**
    * Connectors are optional additional connectors for Loft.
    */
    'connectors'?: Array<ManagementV1ConnectorWithName>;
    /**
    * CustomHttpHeaders are additional headers that should be set for the authentication endpoints
    */
    'customHttpHeaders'?: { [key: string]: string; };
    /**
    * Prevents from team creation for the new groups associated with the user at the time of logging in through sso, Default behaviour is false, this means that teams will be created for new groups.
    */
    'disableTeamCreation'?: boolean;
    /**
    * DisableUserCreation prevents the SSO connectors from creating a new user on a users initial signin through sso. Default behaviour is false, this means that a new user object will be created once a user without a Kubernetes user object logs in.
    */
    'disableUserCreation'?: boolean;
    'github'?: ManagementV1AuthenticationGithub;
    'gitlab'?: ManagementV1AuthenticationGitlab;
    'google'?: ManagementV1AuthenticationGoogle;
    /**
    * GroupsFilters is a regex expression to only save matching sso groups into the user resource
    */
    'groupsFilters'?: Array<string>;
    /**
    * LoginAccessKeyTTLSeconds is the time in seconds an access key is kept until it is deleted. Leaving it unspecified will default to 20 days. Setting it to zero will disable the ttl. Specifying 2592000 will mean all keys have a  default Time-To-Live of 30 days.
    */
    'loginAccessKeyTTLSeconds'?: number;
    'microsoft'?: ManagementV1AuthenticationMicrosoft;
    'oidc'?: ManagementV1AuthenticationOIDC;
    'password'?: ManagementV1AuthenticationPassword;
    'rancher'?: ManagementV1AuthenticationRancher;
    'saml'?: ManagementV1AuthenticationSAML;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessKeyMaxTTLSeconds",
            "baseName": "accessKeyMaxTTLSeconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "connectors",
            "baseName": "connectors",
            "type": "Array<ManagementV1ConnectorWithName>",
            "format": ""
        },
        {
            "name": "customHttpHeaders",
            "baseName": "customHttpHeaders",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "disableTeamCreation",
            "baseName": "disableTeamCreation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "disableUserCreation",
            "baseName": "disableUserCreation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "github",
            "baseName": "github",
            "type": "ManagementV1AuthenticationGithub",
            "format": ""
        },
        {
            "name": "gitlab",
            "baseName": "gitlab",
            "type": "ManagementV1AuthenticationGitlab",
            "format": ""
        },
        {
            "name": "google",
            "baseName": "google",
            "type": "ManagementV1AuthenticationGoogle",
            "format": ""
        },
        {
            "name": "groupsFilters",
            "baseName": "groupsFilters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "loginAccessKeyTTLSeconds",
            "baseName": "loginAccessKeyTTLSeconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "microsoft",
            "baseName": "microsoft",
            "type": "ManagementV1AuthenticationMicrosoft",
            "format": ""
        },
        {
            "name": "oidc",
            "baseName": "oidc",
            "type": "ManagementV1AuthenticationOIDC",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "ManagementV1AuthenticationPassword",
            "format": ""
        },
        {
            "name": "rancher",
            "baseName": "rancher",
            "type": "ManagementV1AuthenticationRancher",
            "format": ""
        },
        {
            "name": "saml",
            "baseName": "saml",
            "type": "ManagementV1AuthenticationSAML",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1Authentication.attributeTypeMap;
    }

    public constructor() {
    }
}

