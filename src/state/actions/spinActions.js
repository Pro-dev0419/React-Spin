import * as anchor from "@project-serum/anchor";
import axios from "axios";
import * as splToken from "@solana/spl-token";
import { Program } from "@project-serum/anchor";
import { Connection } from "@solana/web3.js";

import { Degendrop } from "../../program/degendrop";
import idl from "../../program/degendrop.json";
import { withFindOrInitAssociatedTokenAccount } from "./helpers";

const treasuryAccountAddress = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ACCOUNT_ADDRESS
);
const feeAccountAddress = new anchor.web3.PublicKey(
  process.env.REACT_APP_FEE_ACCOUNT_ADDRESS
);
const collectionsAccountAddress = new anchor.web3.PublicKey(
  process.env.REACT_APP_COLLECTIONS_ACCOUNT_ADDRESS
);

export const spin = async (wallet, code, box) => {
  let tx = "";
  let pg_id = process.env.REACT_APP_DEGENDROP_PROGRAM_ID;
  let program_id = new anchor.web3.PublicKey(pg_id);
  const connection = new Connection(process.env.REACT_APP_RPC_URL, "confirmed");
  const provider = new anchor.AnchorProvider(
    connection,
    wallet,
    anchor.AnchorProvider.defaultOptions()
  );
  anchor.setProvider(provider);
  // @ts-ignore
  const program = new anchor.Program(
    idl,
    program_id,
    provider,
    new anchor.BorshCoder(idl)
  );
  try {
    let [globalAccount] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("GLOBAL_VAULT")],
      program_id
    );
    let mintCost = process.env.REACT_APP_DEFAULT_SPL_MINT;
    if (box.box_cost.type == "SPL_TOKEN") mintCost = box.box_cost.mint_address;
    let splMint = new anchor.web3.PublicKey(mintCost);
    let currentPlayer = wallet.publicKey;
    let [playerAccount] = await anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("PLAYER_ACCOUNT"), currentPlayer.toBuffer()],
      program.programId
    );
    // @ts-ignore
    let isUserAccountExist = await program.account.boxPlay.getAccountInfo(
      playerAccount
    );
    // console.log(1);
    let player_mint_ata = await withFindOrInitAssociatedTokenAccount(
      connection,
      splMint,
      wallet.publicKey,
      wallet.publicKey,
      playerAccount,
      true,
      wallet
    );
    // console.log(player_mint_ata);
    // console.log(2);
    let spl_treasury_account = await withFindOrInitAssociatedTokenAccount(
      connection,
      splMint,
      collectionsAccountAddress,
      wallet.publicKey,
      playerAccount,
      true,
      wallet
    );
    // console.log(spl_treasury_account);
    if (isUserAccountExist) {
      // console.log("FOUND OLD ACCOUNT");
      const txHash = await program.methods
        .openBox(code)
        .accounts({
          globalAccount: globalAccount,
          collectionsAccount: collectionsAccountAddress,
          feeAccount: feeAccountAddress,
          playerAccount: playerAccount,
          splMint: splMint,
          playerMintAta: player_mint_ata,
          splCollectionsAccount: spl_treasury_account,
        })
        .rpc({ commitment: "confirmed" });
      // console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);
      window.scrollTo(0, 0);
      tx = txHash;
      // Confirm transaction
      // let tx = await pg.connection.confirmTransaction(txHash);
    } else {
      // console.log("INITIALIZING NEW ACCOUNT");
      const txHash = await program.methods
        .openBoxInit(code)
        .accounts({
          globalAccount: globalAccount,
          collectionsAccount: collectionsAccountAddress,
          feeAccount: feeAccountAddress,
          playerAccount: playerAccount,
          splMint: splMint,
          playerMintAta: player_mint_ata,
          splCollectionsAccount: spl_treasury_account,
        })
        // .signers([playerAccount])
        .rpc({ commitment: "confirmed" });
      // console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);
      tx = txHash;
    }
    // const latestBlockHash = await connection.getLatestBlockhash();
    // let confirmation = await connection.confirmTransaction({
    //   blockhash: latestBlockHash.blockhash,
    //   lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    //   signature: tx,
    // });
    // console.log(confirmation)
    return tx;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

export const completeSpin = async (wallet, tx) => {
  try {
    // console.log(wallet);
    let resp = await axios.post(
      `${process.env.REACT_APP_DEGENDROP_SERVER_URL}/spin/v2`,
      {
        player_address: wallet,
        tx: tx,
      }
    );
    // console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log("err", error);
    throw error;
  }
};
