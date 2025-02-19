import { createSlice } from '@reduxjs/toolkit'
import { PokemonDetails } from '../../interfaces'

interface PokemonsState {
  selectedPokemon: PokemonDetails | null
}

const initialState: PokemonsState = {
  selectedPokemon: null
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSelectedPokemon: (state, newValue) => {
      state.selectedPokemon = newValue.payload
    }
  }
})

export const { setSelectedPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer
