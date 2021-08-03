import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./pokemonType"

export default configureStore({
  reducer: {
      counter: counterReducer
  },
})