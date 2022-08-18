import React, { useEffect, useState } from "react";
import "./Hero.scss";
import { Button, OutlinedButton } from "../Button/Button.component";
import { Api } from "../../api/ApiConfig";
import { ShowSchema } from "../../schemas/show.schema";

const HeroHeader: React.FC = (props) => {
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState<ShowSchema>();

  const item = {
    background:
      "https://nofilmschool.com/sites/default/files/styles/facebook/public/no-time-to-die-characters.jpeg?itok=XGwl7JpO",
    poster: "https://pics.filmaffinity.com/no_time_to_die-525355918-large.jpg",
  };

  useEffect(() => {
    const api = new Api();
    const res = api.getShow("shows/popular/movie", {}).then((res) => {
      setShow(res);
    });
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 1000) setMobile(true);
      else setMobile(false);
    };
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [window.innerWidth]);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${mobile ? item.poster : item.background})`,
      }}
    >
      <div className="hero-section__container">
        <div className="hero-section__container__info">
          <h2 className="title">{show?.name}</h2>
          <div className="overview">{show?.summary}</div>
          <div className="btns">
            <Button circular={true} clean={false}>
              Play
            </Button>
            <OutlinedButton>Trailer</OutlinedButton>
          </div>
        </div>
        <div className="hero-section__container__poster">
          <img src={item.poster} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
