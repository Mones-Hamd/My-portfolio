import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Projects.scss';
import { AppWrap } from '../../wrapper';
import { ProjectsData, projectsCategoryData } from '../../constants/data';
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1 }]);
  const [filterdProjects, setFilteredProjects] = useState(ProjectsData);

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
