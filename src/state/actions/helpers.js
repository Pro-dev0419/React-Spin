import * as anchor from "@project-serum/anchor";
import * as splToken from "@solana/spl-token";

export const withFindOrInitAssociatedTokenAccount = async (
    connection,
    mint,
    owner,
    payer,
    signer,
    allowOwnerOffCurve,
    wallet
  ) => {
    try {
      // console.log(mint.toString())
      // console.log(owner.toString())
      // console.log(owner.toString())
      // const associatedAddress = await splToken.getOrCreateAssociatedTokenAccount(
      //   connection,
      //   signer,
      //   mint,
      //   owner,
      //   allowOwnerOffCurve,
      // );
      // console.log(associatedAddress)
      // return associatedAddress.address;
      let transaction = new anchor.web3.Transaction();
      const associatedAddress = await splToken.getAssociatedTokenAddress(
        mint,
        owner,
        true,
        splToken.TOKEN_PROGRAM_ID,
        splToken.ASSOCIATED_TOKEN_PROGRAM_ID        
      )
      const account = await connection.getAccountInfo(associatedAddress);
      // console.log(associatedAddress)
      if (!account) {
        console.log("account not found for", owner.toBase58())
        transaction.add(
          splToken.createAssociatedTokenAccountInstruction(
            payer,
            associatedAddress,
            owner,
            mint,
            splToken.TOKEN_PROGRAM_ID,
            splToken.ASSOCIATED_TOKEN_PROGRAM_ID
          )
        );
        console.log("SIGNER :: ", signer.toString())
        const wallTx = await wallet.sendTransaction(transaction, connection)
        // const txHash = await connection.sendTransaction(transaction, [signer])
        // console.log("Create ATA txHash :: ", txHash);
      }
      return associatedAddress;      
    } catch (error) {
      console.log(error);
    }
}

