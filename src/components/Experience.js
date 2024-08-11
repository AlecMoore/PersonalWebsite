import React from 'react';
import './Experience.css';

const Experience = () => {
  const experience = [
    {
      title: 'Senior Software Developer - CoinCorner Ltd',
      description: 'A brief description of Project One.',
      link: 'https://www.coincorner.com/',
      dates: '2024 - Present',
      skills: ['Azure', 'Cloudflare', 'Docker', 'Management Experience', 'c#', 'SQL', 'css/html', 'javascript', 'Kotlin', 'Bitcoin', 'Lightning']
    },
    {
      title: 'Software Developer - CoinCorner Ltd',
      description: 'A brief description of Project Two.',
      link: 'https://www.coincorner.com/',
      dates: '2022 - 2024',
      skills: ['c#', 'SQL', 'css/html', 'javascript', 'Kotlin', 'Bitcoin', 'Lightning']
    },
    {
      title: 'Graduate Software Developer - MBDA UK Ltd',
      description: 'Developed a training tool in c++ that utilised Unity to model the hardware '
      + 'used on naval vessels for a missile system. Created a Java application to be used as a '
      + 'mission planning tool for missile firings, this required simiulating the missile flight'
      + ' for different scenarios including with variable environmental factors and physical objects',
      link: 'https://www.mbda-systems.com/',
      dates: '2021 - 2022',
      skills: ['Java', 'c++', 'Unity', 'Git', 'SonarQube', 'Jenkins', 'OOP', 'Netbeans', 'Virtual Machines']
    },
    {
      title: 'Graduate Systems Engineer - MBDA UK Ltd',
      description: 'Created system requirements for missile launchers embedded on naval vessels.'
      + ' System specifications used in software development were constructed to be comprehensive '
      + 'and understandable.',
      link: 'https://www.mbda-systems.com/',
      dates: '2020 - 2021',
      skills: ['Rhapsody',' DOORS', 'Agile', 'Software Architecture']
    },
    {
      title: 'Undergraduate Algorithm Engineer - MBDA UK Ltd',
      description: 'Developed algorithm specifications for the command and control sub-system of'
      + ' a missile launcher. Algorithms were designed to improve the weapon system\'s performance'
      + ' in the most optimal and relaible way.',
      link: 'https://www.mbda-systems.com/',
      dates: '2018 - 2019',
      skills: ['Rhapsody', 'DOORS', 'Agile', 'Algorithm Design']
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-list">
        {experience.map((experience, index) => (
          <a key={index} className="experience-card" href={experience.link} target="_blank" rel="noopener noreferrer">
            <div className='dates'>
              <p>{experience.dates}</p>
            </div>
            <div className='details'>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
              <div className='skills'>
                {experience.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className='skill-box'>{skill}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;
