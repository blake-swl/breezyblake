import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Behance } from '../../../dist/assets/behance.svg';
import { ReactComponent as Instagram } from '../../../dist/assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../../dist/assets/linkedin-in.svg';
import { ReactComponent as Dribbble } from '../../../dist/assets/dribbble.svg';

const Footer = () => {

  return(
    <div className="footer__container">
      <div className="footer">
        <div className="footer__col">
          <Link to="/" className="footer__logo">
            <h1 className="logo">B. Lee</h1>
          </Link>
          <div className="footer__info">(323)482-0091</div>
          <div className="footer__info">breezyyblake@gmail.com</div>
        </div>
        <div className="footer__col social">
          <h5>SOCIAL</h5>
          <ul>
            <li><a href="https://www.behance.net/blakelee3" target="_blank"><Behance/></a></li>
            <li><a href="https://www.instagram.com/breezyyblake/" target="_blank"><Instagram/></a></li>
            <li><a href="https://www.linkedin.com/in/blake-lee-4bb35b121/" target="_blank"><Linkedin/></a></li>
            <li><a href="https://dribbble.com/blakeswl" target="_blank"><Dribbble/></a></li>
          </ul>
        </div>
        <div className="footer__col"></div>
      </div>
      <div className="footer__disclaimer">
        All photos, design, & development by me.
      </div>
    </div>
  )
}
export default Footer;