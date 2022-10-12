import React, { useState } from 'react';
import './studio-box.scss';
import StudioSchema from '../../schema/studio.schema';

interface Props {
  studio: StudioSchema;
  width: string;
  spacing: number;
}

const StudioBox: React.FC<Props> = ({ studio, width, spacing }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="studio-box"
      onMouseEnter={() => {
        setTimeout(() => setIsHovered(true), 1000);
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: width, marginRight: `${spacing}%` }}
    >
      <img src={studio.image} alt={studio.name} />
      {isHovered && <video src={studio.video} autoPlay loop playsInline muted={true} />}
    </div>
  );
};

export default StudioBox;
