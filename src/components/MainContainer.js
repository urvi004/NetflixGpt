import React from 'react'
import { useSelector } from'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  const movie = useSelector((store)=>store.movies?.nowPlayingMovies)
  if(!movie) return
  const mainMovie = movie[2]
  console.log(mainMovie)

  const {original_title, overview, id} = mainMovie
//   console.log(original_title)

  return (
    <div>
        <VideoTitle  title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer