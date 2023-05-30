import axios from "axios"
import * as anchor from "@project-serum/anchor";
const LAMPORTS_PER_SOL = 1000000000

export const getSolBalance = async (walletAdress, connection) => {
  if (walletAdress){
    // console.log(walletAdress)
    let walletPubKey = new anchor.web3.PublicKey(walletAdress)
    // console.log(walletPubKey.toBase58())
    const res = await connection.getAccountInfo(walletPubKey)
    let lamps = 0
    if (res && res["lamports"]) lamps = res["lamports"]
    let solBal = lamps / LAMPORTS_PER_SOL
    return solBal.toFixed(4)
  } else {
    return 0
  }
}

export const getTokenBalance = async (mint_address, wallet_address) => {
    try {
      let resp = await axios.post(process.env.REACT_APP_RPC_URL,  {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "getTokenAccountsByOwner",
        "params": [
          wallet_address,
          {
            "mint": mint_address
          },
          {
            "encoding": "jsonParsed"
          }
        ]
      })
      let tokenBal = resp.data.result.value[0].account.data.parsed.info.tokenAmount.uiAmount;
      return tokenBal
    } catch (err) {
      console.log(err)
    }
  }