import React from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { skillsData } from '../../constants/data';
const Skills = () => {
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
