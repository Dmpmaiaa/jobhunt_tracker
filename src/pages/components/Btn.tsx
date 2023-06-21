import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Btn: React.FC<ButtonProps> = ({ onClick, text }) => {
  return <button onClick={onClick}> {text}</button>;
};

export default Btn;
