const chain = "ethereum";
const accessControlConditions = [
  {
    contractAddress: "",
    standardContractType: "",
    chain,
    method: "eth_getBalance",
    parameters: [":userAddress", "latest"],
    returnValueTest: {
      comparator: ">=",
      value: "0",
    },
  },
];
const message = "Hello world";
const client = new LitNodeClient({
  litNetwork: "cayenne",
});
await client.connect();
const { ciphertext, dataToEncryptHash } = await LitJsSdk.encryptString(
  {
    accessControlConditions,
    sessionSigs: {}, // your session
    chain,
    dataToEncrypt: message,
  },
  client,
);

console.log("cipher text:", ciphertext, "hash:", dataToEncryptHash);
