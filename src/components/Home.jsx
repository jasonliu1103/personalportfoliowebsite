import React from "react";
import { FaGithub } from "react-icons/fa";
import resume from "../assets/JasonLiuResume.pdf";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

const Home = ({ theme }) => {
  return (
    <section id="home">
      <div className="Home">
        <h1
          className="home-title"
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
          You will find everything you need to know about me here. Enjoy.
        </p>
        <a
          href={resume}
          className="resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          href="https://github.com/jasonliu1103"
          className="github-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Home;
