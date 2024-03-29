// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const initialMessage = "Hello, World!"; // Replace with your desired initial message
  const message = await hre.ethers.deployContract("MyMessage", [
    initialMessage,
  ]);

  await message.deployed();

  console.log(`MyMessage Contract deployed to: ${message.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
