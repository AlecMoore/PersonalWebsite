import React from 'react';
import './Experience.css';

const Experience = () => {
  // Example experience data, replace with your actual experience details
  const experience = [
    {
      title: 'Senior Software Developer - CoinCorner Ltd',
      description: 'A brief description of Project One.',
      link: 'https://www.coincorner.com/',
      dates: '2024 - Present'
    },
    {
      title: 'Software Developer - CoinCorner Ltd',
      description: 'A brief description of Project Two.',
      link: 'https://www.coincorner.com/',
      dates: '2022 - 2024'
    },
    {
      title: 'Graduate Software Developer - MBDA UK',
      description: 'A brief description of Project Three.',
      link: 'https://www.mbda-systems.com/',
      dates: '2021 - 2022'
    },
    {
      title: 'Graduate Software Development Engineer in Test - MBDA UK',
      description: 'A brief description of Project Three.',
      link: 'https://www.mbda-systems.com/',
      dates: '2021 - 2021'
    },
    {
      title: 'Graduate Systems Engineer - MBDA UK',
      description: 'A brief description of Project Three.',
      link: 'https://www.mbda-systems.com/',
      dates: '2020 - 2021'
    },
    {
      title: 'Undergraduate Algorithm Engineer - MBDA UK',
      description: 'A brief description of Project Three.',
      link: 'https://www.mbda-systems.com/',
      dates: '2018 - 2019'
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
              </div>
            </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;
