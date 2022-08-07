import "./Slider.scss";
import React, { useEffect, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ShowBox from "../ShowBox/ShowBox.component";
import MovieSchema from "../../schemas/movie.schema";

interface Props {
  shows: Array<MovieSchema>;
}

export const Slider: React.FC<Props> = ({ shows }) => {
  const [sliderHasMoved, setSliderHasMoved] = useState(false); // boolean to display prev arrow
  const [sliderMoving, setSliderMoving] = useState(false); // boolean for slider animation
  const [movePercentage, setMovePercentage] = useState(0); // move percentage to shift slider during animation
  const [sliderMoveDirection, setSliderMoveDirection] = useState<string | null>(
    null
  ); // direction of movement of animation
  const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0); // lowest visible index of slider content
  const [itemsInRow, setItemsInRow] = useState(5); // number of items in the slider content changed dynamically on window size
  const [slider, setSlider] = useState(true);

  let totalItems = shows.length;
  if (totalItems < itemsInRow) {
    setItemsInRow(totalItems);
    setSlider(false);
  }

  // handle window resize and sets items in row
  const handleWindowResize = () => {
    if (window.innerWidth > 1440 && totalItems > 6) {
      setItemsInRow(6);
    } else if (window.innerWidth >= 1000 && totalItems > 5) {
      setItemsInRow(5);
    } else if (window.innerWidth < 1000 && totalItems > 4) {
      setItemsInRow(4);
    } else {
      setItemsInRow(totalItems);
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
    console.log(indexToDisplay);

    // add on leading and trailing indexes for peek image when sliding
    if (slider) {
      if (sliderHasMoved) {
        const trailingIndex =
          indexToDisplay[indexToDisplay.length - 1] === totalItems - 1
            ? 0
            : indexToDisplay[indexToDisplay.length - 1] + 1;
        indexToDisplay.push(trailingIndex);
      }
    }

    if (slider) {
      const leadingIndex =
        indexToDisplay[0] === 0 ? totalItems - 1 : indexToDisplay[0] - 1;
      indexToDisplay.unshift(leadingIndex);
    }

    const sliderContents = [];
    for (let index of indexToDisplay) {
      sliderContents.push(
        <ShowBox
          show={shows[index]}
          // key={`${shows[index].id}-${index}`}
          key={`${index + Math.random() * 1000}`}
          width={slider ? `${100 / itemsInRow}%` : `15vw`}
        />
      );
    }

    // adds empty divs to take up appropriate spacing when slider at initial position
    if (slider) {
      if (!sliderHasMoved) {
        for (let i = 0; i < itemsInRow; i++) {
          sliderContents.unshift(
            <div
              className="show-box"
              style={{ width: `${100 / itemsInRow}%` }}
              key={i}
            />
          );
        }
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
      // width: "30vw",
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
    <div className="show-list">
      {sliderHasMoved && slider && (
        <div className="show-list__arrow left">
          <ArrowBackIosOutlined onClick={() => handlePrev()} />
        </div>
      )}
      <div className="show-list__content" style={style}>
        {renderSliderContent()}
      </div>
      {slider && (
        <div className="show-list__arrow right">
          <ArrowForwardIosOutlined onClick={() => handleNext()} />
        </div>
      )}
    </div>
  );
};

export default Slider;
