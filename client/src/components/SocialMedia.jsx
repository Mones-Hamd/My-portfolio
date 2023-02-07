import React from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <FaGithub />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  );
};

export default SocialMedia;
