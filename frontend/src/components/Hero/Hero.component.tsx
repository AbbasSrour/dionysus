import React from "react";
import "./Hero.scss";
import Button, { OutlineButton } from "../Button/Button.component";

const HeroHeader: React.FC = (props) => {
  const item = {
    background:
      "https://nofilmschool.com/sites/default/files/styles/facebook/public/no-time-to-die-characters.jpeg?itok=XGwl7JpO",
    title: "No Time To Die",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    poster: "https://pics.filmaffinity.com/no_time_to_die-525355918-large.jpg",
  };

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${item.background})` }}
    >
      <div className="hero-section__container">
        <div className="hero-section__container__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => console.log("hello")}>Watch now</Button>
            <OutlineButton onClick={() => console.log("world")}>
              Watch trailer
            </OutlineButton>
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
