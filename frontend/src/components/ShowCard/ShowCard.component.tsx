import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.component";
import "./ShowCard.scss";

type Props = {
  index: number;
};

const item = {
  background:
    "https://nofilmschool.com/sites/default/files/styles/facebook/public/no-time-to-die-characters.jpeg?itok=XGwl7JpO",
  title: "No Time To Die",
  overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  poster: "https://pics.filmaffinity.com/no_time_to_die-525355918-large.jpg",
  trailer:
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
  link: "",
  length: "1h 40m",
  releaseYear: 2009,
  pgRating: "16+",
  genre: "Action",
};

const ShowCard: React.FC = () => {
  const [isHovered, setHovered] = useState(false);
  return (
    <Link to={item.link}>
      <div
        className="show-card"
        style={{ backgroundImage: `url(${item.poster})` }}
      >
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
    </Link>
  );
};

export default ShowCard;
