"use client";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import PopularMovie from "./PopularMovie";
import { popularMoviesContext } from "./PopularContext";
import MovieInterface from "./Movie.model";
function Popular() {
  const { popularMovies, setPopularMovies } = useContext(popularMoviesContext);
  useEffect(() => {
    const loadMovies = async () => {
      const popularResponse = await axios.get(
        "http://localhost:3000/api/tmdb/movies/popular/"
      );
      const popularMovies = popularResponse.data.data.map(
        (movie: MovieInterface) => {
          return <PopularMovie key={crypto.randomUUID()} movie={movie} />;
        }
      );
      return popularMovies;
    };
    loadMovies()
      .then((res) => {
        setPopularMovies(res);
      })
      .catch((err) => {
        setPopularMovies(<div>Something went wrong</div>);
      });
  }, []);
  return (
    <div className="carousel gap-2 w-full overflow-auto">{popularMovies}</div>
  );
}

export default Popular;
5;