import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
  },
  reducers: {
    setNormal: (state) => {
        state.value = 1
    },
    setfighting: (state) => {
        state.value = 2
    },
    setflying: (state) => {
        state.value = 3
    },
    setpoison: (state) => {
        state.value = 4
    },
    setground: (state) => {
        state.value = 5
    },
    setrock: (state) => {
        state.value = 6
    },
    setbug: (state) => {
        state.value = 7
    },
    setghost: (state) => {
        state.value = 8
    },
    setsteel: (state) => {
        state.value = 9
    },
    setfire: (state) => {
        state.value = 10
    },

  },
})

// Action creators are generated for each case reducer function
export const { setNormal, setfighting, setflying, setpoison, setground, setrock, setbug, setghost, setsteel, setfire } = counterSlice.actions

export default counterSlice.reducer