import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("ProtoCoin", function () {
  async function deployFixture() {

    const [owner, otherAccount] = await hre.ethers.getSigners();

    const ProtoCoin = await hre.ethers.getContractFactory("ProtoCoin");
    const protoCoin = await ProtoCoin.deploy()

    return { protoCoin, owner, otherAccount };
  }

  it("Should Test", async function () {
    const { protoCoin, owner, otherAccount } = await loadFixture(deployFixture);

    expect(true).to.equal(true);
  });
});
