"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_node_1 = require("@klever/sdk-node");
const provider = {
    api: "https://api.devnet.klever.finance",
    node: "https://node.devnet.klever.finance",
};
sdk_node_1.utils.setProviders(provider);
const payload = {
    amount: '1000',
    receiver: 'klv1fpwjz234gy8aaae3gx0e8q9f52vymzzn3z5q0s5h60pvktzx0n0qwvtux5',
};
const privateKey = "key";
const account = new sdk_node_1.Account(privateKey);
await account.ready;
const unsignedTx = await account.buildTransaction([
    {
        payload,
        type: sdk_node_1.TransactionType.Transfer,
    },
], [
    'abcd', //min 4 character
]);
const signedTx = await account.signTransaction(unsignedTx);
const broadcastRes = await account.broadcastTransactions([signedTx]);
console.log(broadcastRes);
