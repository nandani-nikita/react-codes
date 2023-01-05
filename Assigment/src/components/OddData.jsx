import React from "react";

function OddData(props) {
  return (
    <div className="topics">
      <h1> Topics with ODD Id </h1>
      {props.course.map(function (data) {
        return (
          data.id % 2 !== 0 && (
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

export default OddData;
