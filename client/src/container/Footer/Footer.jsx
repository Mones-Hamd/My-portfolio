import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import images from '../../constants/images';
import './Footer.scss';
import Contact from '../../components/Contact/Contact';

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        {' '}
        Take <span>rest</span>, And drop me <span>text</span>
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:mones.m.azzam91@gmail.com" className="p-text">
            mones.m.azzam91@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+31 639848644" className="p-text">
            +31 639848644
          </a>
        </div>
      </div>
      <div className="app__footer-form app__flex">
        <Contact />
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'Contact',
  'app__whitebg',
);
