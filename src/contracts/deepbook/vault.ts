/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * The vault holds all of the assets for this pool. At the end of all transaction
 * processing, the vault is used to settle the balances for the user.
 */

import { bcs } from '@mysten/sui/bcs';
import * as balance from './deps/sui/balance.js';
import * as type_name from './deps/std/type_name.js';
export function Vault() {
    return bcs.struct('Vault', {
        base_balance: balance.Balance(),
        quote_balance: balance.Balance(),
        deep_balance: balance.Balance()
    });
}
export function FlashLoan() {
    return bcs.struct('FlashLoan', {
        pool_id: bcs.Address,
        borrow_quantity: bcs.u64(),
        type_name: type_name.TypeName()
    });
}
export function FlashLoanBorrowed() {
    return bcs.struct('FlashLoanBorrowed', {
        pool_id: bcs.Address,
        borrow_quantity: bcs.u64(),
        type_name: type_name.TypeName()
    });
}