import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { AppWrap } from '../../wrapper';
import { aboutData } from '../../constants/data';
const About = () => {
  return (
    <>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="head-div"
      >
        <h2 className="head-text">
          {' '}
          <span>Passionate</span> full-stack Developer
        </h2>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="head-child"
      >
        <p className="paragraph-text">
          {' '}
          Passionate about new technologies, <span>search </span>a lot to keep
          my knowledge up-to-date to keep up with the<span> job market</span> .
          <br />
        </p>
        <p className="paragraph-text ">
          {' '}
          Graduated :{' '}
          <span>
            <a href="https://www.hackyourfuture.net/">
              Hack Your future - Amsterdam
            </a>
          </span>
        </p>
      </motion.div>
      <div className="app__profiles">
        {aboutData.map((item, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: 'tween' }}
            className="app__profiles-item"
            key={item.title + index}
          >
            <img src={item.imagUrl} alt={item.title + 'image'} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {' '}
              {item.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {item.paragraph}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'About');
