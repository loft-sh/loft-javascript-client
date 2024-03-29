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
* The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
*/
export class V1Toleration {
    /**
    * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.  Possible enum values:  - `\"NoExecute\"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.  - `\"NoSchedule\"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.  - `\"PreferNoSchedule\"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.
    */
    'effect'?: V1TolerationEffectEnum;
    /**
    * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
    */
    'key'?: string;
    /**
    * Operator represents a key\'s relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.  Possible enum values:  - `\"Equal\"`  - `\"Exists\"`
    */
    'operator'?: V1TolerationOperatorEnum;
    /**
    * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
    */
    'tolerationSeconds'?: number;
    /**
    * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
    */
    'value'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "effect",
            "baseName": "effect",
            "type": "V1TolerationEffectEnum",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "V1TolerationOperatorEnum",
            "format": ""
        },
        {
            "name": "tolerationSeconds",
            "baseName": "tolerationSeconds",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1Toleration.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum V1TolerationEffectEnum {
    NoExecute = 'NoExecute',
    NoSchedule = 'NoSchedule',
    PreferNoSchedule = 'PreferNoSchedule'
}
export enum V1TolerationOperatorEnum {
    Equal = 'Equal',
    Exists = 'Exists'
}

