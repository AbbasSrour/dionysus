import "./Slider.scss";
import React, { useEffect, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ShowBox from "../ShowBox/ShowBox.component";
import MovieSchema from "../../schemas/movie.schema";
import { ActorSchema } from "../../schemas/actor.schema";
import ActorCard from "../ActorCard/ActorCard.component";

interface Props {
  data: Array<MovieSchema | ActorSchema>;
  type: string;
  padding: string;
  name?: string;
}

export const Slider: React.FC<Props> = ({ data, type, padding, name }) => {
  let totalItems = data.length;

  const [sliderHasMoved, setSliderHasMoved] = useState(false); // boolean to display prev arrow
  const [sliderMoving, setSliderMoving] = useState(false); // boolean for slider animation
  const [movePercentage, setMovePercentage] = useState(0); // move percentage to shift slider during animation
  const [sliderMoveDirection, setSliderMoveDirection] = useState<string | null>(
    null
  ); // direction of movement of animation
  const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0); // lowest visible index of slider content
  const [itemsInRow, setItemsInRow] = useState(totalItems); // number of items in the slider content changed dynamically on window size
  const [slider, setSlider] = useState(true);

  // handle window resize and sets items in row
  const handleWindowResize = () => {
    if (type === "show-box") {
      if (window.innerWidth > 1440 && totalItems > 6) {
        setItemsInRow(6);
      } else if (window.innerWidth >= 1000 && totalItems > 5) {
        setItemsInRow(5);
      } else if (window.innerWidth < 1000 && totalItems > 4) {
        setItemsInRow(4);
      } else {
        setSlider(false);
      }
    } else if (type === "actor-card") {
      if (window.innerWidth > 1440 && totalItems > 10) {
        setItemsInRow(10);
      } else if (window.innerWidth >= 1000 && totalItems > 9) {
        setItemsInRow(9);
      } else if (window.innerWidth < 1000 && totalItems > 7) {
        setItemsInRow(7);
      } else {
        setSlider(false);
      }
    }
  };
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const renderSliderContent = () => {
    // gets the indexes to be displayed
    const left = [];
    const mid = [];
    const right = [];

    for (let i = 0; i < itemsInRow; i++) {
      // left
      if (sliderHasMoved) {
        if (lowestVisibleIndex + i - itemsInRow < 0) {
          left.push(totalItems - itemsInRow + lowestVisibleIndex + i);
        } else {
          left.push(i + lowestVisibleIndex - itemsInRow); // issue here
        }
      }

      // mid
      if (i + lowestVisibleIndex >= totalItems) {
        mid.push(i + lowestVisibleIndex - totalItems);
      } else {
        mid.push(i + lowestVisibleIndex);
      }

      // right
      if (slider) {
        if (i + lowestVisibleIndex + itemsInRow >= totalItems) {
          right.push(i + lowestVisibleIndex + itemsInRow - totalItems);
        } else {
          right.push(i + lowestVisibleIndex + itemsInRow);
        }
      }
    }

    // combine indexes
    const indexToDisplay = [...left, ...mid, ...right];

    // add on leading and trailing indexes for peek image when sliding
    if (sliderHasMoved && slider) {
      const trailingIndex =
        indexToDisplay[indexToDisplay.length - 1] === totalItems - 1
          ? 0
          : indexToDisplay[indexToDisplay.length - 1] + 1;
      indexToDisplay.push(trailingIndex);
    }

    if (slider) {
      const leadingIndex =
        indexToDisplay[0] === 0 ? totalItems - 1 : indexToDisplay[0] - 1;
      indexToDisplay.unshift(leadingIndex);
    }

    const sliderContents = [];
    for (let index of indexToDisplay) {
      if (type === "show-box") {
        sliderContents.push(
          <ShowBox
            // TODO FIX THIS
            // @ts-ignore
            show={data[index]}
            key={`${index + Math.random() * 1000}`}
            width={slider ? `${100 / itemsInRow}%` : `18%`}
          />
        );
      } else if (type === "actor-card")
        sliderContents.push(
          <ActorCard
            // TODO FIX THIS
            // @ts-ignore
            actor={data[index]}
            key={`${index + Math.random() * 1000}`}
            width={slider ? `${100 / itemsInRow - 0.5}%` : `15%`}
            margin={"0.5%"}
          />
        );
    }

    // adds empty divs to take up appropriate spacing when slider at initial position
    if (!sliderHasMoved && slider) {
      for (let i = 0; i < itemsInRow; i++) {
        if (type === "show-box")
          sliderContents.unshift(
            <div
              className="show-box"
              style={{ width: `${100 / itemsInRow}%` }}
              key={i}
            />
          );
        else if (type === "actor-card")
          sliderContents.unshift(
            <div
              className="actor-card"
              style={{ width: `${100 / itemsInRow}%` }}
              key={i}
            />
          );
      }
    }
    return sliderContents;
  };

  const handlePrev = () => {
    // get the new lowest visible index
    let newIndex: number;
    if (lowestVisibleIndex < itemsInRow && lowestVisibleIndex !== 0) {
      newIndex = 0;
    } else if (lowestVisibleIndex - itemsInRow < 0) {
      newIndex = totalItems - itemsInRow;
    } else {
      newIndex = lowestVisibleIndex - itemsInRow;
    }

    // get the move percentage
    let newMovePercentage;
    if (lowestVisibleIndex === 0) {
      newMovePercentage = 0;
    } else if (lowestVisibleIndex - newIndex < itemsInRow) {
      newMovePercentage =
        ((itemsInRow - (lowestVisibleIndex - newIndex)) / itemsInRow) * 100;
    } else {
      newMovePercentage = 0;
    }

    setSliderMoving(true);
    setSliderMoveDirection("left");
    setMovePercentage(newMovePercentage);

    setTimeout(() => {
      setLowestVisibleIndex(newIndex);
      setSliderMoving(false);
    }, 750);
  };

  const handleNext = () => {
    // get the new lowest visible index
    let newIndex: number;
    if (lowestVisibleIndex === totalItems - itemsInRow) {
      newIndex = 0;
    } else if (lowestVisibleIndex + itemsInRow > totalItems - itemsInRow) {
      newIndex = totalItems - itemsInRow;
    } else {
      newIndex = lowestVisibleIndex + itemsInRow;
    }

    // get the move percentage
    let newMovePercentage;
    if (newIndex !== 0) {
      newMovePercentage = ((newIndex - lowestVisibleIndex) / itemsInRow) * 100;
    } else {
      newMovePercentage = 100;
    }

    setSliderMoving(true);
    setSliderMoveDirection("right");
    setMovePercentage(newMovePercentage);

    setTimeout(() => {
      setLowestVisibleIndex(newIndex);
      setSliderMoving(false);
    }, 750);

    // slider has moved and show the previous arrow
    if (!sliderHasMoved) {
      setSliderHasMoved(true);
    }
  };

  let style = {};
  if (!slider) {
    style = {
      whiteSpace: "normal",
      display: "flex",
      width: "fit-content",
    };
  } else if (sliderMoving) {
    let translate = "";
    if (sliderMoveDirection === "right") {
      translate = `translateX(-${100 + movePercentage + 100 / itemsInRow}%)`;
    } else if (sliderMoveDirection === "left") {
      translate = `translateX(-${movePercentage + 100 / itemsInRow}%)`;
    }

    style = {
      transform: translate,
      transitionDuration: "750ms",
    };
  } else {
    style = {
      transform: `translateX(-${
        100 + (sliderHasMoved ? 100 / itemsInRow : 0)
      }%)`,
    };
  }

  return (
    <div className="slider">
      {name ? (
        <span className={"slider__name"} style={{ marginLeft: `4.5%` }}>
          {name}
        </span>
      ) : null}
      {sliderHasMoved && slider && (
        <div className="slider__arrow left">
          <ArrowBackIosOutlined onClick={() => handlePrev()} />
        </div>
      )}
      <div
        className="slider__content"
        style={{
          ...style,
          marginLeft: `${padding}`,
        }}
      >
        {renderSliderContent()}
      </div>
      {slider && (
        <div className="slider__arrow right">
          <ArrowForwardIosOutlined onClick={() => handleNext()} />
        </div>
      )}
    </div>
  );
};

export default Slider;
