import React from "react";

function Time(props) {
  return props.attr.imageURL ? (
    <div>
      <img
        style={{ width: "200px", height: 150 }}
        src={"images/" + props.attr.imageURL}
      />
    </div>
  ) : (
    <div></div>
  );
}

export default Time;
