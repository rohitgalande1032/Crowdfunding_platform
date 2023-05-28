/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        url: 'https://eth-sepolia.g.alchemy.com/v2/lvvX06S4ddMRnZXJ4LD5QP8WumFpGkCH',
        accounts: [`0x${process.env.PRIVATE_KEY}`] //Account used to deploy smart contract
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
