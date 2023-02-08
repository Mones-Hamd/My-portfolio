import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
export const useMail = () => {
  const form = useRef();
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
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
  return { form, isSubmit, isLoading, error, handleSubmit };
};
