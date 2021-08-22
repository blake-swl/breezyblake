import React, {useRef, useEffect} from 'react';
import './menu.scss';
import { Link, NavLink } from "react-router-dom";
import { TweenMax, Circ } from 'gsap';

// const skate = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC04878.jpg';
import skate from '../../../dist/assets/photography/2021-07-10-MKVZ9608-Yosemite.jpg'


const Menu = (props) => {

  useEffect(() => {
    props.dropped ?
    TweenMax.to('.menuOverlay__container', 1, {y: "0%", ease: Circ.easeInOut})    
    :
    TweenMax.to('.menuOverlay__container', 1, {y: "-100%", ease: Circ.easeInOut, delay: .3})    

  })
  return (
    <div className="menuOverlay__container" >
      <div className="menu__width">
        <div className="menu__container">
          <div className="menu__container__header">Menu</div>
          <ul onClick={props.toggle}>
            <li><div className="menu__numbers">soon</div><NavLink to="/" className="menu__item strikethrough" style={{textDecoration: "line-through"}}>Home</NavLink></li>
            <li><div className="menu__numbers">soon</div><NavLink to="/works" className="menu__item strikethrough">Case Studies</NavLink></li>
            <li><div className="menu__numbers">03</div><NavLink to="/photography" className="menu__item">Photography</NavLink></li>
            <li><div className="menu__numbers">soon</div><Link to="/about" className="menu__item strikethrough">About</Link></li>
            <li><div className="menu__numbers">soon</div><Link to="/contact" className="menu__item strikethrough">Contact</Link></li>
          </ul>
        </div>
        <div className="menu__contacts">
          <img src={skate} alt=""/>
          <div>breezyyblake@gmail.com</div>
          <div>(323)482-0091</div>
        </div>
      </div>
    </div>
  )
}


export default Menu;