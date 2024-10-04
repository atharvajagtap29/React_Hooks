import React, { useReducer } from "react";

// Initial state for the form
const initialState = {
  username: "",
  email: "",
  number: "",
  age: "",
};

// Action types
const ACTIONS = {
  ADD_NAME: "SET_NAME",
  ADD_EMAIL: "SET_EMAIL",
  ADD_NUMBER: "SET_NUMBER",
  ADD_AGE: "SET_AGE",
  RESET: "RESET",
};

// Handle Actions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_NAME:
      return { ...state, username: action.payload };
    case ACTIONS.ADD_EMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.ADD_NUMBER:
      return { ...state, number: action.payload };
    case ACTIONS.ADD_AGE:
      return { ...state, age: action.payload };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
}

const FormExample = () => {
  // call useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const actionType =
      name === "name"
        ? ACTIONS.ADD_NAME
        : name === "email"
        ? ACTIONS.ADD_EMAIL
        : name === "number"
        ? ACTIONS.ADD_NUMBER
        : name === "age"
        ? ACTIONS.ADD_AGE
        : null;

    if (actionType) {
      dispatch({ type: actionType, payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log("Form submitted:", state);
    dispatch({ type: ACTIONS.RESET }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.username} // Access username from state
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input
            type="tel"
            name="number"
            value={state.number}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={state.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
