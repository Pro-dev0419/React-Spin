import axios from "../../../utils/axios";

export const getBoxes= async () => {
  try {
    const response = await axios.get(`/box/allBoxes`);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ file: cardItemApi.js:9 ~ getBoxes ~ error", error);
  }
  

  
};

export const getBox = async (id) => {
  const response = await axios.get(`/box/${id}`);
  return response.data;
}