import React, { useEffect, useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

const MoviesGrid = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setmovies(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies"
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="movies-grid">
        {filterMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
