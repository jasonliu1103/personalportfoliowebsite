import React from "react";
import "./Experiences.css";
import resume from "../assets/JasonLiuResume.pdf";
import alertdriving_logo from "../assets/alertdriving_logo.jpeg";
import ontario_logo from "../assets/ontario.png";
import chat_logo from "../assets/chat.png";

const experiencesData = [
  {
    id: 1,
    title: "Software Quality Assurance Engineering Intern",
    company: "AlertDriving",
    duration: "May 2024 - Present",
    description: "Tools: Jira, PostgreSQL",
    image: alertdriving_logo,
  },
  {
    id: 2,
    title: "IT QA Assistant",
    company: "Ontario Ministry of Education",
    duration: "Sept 2023 - Dec 2023",
    description: "Tools: HTML, CSS, JavaScript, Bootstrap",
    image: ontario_logo,
  },
  {
    id: 3,
    title: "Data Processor",
    company: "CHAT Insurance",
    duration: "Jan 2023 - Apr 2023",
    description: "Tools: Excel",
    image: chat_logo,
  },
];

const Experiences = () => {

  return (
    <section id="experiences">
      <div className="Experiences">
        <h1 className="title">Experience</h1>
        <ul className="experiences-list">
          {experiencesData.map((experience) => (
            <li key={experience.id} className="experience-item">
              <img
                src={experience.image}
                alt={experience.title}
                className="experience-image"
              />
              <div className="experience-details">
              <h3 className="experience-title">{experience.title}</h3>
              <p className="experience-company">{experience.company}</p>
              <p className="experience-duration">{experience.duration}</p>
              <p className="experience-description">{experience.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <a
          href={resume}
          className="resume-btn-experiences"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full Resume {"->"}
        </a>
      </div>
    </section>
  );
};

export default Experiences;
