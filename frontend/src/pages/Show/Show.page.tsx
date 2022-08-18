import React, { useState } from "react";
import Model from "../../components/Model/Model.component";
import { dummyShows } from "../../assets/duumyData";
import "./Show.scss";
import ShowBar from "../../components/ShowBar/ShowBar.component";
import Slider from "../../components/Slider/Slider.component";

const ShowPage = () => {
  return (
    <div className={"show-page page"}>
      <Model movie={dummyShows[0]} />
      <ShowBar movie={true} />
    </div>
  );
};

export default ShowPage;
