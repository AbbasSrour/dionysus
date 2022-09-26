import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import './input.scss';
import { motion } from 'framer-motion';

const variants = {
  valid: {
    x: '0%',
  },
  invalid: {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '0.2rem red solid',
    x: ['3%', '-3%', '3%', '-3%', '3%', '-3%', '0%'],
  },
};
const bounceTransition = {
  x: {
    duration: 0.5,
    type: 'easeInOut',
  },
};

interface Props {
  type: string;
  nameID: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  onBlur: FocusEventHandler<HTMLInputElement>;
  valid: boolean;
  error: string | null;
  autoComplete?: string;
}

export const Input: React.FC<Props> = ({
  type,
  nameID,
  label,
  value,
  valid,
  onChange,
  onBlur,
  error,
  autoComplete,
}) => {
  return (
    <motion.fieldset
      animate={valid ? 'valid' : 'invalid'}
      transition={bounceTransition}
      variants={variants}
      style={{
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: 'none',
      }}
    >
      <input
        name={nameID}
        type={type}
        id={nameID}
        placeholder={' '}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        autoComplete={autoComplete}
      />
      <label htmlFor={nameID}>{label}</label>
      <p>{error}</p>
    </motion.fieldset>
  );
};

export default Input;
