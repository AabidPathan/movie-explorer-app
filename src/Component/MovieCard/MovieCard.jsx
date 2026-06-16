import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, addToFavorites }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />

      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>

        <button onClick={() => addToFavorites(movie)}>❤️ Favorite</button>
      </div>
    </div>
  );
};

export default MovieCard;
