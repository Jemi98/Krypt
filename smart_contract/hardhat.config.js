require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/voYqX9V8TJp6XX1ZpOIz6mgkTmDrBfar",
      accounts: [
        "1277532a3a542f82eda653c86882d043ab011b3c603cb2db51d35e48feea524c",
      ],
    },
  },
};
