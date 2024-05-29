import  {  useRef } from 'react';
import emailjs from '@emailjs/browser';
import './email.css';

const Email = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_bs1a9r5', 'template_r6a6w6c', form.current, {
        publicKey: 'V2hRPCZG9sCtLSaKb',
      })
      .then(
        () => {
          alert('mensaje enviado')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='field'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send"  />
    </form>
  );
};

export default Email;