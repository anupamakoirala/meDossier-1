var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "your metamask mnemonics";

module.exports = {
 networks: {
  development: {
   host: "127.0.0.1",
   port: 8545,
   network_id: "*"
  },
  ropsten: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "Enter your Infura end point");
      },
      network_id: 3,
      gas: 9900000,
      gasPrice: 10000000000,
  }
 }
};
