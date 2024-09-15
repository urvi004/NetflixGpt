import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import bgImage from "../Assets/background.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={bgImage} alt="" />
      </div>

      <GptSearchBar  />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
