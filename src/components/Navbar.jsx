import React from "react";
import "./Navbar.css";
import logo_light from "../assets/logo-black.png";
import logo_dark from "../assets/logo-white.png";
import dark_toggle from "../assets/day.png";
import light_toggle from "../assets/night.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Experiences</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme === "light" ? light_toggle : dark_toggle}
        alt=""
        className="icon-toggle"
      />
    </div>
  );
};

export default Navbar;
