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

import { StorageV1GitProjectSpec } from '../models/storageV1GitProjectSpec';
import { StorageV1SSHProjectSpec } from '../models/storageV1SSHProjectSpec';


export class StorageV1DevPodProjectSpec {
    /**
    * FallbackImage defines an image all workspace will fall back to if no devcontainer.json could be detected
    */
    'fallbackImage'?: string;
    'git'?: StorageV1GitProjectSpec;
    'ssh'?: StorageV1SSHProjectSpec;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fallbackImage",
            "baseName": "fallbackImage",
            "type": "string",
            "format": ""
        },
        {
            "name": "git",
            "baseName": "git",
            "type": "StorageV1GitProjectSpec",
            "format": ""
        },
        {
            "name": "ssh",
            "baseName": "ssh",
            "type": "StorageV1SSHProjectSpec",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StorageV1DevPodProjectSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

