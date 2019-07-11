import React from "react";
import "../styles/square.scss";

import { PlayerState } from "./Game";

interface IProps {
  whatChecked: PlayerState;
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

  return (
    <div>
      <button id="squareButton" onClick={onClick(index)} disabled={disabled || gameOver}>
        {whatChecked}
      </button>
    </div>
  );
};

export default Square;
