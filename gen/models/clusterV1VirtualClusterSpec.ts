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

import { StorageV1AppReference } from '../models/agentstorageV1AppReference';
import { StorageV1InstanceAccess } from '../models/agentstorageV1InstanceAccess';
import { StorageV1PodSelector } from '../models/agentstorageV1PodSelector';
import { StorageV1SecretRef } from '../models/agentstorageV1SecretRef';
import { StorageV1TemplateHelmChart } from '../models/agentstorageV1TemplateHelmChart';
import { StorageV1VirtualClusterAccessPoint } from '../models/agentstorageV1VirtualClusterAccessPoint';
import { StorageV1VirtualClusterHelmRelease } from '../models/agentstorageV1VirtualClusterHelmRelease';
import { StorageV1VirtualClusterProSpec } from '../models/agentstorageV1VirtualClusterProSpec';


export class ClusterV1VirtualClusterSpec {
    'access'?: StorageV1InstanceAccess;
    'accessPoint'?: StorageV1VirtualClusterAccessPoint;
    /**
    * Apps specifies the apps that should get deployed by this template
    */
    'apps'?: Array<StorageV1AppReference>;
    /**
    * Charts are helm charts that should get deployed
    */
    'charts'?: Array<StorageV1TemplateHelmChart>;
    /**
    * ForwardToken signals the proxy to pass through the used token to the virtual Kubernetes api server and do a TokenReview there.
    */
    'forwardToken'?: boolean;
    'helmRelease'?: StorageV1VirtualClusterHelmRelease;
    'kubeConfigRef'?: StorageV1SecretRef;
    /**
    * Objects are Kubernetes style yamls that should get deployed into the virtual cluster
    */
    'objects'?: string;
    'pod'?: StorageV1PodSelector;
    'pro'?: StorageV1VirtualClusterProSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "access",
            "baseName": "access",
            "type": "StorageV1InstanceAccess",
            "format": ""
        },
        {
            "name": "accessPoint",
            "baseName": "accessPoint",
            "type": "StorageV1VirtualClusterAccessPoint",
            "format": ""
        },
        {
            "name": "apps",
            "baseName": "apps",
            "type": "Array<StorageV1AppReference>",
            "format": ""
        },
        {
            "name": "charts",
            "baseName": "charts",
            "type": "Array<StorageV1TemplateHelmChart>",
            "format": ""
        },
        {
            "name": "forwardToken",
            "baseName": "forwardToken",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "helmRelease",
            "baseName": "helmRelease",
            "type": "StorageV1VirtualClusterHelmRelease",
            "format": ""
        },
        {
            "name": "kubeConfigRef",
            "baseName": "kubeConfigRef",
            "type": "StorageV1SecretRef",
            "format": ""
        },
        {
            "name": "objects",
            "baseName": "objects",
            "type": "string",
            "format": ""
        },
        {
            "name": "pod",
            "baseName": "pod",
            "type": "StorageV1PodSelector",
            "format": ""
        },
        {
            "name": "pro",
            "baseName": "pro",
            "type": "StorageV1VirtualClusterProSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterV1VirtualClusterSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

