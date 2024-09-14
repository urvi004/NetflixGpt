import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from'react-redux';
import {addPopularMovies} from '../utils/moviesSlice';

const usePopularMovies = () =>{
      // fetch data from tmdb API and update the store
  const dispatch = useDispatch();
  
  const getPopularMovies= async () => {
   const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS);
   const json = await data.json();
   console.log(json.results)
   dispatch(addPopularMovies(json.results))
  }
   // api is rendered twice due to react strict mode it happens only in dev mode
  useEffect(()=>{
     getPopularMovies();
     
  },[])
}

export default usePopularMovies;