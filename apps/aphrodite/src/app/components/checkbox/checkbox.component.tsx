import React, { useRef, useState } from 'react';
import './checkbox.scss';

interface Props {
  boxId: string;
}

const CheckBox: React.FC<Props> = ({ boxId }) => {
  const checkBoxRef = useRef<HTMLInputElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);

  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className={'checkbox'}>
      <input
        type="checkbox"
        id={boxId}
        ref={checkBoxRef}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <label htmlFor={boxId} ref={labelRef}>
        {isChecked ? 'Thanks' : 'I agree to the terms and conditions.'}
      </label>
    </div>
  );
};

export default CheckBox;
