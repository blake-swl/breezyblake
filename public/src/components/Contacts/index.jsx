// import React, { useState } from 'react';
// import './contacts.scss';
// import{ init } from 'emailjs-com';

// // require('dotenv').config();

// const template = process.env.MAILJS_TEMPLATE;
// const user = process.env.MAILJS_USER;



// const Contacts = () => {
//   const [count, setCount] = useState(0);
//   // const [values, setValues] = useState(0)
//   // const handleChange = (name)=> (e) => {
//   //   console.log(name)
//   //   setValues({ ...values, [e.target.id]: e.target.value });
//   // };
//   function sendEmail(e) {
//     e.preventDefault();
    

//     emailjs.sendForm('gmail', template, e.target, user)
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }
//   return(
//     <div className="contact">
//       <div className="contact__content">
//         <h1 className="header email">CONTACT</h1>
//         <p className="contact__copy">Always seeking opportunities to work on new & exciting projects.</p>
//         <div className="email__container">
//           <form className="contact-form" onSubmit={sendEmail}>
//             <input type="text" name="user_name"  placeholder="name" required/>
//             <input type="email" name="user_email" placeholder="email" required/>
//             <textarea name="message" placeholder="message" required/>
//             <div type="submit" className="cta">
//               <span>Send</span>
//               <svg width="13px" height="10px" viewBox="0 0 13 10">
//                 <path d="M1,5 L11,5"></path>
//                 <polyline points="8 1 12 5 8 9"></polyline>
//               </svg>
//             </div>
//           </form>
//         </div>
//         <div className="contact__info">
//           <p>seulwoolee93@gmail.com</p>
//           <p>(323)482-0091</p>
//         </div>
//       </div>
//       <div className="contact__banner">
//       </div>
//     </div>
//   )
// };
// export default Contacts;


import React, { useState } from 'react';

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

