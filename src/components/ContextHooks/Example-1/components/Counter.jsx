import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <span>{count}</span> */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br />
      <br />
    </>
  );
};

export default Counter;
