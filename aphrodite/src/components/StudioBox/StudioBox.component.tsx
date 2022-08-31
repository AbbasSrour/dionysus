import React, { useState } from "react";
import "./StudioBox.scss";
import StudioSchema from "../../schemas/studio.schema";

interface Props {
  studio: StudioSchema;
}

const StudioBox: React.FC<Props> = ({ studio }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="studio-box"
      onMouseEnter={() => {
        setTimeout(() => setIsHovered(true), 1000);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={studio.image} alt={studio.name} />
      {isHovered && <video src={studio.video} autoPlay loop playsInline />}
    </div>
  );
};
export default StudioBox;
