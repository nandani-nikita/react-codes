import React, { useState } from "react";
import ListItem from "./ListItem";
import "./App.css";

function App() {
  const [itemList, setItemList] = useState("");
  const [item, setItem] = useState([]);
  const itemEvent = (event) => {
    setItemList(event.target.value);
  };
  const clickButton = (event) => {
    setItem((oldData) => {
      return [itemList, ...oldData];
    });
    setItemList("");
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        name="itemList"
        placeholder="Add Items"
        onChange={itemEvent}
        value={itemList}
      />
      <button onClick={clickButton}>+</button>
      <div className="center">
        <ul>
          {item.map((data, index) => {
            return <ListItem key={index} text={data} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
