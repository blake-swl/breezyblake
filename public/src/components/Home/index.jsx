import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './home.scss';

// assets
import darkgrid from '../../../dist/assets/darkgrid.png';
import lightgrid from '../../../dist/assets/lightgrid.png';
import hero from '../../../dist/assets/DSC07848.jpg'
import ramen from '../../../dist/assets/Nishi_04.jpg';
import fd from '../../../dist/assets/fashiondomino.jpg';

// componenets
import Tako from '../CaseStudies/Tako.jsx'



const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__container__left">
          <h1>Software Engineer</h1>
          <h1>UX/UI Designer</h1>
          <div className="line"></div>
          <h3>Cycling enthusiast and photographer</h3>
          <Link className="landing__cta">View More</Link>
        </div>
        <div className="landing__container__right">
          <h4>BLAKE LEE</h4>
          <div className="landing__container__overlay"></div>
        </div>
      </div>
      <section className="landing__about__container">
        <div className="landing__about__col hero">
          <img src={hero} className="landing__about__hero" alt=""/>          
          <img src={lightgrid} className="landing__about__border light" alt=""/>
          <img src={darkgrid} className="landing__about__border dark" alt=""/>
        </div>
        <div className="landing__about__col">
          <div className="landing__about__copy">
            <h2>To delight with 
              <br/>design & technology </h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
          </div>
        </div>
        <div className="landing__about__col">
          <div className="landing__about__copy skills">
            <ul>
              <li>Brand Strategy</li>
              <li>UX/UI Design</li>
              <li>Graphic Design</li>
              <li>Web Development</li>
              <li>Product Photography</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="landing__about__works">
        {/* <div className="landing__about__work">
          <div className="landing__about__work__col">
            <h2>Tako Poke & Ramen</h2>
            <Link to='/takopokeramen' className="button">View</Link>
          </div>
          <div className="landing__about__work__col">
            <img src={ramen} alt=""/>
          </div>
        </div>
        <div className="landing__about__work">
          <div className="landing__about__work__col">
            <img src={fd} alt=""/>
          </div>
          <div className="landing__about__work__col">
            <h2>Fashion Domino</h2>
            <button className="button">View</button>
          </div>
        </div>
        <div className="landing__about__work">
          <div className="landing__about__work__col">
            <h2>Fashion Domino</h2>
            <button className="button">View</button>
          </div>
          <div className="landing__about__work__col">
            <img src={fd} alt=""/>
          </div>
        </div> */}
      </section>
    </div>
  )
};

export default Landing;