import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, NotFound, PokemonPage } from './pages'

import { SelectedPokemon } from './components'
import { useEffect } from 'react'
import { useSelectedPokemon } from './hooks'

function App() {
  const { setSelectedPokemon } = useSelectedPokemon()

  useEffect(() => {
    setSelectedPokemon('bulbasaur')
  }, [setSelectedPokemon])

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-10 w-full bg-white">
      <Router>
        <SelectedPokemon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":pokemonName" element={<PokemonPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
