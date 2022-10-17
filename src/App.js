import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchedMovieName, setSearch] = useState("");
  const [searchedMovieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then((res) => {
        setPopularMovies(res.data.results);
      });
  }, []);

  useEffect(() => {
    if (searchedMovieName !== "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${searchedMovieName}&api_key=cfe422613b250f702980a3bbf9e90716`
        )
        .then((res) => {
          setMovieList(res.data.results);
        });
    } else {
      setMovieList([]);
    }
  }, [searchedMovieName]);
  return (
    <div className="App">
      <form className="search">
        <input
          type="search"
          value={searchedMovieName}
          placeholder="Search for Movie Title …"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="movieWrapper">
        {searchedMovieName === "" &&
        searchedMovieList.length === 0 &&
        popularMovies.length > 0
          ? popularMovies.map((movie) => (
              <div className="movieCard">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  className="movieImage"
                ></img>
                <figcaption>
                  <p className="movieName">{movie.original_title}</p>
                </figcaption>
              </div>
            ))
          : searchedMovieList.map((movie) => (
              <div className="movieCard">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  className="movieImage"
                ></img>
                <figcaption>
                  <p className="movieName">{movie.original_title}</p>
                </figcaption>
              </div>
            ))}
      </div>
    </div>
  );
}

export default App;
