import { ethers } from "hardhat";

async function main() {
  const deployerSigner = (await ethers.getSigners())[0];
  const deployerAddress = deployerSigner.address;
  console.log('Deployer address: ', deployerAddress)

  // 1. Deploy ERC20
  const ERC20Mintable = await ethers.getContractFactory("ERC20Mintable");
  const token = await ERC20Mintable.deploy();
  await token.deployed();
  console.log('Token deployed at: ', token.address);

  // 2. Mint 1000 tokens to user
  const mintTx = await token.mint(deployerAddress, 1000);
  console.log('Pending mint tx hash: ', mintTx.hash);
  await mintTx.wait();
  console.log('Mint processed');

  // 3. Transfer 10 tokens to a second user
  const receiver = '0x803554C9cB72227D88B56495D3E92f96aD589B09';
  console.log('Receiver: ', receiver);
  const transferTx = await token.transfer(receiver, 10);
  console.log('Pending transfer tx hash: ', transferTx.hash)
  await transferTx.wait();
  console.log('Transfer processed')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
