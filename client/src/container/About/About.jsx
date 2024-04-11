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
          <span>Welcome</span> to My Digital Space!
        </h2>
      </motion.div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="head-child"
      >
        <p className="paragraph-text">
          {' '}
          a dedicated and enthusiastic software engineer on a mission to craft innovative solutions
           and push the boundaries of technology. With a passion for problem-solving and a keen eye for detail,
            I thrive in dynamic environments
             where I can collaborate with like-minded individuals to bring ideas to life.
          <br />
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
