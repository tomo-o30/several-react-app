import React from 'react'

type ButtonProps = {
  text: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

 const Button = (props:ButtonProps) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

export default Button;