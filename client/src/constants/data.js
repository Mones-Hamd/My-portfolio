import images from './images';
export const navData = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
export const aboutData = [
  {
    title: 'Fast',
    paragraph: 'Fast load times and lag free interaction, my highest priority.',
    imagUrl: images.fast,
  },
  {
    title: 'Responsive',
    paragraph: 'My layouts will work on any device, big or smal',
    imagUrl: images.responsive,
  },
  {
    title: 'Intuitive',
    paragraph: 'Strong preference for easy to use, intuitive UX/UI.',
    imagUrl: images.intuitive,
  },
  {
    title: 'Dynamic',
    paragraph:
      "Websites don't have to be static, I love making pages come to life.",
    imagUrl: images.dynamic,
  },
];
export const circlesData = [
  images.mu5,
  images.reactPng,
  images.sass,
  images.css,
  images.figma,
  images.javascript,
  images.typescript,
  images.node,
  images.python,
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
  { name: 'NodeJS', imageUrl: images.node },
  { name: 'SQL', imageUrl: images.sql },
  { name: 'No-SQL', imageUrl: images.nosql },
  { name: 'Data Structure', imageUrl: images.dataStructure },
  { name: 'Algorithms', imageUrl: images.algorithm },
  { name: 'React', imageUrl: images.reactPng },
  { name: 'Figma', imageUrl: images.figma },
  { name: 'CSS', imageUrl: images.css },
  { name: 'HTML', imageUrl: images.html },
];
