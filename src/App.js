import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";

function App() {
  const current_theme = localStorage.getItem("current_state");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_state", theme);
  });

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
