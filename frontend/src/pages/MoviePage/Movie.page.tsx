import React from "react";
import Model from "../../components/Model/Model.component";
import { dummyShows } from "../../assets/shows";
import "./Movie.scss";

const MoviePage = () => {
  return (
    <div className={"movie-page"}>
      <Model movie={dummyShows[0]} />
    </div>
  );
};

export default MoviePage;
