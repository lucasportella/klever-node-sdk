import { Account, TransactionType, utils } from "@klever/sdk-node";
​
const provider = {
  api: "https://api.devnet.klever.finance",
  node: "https://node.devnet.klever.finance",
};
​
utils.setProviders(provider);

const  myFunc  =  async (): Promise<void> => {
  const payload = {
    amount: '1000',
    receiver: 'klv1fpwjz234gy8aaae3gx0e8q9f52vymzzn3z5q0s5h60pvktzx0n0qwvtux5',
  };
  ​
  const privateKey = "key";
  
  ​
  const account = new Account(privateKey);
  await account.ready;
  ​
  const unsignedTx = await account.buildTransaction(
    [
      {
        payload,
        type: TransactionType.Transfer,
      },
    ],
    [
      'abcd', //min 4 character
    ]
  );
  ​
  const signedTx = await account.signTransaction(unsignedTx);
  ​
  const broadcastRes = await account.broadcastTransactions([signedTx]);
  ​
  console.log(broadcastRes);
}

myFunc()