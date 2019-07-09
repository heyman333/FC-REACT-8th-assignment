import React from "react";
import "../styles/square.scss";

interface IProps {
  whatChecked: "O" | "X" | null;
  onPressSquare: (index: number) => void;
  index: number;
  disabled: boolean;
}

const Square: React.FunctionComponent<IProps> = ({
  whatChecked,
  onPressSquare,
  index,
  disabled,
}) => {
  const onClick = (index: number) => () => {
    onPressSquare(index);
  };

  if (whatChecked === "O") {
    return (
      <div>
        <button id="squareButton" onClick={onClick(index)} disabled={disabled}>
          O
        </button>
      </div>
    );
  }

  if (whatChecked === "X") {
    return (
      <div>
        <button id="squareButton" onClick={onClick(index)} disabled={disabled}>
          X
        </button>
      </div>
    );
  }

  return (
    <div>
      <button id="squareButton" onClick={onClick(index)} disabled={disabled} />
    </div>
  );
};

export default Square;
