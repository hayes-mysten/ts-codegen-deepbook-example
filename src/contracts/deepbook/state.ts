/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * State module represents the current state of the pool. It maintains all the
 * accounts, history, and governance information. It also processes all the
 * transactions and updates the state accordingly.
 */

import { bcs } from '@mysten/sui/bcs';
import * as table from './deps/sui/table.js';
import * as history from './history.js';
import * as governance from './governance.js';
import * as balances from './balances.js';
export function State() {
    return bcs.struct('State', {
        accounts: table.Table(),
        history: history.History(),
        governance: governance.Governance()
    });
}
export function StakeEvent() {
    return bcs.struct('StakeEvent', {
        pool_id: bcs.Address,
        balance_manager_id: bcs.Address,
        epoch: bcs.u64(),
        amount: bcs.u64(),
        stake: bcs.bool()
    });
}
export function ProposalEvent() {
    return bcs.struct('ProposalEvent', {
        pool_id: bcs.Address,
        balance_manager_id: bcs.Address,
        epoch: bcs.u64(),
        taker_fee: bcs.u64(),
        maker_fee: bcs.u64(),
        stake_required: bcs.u64()
    });
}
export function VoteEvent() {
    return bcs.struct('VoteEvent', {
        pool_id: bcs.Address,
        balance_manager_id: bcs.Address,
        epoch: bcs.u64(),
        from_proposal_id: bcs.option(bcs.Address),
        to_proposal_id: bcs.Address,
        stake: bcs.u64()
    });
}
export function RebateEventV2() {
    return bcs.struct('RebateEventV2', {
        pool_id: bcs.Address,
        balance_manager_id: bcs.Address,
        epoch: bcs.u64(),
        claim_amount: balances.Balances()
    });
}
export function RebateEvent() {
    return bcs.struct('RebateEvent', {
        pool_id: bcs.Address,
        balance_manager_id: bcs.Address,
        epoch: bcs.u64(),
        claim_amount: bcs.u64()
    });
}