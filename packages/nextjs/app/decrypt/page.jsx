const code = `(async () => {
  const resp = await Lit.Actions.decryptAndCombine({
    accessControlConditions,
    ciphertext,
    dataToEncryptHash,
    authSig: null,
    chain: 'ethereum',
  });

  Lit.Actions.setResponse({ response: resp });
})();`;

const res = await client.executeJs({
  code,
  sessionSigs: {},
  jsParams: {
    accessControlConditions,
    ciphertext,
    dataToEncryptHash,
  },
});

console.log("decrypted content sent from lit action:", res);
