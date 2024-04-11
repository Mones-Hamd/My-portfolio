import React from 'react';
import './Experiances.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { experiancesData } from '../../constants/data';

const Experiences = () => {
  return (
    <>
      <h2 className="head-text">Experience</h2>
      <div className="app__experience-container">
        {experiancesData.map((item, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="app__experience-item"
            key={index}
          >
            <h3 className="app__experience-title">{item.title}</h3>
            <p className="app__experience-company">{item.company}</p>
            <p className="app__experience-period">{item.period}</p>
            <ul className="app__experience-responsibilities">
              {item.responsabilites.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(Experiences, 'Experiences');
