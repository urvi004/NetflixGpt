import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
const Browse = () => {
  useNowPlayingMovies();
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