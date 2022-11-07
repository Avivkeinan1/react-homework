import { useState } from "react";
import Counter from "./counter";

const CounterList = ({ counters }) => {
  return (
    <div>
      {counters.map((counter, index) => {
        return <Counter key={index} {...counter} />;
      })}
    </div>
  );
};
export default CounterList;
