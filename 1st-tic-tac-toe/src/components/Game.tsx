import React from "react";
import Borad from "./Board";
import "../styles/Game.scss";

const Game: React.FunctionComponent = () => {
  return (
    <div className="wrap">
      <Borad />
      <div className="descBoard">
        <p>NEXT PLAYER: X</p>
        <div>
          <span>1</span>
          <button>GOTO1</button>
        </div>
        <div>
          <span>2</span>
          <button>GOTO2</button>
        </div>
        <div>
          <span>3</span>
          <button>GOTO3</button>
        </div>
        <div>
          <span>3</span>
          <button>GOTO3</button>
        </div>
        <div>
          <span>3</span>
          <button>GOTO3</button>
        </div>
        <div>
          <span>3</span>
          <button>GOTO3</button>
        </div>
        <div>
          <span>3</span>
          <button>GOTO3</button>
        </div>
        <div>
          <span>3</span>
          <button>GOTO3</button>
        </div>
        <div>
          <span>3</span>
          <button>GOTO3</button>
        </div>
        <div>
          <span>3</span>
          <button>GOTO3</button>
        </div>
        <div>
          <span>3</span>
          <button>GOTO3</button>
        </div>
        <div>
          <span>3</span>
          <button>GOTO3</button>
        </div>
        <div>
          <span>3</span>
          <button>GOTO3</button>
        </div>
      </div>
    </div>
  );
};

export default Game;
