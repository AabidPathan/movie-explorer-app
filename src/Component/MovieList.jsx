import MovieCard from "./MovieCard/MovieCard";
import React from "react";
import "./MovieList.css";

const MovieList = ({ movies, addToFavorites }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
};

export default MovieList;
