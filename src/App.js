import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Skill from "./components/Skill/Skill";
import { Stats } from "./components/Github/Stats";
import { Calendar } from "./components/Github/Calender";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Projects />
        <Calendar/>
        <Stats/>
        <Resume />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
