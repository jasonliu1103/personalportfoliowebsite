import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="About">
        <h1 className="about-title">
          About Me
        </h1>
        <p className="smaller-heading1">
          My name is Jason, I am a
          <b>
            second-year computer engineering student at the University of
            Waterloo.
          </b>
          I have a keen sense of detail, I enjoy problem-solving and I am a fast
          learner. I have much experience dealing with IT-related issues from my
          previous co-op terms.
        </p>
        <p className="smaller-heading2">
          I previously worked for the Ontario Ministry of Education and each day
          brought a new set of issues to resolve for end users ranging from
          login issues, and issues involving access to different roles within
          EFIS(Education Financial Information System). I was also responsible
          for front-end development work which involved converting a large user
          guide into a webpage. During my first co-op term, I had to communicate
          with brokers to resolve client issues such as declined/missing credit
          card information or missing files. I would then process insurance
          policies, renewals, and cancellations for the insurance companies
          through their portals. My time as a youth carrier reinforced my
          organizational skills and time management as I was responsible for
          delivering organized flyers and newspapers on time in my
          neighbourhood.
        </p>
        <p className="smaller-heading3">
          If I am not studying or coding, I typically enjoy listening to music,
          playing basketball, playing video games(find me on Valorant or
          Fortnite!) or driving around.
        </p>
        <p className="smaller-heading4">
          I believe that I have the skills, passion, and work ethic to bring
          positive contributions to the field of engineering and technology.
        </p>
      </div>
    </section>
  );
};

export default About;
