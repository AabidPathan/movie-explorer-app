import "./Favorites.css";
const Favorites = ({ favorites }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p className="empty-message">No favorites yet</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((movie) => (
            <div className="fav-card" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
