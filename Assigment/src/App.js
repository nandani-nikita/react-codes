import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OddData from "./components/OddData";
import Home from "./components/Home";
import EvenData from "./components/EvenData";

function App() {
  const [course, setcourse] = useState([{}]);

  useEffect(() => {
    const url = "https://teamtreehouse.com/matthew.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        const item = json.badges;
        // console.log(item);
        setcourse(item);
        // console.log(course);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [course]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Odd" element={<OddData course={course} />} exact />

        <Route path="/Even" element={<EvenData course={course} />} exact />
      </Routes>
      .
    </Router>
  );
}

export default App;
