import React, { useState } from 'react';
import './contacts.scss';
import emailjs from 'emailjs-com';



const template = process.env.REACT_APP_MAILJS_TEMPLATE;
const user = process.env.REACT_APP_MAILJS_USER;
const service = process.env.REACT_APP_MAILJS_SERVICE;



const Contacts = () => {
  console.log(user, process.env.NODE_ENV)
    const [values, setValues] = useState({
      from_name: '',
      from_email: '',
      message: ''
    })
  const handleChange = (e) => {
    console.log(e.target.id)
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  function sendEmail(e) {
    e.preventDefault();
    alert('email sent')

    emailjs.send(service, template, values, user)
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
          <form className="contact-form" onChange={handleChange} onSubmit={sendEmail}>
            <input type="text" name="from_name" id="from_name" placeholder="name" required/>
            <input type="email" name="from_email" id="from_email" placeholder="email" required/>
            <textarea name="message" id="message" placeholder="message" required/>
            <button type="submit" className="cta" value="submit">
              <span>Send</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
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




