import React from "react";
import { render } from "react-dom";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Movies</h1>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
      <MovieList />
    </BrowserRouter>
  );
};

render(<App />, document.querySelector("#app"));
