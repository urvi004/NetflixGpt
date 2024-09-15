import useTrailerVideo from "../hooks/useTrailerVideos";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
useTrailerVideo(movieId)

  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src= {`https://www.youtube.com/embed/${trailerVideo}?&autoplay=1&mute=1&loop=1&controls=0&playlist=${trailerVideo}`}
        title="Borderlands (2024) Final Trailer – Cate Blanchett, Kevin Hart, Jack Black"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
