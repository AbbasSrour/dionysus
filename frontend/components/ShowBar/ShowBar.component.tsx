import React, { useEffect, useState } from "react";
import "./ShowBar.scss";
import { useLocation } from "react-router-dom";
import Slider from "../Slider/Slider.component";
import { dummyActors, dummyShows } from "../../assets/duumyData";

interface Props {
  children?: React.ReactNode;
  movie?: boolean;
}

const ShowBar: React.FC<Props> = ({ children, movie }) => {
  const [isMovie, setMovie] = useState(false);
  const [item, setItem] = useState("extras");

  useEffect(() => {
    if (movie) setMovie(true);
    return;
  }, [movie]);

  return (
    <div className={"show-bar"}>
      <div className={"show-bar__menu"}>
        <ul className={"list"}>
          {isMovie ? null : (
            <li onClick={() => setItem("episodes")}>EPISODES</li>
          )}
          <li
            className={item === "extras" ? "active" : "inactive"}
            onClick={() => setItem("extras")}
          >
            EXTRAS
          </li>
          <li
            className={item === "suggested" ? "active" : "inactive"}
            onClick={() => setItem("suggested")}
          >
            SUGGESTED
          </li>
          <li
            className={item === "details" ? "active" : "inactive"}
            onClick={() => setItem("details")}
          >
            DETAILS
          </li>
        </ul>
        <div className={"border"} />
      </div>
      <div className={"show-bar__content"}>
        {item === "suggested" ? (
          <Slider data={dummyShows} type={"show-box"} padding={"0 4%"} />
        ) : null}
        {item === "extras" ? (
          <Slider
            data={dummyShows.slice(0, 1)}
            type={"show-box"}
            padding={"0 4%"}
          />
        ) : null}
        {item === "details" ? (
          <div className={"details"}>
            <div className={"summary"}>
              <div className={"title"}>Summary</div>
              <p>{dummyShows[0].overview}</p>
            </div>
            <div className={"general"}>
              <div className={"title"}>General</div>
              <ul className={"list"}>
                <div className={"item"}>
                  <span>Duration: </span>
                  <li className={"info"}></li>
                </div>
                <div className={"item"}>
                  <span>PG Rating: </span>
                  <li className={"info"}></li>
                </div>
                <div className={"item"}>
                  <span>Languages: </span>
                  <li className={"info"}></li>
                </div>
                <div className={"item"}>
                  <span>Genres: </span>
                  <li className={"info"}></li>
                </div>
              </ul>
            </div>
            <div className={"Cast"}>
              <div className={"title"}>Cast</div>
              <Slider type={"actor-card"} data={dummyActors} padding={"0"} />
            </div>
            <div className={"Crew"}>
              <div className={"title"}>Crew</div>
              <ul className={"list"}>
                <div className={"item"}>
                  <span>Writers: </span>
                  <li className={"info"}></li>
                </div>
                <div className={"item"}>
                  <span>Directors: </span>
                  <li className={"info"}></li>
                </div>
                <div className={"item"}>
                  <span>Studios: </span>
                  <li className={"info"}></li>
                </div>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ShowBar;
