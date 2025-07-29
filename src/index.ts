import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { normalizeStructTag } from "@mysten/sui/utils";
import { coinWithBalance, Transaction } from "@mysten/sui/transactions";
import {  swapExactQuoteForBase } from "./contracts/deepbook/pool";

const WAL = '0x9ef7676a9f81937a52ae4b2af8d511a28a0b080477c0c2db40b0ab8882240d76::wal::WAL'
const DEEP = '0x36dbef866a1d62bf7328989a10fb2f07d769f4ee587c0de4a0a256e57e0a58a8::deep::DEEP'
const SUI = normalizeStructTag('0x2::sui::SUI')

const WAL_SUI_POOL = {
    address: `0x8c1c1b186c4fddab1ebd53e0895a36c1d1b3b9a77cd34e607bef49a38af0150a`,
    baseCoin: WAL,
    quoteCoin: SUI,
}

// 0xb697f10305f28115baf498eb8b22c1c6f8f13968749f6c4c2a9fc31defbab70a
const keypair = Ed25519Keypair.fromSecretKey('suiprivkey1qpawczmv8qjp6l8qctal249vsmn97pyamjjam9tff3snkkx9rax8w8tt4x3')

const address = keypair.toSuiAddress()

const client = new SuiClient({
    network: 'testnet',
    url: getFullnodeUrl('testnet')
});

const balances = await client.getAllBalances({
    owner: address,
});

console.log('initial balances', balances.map(b => `${b.coinType}: ${b.totalBalance}`))

const tx = swapSuiForWal(100_000_000)

console.log('swapping sui for wal')

const { digest } = await client.signAndExecuteTransaction({
    transaction: tx,
    signer: keypair,
})

const { effects } = await client.waitForTransaction({
    digest,
    options: {
        showEffects: true,
    }
})

console.log(effects?.status)

const updatedBalances = await client.getAllBalances({
    owner: address,
});

console.log('updated balances', updatedBalances.map(b => `${b.coinType}: ${b.totalBalance}`))


function swapSuiForWal(amount: number) {
    const transaction = new Transaction()

    transaction.setSender(address)

    const [base, quote, deep] = transaction.add(
        swapExactQuoteForBase({
            typeArguments: [WAL, SUI],
            arguments: {
                self: WAL_SUI_POOL.address,
                quoteIn: coinWithBalance({
                    type: SUI,
                    balance: amount,
                }),
                deepIn: transaction.moveCall({
                    target: '0x2::coin::zero',
                    typeArguments: [DEEP],
                }),
                minBaseOut: 0,
            },
        })
    )
    transaction.transferObjects([base, quote, deep], address)

    return transaction
}



