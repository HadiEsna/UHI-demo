// script.js

// Initialize Ethers Provider
let provider;
// let ethers;

import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js";


// Initialize provider when ethers is loaded
async function initializeProvider() {
    if (typeof window.ethers !== 'undefined') {
        // ethers = window.ethers;
        provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/YTZ4co0ktED8_pxzfX77Lqg9Z2z4SCX_");
        console.log("Ethers provider initialized:", provider);

        // Test the connection
        try {
            const network = await provider.getNetwork();
            console.log("Connected to network:", network.name, "Chain ID:", network.chainId);
        } catch (error) {
            console.error("Failed to connect to provider:", error);
        }
    } else {
        console.error("Ethers library not loaded");
    }
}

// Call initialization when page loads
window.addEventListener('load', initializeProvider);

// Example: Convert sqrtPriceX96 to price
function getPriceFromSqrtX96(sqrtPriceX96) {
    const Q96 = 2n ** 96n;
    const price = (BigInt(sqrtPriceX96) ** 2n) / (Q96 ** 2n);
    return Number(price);
}

// Example: Print quote result
function printQuote(amountIn, amountOut) {
    console.log(`Input: ${amountIn}, Output: ${amountOut}`);
}

// Simulated quoteExactInputSingle
async function quoteExactInputSingle(currency0, currency1, fee, tickSpacing, hooks, zeroForOne, amountIn, hookData) {
    // Fake logic for demonstration
    console.log(`Quote for ${currency0} to ${currency1} with fee ${fee}, tickSpacing ${tickSpacing}, hooks ${hooks} and zeroForOne ${zeroForOne} for amount ${amountIn} with hookData ${hookData}`);
    // send a request to the server "http://localhost:9342/data/quote?currency0=0x0000000000000000000000000000000000000000&currency1=0xdac17f958d2ee523a2206206994597c13d831ec7&fee=3000&tick=60&hooks=0x0000000000000000000000000000000000000000&ZeroforOne=true&amount=1000000000000000000&hookData=0x"
    const response = await fetch(`http://localhost:9342/data/quote?currency0=${currency0}&currency1=${currency1}&fee=${fee}&tick=${tickSpacing}&hooks=${hooks}&ZeroforOne=${zeroForOne}&amount=${amountIn}&hookData=${hookData}`);
    const data = await response.json();

    const amountOut = data.amountOut || 0; // Simulated output amount
    const gasEstimate = data.gasEstimate || 21000; // Simulated gas estimate
    return { amountOut, gasEstimate };
}

// Function to handle button click
window.runQuote = function () {
    const resultDiv = document.getElementById('quoteResult');
    resultDiv.textContent = 'Calculating...';

    // Build PoolKey struct from individual inputs
    const currency0 = document.getElementById('currency0').value;
    const currency1 = document.getElementById('currency1').value;
    const fee = Number(document.getElementById('fee').value);
    const tickSpacing = Number(document.getElementById('tickSpacing').value);
    const hooks = document.getElementById('hooks').value;

    // const poolKey = window.buildPoolKey(currency0, currency1, fee, tickSpacing, hooks);

    // Get other parameters
    const zeroForOne = document.getElementById('zeroForOne').checked;
    const exactAmount = BigInt(document.getElementById('exactAmount').value);
    const hookData = document.getElementById('hookData').value;
    console.log(`Running quote for ${currency0} to ${currency1} with fee ${fee}, tickSpacing ${tickSpacing}, hooks ${hooks}, zeroForOne: ${zeroForOne}, exactAmount: ${exactAmount}, hookData: ${hookData}`);
    quoteExactInputSingle(currency0, currency1, fee, tickSpacing, hooks, zeroForOne, exactAmount, hookData)
        .then(result => {
            resultDiv.innerHTML = `
                <strong>Quote Result:</strong><br>
                Amount Out: ${result.amountOut}<br>
                Gas Estimate: ${result.gasEstimate}<br>
            `;
            console.log(`Amount Out: ${result.amountOut}`);
            console.log(`Gas Estimate: ${result.gasEstimate}`);
        })
        .catch(error => {
            resultDiv.textContent = `Error: ${error.message}`;
        });
}

// Build PoolKey struct representation and derive poolId
window.buildPoolKey = function (currency0, currency1, fee, tickSpacing, hooks) {
    const poolKeyStruct = {
        currency0,
        currency1,
        fee: Number(fee),
        tickSpacing: Number(tickSpacing),
        hooks
    };
    // Compute keccak256 over the serialized struct using ethers
    if (ethers && ethers.keccak256 && ethers.toUtf8Bytes) {
        const poolId = ethers.keccak256(ethers.toUtf8Bytes(JSON.stringify(poolKeyStruct)));
        return { poolKeyStruct, poolId };
    } else {
        // Fallback if ethers not loaded yet
        return { poolKeyStruct, poolId: 'ethers-not-loaded' };
    }
};