import React from "react";
import movies from "./../../movies.js";
import { Link } from "react-router-dom";

const MovieList = () => {
  return (
    <nav className="movie-list">
      <ul>
        {movies.map((movie) => (
          <li key={movie.title}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MovieList;
