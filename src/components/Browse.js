import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useOnTheAirSeries from '../hooks/useTrendingMovies';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useOnTheAirSeries();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondryContainer />
      {/* 
      *Main container
        -Video Background
        -vodeo Title

      *Secondry Container
       -movies list*n
       -cards*n

      
      
      
      */}
    </div>
  )
}

export default Browse