import elykSrc from '../../assets/images/elyk-showcase.jpg';
import apexSrc from '../../assets/images/apex-legends-showcase.jpg';
import dashboardSrc from '../../assets/images/dashboard-showcase.jpg';
import moviesPlusSrc from '../../assets/images/movies-plus-showcase.jpg';

const portfolioData = [
  {
    name: 'Site Build & Consulting',
    description:
      'Consulted with the web development team to teach them GatsbyJS and built a new company site for them in the process.',
    projectFor: 'Elyk Innovation',
    image: elykSrc,
    about: '/projects/elyk-innovation/',
    skills: ['React', 'Gatsby', 'Styled Components', 'Headless WordPress'],
  },
  {
    name: 'Streaming Site',
    description:
      'A mock web application for a movie streaming platform built with the Movie Database API.',
    projectFor: 'Personal Project',
    image: moviesPlusSrc,
    link: 'https://movies-plus.vercel.app/',
    repo: 'https://github.com/kylemire1/movies-plus-typescript',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Firebase Auth'],
  },
  {
    name: 'Bug Tracking Dashboard',
    description:
      'A web app with full CRUD capabilities for tracking bugs in my personal projects.',
    projectFor: 'Personal Project',
    image: dashboardSrc,
    link: 'https://hungry-sinoussi-134062.netlify.app/',
    repo: 'https://github.com/kylemire1/ticket-tracker',
    skills: ['React', 'Firebase Auth', 'Firestore'],
  },
  {
    name: 'Apex Legends Profile Tracker',
    description:
      'A full-stack web app that displays game profile data from Tracker.gg.',
    projectFor: 'Personal Project',
    image: apexSrc,
    link: 'https://apex-legends-stat-tracker.herokuapp.com',
    repo: 'https://github.com/kylemire1/apex-legends-stat-tracker',
    skills: ['React', 'Node', 'Express'],
  },
];

export default portfolioData;
