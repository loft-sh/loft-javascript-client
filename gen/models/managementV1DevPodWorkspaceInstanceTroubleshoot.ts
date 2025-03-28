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

import { ManagementV1DevPodWorkspaceInstance } from '../models/managementV1DevPodWorkspaceInstance';
import { StorageV1DevPodWorkspaceTemplate } from '../models/storageV1DevPodWorkspaceTemplate';
import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1PersistentVolumeClaim } from '../models/V1PersistentVolumeClaim';
import { V1Pod } from '../models/V1Pod';


export class ManagementV1DevPodWorkspaceInstanceTroubleshoot {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Errors is a list of errors that occurred while trying to collect informations for troubleshooting.
    */
    'errors'?: Array<string>;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    /**
    * Pods is a list of pod objects that are linked to the workspace.
    */
    'pods'?: Array<V1Pod>;
    /**
    * PVCs is a list of PVC objects that are linked to the workspace.
    */
    'pvcs'?: Array<V1PersistentVolumeClaim>;
    /**
    * State holds the workspaces state as given by \'devpod export\'
    */
    'state'?: string;
    'template'?: StorageV1DevPodWorkspaceTemplate;
    'workspace'?: ManagementV1DevPodWorkspaceInstance;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "Array<V1Pod>",
            "format": ""
        },
        {
            "name": "pvcs",
            "baseName": "pvcs",
            "type": "Array<V1PersistentVolumeClaim>",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "StorageV1DevPodWorkspaceTemplate",
            "format": ""
        },
        {
            "name": "workspace",
            "baseName": "workspace",
            "type": "ManagementV1DevPodWorkspaceInstance",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ManagementV1DevPodWorkspaceInstanceTroubleshoot.attributeTypeMap;
    }

    public constructor() {
    }
}

