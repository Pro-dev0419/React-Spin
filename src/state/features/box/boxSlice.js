import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
    currentBox: null,
    soundOn: true,
    boxes: [],
    viewers: 0,
    notification: "",
    notification_title: "",
    nextPlayFree: false,
}

export const boxSlice = createSlice({
  name: 'box',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentBox: (state, action) => {
        state.currentBox = action.payload;
    },
    setBoxes: (state, action) => {
        state.boxes = action.payload;
    },
    setViewers: (state, action) => {
        state.viewers = action.payload;
    },
    setSoundOn: (state, action) => {
        state.soundOn = action.payload;
    },
    setNotification: (state, action) => {
        state.notification = action.payload;
    },
    setNotificationTitle: (state, action) => {
        state.notification_title = action.payload;
    },    
    setNextPlayFree: (state, action) => {
        state.nextPlayFree = action.payload;
    }
  },
})

export const { setCurrentBox , setBoxes, setViewers, setSoundOn, setNotification, setNextPlayFree, setNotificationTitle} = boxSlice.actions


export default boxSlice.reducer