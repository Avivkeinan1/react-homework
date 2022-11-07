import { useState } from "react";
import Counter from "./counter";

const InputCounter = ({ onSubmit }) => {
  const [{ min, max, step, start }, setUserInput] = useState({
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
    step: 1,
    start: 0,
  });

  const inputChanged = ({ target: { name, type, value } }) =>
    // const type = e.target.type
    // const name = e.target.name
    // const value= e.target.value
    setUserInput((inputs) => {
      return {
        ...inputs,
        [name]: type === "number" ? Number(value) : value,
      };
    });

  return (
    <div>
      <input
        onChange={inputChanged}
        type="number"
        name="min"
        placeholder="min"
        value={min}
      />

      <input
        onChange={inputChanged}
        type="number"
        name="max"
        placeholder="max"
        value={max}
      />
      <input
        onChange={inputChanged}
        type="number"
        name="start"
        placeholder="start"
        value={start}
      />
      <input
        onChange={inputChanged}
        type="number"
        name="steps"
        placeholder="step"
        value={step}
      />
      <button
        onClick={() => {
          onSubmit({ max, min, step, start });
        }}
      >
        create
      </button>
    </div>
  );
};

export default InputCounter;
