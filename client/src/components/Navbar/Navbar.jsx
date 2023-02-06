import React, { useState } from 'react';
import './Navbar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const data = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2>{`{.....}`}</h2>
        <h3>Mones Hamd</h3>
        <p>Full-stack</p>
      </div>
      <ul className="app__navbar-links">
        {data.map((item) => (
          <li className="app__flex p-text" key={`link${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <HiX
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul>
              {data.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
