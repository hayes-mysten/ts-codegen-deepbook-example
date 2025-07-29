/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * `Balances` represents the three assets make up a pool: base, quote, and deep.
 * Whenever funds are moved, they are moved in the form of `Balances`.
 */

import { bcs } from '@mysten/sui/bcs';
export function Balances() {
    return bcs.struct('Balances', {
        base: bcs.u64(),
        quote: bcs.u64(),
        deep: bcs.u64()
    });
}