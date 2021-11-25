require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe story cost right punch gloom problem equal gate'; 
let testAccounts = [
"0x46580499eb86c83e9b49388952c444c6f8fca15340de657f5745eb66bbea5211",
"0xadd1ad644be3c928d4a01bedf812c1f4070db8ab00b1571d79e5d3a8973b6fab",
"0xe81ce7b8520f0869cc07c3525c2a71b0093cc8fb08f294a96497a618b04291b0",
"0x48769b21c9b339ed1befdc0c1fa55be98e626ab11aed01e96c3a1cac35da8cbc",
"0x98612aea63ca5dda7df895e99283c7ea30ab9dc3b9cfa9d5b2fc72d954be81df",
"0x742d1bf7e376b703db330b09b4ecbfc9015169b06beed646a86eaff1f6d5e0b1",
"0x776afd57f16c0cf110032bb6333de24e4acb184c09ad168c1e69693f9fb50759",
"0xd4c87f217f08ddd3ed76b04091024281333dadd42a2ec78628d380fd82b44542",
"0x2035b902f4f76ee7cccafa450716cbd4e57c32ac6e65fe97a967cfe593b99558",
"0x3a24913e5d2b82dd6b9f4b09fe88aee6ae57569ccaea9103ec133d44e5761a51"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

