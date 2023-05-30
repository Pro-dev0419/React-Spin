import { configureStore } from "@reduxjs/toolkit";
import cardItemSlice from "./features/cardItem/cardItemSlice";
import walletSlice from "./features/wallet/walletSlice";
import boxSlice from "./features/box/boxSlice";
import wheelSlice from "./features/wheel/wheelSlice";
import filterSlice from "./features/filter/filterSlice";
import dataSlice from "./features/data/dataSlice";
const store = configureStore({
  reducer: {
    item: cardItemSlice,
    box: boxSlice,
    wallet: walletSlice,
    wheel: wheelSlice,
    filters: filterSlice,
    data: dataSlice
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
