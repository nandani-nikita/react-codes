import React from "react";
import { Header, Footer } from "./Related";
import { BodyContent } from "./bodyContent";

function App() {
  const body = (
    <>
      <Header />
      <BodyContent />
      <Footer />
    </>
  );

  return body;
}

export default App;
