import React from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import ReactTooltip from 'react-tooltip';
import images from '../../constants/images';
const Skills = () => {
  const skillsData = [
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
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skillsData.map((item, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="app__skills-item app__flex"
              key={item + index}
            >
              <div className="app__flex">
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <p className="p-text">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'Skills');
