import "./styles.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function inc() {
    setCounter((prev) => prev + 1);
  }
  function dec() {
    setCounter((prev) => prev - 1);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={inc}> +</button>
      <button onClick={dec}> -</button>
    </div>
  );
}

export default App;
