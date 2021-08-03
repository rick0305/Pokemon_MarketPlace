import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    setNormal: (state) => {
      state.value = 1;
    },
    setfighting: (state) => {
      state.value = 2;
    },
    setflying: (state) => {
      state.value = 3;
    },
    setpoison: (state) => {
      state.value = 4;
    },
    setground: (state) => {
      state.value = 5;
    },
    setrock: (state) => {
      state.value = 6;
    },
    setbug: (state) => {
      state.value = 7;
    },
    setghost: (state) => {
      state.value = 8;
    },
    setsteel: (state) => {
      state.value = 9;
    },
    setfire: (state) => {
      state.value = 10;
    },
    setwater: (state) => {
      state.value = 11;
    },
    setgrass: (state) => {
      state.value = 12;
    },
    setelectric: (state) => {
      state.value = 13;
    },
    setpsychic: (state) => {
      state.value = 14;
    },
    setice: (state) => {
      state.value = 15;
    },
    setdragon: (state) => {
      state.value = 16;
    },
    setdark: (state) => {
      state.value = 17;
    },
    setfairy: (state) => {
      state.value = 18;
    },
    setunknown: (state) => {
      state.value = 19;
    },
    setshadow: (state) => {
      state.value = 20;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setNormal,
  setfighting,
  setflying,
  setpoison,
  setground,
  setrock,
  setbug,
  setghost,
  setsteel,
  setfire,
  setwater,
  setgrass,
  setelectric,
  setpsychic,
  setice,
  setdragon,
  setdark,
  setfairy,
  setunknown,
  setshadow,
} = counterSlice.actions;

export default counterSlice.reducer;
