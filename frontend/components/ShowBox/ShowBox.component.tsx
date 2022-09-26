import React, { useState } from 'react';
import './ShowBox.scss';
import { Show } from '../../schemas/show.schema';

type Props = {
  width: string;
  show: Show;
};

const ShowBox: React.FC<Props> = ({ width, show }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="show-box"
      style={{ width: width }}
      onMouseEnter={() => {
        setTimeout(() => setIsHovered(true), 500);
      }}
      // onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={show.poster} alt="poster" />
      {isHovered && <video src={show.trailer} autoPlay={true} loop />}
    </div>
  );
};

export default ShowBox;
