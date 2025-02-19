import { useDispatch } from 'react-redux'
import { setSelectedPokemon as setPokemonRedux } from '../redux/slices/counterSlice'

export const useSelectedPokemon = () => {
  const dispatch = useDispatch()

  const setSelectedPokemon = async (pokemonName: string) => {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      const selectedPokemon = await data.json()

      dispatch(setPokemonRedux(selectedPokemon))
    } catch (error) {
      console.log(error)
    }
  }

  return {
    setSelectedPokemon
  }
}
