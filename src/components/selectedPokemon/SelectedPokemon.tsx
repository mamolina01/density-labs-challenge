import { useSelector } from 'react-redux'

import pokeapi from '/pokeapi.png'
import { PokemonDetails } from '../../interfaces'
import { RootState } from '../../redux/store'

export const SelectedPokemon = () => {
  const selectedPokemon: PokemonDetails | null = useSelector((state: RootState) => state.state.selectedPokemon)

  if (selectedPokemon === null) return <div>Loading...</div>

  return (
    <div className="flex items-center gap-1 md:gap-2 flex-col justify-evenly border-b md:border-b-0 md:border-r border-neutral-300 h-full px-10">
      <img src={pokeapi} alt="pokeapi" className="w-[200px]" />

      <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} className="w-[150px]" />
    </div>
  )
}
