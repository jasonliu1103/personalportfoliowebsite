import React from "react";
import "./Experiences.css";

const experiencesData = [
  {
    id: 1,
    title: "Software Quality Assurance Engineering Intern",
    company: "AlertDriving",
    duration: "May 2024 - Present",
    description: "",
  },
  {
    id: 2,
    title: "IT QA Assistant",
    company: "Ontario Ministry of Education",
    duration: "Sept 2023 - Dec 2023",
    description:
      "Developed websites for clients using HTML, CSS, and JavaScript",
  },
  // Add more experiences as needed
];

const Experiences = ({ theme }) => {
  const titleColor = theme === "light" ? "#000" : "#fff";

  return (
    <section id="experiences">
      <div className="Experiences" style={{ color: titleColor }}>
        <h1 className="title">Experiences</h1>
        <ul className="experiences-list">
          {experiencesData.map((experience) => (
            <li key={experience.id} className="experience-item">
              <h3>{experience.title}</h3>
              <p>{experience.company}</p>
              <p>{experience.duration}</p>
              <p>{experience.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experiences;
