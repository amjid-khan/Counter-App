import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div id="counter">
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </>
  );
}

export default Counter;