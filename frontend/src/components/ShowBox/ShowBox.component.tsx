import React, { useState } from "react";
import "./ShowBox.scss";
import ShowSchema from "../../schemas/movie.schema";

type Props = {
  width: number;
  show: ShowSchema;
};

const ShowBox: React.FC<Props> = ({ width, show }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="show-box"
      style={{ width: `${width}%` }}
      onMouseEnter={() => {
        setTimeout(() => setIsHovered(true), 1000);
      }}
      // onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={show.cover} alt="poster" />
      {isHovered && <video src={show.trailer} autoPlay={true} loop />}
    </div>
  );
};

export default ShowBox;
