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

import { LicenseApiPlanExpiration } from '../models/licenseApiPlanExpiration';
import { LicenseApiPriceTier } from '../models/licenseApiPriceTier';
import { LicenseApiTierResource } from '../models/licenseApiTierResource';


/**
* PlanPrice defines a price for the plan
*/
export class LicenseApiPlanPrice {
    'exp'?: LicenseApiPlanExpiration;
    /**
    * ID of the price
    */
    'id'?: string;
    /**
    * Interval contains the time span of each period (e.g. month, year)
    */
    'interval'?: string;
    /**
    * IntervalCount specifies if the number of intervals (e.g. 3 [months])
    */
    'intervalCount'?: number;
    /**
    * Quantity sets the quantity the TierResource is supposed to be at If this is the active price, then this is the subscription quantity (currently purchased quantity)
    */
    'quantity'?: number;
    'resource'?: LicenseApiTierResource;
    /**
    * Status is the status of the price (PlanStatus) If the plan is active, one of its prices must be active as well
    */
    'status'?: string;
    /**
    * TierMode defines how tiers should be used
    */
    'tierMode'?: string;
    /**
    * Tiers is a list of tiers in this plan
    */
    'tiers'?: Array<LicenseApiPriceTier>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exp",
            "baseName": "exp",
            "type": "LicenseApiPlanExpiration",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "string",
            "format": ""
        },
        {
            "name": "intervalCount",
            "baseName": "intervalCount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "double"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "LicenseApiTierResource",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "tierMode",
            "baseName": "tierMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "tiers",
            "baseName": "tiers",
            "type": "Array<LicenseApiPriceTier>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LicenseApiPlanPrice.attributeTypeMap;
    }

    public constructor() {
    }
}

