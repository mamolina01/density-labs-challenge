import { RootState } from '../redux/store'
import { PokemonResponse, Result } from '../interfaces'
import pokeball from '../../public/pokeball.png'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSelectedPokemon } from '../hooks'
import { setPokemons } from '../redux/slices/counterSlice'

export const Home = () => {
  const pokemons: Result[] = useSelector((state: RootState) => state.state.pokemons)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { setSelectedPokemon } = useSelectedPokemon()
  const [searchParams] = useSearchParams()

  const page = Number(searchParams.get('page')) || 1
  const getPokemons = useCallback(async () => {
    const limit = 20
    const offset = (page - 1) * limit
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      const data: PokemonResponse = await response.json()
      dispatch(setPokemons(data.results))
    } catch (error) {
      console.error('Error fetching pokemons:', error)
    }
  }, [page, dispatch])

  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  useEffect(() => {
    setSelectedPokemon('bulbasaur')
  }, [setSelectedPokemon])

  return (
    <div className="flex flex-col w-[500px] py-5">
      {pokemons.map(pokemon => (
        <div
          key={pokemon.url}
          onClick={() => setSelectedPokemon(pokemon.name)}
          onDoubleClick={() => navigate(`/${pokemon.name}`)}
          className="flex items-center w-full justify-between border-b border-neutral-300 last:border-0 cursor-pointer"
        >
          <span className="text-black">{pokemon.name}</span>
          <img src={pokeball} alt="pokeball" width={20} />
        </div>
      ))}
      <div className="flex items-center w-full justify-evenly mt-2">
        {page > 1 && (
          <Link
            to={`/?page=${page - 1}`}
            className="border border-neutral-500 outline-none rounded px-2 cursor-pointer text-neutral-600!"
          >
            Prev
          </Link>
        )}
        <Link
          to={`/?page=${page + 1}`}
          className="border border-neutral-500 outline-none rounded px-2 cursor-pointer bg-sky-600 text-white!"
        >
          Next
        </Link>
      </div>
    </div>
  )
}
