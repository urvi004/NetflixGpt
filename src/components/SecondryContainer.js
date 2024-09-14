import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies.nowPlayingMovies, "hi")
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 relative pl-12 z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.trendingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"On Air Series"} movies={movies.onTheAirSeries} />
      </div>
      </div>
    )
  );
};

export default SecondryContainer;


//     MovieList - Popular
// MovieCard*n
// MovieList - NOW Playing
// MovieList - Trending
// MovieList - Horror