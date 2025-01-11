import React from 'react';
import Project from '../components/Project/Project';
import Politicly from '../assets/images/Projects/politicly.png';
import MorganPham from '../assets/images/Projects/MorganPham.png';
import CEASAmbassadors from '../assets/images/Projects/ceas-ambassadors.png';

const projectData = [
  {
    title: 'Politic.ly',
    description:
      'Web application aimed at uniting young Americans together on community efforts and local politics to bring about change that affects your day to day. Users can create ‘initiatives’ to easily gain exposure within the community, assemble and mobilize volunteers, and communicate with their audience. Our application was designed in Figma, our frontend built with React.js, backend built in Express.js, data hosted on MongoDB, and accounts secured through Google SSO.',
    links: [
      {
        id: 0,
        icon: 'github',
        href: 'https://github.com/lizisawizard/Politic.ly/',
      },
      {
        id: 1,
        icon: 'website',
        href: 'https://politicly.app',
      },
      {
        id: 2,
        icon: 'figma',
        href: 'https://www.figma.com/file/2Y3q7n4LyJ6GE03pOQvDiz/Senior-Design?type=design&node-id=0%3A1&mode=design&t=BorCsmJXChvCcCFE-1',
      },
    ],
    imagePath: Politicly,
    imageAltText: 'Politic.ly Login Page',
  },
  {
    title: 'Morgan & Pham Campaign Site',
    description:
      'Student government campaign site to share Taylor Morgan and Vu Pham’s values, team, supporters, social medias, and story. The site was designed in Figma, uses React.js as a front end framework, and is hosted on Netlify. I collaborated with Taylor and Vu on the design and was able to put the site together in about 2-3 weeks. ',
    links: [
      {
        id: 0,
        icon: 'github',
        href: 'https://github.com/lizisawizard/MorganPham',
      },
    ],
    imagePath: MorganPham,
    imageAltText: 'Taylor & Vu logo',
  },
  {
    title: 'CEAS Ambassadors Website',
    description:
      'Club website used to coordinate college tours, manage meeting and tour attendance, host resources, and maintain club roster so external parties to connect with ambassadors. The application currently uses Pug.js for frontend, Express.js for backend, and MySQL for our database. For nearly 3 years, I maintained the website fixing bugs and making small enhancements. In my final year, I led efforts to move to React.js for frontend. The transition to React is a work in progress.',
    links: [
      {
        id: 0,
        icon: 'github',
        href: 'https://github.com/ceas-ambassadors/ceas-ambassadors-website',
      },
      {
        id: 1,
        icon: 'website',
        href: 'https://ucceasambassadors.com/',
      },
    ],
    imagePath: CEASAmbassadors,
    imageAltText: 'CEAS Ambassadors logo',
  },
];

const Landing = () => {
  const getMando = () => {
    const time = new Date();
    const hours = time.getHours();
    if (hours > 0 && hours < 10) {
      return '早上好';
    } else if (hours < 17) {
      return '你好';
    } else {
      return '晚上好';
    }
  };

  return (
    <div className="landing">
      <div className="landing__intro">
        <p className="landing__mandarin">{getMando()}!</p>
        <h1 className="landing__title">
          My name <br /> is <span className="landing__title-special">Liz</span>.
        </h1>
        <div className="landing__description">
          <p>
            I’m a <strong>designer & developer</strong> driven by my love for
            coding and creating beautiful yet functional experiences.
          </p>
          <p>
            Currently a <strong>software engineer</strong> @{' '}
            <a href="https://www.8451.com/" target="_blank" rel="noreferrer">
              84.51°
            </a>
          </p>
        </div>
      </div>
      <div className="landing__projects">
        <h2>projects</h2>
        <div className="landing__projects-grid">
          {projectData.map((p) => (
            <Project
              title={p.title}
              description={p.description}
              imagePath={p.imagePath}
              imageAltText={p.imageAltText}
              links={p.links}
              key={p.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
