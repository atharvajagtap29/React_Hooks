import React from "react";
import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";
import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

const Context_Example_1 = () => {
  return (
    <CounterProvider>
      <DisplayCount />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </CounterProvider>
  );
};

// New component to display the count
const DisplayCount = () => {
  const { count } = useContext(CounterContext); // Access count from context
  console.log("COUNT :::: ", count);
  return <h1>Count is {count}</h1>; // Display the count
};

export default Context_Example_1;
