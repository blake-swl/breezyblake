import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navigation.scss';

import Menu from '../Menu';

const Navigation = () => {
  const [ checked, checkbox ] = useState(false);

  const _toggleCheckbox = (e) => {
    checkbox(!checked);
  }
  return (
    <div className="navbar" >
      <div className="navbar__container">
        <div className="navigation__container__left">
         <Link to="/" className="navigation__logo">
           <h1 className="desktop">B. Lee</h1>
           <h1 className="mobile">B.</h1>
          </Link>
          <h3>Los Angeles, CA</h3>
        </div>
        {/* <div className>MENU</div> */}
      <div className="nav__items__container">
        <ul>
          <li><NavLink to="/" className="nav__item">Home</NavLink></li>
          <li><NavLink to="/works" className="nav__item">Case Studies</NavLink></li>
          <li><NavLink to="/photography" className="nav__item">Photography</NavLink></li>
          <li><Link to="/about" className="nav__item">About</Link></li>
          <li><Link to="/contact" className="roundbutton black">Let's Talk</Link></li>
        </ul>
      </div>
      </div>
      <div className="navbar__menu">
        <input type="checkbox" className="toggler" checked={checked} onChange={ _toggleCheckbox}/>
        <div className="hamburger"><div></div></div>
        { checked ? <Menu dropped={checked} toggle={_toggleCheckbox}/> :  <Menu dropped={checked}/>}
      </div>
    </div>
    )
  }
  
  export default Navigation;
