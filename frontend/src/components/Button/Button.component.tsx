import React from "react";
import "./Button.scss";

type Props = {
  onClick?: React.MouseEventHandler;
  className?: string;
  children: React.ReactNode;
};
const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick : undefined}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton: React.FC<Props> = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick : undefined}
    >
      {props.children}
    </Button>
  );
};

export default Button;
