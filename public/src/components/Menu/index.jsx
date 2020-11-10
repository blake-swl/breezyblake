import React, {useRef, useEffect} from 'react';
import './menu.scss';
import { Link } from "react-router-dom";
import { TweenMax, Circ } from 'gsap';


const Menu = (props) => {

  useEffect(() => {
    props.dropped ?
    TweenMax.to('.menuOverlay__container', 1, {y: "0%", ease: Circ.easeInOut})    
    :
    TweenMax.to('.menuOverlay__container', 1, {y: "-100%", ease: Circ.easeInOut, delay: .3})    

  })
  return (
    <div className="menuOverlay__container" >
      <div className="menu__container">
        <div className="menu__container__header">Menu</div>
        <ul onClick={props.toggle}>
          <li><div className="menu__numbers">01</div><Link to="/" className="menu__item">Home</Link></li>
          <li><div className="menu__numbers">02</div><Link to="/photography" className="menu__item">Photography</Link></li>
          <li><div className="menu__numbers">03</div><Link to="/works" className="menu__item">Works</Link></li>
          <li><div className="menu__numbers">04</div><Link to="/about" className="menu__item">About</Link></li>
          <li><div className="menu__numbers">05</div><Link to="/contact" className="menu__item">Contact</Link></li>
        </ul>
      </div>
      <div className="menu__contacts">
        <div>blakeswl@blstudio.co</div>
        <div>(323)482-0091</div>
      </div>
    </div>
  )
}


export default Menu;