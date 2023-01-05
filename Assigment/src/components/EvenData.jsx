import React from "react";
import "./style.css";

function EvenData(props) {
  return (
    <div className="topics">
      <h1> Topics with EVEN Id </h1>
      {props.course.map(function (data) {
        return (
          data.id % 2 === 0 && (
            <div className="even" key={data.id}>
              <p>
                Id: {data.id} <br /> Name: {data.name}
              </p>
            </div>
          )
        );
      })}
    </div>
  );
}

export default EvenData;
