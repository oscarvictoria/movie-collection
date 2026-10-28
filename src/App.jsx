import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <div> 
      <h1>Movie Collection </h1>
      <p> A collection of my favorite movies</p>
      <MovieCard />
    </div>
  )

}

export default App
