export { swipeLeft, swipeRight, swipeUp, swipeDown, addNumberRandomly };

function swipeLeft(board) {
  let newBoard = JSON.parse(JSON.stringify(board));

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 3; y++) {
      const options = {
        board: newBoard,
        pos: { x, y },
        diference: { x: 0, y: 1 },
      };
      newBoard = compareTwoPositions(options);
    }
  }
  return newBoard;
}

function swipeRight(board) {
  let newBoard = JSON.parse(JSON.stringify(board));

  for (let x = 0; x < 4; x++) {
    for (let y = 3; y > 0; y--) {
      const options = {
        board: newBoard,
        pos: { x, y },
        diference: { x: 0, y: -1 },
      };
      newBoard = compareTwoPositions(options);
    }
  }
  return newBoard;
}

function swipeUp(board) {
  let newBoard = JSON.parse(JSON.stringify(board));

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 3; x++) {
      const options = {
        board: newBoard,
        pos: { x, y },
        diference: { x: 1, y: 0 },
      };
      newBoard = compareTwoPositions(options);
    }
  }
  return newBoard;
}

function swipeDown(board) {
  let newBoard = JSON.parse(JSON.stringify(board));

  for (let y = 0; y < 4; y++) {
    for (let x = 3; x > 0; x--) {
      const options = {
        board: newBoard,
        pos: { x, y },
        diference: { x: -1, y: 0 },
      };
      newBoard = compareTwoPositions(options);
    }
  }
  return newBoard;
}

function addNumberRandomly(board) {
  let newBoard = JSON.parse(JSON.stringify(board));
  const x = Math.floor(Math.random() * 4);
  const y = Math.floor(Math.random() * 4);
  if (newBoard[x][y] === 0) {
    newBoard[x][y] = Math.random() > 0.8 ? 4 : 2;
  } else {
    newBoard = addNumberRandomly(board);
  }

  return newBoard;
}

function compareTwoPositions(options) {
  //pos -> base position
  //diference -> diference between the position compared and the base position
  const { board, pos, diference } = options;
  let newBoard = JSON.parse(JSON.stringify(board));

  if (
    newBoard[pos.x][pos.y] === 0 &&
    newBoard[pos.x + diference.x][pos.y + diference.y] !== 0
  ) {
    newBoard[pos.x][pos.y] = newBoard[pos.x + diference.x][pos.y + diference.y];
    newBoard[pos.x + diference.x][pos.y + diference.y] = 0;
  }
  
  if (
    newBoard[pos.x][pos.y] !== 0 &&
    newBoard[pos.x + diference.x][pos.y + diference.y] ===
      newBoard[pos.x][pos.y]
  ) {
    newBoard[pos.x][pos.y] = newBoard[pos.x][pos.y] * 2;
    newBoard[pos.x + diference.x][pos.y + diference.y] = 0;
  } else if (newBoard[pos.x + diference.x][pos.y + diference.y] === 0) {
    diference.x = changeDiference(pos.x, diference.x);
    diference.y = changeDiference(pos.y, diference.y);

    if (diference.x !== 0 || diference.y !== 0) {
      newBoard = compareTwoPositions({ board: newBoard, pos, diference });
    }
  }

  return newBoard;
}

function changeDiference(pos, diference) {
  //returns 0 if can't go further
  const newDiference = [0, 2, 3];
  if (diference > 0 && pos + diference < 3) {
    return newDiference[diference];
  } else if (diference < 0 && pos + diference > 0) {
    return newDiference[diference * -1] * -1;
  } else {
    return 0;
  }
}
