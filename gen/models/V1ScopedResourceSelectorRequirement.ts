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
* A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
*/
export class V1ScopedResourceSelectorRequirement {
    /**
    * Represents a scope\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.  Possible enum values:  - `\"DoesNotExist\"`  - `\"Exists\"`  - `\"In\"`  - `\"NotIn\"`
    */
    'operator': V1ScopedResourceSelectorRequirementOperatorEnum;
    /**
    * The name of the scope that the selector applies to.  Possible enum values:  - `\"BestEffort\"` Match all pod objects that have best effort quality of service  - `\"CrossNamespacePodAffinity\"` Match all pod objects that have cross-namespace pod (anti)affinity mentioned.  - `\"NotBestEffort\"` Match all pod objects that do not have best effort quality of service  - `\"NotTerminating\"` Match all pod objects where spec.activeDeadlineSeconds is nil  - `\"PriorityClass\"` Match all pod objects that have priority class mentioned  - `\"Terminating\"` Match all pod objects where spec.activeDeadlineSeconds >=0
    */
    'scopeName': V1ScopedResourceSelectorRequirementScopeNameEnum;
    /**
    * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
    */
    'values'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "V1ScopedResourceSelectorRequirementOperatorEnum",
            "format": ""
        },
        {
            "name": "scopeName",
            "baseName": "scopeName",
            "type": "V1ScopedResourceSelectorRequirementScopeNameEnum",
            "format": ""
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ScopedResourceSelectorRequirement.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum V1ScopedResourceSelectorRequirementOperatorEnum {
    DoesNotExist = 'DoesNotExist',
    Exists = 'Exists',
    In = 'In',
    NotIn = 'NotIn'
}
export enum V1ScopedResourceSelectorRequirementScopeNameEnum {
    BestEffort = 'BestEffort',
    CrossNamespacePodAffinity = 'CrossNamespacePodAffinity',
    NotBestEffort = 'NotBestEffort',
    NotTerminating = 'NotTerminating',
    PriorityClass = 'PriorityClass',
    Terminating = 'Terminating'
}

