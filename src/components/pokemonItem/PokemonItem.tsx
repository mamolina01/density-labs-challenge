import { Result } from '../../interfaces'
import { useSelectedPokemon } from '../../hooks'
import { useNavigate } from 'react-router-dom'
import pokeball from '/pokeball.png'

interface Props {
  pokemon: Result
}

export const PokemonItem = ({ pokemon }: Props) => {
  const { setSelectedPokemon } = useSelectedPokemon()
  const navigate = useNavigate()

  return (
    <div
      onClick={() => setSelectedPokemon(pokemon.name)}
      onDoubleClick={() => navigate(`/${pokemon.name}`)}
      className="flex items-center w-full justify-between rounded-xl cursor-pointer px-2 md:px-5 py-1 shadow hover:bg-neutral-50 active:bg-neutral-100"
    >
      <span className="text-black capitalize">{pokemon.name}</span>
      <img src={pokeball} alt="pokeball" width={20} />
    </div>
  )
}
