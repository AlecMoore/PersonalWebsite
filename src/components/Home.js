import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

// Import the components that correspond to different sections
import About from './About';
import Projects from './Projects1';
import Experience from './Experience';
import ParticlesBackground from './ParticlesBackground';



const Home = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Create refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  // Handle click event to update the active section
  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6 // Trigger when 60% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe each section
    const sections = [aboutRef.current, experienceRef.current, projectsRef.current];
    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className='home-wrapper'>
      <ParticlesBackground />
      
      <div className="home-container">
        <div className="content-container">
          <div className="menu">
            <div>
              <h1>Alec Moore</h1>
              <h2>Senior Software Engineer</h2>
              <p className="summary-text">I craft secure, scalable, and innovative digital solutions.</p>
              <ul>
                <li className={activeSection === 'about' ? 'active' : ''}>
                  <a href="#about" onClick={() => handleClick('about')}>
                    <span className='bullet-line'></span>
                    <span className='bullet-text'>About</span>
                  </a>
                </li>
                <li className={activeSection === 'experience' ? 'active' : ''}>
                  <a href="#experience" onClick={() => handleClick('experience')}>
                    <span className='bullet-line'></span>
                    <span className='bullet-text'>Experience</span>
                  </a>
                </li>
                <li className={activeSection === 'projects' ? 'active' : ''}>
                  <a href="#projects" onClick={() => handleClick('projects')}>
                    <span className='bullet-line'></span>
                    <span className='bullet-text'>Projects</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='socials'>
            <a href='https://github.com/AlecMoore'>
                <svg className='social-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
              <a href='https://www.linkedin.com/in/alec-moore-2853261b6'>
                <svg className='social-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
              </a>
              <a href='tel:+447798707822'>
                <svg className='social-icon mobile-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.27" fill="currentColor">
                  <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z"/>
                </svg>
              </a>
              <a href='mailto:alec.moore1998@gmail.com'>
                <svg className='social-icon email-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="content">
            <section id="about" ref={aboutRef}>
              <About />
            </section>
            <section id="experience" ref={experienceRef}>
              <Experience />
            </section>
            <section id="projects" ref={projectsRef}>
              <Projects />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
