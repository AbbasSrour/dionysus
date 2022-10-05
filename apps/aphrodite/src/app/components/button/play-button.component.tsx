import React, { useState } from 'react';
import './play-button.scss';
import { BsPlayFill as PlayIconFill } from 'react-icons/bs';
import { FiPlay as PlayIconOutlined } from 'react-icons/fi';

export const PlayButton: React.FC = () => {
  const [isHovered, setHovered] = useState<boolean>(false);
  return (
    <button
      className={'play-btn'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PlayIconFill />
    </button>
  );
};
