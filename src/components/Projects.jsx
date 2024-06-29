import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import websitepic from "../assets/website.png";
import darkwebsitepic from '../assets/darkwebsitepic.png';
import javapic from "../assets/java.png"
import darkjavapic from "../assets/javadark.png"
import qm from "../assets/qm.png"

const projectsdata = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio website created with React that highlights my work experience and projects.",
    link: "", 
    githublink: "https://github.com/jasonliu1103/personalportfoliowebsite", 
    tools: "React.js, CSS",
    image: websitepic, 
    darkImage: darkwebsitepic,
  },
  {
    id: 2,
    title: "Some Java Project",
    description: "Some new Java project that I started working on.",
    link: "", 
    githublink: "", 
    tools: "Java",
    image: javapic, 
    darkImage: darkjavapic,
  },
  {
    id: 3,
    title: "To Be Thought Of",
    description: "It doesn't exist yet. Please wait until I think of something.",
    link: "", 
    githublink: "", 
    tools: "Insert some programming language", 
    image: qm,
  },
  {
    id: 4,
    title: "To Be Thought Of",
    description: "It doesn't exist yet. Please wait until I think of something.",
    link: "", 
    githublink: "", 
    tools: "Insert some programming language", 
    image: qm,
  },
  {
    id: 5,
    title: "To Be Thought Of",
    description: "It doesn't exist yet. Please wait until I think of something.",
    link: "", 
    githublink: "", 
    tools: "Insert some programming language", 
    image: qm,
  },
  {
    id: 6,
    title: "To Be Thought Of",
    description: "It doesn't exist yet. Please wait until I think of something.",
    link: "", 
    githublink: "", 
    tools: "Insert some programming language", 
    image: qm,
  },
];

const Projects = ({theme, setTheme}) => {
  return (
    <section id="projects">
      <div className="projects">
        <h1 className="title">Projects</h1>
        {projectsdata.map((project) => (
          <div key={project.id} className="project-card">
            <img src={theme === "dark" && project.darkImage ? project.darkImage : project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tools">
              <strong>Tools:</strong> {project.tools}
            </p>
            <div className="link-container">
            <a
              href={project.githublink}
              className="project-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> 
            </a>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsBoxArrowUpRight />
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
