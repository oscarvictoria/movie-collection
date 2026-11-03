import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movies = [  {
    name: "Her",
    releaseYear: 2013,
    director: "Spike Jonze"
  },

  {
    name: "The Social Network",
    releaseYear: 2010,
    director: "David Fincher"
  }, 

  {
    name: "Once Upon a Time... in Hollywood",
    releaseYear: 2019,
    director: "Quentin Tarantino"
  }


]
  return (
    <div> 
      {

      movies.map(function(movie) {
        return <MovieCard key={movie.name} name={movie.name} releaseYear={movie.releaseYear} director={movie.director} />
      })
    }
      {/* <h1>Movie Collection </h1>
      <p> A collection of my favorite movies</p>
      <MovieCard name='Her' releaseYear={2013} director='Spike Jonze' />
       <MovieCard name='The Social Network' releaseYear={2010} director='David Fincher' />
        <MovieCard name='Once Upon a Time... in Hollywood
' releaseYear={2019} director='Quentin Tarantino' /> */}
    </div>
  )

}

export default App
