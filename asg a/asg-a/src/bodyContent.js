import React from "react";
import { checkTime } from "./checkTime";

export const BodyContent = () => {
  return (
    <>
      Your Name: <input type="text" name="name" id="name"></input>
      <br />
      Your Birth Time: <input type="time" name="bTime" id="bTime" />
      <br />
      <br />
      <button onClick={checkTime} name="btn" id="btn">
        Get Personality Type
      </button>
      <br />
      <br />
      <div id="personType"></div>
    </>
  );
};
