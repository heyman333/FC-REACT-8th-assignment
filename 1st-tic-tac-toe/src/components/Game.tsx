import React from "react";
import Borad from "./Board";
import "../styles/Game.scss";

export type CurrentGame = Array<"O" | "X" | null>;
export type PlayerState = "O" | "X";

const Game: React.FunctionComponent = () => {
  const [currentGame, setCurrentGame] = React.useState<CurrentGame>(new Array(9).fill(null));
  const [currnetPlayer, setCurrentPlayer] = React.useState<PlayerState>("O");

  const onPressSquare = (index: number) => {
    if (currnetPlayer === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }

    const deepCopiedArr = [...currentGame];
    deepCopiedArr.splice(index, 1, currnetPlayer);
    setCurrentGame(deepCopiedArr);
  };

  return (
    <div className="wrap">
      <Borad currentGame={currentGame} onPressSquare={onPressSquare} />
      <div className="descBoard">
        <p>{`NEXT PLAYER: ${currnetPlayer}`}</p>
        <div className="time-travel-container">
          <span>1.</span>
          <button id="time-travel-button">GOTO1</button>
        </div>
      </div>
    </div>
  );
};

export default Game;
