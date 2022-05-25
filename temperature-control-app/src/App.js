import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [value, setValue] = useState(14);
  const [color, setColor] = useState("netural");
  function inc() {
    if (value === 30) return;
    setValue(value + 1);
    if (value >= 14) setColor("hot");
  }
  function dec() {
    if (value === 0) return;
    setValue(value - 1);
    if (value <= 14) setColor("cold");
  }
  return (
    <div className="App">
      <div class="background">
        <div class="output-container">
          <div class={`output ${color}`}>
            <span>{value} C</span>
          </div>
        </div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
}
