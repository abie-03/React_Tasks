import React, { useState } from "react";

const TicTacToe = () => {
  //create a board with 9 squares and intialize with null values
  const [board, setBoard] = useState(Array(9).fill(null));
  //initialize state to track the current player
  const [xNext, setXNext] = useState(true);
  //A function to render a single square, takes square index as parameter
  const renderSquare = (index) => {
    return (
      <button
        className="square"
        onClick={() => {
          handleClick(index);
        }}
      >
        {board[index]}
      </button>
    );
  };
  //A function to handle square clicks,takes square as parameter
  const handleClick = (index) => {
    //Create a copy of current board
    const newBoard = [...board];
    //Check if thers is a winner or if the square is already filled, then return
    if (calculateWinner(newBoard) || newBoard[index]) {
      return;
    }
    //Based on current player upadte it as  'X' or 'O'
    newBoard[index] = xNext ? "X" : "O";
    //upadte the game board with new board
    setBoard(newBoard);
    //Toggle the player turn
    setXNext(!xNext);
  };

  //Determine if there is a winner based on current board state
  const winner = calculateWinner(board);
  //Determine the status of game(winner or next player)
  const status = winner
    ? `winner:${winner}`
    : `Next player:${xNext ? "X" : "O"}`;
  return (
    <div className="game">
      <div className="game-board">
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
      <div className="game-info">{status}</div>
    </div>
  );
};
const calculateWinner = (squares) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
