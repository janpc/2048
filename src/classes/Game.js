export default  class Game {
  static instance;
  constructor() {
    this.board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
  }
  static getInstance(setGameState = () => {}) {
    if (Game.instance) {
      return Game.instance;
    }
    Game.instance = new Game();

    Game.instance.setGameState = setGameState;
    Game.instance.setGameState(Game.instance.board);
    
    return Game.instance;
  }

  getBoard() {
    return this.board;
  }

  swipeLeft() {
    Game.instance.board[1][1] = 2;
    Game.instance.setGameState(Game.instance.board);
    console.log(Game.instance.board);
  }

  swipeRight() {
    console.log("Right");
  }

  swipeUp() {
    console.log("Up");
  }

  swipeDown() {
    console.log("Down");
  }
}
