import React, { useEffect, useState } from "react";
import SearchBar from "./Component/SearchBar";
import MovieList from "./Component/MovieList";
import Loader from "./Component/Loader";
import ErrorMessege from "./Component/ErrorMessege";
import Favorites from "./Component/Favorites";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("theme")) || false,
  );

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  const fetchMovies = async (movieName) => {
    try {
      setLoading(true);
      setError("");
      const API_KEY = "9f0581e2";
      const response = await fetch(
        `https://www.omdbapi.com/?s=${movieName}&apikey=${"9f0581e2"}`,
      );

      const data = await response.json();
      if (data.Response === "False") {
        setError(data.Error);
        setMovies([]);
      } else {
        setMovies(data.Search);
      }
    } catch {
      setError("Somthing went wrong");
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (movie) => {
    const updatedFavorites = [...favorites, movie];

    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);

    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1>Movie explorer</h1>

      <SearchBar onSearch={fetchMovies} />
      <MovieList movies={movies} addToFavorites={addToFavorites} />
      {loading && <Loader />}

      {error && <ErrorMessege message={error} />}
      <Favorites favorites={favorites} />
    </div>
  );
};

export default App;
