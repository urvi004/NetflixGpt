import React from 'react'
import { useSelector } from'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  const movie = useSelector((store)=>store.movies?.popularMovies)
  if(!movie) return
  const random = Math.floor(Math.random() * movie.length-1) 
  const mainMovie = movie[random]
  // console.log(mainMovie, random , mainMovie.original_title,"num")

  const {original_title, overview, id} = mainMovie


  return (
    <div>
        <VideoTitle  title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer