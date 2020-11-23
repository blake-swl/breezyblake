import React from 'react';
import './contacts.scss';
import emailjs from 'emailjs-com';

const Contacts = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
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
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" placeholder="name"/>
            {/* <label>Name</label> */}
            <input type="text" name="user_name"  placeholder="name"/>
            {/* <label>Email</label> */}
            <input type="email" name="user_email" placeholder="email"/>
            {/* <label>Message</label> */}
            <textarea name="message" placeholder="message"/>
            <input type="submit" className="button" value="Send" />
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