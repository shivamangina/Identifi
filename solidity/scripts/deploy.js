const hre = require("hardhat");

async function main() {
  const CertifiContract = await hre.ethers.getContractFactory(
    "CertifiContract"
  );
  const certifiContract = await CertifiContract.deploy();
  await certifiContract.deployed();
  console.log("CertifiContract deployed to:", certifiContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
