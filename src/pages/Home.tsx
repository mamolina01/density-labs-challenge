import { PokemonResponse } from '../interfaces'

import { useSearchParams, Link } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { PokemonItem } from '../components/pokemonItem/PokemonItem'

export const Home = () => {
  const [searchParams] = useSearchParams()
  const [pokemons, setPokemons] = useState<PokemonResponse | null>(null)

  const page = Number(searchParams.get('page')) || 1
  const getPokemons = useCallback(async () => {
    const limit = 14
    const offset = (page - 1) * limit
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      const data: PokemonResponse = await response.json()
      setPokemons(data)
    } catch (error) {
      console.error('Error fetching pokemons:', error)
    }
  }, [page])

  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  return (
    <div className="flex flex-col py-5 px-10 gap-2">
      {pokemons && pokemons.results.map(pokemon => <PokemonItem pokemon={pokemon} key={pokemon.url} />)}
      <div className="flex items-center w-full justify-evenly mt-2">
        {pokemons?.previous && (
          <Link
            to={`/?page=${page - 1}`}
            className="border border-neutral-500 outline-none rounded px-2 cursor-pointer text-neutral-600!"
          >
            Prev
          </Link>
        )}
        {pokemons?.next && (
          <Link
            to={`/?page=${page + 1}`}
            className="border border-neutral-500 outline-none rounded px-2 cursor-pointer bg-sky-600 text-white!"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  )
}
