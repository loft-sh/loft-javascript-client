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
* PodResourceClaim references exactly one ResourceClaim, either directly or by naming a ResourceClaimTemplate which is then turned into a ResourceClaim for the pod.  It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
*/
export class V1PodResourceClaim {
    /**
    * Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
    */
    'name': string;
    /**
    * ResourceClaimName is the name of a ResourceClaim object in the same namespace as this pod.  Exactly one of ResourceClaimName and ResourceClaimTemplateName must be set.
    */
    'resourceClaimName'?: string;
    /**
    * ResourceClaimTemplateName is the name of a ResourceClaimTemplate object in the same namespace as this pod.  The template will be used to create a new ResourceClaim, which will be bound to this pod. When this pod is deleted, the ResourceClaim will also be deleted. The pod name and resource name, along with a generated component, will be used to form a unique name for the ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses.  This field is immutable and no changes will be made to the corresponding ResourceClaim by the control plane after creating the ResourceClaim.  Exactly one of ResourceClaimName and ResourceClaimTemplateName must be set.
    */
    'resourceClaimTemplateName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceClaimName",
            "baseName": "resourceClaimName",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceClaimTemplateName",
            "baseName": "resourceClaimTemplateName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PodResourceClaim.attributeTypeMap;
    }

    public constructor() {
    }
}
