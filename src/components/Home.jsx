import React from "react";
import { FaGithub } from "react-icons/fa";
import resume from '../assets/JasonLiuResume.pdf';

const Home = ({ theme }) => {
  return (
    <div>
      <h1
        className="toggle-heading"
        style={{
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        Welcome! My name is Jason.
      </h1>
      <p
        className="toggle-heading"
        style={{
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        This is my website. You will find everything you need to know about me
        here. Enjoy.
      </p>
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <a
        href="https://github.com/jasonliu1103"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Home;
