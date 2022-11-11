# Deploy a test ER20 to Scroll zkEVM
This demo deploys a simple ERC20Mintable to the Scroll zkEVM Alpha testnet, and then mints and transfers some tokens. It uses the Hardhat development framework.

# Getting started
1. `npm install`
2. Copy `.env.example` to `.env` and populate `PRIVATE_KEY` with your Ethereum private key. Leave the `SCROLL_TESTNET_URL`

You will need to go to the L1 faucet, request some TSETH and then bridge that to your address on L2: https://prealpha.scroll.io/faucet/ 

## Deploy to Scroll, mint and transfer tokens
There is an `ERC20Mintable.sol` in `contracts/`. This is a simple ERC20 with an unprotected `mint()` function - do not use it in production. 

We will deploy this contract to Scroll, before then minting some tokens to our deploy address and lastly transferring some of those tokens to another user. The logic is contained in the `deploy/index.ts` script: 


1. Compile the contract, run `npm run compile`
2. Run the deploy script, which will also mint and transfer tokens: `npm run deploy`

The deploy script will print out the various transaction hashes involved, which can then be looked up on the Scroll L2 block explorer: https://l2scan.scroll.io/ 
