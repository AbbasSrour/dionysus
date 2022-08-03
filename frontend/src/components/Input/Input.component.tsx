import React from "react";
import "./Input.module.scss";

export const Input: React.FC<{
  type: string;
  nameID: string;
  label: string;
  //TODO: The fuck is this?????
  pattern?: string;
}> = ({ type, nameID, label, pattern }) => {
  return (
    <fieldset>
      <input name={nameID} type={type} id={nameID} pattern={pattern} />
      <label htmlFor={nameID}>{label}</label>
    </fieldset>
  );
};

export default Input;
