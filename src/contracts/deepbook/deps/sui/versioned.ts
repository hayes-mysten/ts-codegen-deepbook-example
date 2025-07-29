/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/
import { bcs } from '@mysten/sui/bcs';
import * as object from './object.js';
export function Versioned() {
    return bcs.struct('Versioned', {
        id: object.UID(),
        version: bcs.u64()
    });
}