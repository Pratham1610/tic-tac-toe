import React, { useState, useEffect } from 'react';
import Square from './Square';

const Board = (props) => {
    const { xIsNext, squares, onPlay, onWin, onDraw } = props;
    const [winningLine, setWinningLine] = useState(null);
    const [emptySquare, setEmptySquare] = useState(8); // Track the empty squares

    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        setEmptySquare(emptySquare - 1);
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        const result = calculateWinner(nextSquares);
        if (result) {
            onWin(result.winner);
            setWinningLine(result.line);
        } else {
            setWinningLine(null);
        }
        if (emptySquare === 0) {
            onDraw();
        }
        onPlay(nextSquares);
    }

    useEffect(() => {
        if (squares.every(s => s === null)) {
            setEmptySquare(9);
            setWinningLine(null);
        }
    }, [squares]);

    const renderSquare = (i) => {
        const isWinningSquare = winningLine && winningLine.includes(i);
        return <Square value={squares[i]} onSquareClick={() => handleClick(i)} isWinningSquare={isWinningSquare} />;
    };

    return (
        <div className="board-container">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], line: lines[i] };
        }
    }
    return null;
}

export default Board;
