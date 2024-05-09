import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo_light from "../assets/logo-black.png";
import logo_dark from "../assets/logo-white.png";
import dark_toggle from "../assets/day.png";
import light_toggle from "../assets/night.png";

const Navbar = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className={`Navbar ${isScrolled ? "blurred" : ""}`}>
      <Link to="home" smooth={true} duration={500}>
        <img
          src={theme === "light" ? logo_light : logo_dark}
          alt=""
          className="logo"
        />
      </Link>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="experiences" smooth={true} duration={500}>
            Experiences
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
