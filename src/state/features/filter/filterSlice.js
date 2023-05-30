import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  select: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterSearch: (state, action) => {
      state.searchText = action.payload;
    },
    filterSelect: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const { filterSearch, filterSelect } = filterSlice.actions;
export default filterSlice.reducer;
