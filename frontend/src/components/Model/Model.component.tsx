import React from "react";
import MovieSchema from "../../schemas/movie.schema";
import "./Model.scss";
import GenreSlider from "../GenreSlider/GenreSlider.component";
import SeriesSchema from "../../schemas/SeriesSchema.schema";

interface Props {
  movie?: MovieSchema;
  series?: SeriesSchema;
}

const Model: React.FC<Props> = ({ movie, series }) => {
  let show;
  if (movie) show = movie;
  else if (series) show = series;
  //TODO else do some shit

  const genres = [
    "action",
    "comedy",
    "thriller",
    "horror",
    "adventure",
    "sitcom",
    "movie",
    "series",
    "bullshit",
    "trailer",
  ];
  return (
    <div className={"model"}>
      <div
        className={"model__banner"}
        style={{ backgroundImage: `url(${show?.cover})` }}
      />
      <div className={"model__content"}>
        <div
          className={"model__content__poster"}
          style={{ backgroundImage: `url(${show?.poster})` }}
        />
        <div className="model__content__info">
          <h1 className="title">{show?.title}</h1>
          <GenreSlider genres={genres} />
          <p className="overview">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Model;
