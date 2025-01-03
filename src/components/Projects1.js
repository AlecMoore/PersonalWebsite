import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Trading Bot Back Tester',
      description: 'The idea behind this application is to create a scaleable sandbox for me to test trading '
      + 'bot ideas. It has the ability to obtain historical klines from exchange APIs and store them in a database. '
      + 'This data can then be used to back test the strategies.',
      link: 'https://github.com/AlecMoore/BackTester',
      language: 'C#',
    },
    {
      title: 'Crypto Portfolio Balancer',
      description: 'This console app monitors cryptocurrency investments and ensures portfolio allocations '
      + 'by using CoinGecko\'s API to gather price data and calculate position values. If a position falls '
      + 'below its target allocation, the app executes trades using APIs from Binance, Bitfinex, and Gate.io.',
      link: 'https://github.com/AlecMoore/PortfolioBalancer',
      language: 'C#',
    },
    {
      title: 'Investment Manager',
      description: 'This Java application standardizes transaction history CSV exports from various investment'
      + ' platforms into a single format. It then combines these transactions into one CSV file for managing '
      + 'investment allocations and tracking for tax reporting.',
      link: 'https://github.com/AlecMoore/InvestmentPortfolioManager',
      language: 'Java',
    },
    {
      title: 'Crypto Trading Bot',
      description: 'This solution features trading bots that use APIs to fetch prices and execute trades '
      + 'based on strategies like moving averages, RSI, and the Fear and Greed index. The bots run continuously '
      + 'through Azure Function Apps.',
      link: 'https://github.com/AlecMoore/FtxApi',
      language: 'C#',
    },
    {
      title: 'Management Accounts Helper',
      description: 'This web app streamlines management accounting by allowing accountants to input data directly '
      + 'on the platform, which then generates a formatted export.',
      link: 'https://github.com/AlecMoore/ManagementAccountsPortal-WIP-',
      language: 'C# MVC',
    },
    {
      title: 'Recipe Sharing Website',
      description: 'This collaborative project aims to create a recipe-sharing website, featuring a React frontend '
      + 'and a C# API.',
      link: 'https://github.com/AlecMoore/RecipeWebsite-WIP-',
      language: 'React, C#',
    },
    {
      title: 'Isle of Man Business Directory',
      description: 'This website is intended to help connect businesses with customers on the Isle of Man.',
      link: 'https://github.com/AlecMoore/AllManx-WIP-',
      language: 'C# MVC',
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-list">
        {projects.map((projects, index) => (
          <a key={index} className="projects-card" href={projects.link} target="_blank" rel="noopener noreferrer">
            <div className='language'>
              <p>{projects.language}</p>
            </div>
            <div className='details'>
              <h3>{projects.title}</h3>
              <p>{projects.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
