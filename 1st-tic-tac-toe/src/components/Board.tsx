import React from "react";
import Square from "./Square";

import "../styles/board.scss";

// TODO: Array.map으로 처리
const Board: React.FunctionComponent = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Square whatChecked="X" />
          </td>
          <td>
            <Square whatChecked="O" />
          </td>
          <td>
            <Square whatChecked="X" />
          </td>
        </tr>
        <tr>
          <td>
            <Square whatChecked="X" />
          </td>
          <td>
            <Square whatChecked="X" />
          </td>
          <td>
            <Square whatChecked="X" />
          </td>
        </tr>
        <tr>
          <td>
            <Square whatChecked="X" />
          </td>
          <td>
            <Square whatChecked="X" />
          </td>
          <td>
            <Square whatChecked="X" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Board;
