import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
    wallet: null,
    solBalance: 0,
    tokenBalance: {
        token: '',
        balance: 0,
    }
}

export const walletSlice = createSlice({
  name: 'wallet',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setWallet: (state, action) => {
        state.wallet = action.payload;
    }
  },
})

export const { setWallet } = walletSlice.actions


export default walletSlice.reducer