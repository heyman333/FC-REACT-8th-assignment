import React from "react";

import Square from "./Square";
import "../styles/board.scss";

interface IProps {
  currentGame: Array<"O" | "X" | null>;
  onPressSquare: (index: number) => void;
}

const Board: React.FunctionComponent<IProps> = ({ currentGame, onPressSquare }) => {
  return (
    <table>
      <tbody>
        {new Array(3).fill(undefined).map((__, upperIndex) => {
          return (
            <tr key={upperIndex}>
              {new Array(3).fill(undefined).map((__, lowerIndex) => {
                const index = (upperIndex + 1) * 3 - (3 - lowerIndex);

                return (
                  <td key={lowerIndex}>
                    <Square
                      disabled={currentGame[index] !== null}
                      whatChecked={currentGame[index]}
                      onPressSquare={onPressSquare}
                      index={index}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Board;
