import { createSlice } from '@reduxjs/toolkit'
import { PokemonDetails, Result } from '../../interfaces'

interface PokemonsState {
  pokemons: Result[]
  selectedPokemon: PokemonDetails | null
}

const initialState: PokemonsState = {
  pokemons: [],
  selectedPokemon: null
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, newValue) => {
      state.pokemons = newValue.payload
    },
    setSelectedPokemon: (state, newValue) => {
      state.selectedPokemon = newValue.payload
    }
  }
})

export const { setPokemons, setSelectedPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer
