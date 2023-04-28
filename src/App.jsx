import { useState } from "react";
import "./App.css";
import { NavBar } from "../src/components/Navbar";
import { Banner } from "../src/components/Banner";
import { Skills } from "../src/components/Skills";
import { Projects } from "../src/components/Projects";
import { Contact } from "../src/components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
