import React from "react";

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
      <p3>
        This is my website. You will find everything you need to know about me
        here. Enjoy.
      </p3>
    </div>
  );
};

export default Home;
