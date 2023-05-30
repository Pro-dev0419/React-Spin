import React, {useEffect} from "react";
import { Container } from "reactstrap";
import FilterInput from "../../components/common/FilterInput/FilterInput";
import PlayerGameHistoryList from "./PlayerGameHistoryList";
import { getUserSpins } from "../../state/actions/dataActions";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../state/features/data/dataSlice";
import { useWallet } from "@solana/wallet-adapter-react";
import "./PlayerGameHistory.scss";

const PlayerGameHistory = () => {
  const dispatch = useDispatch();
  const wallet = useWallet();
  const data = useSelector((state) => state.data.data);
  const getSpinsForUser = async () => {
    const spins = await getUserSpins(wallet.publicKey.toBase58());
    dispatch(setData(spins.result));
  }

  useEffect(() => {
    if (wallet.connected) {
      // console.log(
      getSpinsForUser();
    }
    // console.log(wallet);
  },[wallet])

  return (
    <Container>
      <h2>Game history</h2>
      <div className="mb-4 mt-5">
        <FilterInput />
      </div>
      <div className="table-responsive custom-table">
        <table className="table  w-full">
          {/* table-hover */}
          <thead>
            <tr>
              <th className="table-th">Created</th>
              <th className="table-th">Box</th>
              <th className="table-th">Prize</th>
              <th className="table-th">Spin Tx</th>
              <th className="table-th">Payout Tx</th>
              <th className="table-th">Random Roll</th>
              <th className="table-th">Replay</th>
            </tr>
          </thead>

          <tbody className="">
            {data.length && data.map((spin, index) => {
              return <PlayerGameHistoryList key={index} spin={spin} />
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default PlayerGameHistory;
