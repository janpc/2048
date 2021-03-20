import Cell from "./Cell";

export default function Row({ row }) {
  return (
    <div className="board__row">
      {row.map((num, index) => (
        <Cell key={`cell-${index + 1}`} number={num} />
      ))}
    </div>
  );
}
