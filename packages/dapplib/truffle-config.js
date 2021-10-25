require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food fine release noise method giraffe light army general'; 
let testAccounts = [
"0x9c8e7a5201718f1606363f42c8c2857410ede9cf1ef970457d26f0182c89fc02",
"0xd8ac32e0b13f7da695fcd803b4624a3e7bedfa5af39684d7b6b2ce736945870d",
"0xf4fb9d7b522a200df7b326e7b313bbb2d0f9c755e38292c412eb9ebaace5652c",
"0xd3cbd432f8d4824246d3a7837715ce5a91b93eb96fc707e3e12da0d31f9a8acb",
"0x02e5a1a46410ae1829996cf2280d76de57f80a471517a814ba94a4c0e173605e",
"0xcb6c8b0cb3d20a656837ad5509ac5dcccee7302724b58f0f3321d059fe1bf6b3",
"0x7aecd9f7c30569f202484c1d3e8cf691fff437cbbffac5fb382fd95069652535",
"0x4a05b7ea65693f6fefbca7bcd0f5c70b21b8c575faff2320b741567f9ce8ea59",
"0xcd5056d67baf127b70a11ea5efa7cb3d4d766686612e78ec64bc004a7c257393",
"0xc3ccf0dfee5001f0b82325be1e12e84773205f6605271a2bf7be932da06efa06"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


