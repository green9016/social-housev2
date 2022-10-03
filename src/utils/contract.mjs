import ethers from "ethers";
import SHAbi from "../assets/social-abi.json";

export const CHAIN = (process.env.IS_TEST ? process.env.TEST_CHAIN_ID : process.env.MAIN_CHAIN_ID) || "4";
export const NETWORK_NAMES = {
    "1": "Ethereum",
    "4": "rinkeby"
}
const contracInfo = {
    abi: SHAbi,
    address: {
        "3": "0x23d030fae7bB88E514Ab76d3419104D6472D75e6",
        "4": "0x6E7A8Ce0987961C3ae52dEe9275CFe90cBF85df8"
    }
}

export const mint = async (provider, signer) => {
    if (!provider) return;

    const contract = new ethers.Contract(contracInfo.address[CHAIN], contracInfo.abi, provider);
    const nftCost = await contract.connect(signer).cost();
    console.log(nftCost);

    const gasPrice = await provider.getGasPrice();

    const tx = await contract.connect(signer).mint({value: nftCost, gasPrice: gasPrice, gasLimit: 21000});
    await tx.wait()
    
    // tx.send({from: account, value: nftCost, gasPrice: gasPrice, gas: parseInt(gasCost * 2)}) // previous gasPrice = 2000000000
    // .on("receipt", receipt => {
    //     console.log("mint--", receipt);
    // })
    // .on("error", error => {
    //     console.error("mint--", error);
    // })
}