import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <p>
        I’m a full-stack software developer specializing in <span className='green-bold'>fintech </span> 
        and <span className='green-bold'>financial trading</span>. I 
        create high-performance, secure, and scalable applications that drive financial 
        innovation. My expertise lies in thoroughly analyzing problems, planning solutions 
        meticulously, and executing them effectively.
      </p>
      <p>
        With a background in Physics, I developed advanced mathematical models and explored 
        <span className='green-bold'> financial derivatives</span>. The COVID-19 pandemic allowed me to deepen my interest in 
        trading and <span className='green-bold'>cryptocurrencies</span>. 
        I trained in <span className='green-bold'>algorithm design</span> while working on cutting-edge 
        missile systems before applying my skills at a cryptocurrency exchange, where I 
        gained insight into fintech solutions like <span className='green-bold'>embedded banking</span> and 
        <span className='green-bold'> Bitcoin</span> for global 
        remittance.
      </p>
      <p>
        Now, I’m focused on leveraging my experience to build innovative financial solutions.
      </p>
    </div>
  );
};

export default About;
