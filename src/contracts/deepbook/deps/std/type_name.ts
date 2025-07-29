/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/** Functionality for converting Move types into values. Use with care! */

import { bcs } from '@mysten/sui/bcs';
export function TypeName() {
    return bcs.struct('TypeName', {
        /**
          * String representation of the type. All types are represented using their source
          * syntax: "u8", "u64", "bool", "address", "vector", and so on for primitive types.
          * Struct types are represented as fully qualified type names; e.g.
          * `00000000000000000000000000000001::string::String` or
          * `0000000000000000000000000000000a::module_name1::type_name1<0000000000000000000000000000000a::module_name2::type_name2<u64>>`
          * Addresses are hex-encoded lowercase values of length ADDRESS_LENGTH (16, 20, or
          * 32 depending on the Move platform)
          */
        name: bcs.string()
    });
}