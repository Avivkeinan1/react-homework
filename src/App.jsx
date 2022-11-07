import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import InputCounter from "./components/input-counter";
import { useState } from "react";
import CounterList from "./components/counterList";
/*
1. create a new project with bootstrap and bootstrap icons
2. create a component called "counter"
2.1 counter should receive the following props
- min = Number.MIN_SAFE_INTEGER
- max = Number.MAX_SAFE_INTEGER
- initial = 0
- steps = 1
2.3 the + button will add steps to current counter's state and will be disabled at max
2.4 the - button will subtract steps from current counter's state and will be disabled at min

BONUS
(includes new stuff) - create a component with inputs for min, max, initial, steps and a button which with each click will add a new counter based on the configurations
- receive array of objects
{ from: 15, to: 10, color: "red"}*/

const boundaries = [
  { from: 15, to: 10, color: "red" },
  { from: 5, to: 1, color: "blue" },
  { from: 10, to: 5, color: "purple" },
  { from: 20, to: 15, color: "green" },
  { from: 0, to: -50, color: "brown" },
];

function App() {
  const [counters, setCounter] = useState([]);
  return (
    <div className="App">
      <Counter min={-5} max={10} start={0} steps={1} boundaries={boundaries} />
      <br />
      <br />
      <br />
      <br />
      <InputCounter
        onSubmit={(counter) => setCounter((counter) => [...counters, counter])}
      />
      <br />
      <br />
      <br />
      <br />
      <CounterList counters={counters} />
    </div>
  );
}

export default App;
