import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={Decrement}>-</button>
      <button>{count}</button>
      <button onClick={Increment}>+</button>
    </div>
  );
};

export default CounterApp;
