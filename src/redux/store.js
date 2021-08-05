import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./pokemonType"
import searchReducer from "./pokemonSearch"

export default configureStore({
  reducer: {
      counter: counterReducer,
      search: searchReducer
  },
})