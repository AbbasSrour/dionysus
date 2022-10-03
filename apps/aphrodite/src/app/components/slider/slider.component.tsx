import './slider.scss';
import React, { useEffect, useState } from 'react';
import {
  MdArrowBackIosNew as ArrowBackward,
  MdArrowForwardIos as ArrowForward,
} from 'react-icons/md';
import { MovieSchema } from '../../schema/movie.schema';
import { SeriesSchema } from '../../schema/series.schema';
import StudioBox from '../studio-box/studio-box.component';
import ShowBox from '../show-box/show-box.component';
import StudioSchema from '../../schema/studio.schema';

enum sliderType {
  show = 'show',
  studio = 'studio',
}

interface Props {
  sliderName?: string;
  data: Array<MovieSchema> | Array<SeriesSchema> | Array<StudioSchema>;
  poster: boolean;
  type: string;
  spacing?: number;
}

export const Slider: React.FC<Props> = ({
  data,
  sliderName,
  poster,
  type,
  spacing = 0,
}) => {
  const totalItems = data.length;

  const [sliderHasMoved, setSliderHasMoved] = useState(false); // boolean to display prev arrow
  const [sliderMoving, setSliderMoving] = useState(false); // boolean for slider animation
  const [movePercentage, setMovePercentage] = useState(0); // move percentage to shift slider during animation
  const [sliderMoveDirection, setSliderMoveDirection] = useState<string | null>(null); // direction of movement of animation
  const [lowestVisibleIndex, setLowestVisibleIndex] = useState(0); // lowest visible index of slider content
  const [itemsInRow, setItemsInRow] = useState(totalItems); // number of items in the slider content changed dynamically on window size
  const [slider, setSlider] = useState(true);

  // handle window resize and sets items in row
  const handleWindowResize = () => {
    if (!poster && type === sliderType.show)
      if (window.innerWidth > 1440 && totalItems > 6) setItemsInRow(6);
      else if (window.innerWidth >= 1000 && totalItems > 5) setItemsInRow(5);
      else if (window.innerWidth < 1000 && totalItems > 4) setItemsInRow(4);
      else setSlider(false);
    else if (poster && type === sliderType.show)
      if (window.innerWidth > 1440 && totalItems > 8) setItemsInRow(7);
      else if (window.innerWidth >= 1000 && totalItems > 7) setItemsInRow(6);
      else if (window.innerWidth < 1000 && totalItems > 6) setItemsInRow(5);
      else setSlider(false);
    else if (type === sliderType.studio)
      if (window.innerWidth > 1440 && totalItems > 4) setItemsInRow(4);
      else if (window.innerWidth >= 1000 && totalItems > 4) setItemsInRow(4);
      else if (window.innerWidth < 1000 && totalItems > 4) setItemsInRow(4);
      else setSlider(false);
  };
  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
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
    for (const index of indexToDisplay) {
      if (type === sliderType.show)
        sliderContents.push(
          <ShowBox
            // @ts-ignore
            show={data[index]}
            key={`${index + Math.random() * 1000}`}
            width={slider ? `${100 / itemsInRow - spacing}%` : `18%`}
            poster={poster}
          />,
        );
      else
        sliderContents.push(
          <StudioBox
            key={`${index + Math.random() * 1000}`}
            studio={data[index]}
            width={slider ? `${100 / itemsInRow - spacing}%` : `18%`}
            spacing={spacing}
          />,
        );
    }

    // adds empty divs to take up appropriate spacing when slider at initial position
    if (!sliderHasMoved && slider) {
      for (let i = 0; i < itemsInRow; i++) {
        sliderContents.unshift(
          <div
            className={type === sliderType.show ? 'show-box' : 'studio-box'}
            style={{ width: `${100 / itemsInRow}%`, border: 'none' }}
            key={i}
          />,
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
    setSliderMoveDirection('left');
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
    setSliderMoveDirection('right');
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
      whiteSpace: 'normal',
      display: 'flex',
      width: 'fit-content',
    };
  } else if (sliderMoving) {
    let translate = '';
    if (sliderMoveDirection === 'right') {
      translate = `translateX(-${100 + movePercentage + 100 / itemsInRow}%)`;
    } else if (sliderMoveDirection === 'left') {
      translate = `translateX(-${movePercentage + 100 / itemsInRow}%)`;
    }

    style = {
      transform: translate,
      transitionDuration: '750ms',
    };
  } else {
    style = {
      transform: `translateX(-${100 + (sliderHasMoved ? 100 / itemsInRow : 0)}%)`,
    };
  }

  return (
    <div
      className={type === sliderType.show ? 'slider show_slider' : 'slider studio_slider'}
    >
      <div className={'slider__name'}>
        {sliderName ? <span>{sliderName}</span> : null}
      </div>
      <div
        className={
          type === sliderType.show ? 'slider__wrapper big' : 'slider__wrapper small'
        }
      >
        {sliderHasMoved && slider && (
          <div className={'slider__wrapper__arrow left'}>
            <ArrowBackward onClick={() => handlePrev()} />
          </div>
        )}
        {/*{type === sliderType.show*/}
        {/*  ? sliderHasMoved &&*/}
        {/*  slider && (*/}
        {/*    <div className={'slider__wrapper__arrow left'}>*/}
        {/*      <ArrowBackward onClick={() => handlePrev()} />*/}
        {/*    </div>*/}
        {/*  )*/}
        {/*  : slider && (*/}
        {/*  <div className={'slider__wrapper__arrow left'}>*/}
        {/*    <ArrowBackward onClick={() => handlePrev()} />*/}
        {/*  </div>*/}
        {/*)}*/}
        <div
          className="slider__wrapper__content"
          style={{
            ...style,
          }}
        >
          {renderSliderContent()}
        </div>
        {slider && (
          <div className={'slider__wrapper__arrow right'}>
            <ArrowForward onClick={() => handleNext()} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
