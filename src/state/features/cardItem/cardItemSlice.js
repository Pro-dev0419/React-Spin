import { getBox, getBoxes } from "./cardItemApi";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBoxes = createAsyncThunk("item/fetchBoxes", async () => {
  const boxes = await getBoxes();
  console.log("🚀 ~ file: cardItemSlice.js:47 ~ fetchBoxes ~ boxes", boxes);
  return boxes;
});

const cardItemSlice = createSlice({
  name: "item",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoxes.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBoxes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.item = action.payload;
      })
      .addCase(fetchBoxes.rejected, (state, action) => {
        state.isLoading = false;
        state.item = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default cardItemSlice.reducer;
