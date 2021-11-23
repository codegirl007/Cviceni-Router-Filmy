import React from "react";
import movies from "./../../movies.js";
import { useParams } from "react-router-dom";
import "./Movie.css";
import { Actor } from "../Actor/Actor.js";

const Movie = () => {
  const { id } = useParams();

  const chosenMovie = movies.find((movie) => movie.id === parseInt(id));
  console.log(chosenMovie);
  // naimportuj useParams z react-router-dom
  // pomocí useParams získej id filmu předané jako parametr v adrese, která zobrazila tuto komponentu
  // podle id najdi film v poli movies (už ho máš naimportované)
  // místo komentáře dole zobraz detaily nalezeného filmu

  return (
    <div className="movie">
      <div className="movieCard">
        <p className="rating">
          <span className="bigger">{chosenMovie.rating}</span>/10
        </p>
        <img
          className="poster"
          src={`../../assets/${chosenMovie.poster}`}
          alt={`poster${chosenMovie.title}`}
        />
        <div className="wrapper">
          <h2 className="title">{chosenMovie.title}</h2>
          <div className="info">
            <span className="bold">Rok vydání: </span>
            {chosenMovie.year}
            <br />
            <span className="bold">Žánr: </span>
            {chosenMovie.genre} <br />
            <span className="bold">Režie: </span>
            {chosenMovie.director}
            <h5 className="casts">V hlavních rolích:</h5>
            <div className="actors">
              {chosenMovie.cast.map((actor) => (
                <Actor key={actor.name} name={actor.name} as={actor.as} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
