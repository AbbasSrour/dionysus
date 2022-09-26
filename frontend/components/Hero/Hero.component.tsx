import React, { useEffect, useState } from "react";
import "./Hero.scss";
import { Button, OutlinedButton } from "../Button/Button.component";
import { Api } from "../../api/ApiConfig";
import { Show } from "../../schemas/show.schema";

const HeroHeader: React.FC = (props) => {
  const [mobile, setMobile] = useState(false);
  const [heroShow, setHeroShow] = useState<Show>();

  useEffect(() => {
    let myShow = new Show();
    let item;
    const res = myShow
      .initPopular("movie")
      .then((res) => myShow.addDefaultImage("all"))
      .then((res) => setHeroShow(myShow));

    console.log(heroShow);
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
        backgroundImage: `url(${
          mobile ? heroShow?.poster : heroShow?.backdrop
        })`,
      }}
    >
      <div className="hero-section__container">
        <div className="hero-section__container__info">
          <div className="title">
            {heroShow?.logo ? (
              <img src={`${heroShow?.logo}`} />
            ) : (
              <h2>{heroShow?.name}</h2>
            )}
          </div>
          <div className="overview">{heroShow?.summary}</div>
          <div className="btns">
            <Button circular={true} clean={false}>
              Play
            </Button>
            <OutlinedButton>Trailer</OutlinedButton>
          </div>
        </div>
        <div className="hero-section__container__poster">
          <img src={heroShow?.poster} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
