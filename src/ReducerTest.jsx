import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state + 1;
  }
};
const initialState = 0;
function ReducerTest() {
  const [ct, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>UseReducer</h1>
      <h2>Count-{ct}</h2>
      <div>
        <buttonl
          onClick={() => {
            dispatch("increment");
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch("decrement");
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            dispatch("reset");
          }}
        >
          reset
        </button>
      </div>
    </>
  );
}

export default ReducerTest;
