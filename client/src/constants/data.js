import images from './images';
export const navData = ['Home', 'About','Experiences', 'Skills', 'Projects', 'Contact'];

export const aboutData = [
  {
    title: 'Efficiency',
    paragraph: 'Efficient code is my forte, ensuring optimal performance and fast execution.',
    imagUrl: images.fast,
  },
  {
    title: 'Adaptability',
    paragraph: 'I develop solutions that adapt seamlessly to diverse environments and requirements.',
    imagUrl: images.responsive,
  },
  {
    title: 'User-Centric Design',
    paragraph: 'My focus lies in crafting intuitive and user-friendly interfaces for enhanced experiences.',
    imagUrl: images.intuitive,
  },
  {
    title: 'Innovation',
    paragraph: 'I thrive on innovation, constantly seeking creative solutions to complex problems.',
    imagUrl: images.dynamic,
  },
];
export const circlesData = [
  images.python,
  images.javascript,
  images.typescript,
  images.airflow,
  images.databricks,
  images.gcp,
  images.awsS3,
  images.docker,
  images.k8s,
  images.reactPng,
  images.css,
  images.node,
  images.git,
];
export const projectsCategoryData = ['React JS', 'Agile', 'Web App', 'All'];
export const ProjectsData = [
  {
    name: 'Shoppie App',
    Description:
      'shopiee app is a platform where you can sell and buy your used items or by a second hand items . (Still under Development)',
    tag: ['React JS', 'All', 'Web App'],
    projectUrl: '',
    codeUrl: 'https://github.com/Mones-Hamd/Shopiee-App',
    imageUrl: images.shopiee,
  },
  {
    name: 'Kom je App',
    Description:
      'This is the final project for the HackYourFuture curriculum we did as a class using the MERN stack by following the agile methodology with our team and a group of mentors',
    tag: ['React JS', 'All', 'Web App', 'Agile'],
    projectUrl: 'https://c38-group1.herokuapp.com/',
    codeUrl: 'https://github.com/Mones-Hamd/FinalProjectHYF',
    imageUrl: images.komJe,
  },
  {
    name: 'Sirra App',
    Description:
      "Sirra app is an app that the user can interact with by choosing the current feeling, (using API's).",
    tag: ['All', 'Web App'],
    projectUrl: 'https://mones-hamd.github.io/Sirra-App-API/',
    codeUrl: 'https://github.com/Mones-Hamd/Sirra-App-API',
    imageUrl: images.sirra,
  },
  {
    name: 'Movie Land App',
    Description: 'simple one hour App to practice using React.',
    tag: ['React JS', 'All', 'Web App'],
    projectUrl: '',
    codeUrl: 'https://github.com/Mones-Hamd/Movie-Land-App',
    imageUrl: images.movie,
  },
];
export const skillsData = [
  { name: 'JavaScript', imageUrl: images.javascript },
  { name: 'TypeScript', imageUrl: images.typescript },
  { name: 'Python', imageUrl: images.python },
  { name: 'Airflow', imageUrl: images.airflow },
  { name: 'Databrikcs', imageUrl: images.databricks },
  { name: 'GCP', imageUrl: images.gcp },
  { name: 'BQ', imageUrl: images.bq },
  { name: 'AWS S3', imageUrl: images.awsS3},
  { name: 'Docker', imageUrl: images.docker },
  { name: 'K8s', imageUrl: images.k8s },
  { name: 'NodeJS', imageUrl: images.node },
  { name: 'SQL', imageUrl: images.sql },
  { name: 'No-SQL', imageUrl: images.nosql },
  { name: 'Data Structure', imageUrl: images.dataStructure },
  { name: 'Algorithms', imageUrl: images.algorithm },
  { name: 'React', imageUrl: images.reactPng },
  { name: 'CSS', imageUrl: images.css },
  { name: 'HTML', imageUrl: images.html },
];
export const experiancesData  = [
  {
    title:'Software engineer',
    company :'sambaTV',
    period: '1 year ',
    responsabilites : [
      'Monitored and enhanced the performance of the Airflow tool.',
      "Enhanced the Identity team's framework by integrating {5} new features.",
      "Led initiatives to optimize operations and reduce costs, contributing to greater efficiency.",
      "Collaborated with cross-functional teams to analyze business data and identify opportunities for cost savings.",
      "Analyzed raw data for clients to assess coverage and identify additional value we could provide through our data services."
    ]
 }, 
 {
  title:'Full-Stack Developer',
  company :'Hack Your Future',
  period: '1 year ',
  responsabilites : [
    'Developed Sirra app, designed to enhance user experience by allowing them to interact based on their current emotions.',
    "Built Komje, your Ultimate Wedding Planning Companion to effortlessly manage guest list, send out invitations online, and track RSVPs with ease",
    "Developed a Quiz App to assess the knowledge of JavaScript developers using Vanilla JS.",
  ]
}, 
]