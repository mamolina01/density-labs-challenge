import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { PokemonDetails } from '../interfaces/pokemonDetails'
import { Link } from 'react-router-dom'
import { PokemonNotFound } from '../components'

export const PokemonPage = () => {
  const pokemonName = useParams().pokemonName
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null)

  const getPokemonDetails = async () => {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      const pokemon: PokemonDetails = await data.json()

      setSelectedPokemon(pokemon)
    } catch (error) {
      console.log(error)
      setSelectedPokemon(null)
    }
  }

  useEffect(() => {
    getPokemonDetails()
  }, [pokemonName])

  if (selectedPokemon === null) return <PokemonNotFound />

  return (
    <div className="w-full flex flex-col gap-2 px-10">
      <Link to="/" className="self-start text-black!">
        Go back
      </Link>
      <span>Type</span>
      <span className="capitalize">{selectedPokemon.types[0].type.name}</span>
      <div className="flex items-center justify-between">
        <span>Number: {selectedPokemon.id}</span>
        <span>Name: {selectedPokemon.name}</span>
        <span>Height: {selectedPokemon.height}</span>
        <span>Weight: {selectedPokemon.weight}</span>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex flex-col col-span-2">
          <span className="text-start">Stats</span>
          {selectedPokemon.stats.map(stat => (
            <div key={stat.stat.name} className="flex items-center justify-between">
              <span className="capitalize">{stat.stat.name}</span>
              <div className="flex items-center">
                <span>{stat.base_stat}</span>
                <div className="w-[150px] h-4 rounded relative overflow-hidden bg-neutral-300">
                  <div className="bg-red-600 h-full" style={{ width: `${stat.base_stat}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <span>Abilities</span>
          {selectedPokemon.abilities.map(item => (
            <span key={item.ability.name}>{item.ability.name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
