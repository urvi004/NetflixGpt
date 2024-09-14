import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from'react-redux';
import {addOnTheAirSeries} from '../utils/moviesSlice';

const useOnTheAirSeries = () =>{
      // fetch data from tmdb API and update the store
  const dispatch = useDispatch();
  
  const getOnTheAirSeries= async () => {
   const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air', API_OPTIONS);
   const json = await data.json();
   console.log(json.results)
   dispatch(addOnTheAirSeries(json.results))
  }
   // api is rendered twice due to react strict mode it happens only in dev mode
  useEffect(()=>{
   getOnTheAirSeries();
     
  },[])
}

export default useOnTheAirSeries;