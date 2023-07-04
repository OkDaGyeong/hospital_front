import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../modules/counterSlice";

const Counter = () => {
  const number = useSelector((state) => state.counterSlice.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
