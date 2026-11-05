import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'


function App() {

  // const favoriteMovies = ["Her", "Interstellar", "The Social Network"]

  const [favoriteMovies, setFavoriteMovies] = useState(["Her", "Interstellar", "The Social Network"])
  
  const [watchedCount, setWatchCount] = useState(0);

  const [showMovies, setShowMovies] = useState(true)

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
      <h2> Movies Watched: {watchedCount}</h2>
      <button onClick={(() => setWatchCount(watchedCount + 1))}> Add Watched Count </button>
      <button onClick={() => setWatchCount(0)}> Reset </button>
      <button onClick={() =>
      {if(watchedCount > 0) {
setWatchCount(watchedCount - 1)}}}> Remove </button>

 <button onClick={() => setShowMovies(!showMovies)}> Show /Hide Movies</button>

 <button onClick={()=> setFavoriteMovies([...favoriteMovies, 'Inception' ])}> Add Movie </button>
       
        


      {
      
     
  showMovies && 
      movies.map(function(movie) {
        return <MovieCard key={movie.name} name={movie.name} releaseYear={movie.releaseYear} director={movie.director} />
      })
    }

  <ul> 

    {favoriteMovies.map(function(movie) {
      return <li>{movie} </li>
    })}


  </ul>
    </div>
  )

}

export default App
