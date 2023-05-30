import { getTokenBalance, getSolBalance } from "./walletAccountActions";
import { Connection } from "@solana/web3.js";

export const getRewardBalances = async (box) => {
    const connection = new Connection(
        process.env.REACT_APP_RPC_URL,
        "confirmed"
    );
    let rewards = [...box.rewards];
    let treasury = box.treasury;
    const rewardWithBalances = await Promise.all(rewards.map(async (reward) => {
        if (reward.type === 'SOL') {
            const token_balance = await getSolBalance(treasury, connection);
            reward.balance = token_balance;
            // console.log("SOl balance", token_balance)
        }        
        if (reward.type === 'SPL_TOKEN') {
            const token_balance = await getTokenBalance(reward.mint_address, treasury);
            reward.balance = token_balance;
            // console.log("SPL balance", token_balance)
        }        
        if (reward.type === 'NFT') {
            reward.balance = reward.nft_mints.available;
            // console.log("NFT balance", reward.balance)
        }
        if (reward.type === 'NO_REWARD') {
            reward.balance = "unlimited";
            
        }
        // console.log(reward)
        return reward;
        
    }))
    // console.log(rewards)
    return {...box, rewards: rewardWithBalances}

}