import "./styles.css";
import React, { useState,useEffect } from "react";
export default function App() {

  useEffect(()=>{
    if (value >= 14) setColor("hot");
    if (value < 14) setColor("cold");
  },[value])
  const [value, setValue] = useState(14);
  const [color, setColor] = useState("netural");
  function inc() {
    if (value === 30) return;
    setValue(value + 1);
   
  }
  function dec() {
    if (value === 0) return;
    setValue(value - 1);
   
  }
  return (
    <div className="App">
      <div className="background">
        <div className="output-container">
          <div className={`output ${color}`}>
            <span>{value} C</span>
          </div>
        </div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
}
