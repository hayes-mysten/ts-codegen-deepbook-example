/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/
import { type Transaction } from '@mysten/sui/transactions';
export interface CurrentVersionOptions {
    package?: string;
    arguments?: [
    ];
}
export function currentVersion(options: CurrentVersionOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'current_version',
    });
}
export interface PoolCreationFeeOptions {
    package?: string;
    arguments?: [
    ];
}
export function poolCreationFee(options: PoolCreationFeeOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'pool_creation_fee',
    });
}
export interface FloatScalingOptions {
    package?: string;
    arguments?: [
    ];
}
export function floatScaling(options: FloatScalingOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'float_scaling',
    });
}
export interface FloatScalingU128Options {
    package?: string;
    arguments?: [
    ];
}
export function floatScalingU128(options: FloatScalingU128Options = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'float_scaling_u128',
    });
}
export interface MaxU64Options {
    package?: string;
    arguments?: [
    ];
}
export function maxU64(options: MaxU64Options = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'max_u64',
    });
}
export interface MaxU128Options {
    package?: string;
    arguments?: [
    ];
}
export function maxU128(options: MaxU128Options = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'max_u128',
    });
}
export interface NoRestrictionOptions {
    package?: string;
    arguments?: [
    ];
}
export function noRestriction(options: NoRestrictionOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'no_restriction',
    });
}
export interface ImmediateOrCancelOptions {
    package?: string;
    arguments?: [
    ];
}
export function immediateOrCancel(options: ImmediateOrCancelOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'immediate_or_cancel',
    });
}
export interface FillOrKillOptions {
    package?: string;
    arguments?: [
    ];
}
export function fillOrKill(options: FillOrKillOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'fill_or_kill',
    });
}
export interface PostOnlyOptions {
    package?: string;
    arguments?: [
    ];
}
export function postOnly(options: PostOnlyOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'post_only',
    });
}
export interface MaxRestrictionOptions {
    package?: string;
    arguments?: [
    ];
}
export function maxRestriction(options: MaxRestrictionOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'max_restriction',
    });
}
export interface LiveOptions {
    package?: string;
    arguments?: [
    ];
}
export function live(options: LiveOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'live',
    });
}
export interface PartiallyFilledOptions {
    package?: string;
    arguments?: [
    ];
}
export function partiallyFilled(options: PartiallyFilledOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'partially_filled',
    });
}
export interface FilledOptions {
    package?: string;
    arguments?: [
    ];
}
export function filled(options: FilledOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'filled',
    });
}
export interface CanceledOptions {
    package?: string;
    arguments?: [
    ];
}
export function canceled(options: CanceledOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'canceled',
    });
}
export interface ExpiredOptions {
    package?: string;
    arguments?: [
    ];
}
export function expired(options: ExpiredOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'expired',
    });
}
export interface SelfMatchingAllowedOptions {
    package?: string;
    arguments?: [
    ];
}
export function selfMatchingAllowed(options: SelfMatchingAllowedOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'self_matching_allowed',
    });
}
export interface CancelTakerOptions {
    package?: string;
    arguments?: [
    ];
}
export function cancelTaker(options: CancelTakerOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'cancel_taker',
    });
}
export interface CancelMakerOptions {
    package?: string;
    arguments?: [
    ];
}
export function cancelMaker(options: CancelMakerOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'cancel_maker',
    });
}
export interface MinPriceOptions {
    package?: string;
    arguments?: [
    ];
}
export function minPrice(options: MinPriceOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'min_price',
    });
}
export interface MaxPriceOptions {
    package?: string;
    arguments?: [
    ];
}
export function maxPrice(options: MaxPriceOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'max_price',
    });
}
export interface PhaseOutEpochsOptions {
    package?: string;
    arguments?: [
    ];
}
export function phaseOutEpochs(options: PhaseOutEpochsOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'phase_out_epochs',
    });
}
export interface DefaultStakeRequiredOptions {
    package?: string;
    arguments?: [
    ];
}
export function defaultStakeRequired(options: DefaultStakeRequiredOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'default_stake_required',
    });
}
export interface HalfOptions {
    package?: string;
    arguments?: [
    ];
}
export function half(options: HalfOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'half',
    });
}
export interface FeeIsDeepOptions {
    package?: string;
    arguments?: [
    ];
}
export function feeIsDeep(options: FeeIsDeepOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'fee_is_deep',
    });
}
export interface DeepUnitOptions {
    package?: string;
    arguments?: [
    ];
}
export function deepUnit(options: DeepUnitOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'deep_unit',
    });
}
export interface MaxFillsOptions {
    package?: string;
    arguments?: [
    ];
}
export function maxFills(options: MaxFillsOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'max_fills',
    });
}
export interface MaxOpenOrdersOptions {
    package?: string;
    arguments?: [
    ];
}
export function maxOpenOrders(options: MaxOpenOrdersOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'max_open_orders',
    });
}
export interface MaxSliceSizeOptions {
    package?: string;
    arguments?: [
    ];
}
export function maxSliceSize(options: MaxSliceSizeOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'max_slice_size',
    });
}
export interface MaxFanOutOptions {
    package?: string;
    arguments?: [
    ];
}
export function maxFanOut(options: MaxFanOutOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'max_fan_out',
    });
}
export interface FeePenaltyMultiplierOptions {
    package?: string;
    arguments?: [
    ];
}
export function feePenaltyMultiplier(options: FeePenaltyMultiplierOptions = {}) {
    const packageAddress = options.package ?? '@deepbook/core';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'constants',
        function: 'fee_penalty_multiplier',
    });
}