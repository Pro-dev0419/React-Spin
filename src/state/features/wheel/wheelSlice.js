import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  winners: {},
  selectedItem: null,
  spinDuration: 10, //s
  randomPosition: 270,
  rewards: [],
  displayRewards: [],
  spinning: false,
  rewardTxs: null,
  error: null,
};

export const wheelSlice = createSlice({
  name: "wheel",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setWinner: (state, action) => {
      state.winners = action.payload;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setSpinDuration: (state, action) => {
      state.spinDuration = action.payload;
    },
    setRewards: (state, action) => {
      state.rewards = action.payload;
    },
    setDisplayRewards: (state, action) => {
      state.displayRewards = action.payload;
    },
    setSpinning: (state, action) => {
      state.spinning = action.payload;
    },
    setRandomPosition: (state, action) => {
      state.randomPosition = action.payload;
    },
    setRewardTxs: (state, action) => {
      state.rewardTxs = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setWinner,
  setSelectedItem,
  setSpinDuration,
  setRewards,
  setSpinning,
  setRandomPosition,
  setDisplayRewards,
  setRewardTxs,
  setError,
} = wheelSlice.actions;

export default wheelSlice.reducer;
