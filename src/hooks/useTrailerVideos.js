import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  //    fetch trailer video && updating the store with trailer video
//   here we are using store but we can also use useState
  // const [movieTrailer, setMovieTrailer] = useState(null)

  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0].key : json.results[0];
    dispatch(addTrailerVideo(trailer));

    // setMovieTrailer(trailer);
    console.log(trailer, filterData,"trailer Info");
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideo;
