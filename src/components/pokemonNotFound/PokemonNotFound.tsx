import sadPokemon from '../../../public/sadPokemon.png'

export const PokemonNotFound = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
      <img src={sadPokemon} alt="pokemonNotFound" width={150} />
      <span className="text-xl font-semibold">Pokemon not found</span>
    </div>
  )
}
