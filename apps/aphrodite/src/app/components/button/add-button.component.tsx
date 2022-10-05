import React, { useEffect, useRef, useState } from 'react';
import './add-button.scss';

interface PlayButtonProps {
  link: string;
}

export const AddButton: React.FC<PlayButtonProps> = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current && clicked) {
      if (
        ref.current.classList.contains('added') &&
        ref.current.classList.contains('loading')
      )
        ref.current.classList.remove('loading');
      else if (ref.current.classList.contains('loading'))
        ref.current.classList.add('added');
      else if (ref.current.classList.contains('added'))
        ref.current.classList.remove('added');
      else {
        ref.current.classList.add('added');
        ref.current.classList.add('loading');
      }
    }
  }, [clicked]);

  return (
    <button
      type="submit"
      className="sf-btn add"
      ref={ref}
      onClick={() => setClicked(!clicked)}
    >
      <div className="icn-sf">
        <span className="line line-1"></span>
        <span className="line line-2"></span>
      </div>
      <div className="loader"></div>
    </button>
  );
};
