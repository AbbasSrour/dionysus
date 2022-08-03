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
      style={{
        width: `${width}%`,
        // position: `${isHovered ? "relative" : "relative"}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={show.cover} alt="poster" />
      {/*    {isHovered && (*/}
      {/*      <>*/}
      {/*        <video src={show.trailer} autoPlay={true} loop />*/}
      {/*        <div className="itemInfo">*/}
      {/*          <div className="icons">*/}
      {/*            <PlayArrow className="icon" />*/}
      {/*            <Add className="icon" />*/}
      {/*            <ThumbUpAltOutlined className="icon" />*/}
      {/*            <ThumbDownOutlined className="icon" />*/}
      {/*          </div>*/}
      {/*          <div className="itemInfoTop">*/}
      {/*            <span>{show.length}</span>*/}
      {/*            <span className="limit">{show.pgRating}</span>*/}
      {/*            <span>{show.releaseYear}</span>*/}
      {/*          </div>*/}
      {/*          <div className="desc">{show.overview}</div>*/}
      {/*          <div className="genre">{show.genre}</div>*/}
      {/*        </div>*/}
      {/*      </>*/}
      {/*    )}*/}
    </div>
  );
};

export default ShowBox;
