# Deploy a test ER20 to Scroll zkEVM
This demo deploys a simple ERC20Mintable to the Scroll zkEVM Alpha testnet, and then mints and transfers some tokens. It uses the Hardhat development framework.

## 1. Getting started
1. `npm install`
2. Copy `.env.example` to `.env` and populate `PRIVATE_KEY` with your Ethereum private key. Leave the `SCROLL_TESTNET_URL`

## 2. Deploy to Scroll, mint and transfer tokens
There is an `ERC20Mintable.sol` in `contracts/`. This is a simple ERC20 with an unprotected `mint()` function - do not use it in production. We will deploy this contract to Scroll. Following that we will mint 


1. Compile the contract, run `npm run compile`
Deploys a simple ERC20 smart contract to various zkEVM's to explore the capabilities of different platforms. 

## 3. Minting and transferring tokens
