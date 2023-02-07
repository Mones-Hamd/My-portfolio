import React from 'react';
import { motion } from 'framer-motion';
import './Header.scss';
import images from '../../constants/images';
import { AppWrap } from '../../wrapper';
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const Header = () => {
  const circlesData = [
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
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-tect">Mones </h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Full-stack Web Developer</p>
            <p className="p-text">Motivate to learn more </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__header-img"
      >
        <img src={images.myPhoto} alt="profile" width={520} height={600} />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile-circle"
          className="overlay-circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {circlesData.map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'Home');
