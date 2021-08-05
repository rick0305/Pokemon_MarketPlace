import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
      pokemonName: "pikachu",
    },
    reducers: {
      setPokemon: (state, action) => {
        state.pokemonName = action.payload;
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const {
    setPokemon,
  } = searchSlice.actions;
  
  export default searchSlice.reducer;