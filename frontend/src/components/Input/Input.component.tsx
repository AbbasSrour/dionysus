import React, { useState } from "react";
import "./Input.module.scss";
import { motion } from "framer-motion";

interface Props {
  type: string;
  nameID: string;
  label: string;
  pattern?: string;
  OnChange?: Function;
}

export const Input: React.FC<Props> = ({
  type,
  nameID,
  label,
  pattern,
  OnChange,
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  const variants = {
    valid: {
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      borderBottom: "none",
      // borderBottom: "0.2rem green solid",
      x: "0%",
    },
    invalid: {
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      borderBottom: "0.2rem red solid",
      x: ["3%", "-3%", "3%", "-3%", "3%", "-3%", "0%"],
    },
  };
  const bounceTransition = {
    x: {
      duration: 0.5,
      type: "easeInOut",
    },
  };

  const onChangeHandler = (value: React.ChangeEvent) => {
    let check: any;
    // @ts-ignore
    check = OnChange(value);
    if (check) {
      setIsValid(true);
    }
    setIsValid(false);
  };

  return (
    <motion.fieldset
      animate={isValid ? "valid" : "invalid"}
      transition={bounceTransition}
      variants={variants}
    >
      <input
        name={nameID}
        type={type}
        id={nameID}
        pattern={pattern}
        placeholder={" "}
        onChange={onChangeHandler}
        onInvalid={() => {
          setIsValid(false);
        }}
      />
      <label htmlFor={nameID}>{label}</label>
      {/*<a onClick={() => setIsValid(!isValid)}>*/}
      {/*  {" "}*/}
      {/*  {isValid ? "valid" : "invalid"}*/}
      {/*</a>*/}
    </motion.fieldset>
  );
};

export default Input;
