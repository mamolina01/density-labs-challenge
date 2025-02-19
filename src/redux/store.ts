import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    state: pokemonSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
