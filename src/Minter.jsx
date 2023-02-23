import { ethers } from "ethers";

// import TestContract from './TestContract2.sol/TestGoose2.json';
// import TestContract from './TestContract5.sol/The_Gooses_Geese2.json';
import TestContract from './Goose_Membership(final).sol/The_Gooses_Geese_Final_Test.json'


const contractAddress = '';

const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());

const signer = ((window.ethereum != null) ? provider.getSigner() : null);

const contract = ((window.ethereum != null) ? new ethers.Contract(contractAddress, TestContract.abi, signer)  : null);



const mintToken = async (walletAddress, metaData) => {

    if(window.ethereum != null)
    {
        const result = await contract.PayToMint(walletAddress, metaData,
            {
                value: ethers.utils.parseEther('0.1')
            
            });
        // const result = await contract.PayToMintRoyalty(walletAddress, metaData,
        //     {
        //         value: ethers.utils.parseEther('0.1'),
        //         gasLimit: 50000000000
        //     });
        await result.wait();
            // const result = await contract.safeMint(walletAddress, metaData);

            // await result.wait();
        console.log(metaData,  "metadata");
    }
};


export default mintToken;
