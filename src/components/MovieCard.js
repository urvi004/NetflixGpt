import React from 'react'
import { Img_URL } from '../utils/constants'

const MovieCard = ({movie,poster}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='movie now' src={Img_URL+poster}/>
    </div>
  )
}

export default MovieCard