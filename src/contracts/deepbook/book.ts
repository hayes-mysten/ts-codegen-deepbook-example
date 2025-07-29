/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * The book module contains the `Book` struct which represents the order book. All
 * order book operations are defined in this module.
 */

import { bcs } from '@mysten/sui/bcs';
import * as big_vector from './big_vector.js';
export function Book() {
    return bcs.struct('Book', {
        tick_size: bcs.u64(),
        lot_size: bcs.u64(),
        min_size: bcs.u64(),
        bids: big_vector.BigVector(),
        asks: big_vector.BigVector(),
        next_bid_order_id: bcs.u64(),
        next_ask_order_id: bcs.u64()
    });
}