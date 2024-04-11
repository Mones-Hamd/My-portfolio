import React from 'react';
import { motion } from 'framer-motion';
import './Header.scss';
import images from '../../constants/images';
import { AppWrap } from '../../wrapper';
import { circlesData } from '../../constants/data';
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
            <p className="p-text">The best way to predict the future is to invent it. </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app__header-img"
      >
       
        <img src={images.myPhoto} alt="profile" className='app__header-img-profile' />
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
