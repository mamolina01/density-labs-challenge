import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { PokemonDetails } from '../interfaces/pokemonDetails'

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

  if (selectedPokemon === null) return <p>There isn't selected pokemon</p>

  return (
    <div className="w-full flex flex-col">
      <span>Type</span>
      <span>{selectedPokemon.types[0].type.name}</span>
      <div className="flex items-center justify-between">
        <span>Number: {selectedPokemon.id}</span>
        <span>Name: {selectedPokemon.name}</span>
        <span>Heigt: {selectedPokemon.height}</span>
        <span>Weight: {selectedPokemon.weight}</span>
      </div>
    </div>
  )
}
