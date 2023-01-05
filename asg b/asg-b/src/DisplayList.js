import React from "react";

function Contact(props) {
  return props.attr.imageURL ? (
    <div className="main">
      <img
        style={{ width: "250px", height: 250 }}
        src={"images/" + props.attr.imageURL}
      />
      <div className="details">
        <h3 className="nameHeading">{props.attr.name}</h3>
        <h4>{props.attr.contact}</h4>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default Contact;
