/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * Governance module handles the governance of the `Pool` that it's attached to.
 * Users with non zero stake can create proposals and vote on them. Winning
 * proposals are used to set the trade parameters for the next epoch.
 */

import { bcs } from '@mysten/sui/bcs';
import * as vec_map from './deps/sui/vec_map.js';
import * as trade_params from './trade_params.js';
export function Proposal() {
    return bcs.struct('Proposal', {
        taker_fee: bcs.u64(),
        maker_fee: bcs.u64(),
        stake_required: bcs.u64(),
        votes: bcs.u64()
    });
}
export function Governance() {
    return bcs.struct('Governance', {
        /** Tracks refreshes. */
        epoch: bcs.u64(),
        /** If Pool is whitelisted. */
        whitelisted: bcs.bool(),
        /** If Pool is stable or volatile. */
        stable: bcs.bool(),
        /** List of proposals for the current epoch. */
        proposals: vec_map.VecMap(bcs.Address, Proposal()),
        /** Trade parameters for the current epoch. */
        trade_params: trade_params.TradeParams(),
        /** Trade parameters for the next epoch. */
        next_trade_params: trade_params.TradeParams(),
        /** All voting power from the current stakes. */
        voting_power: bcs.u64(),
        /** Quorum for the current epoch. */
        quorum: bcs.u64()
    });
}
export function TradeParamsUpdateEvent() {
    return bcs.struct('TradeParamsUpdateEvent', {
        taker_fee: bcs.u64(),
        maker_fee: bcs.u64(),
        stake_required: bcs.u64()
    });
}