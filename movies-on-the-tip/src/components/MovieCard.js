// MovieCard.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//import './MovieCard.css'; // Import the CSS file

const MovieCard = ({ movie, addToFavorites, isFavorite, removeFromFavorites }) => {
  const location = useLocation();

  const handleAddToFavorites = () => {
    addToFavorites(movie);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(movie.id);
  };

  return (
    <div className="movie-card">
      <img src={movie.posterurl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <Link to={`/movie/${movie.id}`}>More Info</Link>
      {isFavorite && location.pathname === '/favourite' ? (
        <button className="remove-from-favorites-button" onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
      ) : (
        <button className="add-to-favorites-button" onClick={handleAddToFavorites}>Add to Favorites</button>
      )}
    </div>
  );
};

export default MovieCard;
