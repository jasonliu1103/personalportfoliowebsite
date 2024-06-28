import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import websitepic from "../assets/website.png";

const projectsdata = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio website created with React that highlights my work experience and projects.",
    link: "", 
    githublink: "", 
    tools: "React, CSS",
    image: websitepic, 
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects">
        <h1 className="title">Projects</h1>
        {projectsdata.map((project) => (
          <div key={project.id} className="project-card">
            {project.image ? (
              <img src={project.image} alt={project.title} className="project-image" />
            ) : (
              <div className="project-image-placeholder">No Image Available</div>
            )}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.tools && (
              <p className="project-tools">
                <strong>Tools:</strong> {project.tools}
              </p>
            )}
            {project.link && (
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
            {project.githublink && (
              <a
                href={project.githublink}
                className="project-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="github-icon"/> 
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
