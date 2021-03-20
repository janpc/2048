import { useState } from "react";

import Board from "./components/Board";
import {
  swipeLeft,
  swipeRight,
  swipeUp,
  swipeDown,
  addNumberRandomly,
} from "./helpers/game";
import "./style/App.scss";

function App() {
  const initialBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const [board, setBoard] = useState(addNumberRandomly(initialBoard));

  function handleSwipeLeft() {
    let newBoard = swipeLeft(board);

    if (board.toString() !== newBoard.toString()) {
      newBoard = addNumberRandomly(newBoard);
      setBoard(newBoard);
    }
  }

  function handleSwipeRight() {
    let newBoard = swipeRight(board);
    if (board.toString() !== newBoard.toString()) {
      newBoard = addNumberRandomly(newBoard);
      setBoard(newBoard);
    }
  }

  function handleSwipeUp() {
    let newBoard = swipeUp(board);
    if (board.toString() !== newBoard.toString()) {
      newBoard = addNumberRandomly(newBoard);
      setBoard(newBoard);
    }
  }

  function handleSwipeDown() {
    let newBoard = swipeDown(board);
    if (board.toString() !== newBoard.toString()) {
      newBoard = addNumberRandomly(newBoard);
      setBoard(newBoard);
    }
  }
  return (
    <div className="App">
      <Board
        board={board}
        handleSwipeLeft={handleSwipeLeft}
        handleSwipeRight={handleSwipeRight}
        handleSwipeUp={handleSwipeUp}
        handleSwipeDown={handleSwipeDown}
      />
    </div>
  );
}

export default App;
