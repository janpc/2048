export default function Cell({ number }) {
  return (
    <div className={`board__row__cell board__row__cell__${number}`}>
      <p>{number === 0 ? "" : number}</p>
    </div>
  );
}
