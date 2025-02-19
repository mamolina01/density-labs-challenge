import { useSelector } from 'react-redux'

import pokeapi from '../../../public/pokeapi.png'
import { PokemonDetails } from '../../interfaces'
import { RootState } from '../../redux/store'

export const SelectedPokemon = () => {
  const selectedPokemon: PokemonDetails | null = useSelector((state: RootState) => state.state.selectedPokemon)

  if (selectedPokemon === null) return <div>Loading...</div>

  return (
    <div className="flex items-center gap-2 flex-col border-r border-neutral-300 h-full px-10">
      <img src={pokeapi} alt="pokeapi" width={200} />

      <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} width={150} />
    </div>
  )
}
