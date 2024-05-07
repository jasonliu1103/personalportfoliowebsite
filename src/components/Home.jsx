import React from "react";
import { FaGithub } from "react-icons/fa";
import resume from "../assets/JasonLiuResume.pdf";
import { TypeAnimation } from "react-type-animation";

const Home = ({ theme }) => {
  return (
    <div>
      <h1
        className="title"
        style={{
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        Welcome! My name is Jason.
      </h1>
      <TypeAnimation
        className="typeanimation"
        style={{
          color: theme === "light" ? "#000" : "#fff",
        }}
        sequence={[
          "I'm an aspiring engineer",
          1500,
          "I'm a music enthusiast",
          1500,
          "I'm an ECE student at UWaterloo",
          1500,
        ]}
        wrapper="span"
        speed={200}
        deletionSpeed={200}
        repeat={Infinity}
        cursor={true}
        key={theme}
      />
      <p
        className="smaller-heading"
        style={{
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        This is my website. You will find everything you need to know about me
        here. Enjoy.
      </p>
      <a href={resume} target="_blank" rel="noopener noreferrer">
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
