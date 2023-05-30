import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
    data: []
}

export const dataSlice = createSlice({
  name: 'box',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setData: (state, action) => {
        state.data = action.payload;
    }
  },
})

export const { setData } = dataSlice.actions


export default dataSlice.reducer