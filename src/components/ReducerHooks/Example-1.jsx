import { useState, useReducer } from "react";

// define initial state
const initialState = { count: 0 };

const ACTIONS = {
  increment: "increment",
  decrement: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.increment:
      return { count: state.count + 1 };
    case ACTIONS.decrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Reducer_Example_1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const ADD = () => {
    dispatch({ type: ACTIONS.increment });
  };

  const SUB = () => {
    dispatch({ type: ACTIONS.decrement });
  };

  return (
    <>
      <button onClick={ADD}>Increase</button>
      <h1>{state.count}</h1>
      <button onClick={SUB}>Decrease</button>
    </>
  );
};

export default Reducer_Example_1;
