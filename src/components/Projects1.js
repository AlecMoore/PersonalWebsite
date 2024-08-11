import React from 'react';
import './Projects.css';

const Projects = () => {
  // Example project data, replace with your actual project details
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One.',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'A brief description of Project Three.',
      link: '#'
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-list">
        {projects.map((project, index) => (
            <a key={index} className="project-card" href={project.link} target="_blank" rel="noopener noreferrer">
              <div className='details'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
