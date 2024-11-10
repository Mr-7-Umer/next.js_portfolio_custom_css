import React from "react";
import "../app/styles/skills.css"; // Importing custom CSS for Skills

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        <div data-aos="fade-up" className="skills-text">
          <h2 className="skills-title">Technologies I Work On</h2>
          <p className="skills-description">
            I'm passionate about using the latest technologies to build modern,
            scalable applications. Here are the technologies I work with.
          </p>
        </div>

        <div className="skills-list">
          <div className="skills-list-column">
            <ul>
              <li data-aos="zoom-in-up" className="tech-item typescript">
                Typescript
              </li>
              <li data-aos="zoom-in-up" className="tech-item nextjs">
                Next.js
              </li>
              <li data-aos="zoom-in-up" className="tech-item python">
                Python
              </li>
            </ul>
          </div>
          <div className="skills-list-column">
            <ul>
            <li data-aos="zoom-in-up" className="tech-item html">
                Html
              </li>
              <li data-aos="zoom-in-up" className="tech-item css">
               CSS
              </li>
              <li data-aos="zoom-in-up" className="tech-item tailwind">
                Tailwind
              </li>
              <li data-aos="zoom-in-up" className="tech-item nodejs">
                Node.js
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
