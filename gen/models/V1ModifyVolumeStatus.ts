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
* ModifyVolumeStatus represents the status object of ControllerModifyVolume operation
*/
export class V1ModifyVolumeStatus {
    /**
    * status is the status of the ControllerModifyVolume operation. It can be in any of following states:  - Pending    Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as    the specified VolumeAttributesClass not existing.  - InProgress    InProgress indicates that the volume is being modified.  - Infeasible   Infeasible indicates that the request has been rejected as invalid by the CSI driver. To    resolve the error, a valid VolumeAttributesClass needs to be specified. Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.  Possible enum values:  - `\"InProgress\"` InProgress indicates that the volume is being modified  - `\"Infeasible\"` Infeasible indicates that the request has been rejected as invalid by the CSI driver. To resolve the error, a valid VolumeAttributesClass needs to be specified  - `\"Pending\"` Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as the specified VolumeAttributesClass not existing
    */
    'status': V1ModifyVolumeStatusStatusEnum;
    /**
    * targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled
    */
    'targetVolumeAttributesClassName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "V1ModifyVolumeStatusStatusEnum",
            "format": ""
        },
        {
            "name": "targetVolumeAttributesClassName",
            "baseName": "targetVolumeAttributesClassName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1ModifyVolumeStatus.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum V1ModifyVolumeStatusStatusEnum {
    InProgress = 'InProgress',
    Infeasible = 'Infeasible',
    Pending = 'Pending'
}
