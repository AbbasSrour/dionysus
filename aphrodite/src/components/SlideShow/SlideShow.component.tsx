import React from "react";
import "./SlideShow.scss";
import MovieSchema from "../../schemas/movie.schema";
import { motion } from "framer-motion";
import { dummyShows } from "../../assets/duumyData";

interface Props {
  shows: Array<MovieSchema>;
}

const SlideShow: React.FC<Props> = ({ shows }) => {
  const createSlider = () => {
    const slides = new Array<JSX.Element>();
    let aux = 0;
    let del = 0;
    for (let i = 0; i < 10; i++) {
      const Image = dummyShows[i].cover;
      slides.push(
        <motion.div
          style={{
            width: "16vw",
            height: "14vh",
            left: `${aux}vw`,
            // left: 0,
            position: "absolute",
            top: "1vh",
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            border: "0.5rem solid white",
          }}
          animate={{ x: [`${aux}vw`, `100vw`, `0vw`, `${aux}vw`, `-${aux}vw`] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            // delay: del,
            ease: "linear",
          }}
        />
      );
      aux += 17;
      del += 2;
    }
    return slides;
  };
  return <div className={"slide-show"}>{createSlider()}</div>;
};

export default SlideShow;
