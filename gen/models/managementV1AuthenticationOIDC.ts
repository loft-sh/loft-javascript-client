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



export class ManagementV1AuthenticationOIDC {
    /**
    * Path to a PEM encoded root certificate of the provider. Optional
    */
    'caFile'?: string;
    /**
    * ClientID the JWT must be issued for, the \"sub\" field. This plugin only trusts a single client to ensure the plugin can be used with public providers.  The plugin supports the \"authorized party\" OpenID Connect claim, which allows specialized providers to issue tokens to a client for a different client. See: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
    */
    'clientId'?: string;
    /**
    * ClientSecret to issue tokens from the OIDC provider
    */
    'clientSecret'?: string;
    /**
    * EmailClaim is the JWT field to use as the user\'s email.
    */
    'emailClaim'?: string;
    /**
    * GetUserInfo, if specified, tells the OIDCAuthenticator to try to populate the user\'s information from the UserInfo.
    */
    'getUserInfo'?: boolean;
    /**
    * If required groups is non empty, access is denied if the user is not part of at least one of the specified groups.
    */
    'groups'?: Array<string>;
    /**
    * GroupsClaim, if specified, causes the OIDCAuthenticator to try to populate the user\'s groups with an ID Token field. If the GroupsClaim field is present in an ID Token the value must be a string or list of strings.
    */
    'groupsClaim'?: string;
    /**
    * GroupsPrefix, if specified, causes claims mapping to group names to be prefixed with the value. A value \"oidc:\" would result in groups like \"oidc:engineering\" and \"oidc:marketing\".
    */
    'groupsPrefix'?: string;
    /**
    * Specify whether to communicate without validating SSL certificates
    */
    'insecureCa'?: boolean;
    /**
    * IssuerURL is the URL the provider signs ID Tokens as. This will be the \"iss\" field of all tokens produced by the provider and is used for configuration discovery.  The URL is usually the provider\'s URL without a path, for example \"https://accounts.google.com\" or \"https://login.salesforce.com\".  The provider must implement configuration discovery. See: https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig
    */
    'issuerUrl'?: string;
    /**
    * LoftUsernameClaim is the JWT field to use as the user\'s username.
    */
    'loftUsernameClaim'?: string;
    /**
    * Loft URI to be redirected to after successful logout by OIDC Provider
    */
    'postLogoutRedirectURI'?: string;
    /**
    * Configurable key which contains the preferred username claims
    */
    'preferredUsername'?: string;
    /**
    * loft redirect uri. E.g. https://loft.my.domain/auth/oidc/callback
    */
    'redirectURI'?: string;
    /**
    * Scopes that should be sent to the server. If empty, defaults to \"email\" and \"profile\".
    */
    'scopes'?: Array<string>;
    /**
    * Type of the OIDC to show in the UI. Only for displaying purposes
    */
    'type'?: string;
    /**
    * UsernameClaim is the JWT field to use as the user\'s id.
    */
    'usernameClaim'?: string;
    /**
    * UsernamePrefix, if specified, causes claims mapping to username to be prefix with the provided value. A value \"oidc:\" would result in usernames like \"oidc:john\".
    */
    'usernamePrefix'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "caFile",
            "baseName": "caFile",
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
            "name": "emailClaim",
            "baseName": "emailClaim",
            "type": "string",
            "format": ""
        },
        {
            "name": "getUserInfo",
            "baseName": "getUserInfo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "groupsClaim",
            "baseName": "groupsClaim",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupsPrefix",
            "baseName": "groupsPrefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "insecureCa",
            "baseName": "insecureCa",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "issuerUrl",
            "baseName": "issuerUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "loftUsernameClaim",
            "baseName": "loftUsernameClaim",
            "type": "string",
            "format": ""
        },
        {
            "name": "postLogoutRedirectURI",
            "baseName": "postLogoutRedirectURI",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredUsername",
            "baseName": "preferredUsername",
            "type": "string",
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
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "usernameClaim",
            "baseName": "usernameClaim",
            "type": "string",
            "format": ""
        },
        {
            "name": "usernamePrefix",
            "baseName": "usernamePrefix",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1AuthenticationOIDC.attributeTypeMap;
    }

    public constructor() {
    }
}

