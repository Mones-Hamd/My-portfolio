import React from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/Mones-Hamd">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/mones_azzam/">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/mones.azam/">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
