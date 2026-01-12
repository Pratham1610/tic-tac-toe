import React, { useState } from "react";
import Board from "../components/Board";
import "../NeonTheme.css";

const MainScreen = (props) => {
  const {
    xIsNext,
    squares,
    scores,
    gameWinner,
    handlePlay,
    handleWin,
    handleDraw,
    resetGame,
  } = props;

  return (
    <div className="main-screen">
      {/* Title */}
      <h1 className="neon-title">
        <span className="neon-cyan">TIC</span>
        <span className="text-gray-500 mx-2">-</span>
        <span className="neon-pink">TAC</span>
        <span className="text-gray-500 mx-2">-</span>
        <span className="neon-cyan">TOE</span>
      </h1>

      {/* Turn Indicator (only if no winner) */}
      {!gameWinner && (
        <div className="turn-indicator">
          {xIsNext ? (
            <span className="neon-cyan">Player 1's Turn (X)</span>
          ) : (
            <span className="neon-pink">Player 2's Turn (O)</span>
          )}
        </div>
      )}

      {/* Winner Message */}
      {gameWinner && (
        <div className="winner-message">
          Winner:{" "}
          <span className={gameWinner === "X" ? "neon-cyan" : "neon-pink"}>
            {gameWinner}
          </span>
        </div>
      )}

      {/* Game Board */}
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={squares}
          onPlay={handlePlay}
          onWin={handleWin}
          onDraw={handleDraw}
        />
      </div>

      {/* Scoreboard */}
      <div className="scoreboard">
        <div
          className={`score-box ${xIsNext && !gameWinner ? "active-x" : ""}`}
        >
          <div
            className="neon-cyan"
            style={{ fontSize: "1.25rem", fontWeight: "bold" }}
          >
            Player 1
          </div>
          <div style={{ fontSize: "2rem", fontFamily: "monospace" }}>
            {scores.x}
          </div>
        </div>
        <div
          className={`score-box ${!xIsNext && !gameWinner ? "active-o" : ""}`}
        >
          <div
            className="neon-pink"
            style={{ fontSize: "1.25rem", fontWeight: "bold" }}
          >
            Player 2
          </div>
          <div style={{ fontSize: "2rem", fontFamily: "monospace" }}>
            {scores.o}
          </div>
        </div>
         <div
          className={`score-box`}
        >
          <div
            className="neon-green"
            style={{ fontSize: "1.25rem", fontWeight: "bold" }}
          >
            Draw
          </div>
          <div style={{ fontSize: "2rem", fontFamily: "monospace" }}>
            {scores.draw}
          </div>
        </div>
      </div>

      {/* Restart Button */}
      <button onClick={resetGame} className="restart-btn">
        RESTART
      </button>
    </div>
  );
};

export default MainScreen;
