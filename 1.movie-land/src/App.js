import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import "./App.css";
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com/?apikey=f8bf91b4";

function App() {

  const [movies, setMovies] = useState();

  const [searchTerm, setSearchTerm] = useState("batman");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          value={searchTerm}
          placeholder='Search for movies'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          onClick={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {
        movies?.length > 0 ?
          (
            <div className='container'>
              {
                movies.map((item) => (
                  <MovieCard key={item.imdbID} movie={item} />
                ))
              }
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found...</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
