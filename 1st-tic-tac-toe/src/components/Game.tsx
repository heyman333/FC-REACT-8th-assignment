import React from "react";
import Borad from "./Board";
import "../styles/game.scss";

export type CurrentGame = Array<"O" | "X" | null>;
export type PlayerState = "O" | "X" | null;

export interface IState {
  currentGame: CurrentGame;
  currnetPlayer: PlayerState;
  states: IState[];
}

const VICTORY_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialState: IState = {
  currentGame: new Array(9).fill(null),
  currnetPlayer: "O",
  states: [],
};

const Game: React.FunctionComponent = () => {
  const [state, setState] = React.useState<IState>(initialState);
  const [gameOver, setGameOver] = React.useState<boolean>(false);

  const onPressSquare = (index: number) => {
    const currnetPlayer = state.currnetPlayer === "O" ? "X" : "O";

    const deepCopiedArr = [...state.currentGame];
    deepCopiedArr.splice(index, 1, state.currnetPlayer);

    setState({
      currentGame: deepCopiedArr,
      currnetPlayer,
      states: state.states.concat({
        currnetPlayer,
        currentGame: deepCopiedArr,
        states: state.states,
      }),
    });
  };

  React.useEffect(() => {
    const OCondition = state.currentGame
      .map((game, index) => (game === "O" ? index : 100))
      .filter(someIndex => someIndex !== 100);

    const XCondition = state.currentGame
      .map((game, index) => (game === "X" ? index : null))
      .filter(someIndex => someIndex !== null);

    const victory =
      VICTORY_CONDITIONS.map(condition => {
        return condition.every(cond => OCondition.includes(cond));
      }).includes(true) ||
      VICTORY_CONDITIONS.map(condition => {
        return condition.every(cond => XCondition.includes(cond));
      }).includes(true);

    if (victory) {
      setGameOver(true);
    }
  }, [state]);

  const timeTravel = (index: number) => () => {
    if (index === state.states.length - 1) {
      return;
    }

    const resetIndex = index + 1;
    setGameOver(false);
    setState({ ...state.states[index], states: state.states[resetIndex].states });
  };

  const reset = () => {
    setGameOver(false);
    setState(initialState);
  };

  return (
    <div className="wrapper">
      {gameOver && (
        <div className="victoryPhrase">{`${
          state.currnetPlayer === "X" ? "O" : "X"
        }의 승리로 게임이 끝났습니다`}</div>
      )}
      <div className="wrap">
        <Borad currentGame={state.currentGame} onPressSquare={onPressSquare} gameOver={gameOver} />
        <div className="descBoard">
          <button id="reset" onClick={reset}>
            reset
          </button>
          <p>{`NEXT PLAYER: ${state.currnetPlayer}`}</p>
          <div className="time-travel-container">
            {state.currentGame
              .filter((game: PlayerState) => game !== null)
              .map((__, index: number) => {
                return (
                  <div key={index}>
                    <span>{index + 1}</span>
                    <button id="time-travel-button" onClick={timeTravel(index)}>{`GOTO - ${index +
                      1}`}</button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
