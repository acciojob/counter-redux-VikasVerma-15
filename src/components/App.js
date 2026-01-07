import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice"; 


const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      {/* 1st child */}
      <h1>{count}</h1>

      {/* 2nd child */}
      <button onClick={() => dispatch(increment())}>
        increment
      </button>

      {/* 3rd child */}
      <button onClick={() => dispatch(decrement())}>
        decrement
      </button>
    </div>
  );
};

export default App;
