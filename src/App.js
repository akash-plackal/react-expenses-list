import React, { useState } from "react";
import DropDown from "./components/DropDown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [IsOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!IsOpen);

  return (
    <>
      <GlobalStyles />
      <Navbar toggle={toggle} />
      <Hero />
      <DropDown IsOpen={IsOpen} toggle={toggle} />
    </>
  );
}

export default App;
