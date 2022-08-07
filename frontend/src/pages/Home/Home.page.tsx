import React from "react";
import "./Home.scss";
import HeroHeader from "../../components/Hero/Hero.component";
import StudioBox from "../../components/StudioBox/StudioBox.component";
import DisneyImage from "../../assets/images/viewers-disney.png";
import DisneyVideo from "../../assets/videos/1564674844-disney.mp4";
import BoxSlider from "../../components/BoxSlider/BoxSlider.component";
import { dummyShows as shows } from "../../assets/shows";
import Slider from "../../components/Slider/Slider.component";

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

  const genres = [
    "action",
    "comedy",
    "thriller",
    "horror",
    "adventure",
    // "sitcom",
    // "helloworld",
    // "movie",
    // "series",
    // "bullshit",
    // "trailer",
  ];

  return (
    <div className="HomePage">
      <HeroHeader></HeroHeader>
      <div>
        <StudioBox studio={disney} />
      </div>
      <Slider shows={shows} />
      <BoxSlider shows={shows} />
      <BoxSlider shows={shows} />
      <BoxSlider shows={shows} />
      <BoxSlider shows={shows} />
      <BoxSlider shows={shows} />
      <BoxSlider shows={shows} />
      <BoxSlider shows={shows} />
    </div>
  );
};

export default Home;
