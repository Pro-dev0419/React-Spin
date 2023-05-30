import React from "react";
import { Link } from "react-router-dom";
const PlayerGameHistoryList = ({spin}) => {
  const {created, box, image, spin_tx, payout_tx, roll_number, prize, box_id, nft_transfer_tx} = spin;
  return (
    <tr>
      <td>
        <div className="created-table">
          <p>{new Date(created).toLocaleString()}</p>
        </div>
      </td>
      <td>
        <div className="box-table">
          <img src={image} alt="img" />
          <p>{box}</p>
        </div>
      </td>
      <td>
        <div className="prize-table">{prize}</div>
      </td>
      <td>
        <div className="tx-table">
          <a               
            target="_blank"
            rel="noreferrer"
            href={`https://solscan.io/tx/${spin_tx}`}><img src={"/solscan.png"} alt="warning" style={{ height: 20 }} /></a>
        </div>
      </td>
      <td>
        <div className="tx-table">
          <a
            target="_blank"
            rel="noreferrer"          
            href={`https://solscan.io/tx/${payout_tx}`}><img src={"/solscan.png"} alt="warning" style={{ height: 20 }} /></a>
          {nft_transfer_tx ? <a
            target="_blank"
            rel="noreferrer" 
            style={{marginLeft:10}}         
            href={`https://solscan.io/tx/${nft_transfer_tx}`}><img src={"/solscan.png"} alt="warning" style={{ height: 20 }} /></a> 
            : null}           
        </div>
      </td>
      <td>
        <div className="roll-table">{roll_number}</div>
      </td>
      <td>
        <div className="replay-table">
          <Link to={`/unboxing/boxes/${box_id}`}>
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.91536 3.52787V0.861206L2.58203 4.19454L5.91536 7.52787V4.86121C8.12203 4.86121 9.91537 6.65454 9.91537 8.86121C9.91537 11.0679 8.12203 12.8612 5.91536 12.8612C3.7087 12.8612 1.91536 11.0679 1.91536 8.86121H0.582031C0.582031 11.8079 2.9687 14.1945 5.91536 14.1945C8.86203 14.1945 11.2487 11.8079 11.2487 8.86121C11.2487 5.91454 8.86203 3.52787 5.91536 3.52787Z"
                fill="white"
              />
            </svg>
            <span>Replay</span>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default PlayerGameHistoryList;
