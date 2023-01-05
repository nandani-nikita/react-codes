import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <div className="main">
        {/* <Link to="/" className="link">
          <button> Home </button>
        </Link>
        <br/>
        <br/> */}
        <Link to="/Odd" className="odd">
          <button> ODD </button>
        </Link>
        
        <Link to="/Even" className="even">
          <button> EVEN </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
