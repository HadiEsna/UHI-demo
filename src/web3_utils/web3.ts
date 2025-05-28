import Web3 from "web3";
import { ethers } from "ethers";
import { Multicall, ContractCallResults, ContractCallContext } from "ethereum-multicall";

// import contracts from "../../vaultInfo.json";

import * as dotenv from "dotenv";
import { chains, web3Endpoint, multicallAddress } from "./constants";

dotenv.config();

export let accounts: any = {};
export const providers: any = {};
export let multicall: any = {};
export let owner = "";

for (const chain of Object.values(chains)) {
  console.log("init provider", chain, web3Endpoint[chain]);
  providers[chain] = new Web3(web3Endpoint[chain]);
  multicall[chain] = new Multicall({
    web3Instance: providers[chain],
    tryAggregate: true,
    multicallCustomContractAddress: multicallAddress[chain],
  });
  initAddresses(chain);
}

function initAddresses(chainId: string) {
  let senderKey = process.env.OWNER_PRIVATE_KEY as string;
  // add sender key to ethersProvider
  if (!senderKey) {
    return;
  }
  accounts[chainId] = providers[chainId].eth.accounts.wallet.add(senderKey)[0];

  owner = accounts[chainId].address;
}