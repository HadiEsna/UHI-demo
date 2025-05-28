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
    [chains.optimism]: "https://site2.moralis-nodes.com/optimism/c9e13109d6d6411eb4bac7574984a6fb",
    [chains.polygon]: "https://site1.moralis-nodes.com/polygon/62e0a178ce574f82bd59c60fd6825c23",
    [chains.base]: "https://site1.moralis-nodes.com/base/dd3727877c80481b8751ca501d7336ae",
    [chains.arbitrum]: "https://site1.moralis-nodes.com/arbitrum/b4d27240011c497a9d1e9e5b280d3093",
    [chains.avalanche]: "https://site1.moralis-nodes.com/avalanche/d0404a1f2dd343cab77638f83d91421c",
    [chains.gnosis]: "https://gnosis-mainnet.g.alchemy.com/v2/YTZ4co0ktED8_pxzfX77Lqg9Z2z4SCX_",
    [chains.scroll]: "https://scroll-mainnet.g.alchemy.com/v2/FY0tnR37N5bLNyjWsEY4IXxReJejnfQo",
    [chains.BSC]: "https://site1.moralis-nodes.com/bsc/333963b7dd664771b1e711bfc75bf86c",
    [chains.saga]: "https://sagaevm.jsonrpc.sagarpc.io",
    [chains.zkSync]: "https://site1.moralis-nodes.com/zksync/99c763fbbc534a1481b4dcfaef286a2b",
    [chains.sepolia]: "https://eth-sepolia.g.alchemy.com/v2/YTZ4co0ktED8_pxzfX77Lqg9Z2z4SCX_",
};
``
export const multicallAddress: { [key: string]: string } = {
    [chains.ethereum]: "0xcA11bde05977b3631167028862bE2a173976CA11",
    [chains.optimism]: "0xcA11bde05977b3631167028862bE2a173976CA11",
    [chains.polygon]: "0xcA11bde05977b3631167028862bE2a173976CA11",
    [chains.sepolia]: "0xcA11bde05977b3631167028862bE2a173976CA11",
    [chains.arbitrum]: "0xcA11bde05977b3631167028862bE2a173976CA11",
    [chains.base]: "0xcA11bde05977b3631167028862bE2a173976CA11",
    [chains.saga]: "0x5F6d2fcA946101c0134fb8540D84E40DCa10aBa1",
    [chains.scroll]: "0xcA11bde05977b3631167028862bE2a173976CA11",
    [chains.avalanche]: "0xcA11bde05977b3631167028862bE2a173976CA11",
    [chains.gnosis]: "0xcA11bde05977b3631167028862bE2a173976CA11",
    [chains.BSC]: "0xcA11bde05977b3631167028862bE2a173976CA11",
    [chains.zkSync]: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
};
