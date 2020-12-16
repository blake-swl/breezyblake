import React, { useState } from 'react';
import './contacts.scss';
import{ init } from 'emailjs-com';

// require('dotenv').config();

const template = process.env.MAILJS_TEMPLATE;
const user = process.env.MAILJS_USER;



const Contacts = () => {
    const [values, setValues] = useState({
      name: '',
      email: '',
      message: ''
    })
  const handleChange = (e) => {
    console.log(e.target.name)
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  function sendEmail(e) {
    e.preventDefault();
    console.log(e)
    alert('email sent')

    emailjs.sendForm('gmail', template, e.target, user)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return(
    <div className="contact">
      <div className="contact__content">
        <h1 className="header email">CONTACT</h1>
        <p className="contact__copy">Always seeking opportunities to work on new & exciting projects.</p>
        <div className="email__container">
          <form className="contact-form" onChange={handleChange}>
            <input type="text" name="user_name"  placeholder="name" required/>
            <input type="email" name="user_email" placeholder="email" required/>
            <textarea name="message" placeholder="message" required/>
            <div type="submit" className="cta"  onSubmit={sendEmail}>
              <span>Send</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </div>
          </form>
        </div>
        <div className="contact__info">
          <p>seulwoolee93@gmail.com</p>
          <p>(323)482-0091</p>
        </div>
      </div>
      <div className="contact__banner">
      </div>
    </div>
  )
};
export default Contacts;




