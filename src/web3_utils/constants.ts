import * as dotenv from "dotenv";

dotenv.config();

export const RUN = 2;

export const vaults = ["2"];


export const chains: { [key: string]: string } = {
    ethereum: "1",
    optimism: "10",
    polygon: "137",
    sepolia: "11155111",
    saga: "5464",
    base: "8453",
    arbitrum: "42161",
    avalanche: "43114",
    gnosis: "100",
    BSC: "56",
    scroll: "534352",
    zkSync: "324",
};

export const web3Endpoint: { [key: string]: string } = {
    [chains.ethereum]: "https://site1.moralis-nodes.com/eth/44805a09c5454c499158f747fb62d344",
};
``
export const multicallAddress: { [key: string]: string } = {
    [chains.ethereum]: "0xcA11bde05977b3631167028862bE2a173976CA11",
};
