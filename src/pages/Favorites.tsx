import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/useMovieContext";
import "../styles/Favorites.css";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    console.log(favorites);
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie, id) => (
            <MovieCard movie={movie} key={id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorites Movies Yet!</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
};

export default Favorites;
