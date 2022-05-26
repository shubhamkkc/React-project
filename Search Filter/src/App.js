import "./styles.css";
import mockData from "./MOCK_DATA.json";
import React, { useState } from "react";
export default function App() {
  const [data, setData] = useState("");
  function handleChange(event) {
    setData(event.target.toLowerCase());
  }
  return (
    <div className="App">
      <input onChange={handleChange} placeholder="search..."></input>
      {mockData
        .filter((listData) => {
          if (data === "") return listData;
          else if (listData.first_name.toLowerCase().includes(data))
            return listData;
        })
        .map((listData, key) => {
          return (
            <div key={key}>
              {" "}
              <p>{listData.first_name}</p>
            </div>
          );
        })}
    </div>
  );
}
