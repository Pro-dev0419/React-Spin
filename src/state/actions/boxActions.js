import axios from "axios";

export const getBoxes= async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_DEGENDROP_SERVER_URL}/box/allBoxes`);

      return response.data;
    } catch (error) {
      console.log("🚀 ~ file: cardItemApi.js:9 ~ getBoxes ~ error", error);
    }
};
  
export const getBox = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_DEGENDROP_SERVER_URL}/box/${id}`);
    return response.data.box;
}