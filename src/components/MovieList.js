import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies[0].poster_path,"mo")
  return (
      <div className="px-6">
        <h2 className="text-3xl py-4 text-white">{title}</h2>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies?.map((movie) => {
              return <MovieCard key={movie.id} poster={movie?.poster_path} />;
            })}
          </div>
        </div>
      </div>
    )
};

export default MovieList;
