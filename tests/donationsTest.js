import { expect } from "chai";
import { ethers } from "ethers";

describe("Donations contract", function() {
  it("", async function() {
    const [owner] = await ethers.getSigners();

    const Donation = await ethers.getContractFactory("Donation");

    const hardhatDonation = await Donation.deploy();

    const ownerBalance = await hardhatDonation.Donate().value(1);
    expect(await hardhatDonation.allFunds).to.equal(1);
  })
})
