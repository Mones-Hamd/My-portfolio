import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Projects.scss';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const ProjectsData = [
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
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1 }]);
  const [filterdProjects, setFilteredProjects] = useState(ProjectsData);

  const projectsCategoryData = ['React JS', 'Agile', 'Web App', 'All'];

  const handleProjectsFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (item === 'All') {
        setFilteredProjects(ProjectsData);
      } else {
        setFilteredProjects(
          ProjectsData.filter((project) => project.tag.includes(item)),
        );
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">Projects</h2>
      <div className="app__projects-filter">
        {projectsCategoryData.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              handleProjectsFilter(item);
            }}
            className={`app__projects-filter-item app__ flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__projects-portfolio"
      >
        {filterdProjects.map((item, index) => (
          <div className="app__projects-item " key={index}>
            <div className="app__projects-img">
              <img src={item.imageUrl} alt={item.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__projects-hover app__flex"
              >
                <a href={item.codeUrl} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
                {item.projectUrl && (
                  <a href={item.projectUrl} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>
            <div className="app__projects-content app__flex">
              <h4 className="bold-text">{item.name}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {item.Description}
              </p>
              <div className="app__projects-tag app__flex">
                <p className="p-text">{item.tag[0]}</p>{' '}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Projects, 'Projects', 'app__projects');
