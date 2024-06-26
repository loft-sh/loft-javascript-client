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

import { StorageV1Access } from '../models/storageV1Access';
import { StorageV1ClusterRoleRef } from '../models/storageV1ClusterRoleRef';
import { StorageV1KindSecretRef } from '../models/storageV1KindSecretRef';
import { StorageV1SecretRef } from '../models/storageV1SecretRef';
import { StorageV1UserOrTeam } from '../models/storageV1UserOrTeam';


export class ManagementV1UserSpec {
    /**
    * Access holds the access rights for users and teams
    */
    'access'?: Array<StorageV1Access>;
    /**
    * ClusterRoles define the cluster roles that the users should have assigned in the cluster.
    */
    'clusterRoles'?: Array<StorageV1ClusterRoleRef>;
    'codesRef'?: StorageV1SecretRef;
    /**
    * Description describes a cluster access object
    */
    'description'?: string;
    /**
    * If disabled is true, an user will not be able to login anymore. All other user resources are unaffected and other users can still interact with this user
    */
    'disabled'?: boolean;
    /**
    * The display name shown in the UI
    */
    'displayName'?: string;
    /**
    * The users email address
    */
    'email'?: string;
    /**
    * The groups the user has access to
    */
    'groups'?: Array<string>;
    /**
    * The URL to an icon that should be shown for the user
    */
    'icon'?: string;
    /**
    * ImagePullSecrets holds secret references to image pull secrets the user has access to.
    */
    'imagePullSecrets'?: Array<StorageV1KindSecretRef>;
    'owner'?: StorageV1UserOrTeam;
    'passwordRef'?: StorageV1SecretRef;
    /**
    * SSOGroups is used to remember groups that were added from sso.
    */
    'ssoGroups'?: Array<string>;
    /**
    * The user subject as presented by the token
    */
    'subject'?: string;
    /**
    * TokenGeneration can be used to invalidate all user tokens
    */
    'tokenGeneration'?: number;
    /**
    * The username that is used to login
    */
    'username'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "access",
            "baseName": "access",
            "type": "Array<StorageV1Access>",
            "format": ""
        },
        {
            "name": "clusterRoles",
            "baseName": "clusterRoles",
            "type": "Array<StorageV1ClusterRoleRef>",
            "format": ""
        },
        {
            "name": "codesRef",
            "baseName": "codesRef",
            "type": "StorageV1SecretRef",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "imagePullSecrets",
            "baseName": "imagePullSecrets",
            "type": "Array<StorageV1KindSecretRef>",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "StorageV1UserOrTeam",
            "format": ""
        },
        {
            "name": "passwordRef",
            "baseName": "passwordRef",
            "type": "StorageV1SecretRef",
            "format": ""
        },
        {
            "name": "ssoGroups",
            "baseName": "ssoGroups",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenGeneration",
            "baseName": "tokenGeneration",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1UserSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

