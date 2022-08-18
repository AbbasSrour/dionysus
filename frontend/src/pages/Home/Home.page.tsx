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
  dummyShows as shows,
} from "../../assets/duumyData";
import Slider from "../../components/Slider/Slider.component";
import ActorCard from "../../components/ActorCard/ActorCard.component";
import {
  Button,
  OutlinedButton,
} from "../../components/Button/Button.component";

const disney = {
  name: "disney",
  image: DisneyImage,
  video: DisneyVideo,
};

const Home: React.FC = () => {
  // useEffect(async () => {
  //   const res = await fetch(
  //     `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
  //   );
  //   const data = await res.json();
  //
  //   this.setState({ movies: data.results });
  // });

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
