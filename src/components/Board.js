import Row from "./Row";
import { useSwipeable } from "react-swipeable";

export default function Board({ board, handleSwipeLeft, handleSwipeRight, handleSwipeUp, handleSwipeDown }) {

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeLeft(),
    onSwipedRight: () => handleSwipeRight(),
    onSwipedUp: () => handleSwipeUp(),
    onSwipedDown: () => handleSwipeDown(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    <div className="board" {...handlers}>
      {board.map((row, index) => (
        <Row key={`row-${index + 1}`} row={row} />
      ))}
    </div>
  );
}
