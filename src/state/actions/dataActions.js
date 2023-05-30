import axios from "axios";

export const getUserSpins = async (wallet) => {
    const response = await axios.post(`${process.env.REACT_APP_DEGENDROP_SERVER_URL}/analytics/getSpinsByUser`, {player: wallet});
    // console.log(response)
    return response.data;
}