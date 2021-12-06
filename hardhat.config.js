require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 1,
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/MB1erYtsiSKmEvN_tY7lNmiz4nFazqai",
      accounts: ["d0ad863e2879c5f5ac0f4157deb2c12e3b0cb9ac5fa516544853120c3faac241"],
    },
  },
  etherscan: {
    apiKey: "MD92IUH2GSS1CB85AQIR51C8AWUDA4BY6X",
  },
};
