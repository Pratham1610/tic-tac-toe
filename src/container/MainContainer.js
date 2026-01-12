import React, { useState } from "react";
import MainScreen from "../screen/MainScreen";

const MainContainer = (props) => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ x: 0, o: 0, draw: 0 });
  const [gameWinner, setGameWinner] = useState(null);

  function handlePlay(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleWin(winner) {
    if (gameWinner) return;
    setGameWinner(winner);
    setScores((prev) => ({
      ...prev,
      [winner.toLowerCase()]: prev[winner.toLowerCase()] + 1,
    }));
  }

  const handleDraw = () => {
    if (gameWinner) return;
    setGameWinner("draw");
  };

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameWinner(null);
  }
  return (
    <MainScreen
      xIsNext={xIsNext}
      squares={squares}
      scores={scores}
      gameWinner={gameWinner}
      handlePlay={handlePlay}
      handleWin={handleWin}
      handleDraw={handleDraw}
      resetGame={resetGame}
    />
  );
};

export default MainContainer;
