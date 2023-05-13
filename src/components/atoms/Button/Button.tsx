import React from "react";
import Styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button className={Styles.buttonStyle} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
