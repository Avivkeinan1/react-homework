import { useState } from "react";

const Counter = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  steps = 1,
  start = 0,
  boundaries = [],
}) => {
  const [counter, setCounter] = useState(start);
  const boundary = boundaries.find(
    ({ from, to }) => from >= counter && to <= counter
  );
  const color = boundary ? boundary.color : "";
  // console.log(color);

  const isAtMax = counter + steps <= max;
  const isAtMin = counter + steps >= min;

  const add = () => {
    if (counter + steps <= max) {
      setCounter((counter) => counter + steps);
    }
  };
  const subtract = () => {
    if (counter - steps >= min) {
      setCounter((counter) => counter - steps);
    }
  };

  return (
    <div>
      <button disabled={!isAtMax} onClick={add}>
        +
      </button>
      <br />
      <br />
      <h2 style={{ color: color }}>{counter}</h2>

      <br />
      <br />
      <button disabled={!isAtMin} onClick={subtract}>
        -
      </button>
    </div>
  );
};

export default Counter;
