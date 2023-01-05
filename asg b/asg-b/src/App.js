import React from "react";
import { Header, Footer } from "./Related";
import { contacts } from "./List";
import Contact from "./DisplayList";

function App() {
  const contactItems = contacts.map((item) => (
    <Contact key={item.id} attr={item} />
  ));

  return (
    <>
      <Header />
      {contactItems}
      <Footer />
    </>
  );
}

export default App;
