import React from "react";
import "./Experiences.css";
import resume from "../assets/2BresumeNEW.pdf";
import alertdriving_logo from "../assets/alertdriving_logo.jpeg";
import ontario_logo from "../assets/ontario.png";
import chat_logo from "../assets/chat.png";

const experiencesData = [
  {
    id: 1,
    title: "Software Quality Assurance Engineering Intern",
    company: "AlertDriving",
    duration: "May 2024 - Aug 2024",
    tools: "Tools: Jira, PostgreSQL, DBeaver, Apache JMeter",
    p1: "• Utilized <strong>Jira</strong> to report, track and monitor application progress ensuring streamlined communication and productivity between QA, development, and BA teams to timely resolve application bugs.",
    p2: "• Identified, documented, and <strong>reported 150+ critical bugs</strong> during manual and regression testing, providing detailed descriptions, reproducible steps, and screenshots to expedite development.",
    p3: "• Verified data accuracy and integrity in <strong>PostgreSQL</strong> databases using <strong>DBeaver</strong>, ensuring back-end processes are aligned with application requirements.",
    p4: "• Simulated user interactions and populated test data using <strong>Apache JMeter</strong> providing realistic testing scenarios and ensuring comprehensive test coverage for application functionality.",
    image: alertdriving_logo,
    link: "https://www.alertdriving.info/",
  },
  {
    id: 2,
    title: "IT QA Assistant",
    company: "Ontario Ministry of Education",
    duration: "Sept 2023 - Dec 2023",
    tools: "Tools: HTML, CSS, JavaScript, Bootstrap",
    p1: "• Developed and implemented features and content of the EFIS 2.0 board user guide into a web page using <strong>HTML</strong> and <strong>CSS.</strong>", 
    p2: "• Optimized web page loading using <strong>HTML</strong> and <strong>JavaScript</strong> resulting in a <strong>95%</strong> reduction in load times.",
    p3: "• Processed over <strong>100+</strong> user access requests and role updates in EFIS 2.0 software.",
    p4: "• Resolved <strong>250+ IT-related issues</strong> regarding the EFIS 2.0 software, resulting in a more streamlined experience for municipal, First Nations, and school board users.",
    image: ontario_logo,
    link: "https://efis.fma.csc.gov.on.ca/faab/",
  },
  {
    id: 3,
    title: "Data Processor",
    company: "CHAT Insurance",
    duration: "Jan 2023 - Apr 2023",
    tools: "Tools: Excel",
    p1: "• Organized <strong>10+ loss run reports in excel</strong>, assigning producer codes to existing insurance policies.",
    p2: "• Processed and used critical thinking to match insurance premiums for <strong>60+ policy changes, renewals, applications and cancellations</strong> to upload to insurance companies.",
    p3: "• Provided <strong>administrative support</strong> to brokers to resolve client issues such as declined/missing credit card information or missing files.",
    p4: "• <strong>Troubleshooted and configured company VPN connection</strong>; fixed error ”Cannot allocate TUN/TAP dev dynamically, allowing for remote access to Power Broker software for employees.",
    image: chat_logo,
    link: "https://chatin.ca/", 
  },
];

const Experiences = () => {
  const handleExperienceClick = (link) => {
    window.location.href = link;
  };

  return (
    <section id="experiences">
      <div className="Experiences">
        <h1 className="title">Experience</h1>
        <ul className="experiences-list">
          {experiencesData.map((experience) => (
            <div
              key={experience.id}
              className="experience-link"
              onClick={() => handleExperienceClick(experience.link)}
            >
              <li className="experience-item">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="experience-image"
                />
                <div className="experience-details">
                  <h3 className="experience-title">{experience.title}</h3>
                  <p className="experience-company">{experience.company}</p>
                  <p className="experience-duration">{experience.duration}</p>
                  <p className="experience-tools">{experience.tools}</p>
                  <p className="p1" dangerouslySetInnerHTML={{ __html: experience.p1 }}></p>
                  <p className="p2" dangerouslySetInnerHTML={{ __html: experience.p2 }}></p>
                  <p className="p3" dangerouslySetInnerHTML={{ __html: experience.p3 }}></p>
                  <p className="p4" dangerouslySetInnerHTML={{ __html: experience.p4 }}></p>
                </div>
              </li>
            </div>
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
