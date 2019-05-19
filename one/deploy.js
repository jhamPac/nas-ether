require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const {abi, evm: {bytecode}} = require('./compile')

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.TEST_NETWORK
)

const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()
  console.log(accounts)

  // const result = await new w3.eth.Contract(abi)
  //  .deploy({data: '0x' + bytecode.object, arguments: ['Sandstorm']})
  //  .send({from: accounts[0], gas: '1000000'})
  //
  //  console.log('Contract deployed to', result.options.address)
}

deploy()
