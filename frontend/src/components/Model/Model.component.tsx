import React from "react";
import "./Model.scss";
import GenreSlider from "../GenreSlider/GenreSlider.component";
import { dummyActors, dummyGenres } from "../../assets/duumyData";
import { Button, OutlinedButton } from "../Button/Button.component";
import { Show } from "../../schemas/show.schema";

interface Props {
  show: Show;
}

const Model: React.FC<Props> = ({ show }) => {
  const type = "movie";
  //TODO else do some shit

  return (
    <div className={"model"}>
      <div
        className={"model__banner"}
        style={{ backgroundImage: `url(${show?.backdrop})` }}
      />
      <div className={"model__content"}>
        <div
          className={"model__content__poster"}
          style={{ backgroundImage: `url(${show?.poster})` }}
        />
        <div className="model__content__info">
          <div className="title">
            {show?.logo ? <img src={`${show?.logo}`} /> : <h2>{show?.name}</h2>}
          </div>
          <GenreSlider genres={dummyGenres.slice(0, 4)} />
          <p className="overview">{show?.summary}</p>
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
