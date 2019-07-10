import React from "react";
import "../styles/square.scss";

interface IProps {
  whatChecked: "O" | "X" | null;
  onPressSquare: (index: number) => void;
  index: number;
  disabled: boolean;
  gameOver: boolean;
}

const Square: React.FunctionComponent<IProps> = ({
  whatChecked,
  onPressSquare,
  index,
  disabled,
  gameOver,
}) => {
  const onClick = (index: number) => () => {
    onPressSquare(index);
  };

  if (whatChecked === "O") {
    return (
      <div>
        <button id="squareButton" onClick={onClick(index)} disabled={disabled || gameOver}>
          O
        </button>
      </div>
    );
  }

  if (whatChecked === "X") {
    return (
      <div>
        <button id="squareButton" onClick={onClick(index)} disabled={disabled || gameOver}>
          X
        </button>
      </div>
    );
  }

  return (
    <div>
      <button id="squareButton" onClick={onClick(index)} disabled={disabled || gameOver} />
    </div>
  );
};

export default Square;
