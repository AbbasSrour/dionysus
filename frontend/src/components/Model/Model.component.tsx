import React from "react";
import MovieSchema from "../../schemas/movie.schema";
import "./Model.scss";
import GenreSlider from "../GenreSlider/GenreSlider.component";
import SeriesSchema from "../../schemas/SeriesSchema.schema";
import Slider from "../Slider/Slider.component";
import { dummyActors, dummyGenres, dummyShows } from "../../assets/duumyData";
import { Button, OutlinedButton } from "../Button/Button.component";

interface Props {
  movie?: MovieSchema;
  series?: SeriesSchema;
}

const Model: React.FC<Props> = ({ movie, series }) => {
  let show;
  if (movie) show = movie;
  else if (series) show = series;
  //TODO else do some shit

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
          <GenreSlider genres={dummyGenres.slice(0, 4)} />
          <p className="overview">{movie?.overview}</p>
          <div className={"btns"}>
            <Button clean={false} circular={true}>
              Play
            </Button>
            <OutlinedButton>Trailer</OutlinedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
