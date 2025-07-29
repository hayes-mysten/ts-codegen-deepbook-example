/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * DEEP price module. This module maintains the conversion rate between DEEP and
 * the base and quote assets.
 */

import { bcs } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
import { normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
export function Price() {
    return bcs.struct('Price', {
        conversion_rate: bcs.u64(),
        timestamp: bcs.u64()
    });
}
export function PriceAdded() {
    return bcs.struct('PriceAdded', {
        conversion_rate: bcs.u64(),
        timestamp: bcs.u64(),
        is_base_conversion: bcs.bool(),
        reference_pool: bcs.Address,
        target_pool: bcs.Address
    });
}
export function DeepPrice() {
    return bcs.struct('DeepPrice', {
        base_prices: bcs.vector(Price()),
        cumulative_base: bcs.u64(),
        quote_prices: bcs.vector(Price()),
        cumulative_quote: bcs.u64()
    });
}
export function OrderDeepPrice() {
    return bcs.struct('OrderDeepPrice', {
        asset_is_base: bcs.bool(),
        deep_per_asset: bcs.u64()
    });
}
export interface AssetIsBaseArguments {
    self: RawTransactionArgument<string>;
}
export interface AssetIsBaseOptions {
    package?: string;
    arguments: AssetIsBaseArguments | [
        self: RawTransactionArgument<string>
    ];
}
export function assetIsBase(options: AssetIsBaseOptions) {
    const packageAddress = options.package ?? '@deepbook/core';
    const argumentsTypes = [
        `${packageAddress}::deep_price::OrderDeepPrice`
    ] satisfies string[];
    const parameterNames = ["self"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deep_price',
        function: 'asset_is_base',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface DeepPerAssetArguments {
    self: RawTransactionArgument<string>;
}
export interface DeepPerAssetOptions {
    package?: string;
    arguments: DeepPerAssetArguments | [
        self: RawTransactionArgument<string>
    ];
}
export function deepPerAsset(options: DeepPerAssetOptions) {
    const packageAddress = options.package ?? '@deepbook/core';
    const argumentsTypes = [
        `${packageAddress}::deep_price::OrderDeepPrice`
    ] satisfies string[];
    const parameterNames = ["self"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deep_price',
        function: 'deep_per_asset',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}