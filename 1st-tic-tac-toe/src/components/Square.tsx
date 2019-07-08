import React from "react";
import "../styles/square.scss";

interface IProps {
  whatChecked?: "O" | "X";
}

const Square: React.FunctionComponent<IProps> = ({ whatChecked }) => {
  if (whatChecked === "O") {
    return (
      <div>
        <button>O</button>
      </div>
    );
  }

  if (whatChecked === "X") {
    return (
      <div>
        <button>X</button>
      </div>
    );
  }

  return (
    <div>
      <button />
    </div>
  );
};

export default Square;
