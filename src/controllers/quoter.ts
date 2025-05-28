import qouterABI from "../web3_utils/abis/qouterABI.json";
import { providers, multicall } from "../web3_utils/web3";
export async function getQuote(
    req: any,
    res: any
): Promise<void> {
    try {
        const { currency0, currency1, fee, tick, hooks, ZeroforOne, amount, hookData } = req.query;

        if (!currency0 || !currency1 || !fee || !tick || !hooks || !ZeroforOne || !amount || !hookData) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }

        // Simulate fetching quote from an external service
        let p = providers["1"];
        let contract = new p.eth.Contract(qouterABI, "0x52f0e24d1c21c8a0cb1e5a5dd6198556bd9e1203");
        let quote = await contract.methods.quoteExactInputSingle({
            poolKey: {
                currency0,
                currency1,
                fee: fee,
                tickSpacing: tick,
                hooks
            },
            zeroForOne: ZeroforOne === "true",
            exactAmount: amount,
            hookData
        }).call().catch((error: any) => {
            console.error("Error fetching quote:", error);
            return;
        });
        if (!quote) {
            res.status(404).json({ error: "Quote not found" });
            return;
        };
        let quoteData = {
            amountOut: convertHexToString(quote.amountOut),
            gasEstimate: convertHexToString(quote.gasEstimate),
        }
        res.status(200).json(quoteData);
    } catch (error) {
        console.error("Error fetching quote:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

function convertHexToString(data: any) {
    if (!data) {
        return "0";
    }
    if (data) {
        return BigInt(data).toString();
    }
    return data;
}