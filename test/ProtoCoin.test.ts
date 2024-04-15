import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("ProtoCoin", function () {
  async function deployFixture() {

    const [owner, otherAccount] = await hre.ethers.getSigners();

    const ProtoCoin = await hre.ethers.getContractFactory("ProtoCoin");
    const protoCoin = await ProtoCoin.deploy()

    return { protoCoin, owner, otherAccount };
  }

  it("Should have correct name", async function () {
    const { protoCoin, owner, otherAccount } = await loadFixture(deployFixture);
    const name = await protoCoin.name();
    expect(name).to.equal("ProtoCoin");
  });

  it("Should have corrent symbol", async function () {
    const { protoCoin, owner, otherAccount } = await loadFixture(deployFixture);
    const symbol = await protoCoin.symbol();
    expect(symbol).to.equal("PRC");
  });

  it("Should have correct decimals", async function () {
    const { protoCoin, owner, otherAccount } = await loadFixture(deployFixture);
    const decimals = await protoCoin.decimals();
    expect(decimals).to.equal(18);
  });

  it("Should have correct total supply", async function () {
    const { protoCoin, owner, otherAccount } = await loadFixture(deployFixture);
    const totalSupply = await protoCoin.totalSupply();
    expect(totalSupply).to.equal(1000n * 10n ** 18n);
  });
});
