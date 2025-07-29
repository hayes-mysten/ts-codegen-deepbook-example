/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/** TradeParams module contains the trade parameters for a trading pair. */

import { bcs } from '@mysten/sui/bcs';
export function TradeParams() {
    return bcs.struct('TradeParams', {
        taker_fee: bcs.u64(),
        maker_fee: bcs.u64(),
        stake_required: bcs.u64()
    });
}