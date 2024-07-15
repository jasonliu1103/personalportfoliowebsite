import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Experiences from "./components/Experiences.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const current_theme = localStorage.getItem("current_state");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_state", theme);
  });

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home theme={theme} setTheme={setTheme} />
      <About theme={theme} setTheme={setTheme} />
      <Experiences theme={theme} setTheme={setTheme} />
      <Projects theme={theme} setTheme={setTheme} />
      <Contact theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
