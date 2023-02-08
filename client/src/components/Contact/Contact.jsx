import React, { useState } from 'react';
import { useMail } from '../../hooks/useMail';
import './Contact.scss';

const Contact = () => {
  const { form, isSubmit, isLoading, error, handleSubmit } = useMail();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return !isSubmit ? (
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
      <h3 className="head-text">
        {' '}
        {error
          ? 'Something went wrong '
          : 'Thank you for getting in touch'}{' '}
      </h3>
    </div>
  );
};

export default Contact;
