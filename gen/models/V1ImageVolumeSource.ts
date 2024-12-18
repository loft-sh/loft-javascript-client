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
* ImageVolumeSource represents a image volume resource.
*/
export class V1ImageVolumeSource {
    /**
    * Policy for pulling OCI objects. Possible values are: Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn\'t present. IfNotPresent: the kubelet pulls if the reference isn\'t already present on disk. Container creation will fail if the reference isn\'t present and the pull fails. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise.  Possible enum values:  - `\"Always\"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.  - `\"IfNotPresent\"` means that kubelet pulls if the image isn\'t present on disk. Container will fail if the image isn\'t present and the pull fails.  - `\"Never\"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn\'t present
    */
    'pullPolicy'?: V1ImageVolumeSourcePullPolicyEnum;
    /**
    * Required: Image or artifact reference to be used. Behaves in the same way as pod.spec.containers[*].image. Pull secrets will be assembled in the same way as for the container image by looking up node credentials, SA image pull secrets, and pod spec image pull secrets. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
    */
    'reference'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pullPolicy",
            "baseName": "pullPolicy",
            "type": "V1ImageVolumeSourcePullPolicyEnum",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ImageVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum V1ImageVolumeSourcePullPolicyEnum {
    Always = 'Always',
    IfNotPresent = 'IfNotPresent',
    Never = 'Never'
}

