import React, { useState, useRef } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import images from '../../constants/images';
import './Footer.scss';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        'service_hyq8c9m',
        'template_zir271p',
        form.current,
        'ka7QukjxmjVc10j3M',
      )
      .then(
        (result) => {
          setIsSubmit(true);
          setIsLoading(false);
        },
        (error) => {
          setIsLoading(false);

          setError(error.text);
        },
      );
  };
  return (
    <>
      <h2 className="head-text">
        {' '}
        Take a <span>rest</span>, And drop me a <span>text</span>
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
        {!isSubmit ? (
          <form
            className="app__footer-form app__flex"
            ref={form}
            onSubmit={handleSubmit}
          >
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <textarea
                className="p-text"
                type="text"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={handleChangeInput}
              />
            </div>
            <button type="submit" className="p-text">
              {isLoading ? 'Sending..' : 'Send Message'}
            </button>
          </form>
        ) : (
          <div>
            <h3 className="head-text"> Thank you for getting in touch </h3>
          </div>
        )}
        {error && (
          <div>
            <h3 className="head-text"> Somthing went wrong </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'Contact',
  'app__whitebg',
);
