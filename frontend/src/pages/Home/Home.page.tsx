import React from "react";
import "./Home.scss";
import HeroHeader from "../../components/Hero/Hero.component";
import StudioBox from "../../components/StudioBox/StudioBox.component";
import DisneyImage from "../../assets/images/viewers-disney.png";
import DisneyVideo from "../../assets/videos/1564674844-disney.mp4";
import BoxSlider from "../../components/BoxSlider/BoxSlider.component";
import {
  dummyActors,
  dummyActors2,
  dummyShows,
  dummyShows as shows,
} from "../../assets/duumyData";
import Slider from "../../components/Slider/Slider.component";
import ActorCard from "../../components/ActorCard/ActorCard.component";
import {
  Button,
  OutlinedButton,
} from "../../components/Button/Button.component";
import ShowCard from "../../components/ShowCard/ShowCard.component";
import ShowBox from "../../components/ShowBox/ShowBox.component";

const disney = {
  name: "disney",
  image: DisneyImage,
  video: DisneyVideo,
};

const Home: React.FC = () => {
  let sliced = [];
  for (let i = 0; i < 4; i++) {
    sliced.push(shows[i]);
  }

  return (
    <div className="home-page page">
      <HeroHeader />
      <Slider
        data={shows}
        type={"show-box"}
        padding={"4%"}
        name={"Suggested For you"}
      />
      <div style={{ height: "70vh" }}>
        <ShowCard />
        {/*<ShowBox width={"500px"} show={dummyShows[0]} />*/}
      </div>
      {/*TODO Move This to separate component*/}
      <div className={"home-page__studios"}>
        <StudioBox studio={disney} />
        <StudioBox studio={disney} />
        <StudioBox studio={disney} />
        <StudioBox studio={disney} />
        <StudioBox studio={disney} />
      </div>
      <Slider
        data={shows}
        type={"show-box"}
        padding={"4%"}
        name={"Suggested For you"}
      />
      <Slider
        data={shows}
        type={"show-box"}
        padding={"4%"}
        name={"Suggested For you"}
      />
    </div>
  );
};

export default Home;
