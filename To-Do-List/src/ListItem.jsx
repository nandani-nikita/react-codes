import React, { useState } from "react";

function ListItem(props) {
  const [val, setVal] = useState(false);

  const checkbox = () => {
      if(val === true) {
          setVal(false);
      } else {
          setVal(true);
      }
  };
  
  return (
    <div className="mainDiv">
      <span>
        <input type="checkbox" onClick={checkbox} />{" "}
      </span>{" "}
      <li
        className="listItem"
        style={{
          textDecoration: val ? "line-through" : "none",
          fontStyle: val ? "italic" : "normal",
          color: val ? "grey" : "black",
        }}
      >
        
        {props.text}{" "}
      </li>{" "}
    </div>
  );
}

export default ListItem;
