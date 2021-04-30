import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './home.scss';

// assets
import darkgrid from '../../../dist/assets/darkgrid.png';
import lightgrid from '../../../dist/assets/lightgrid.png';
const hero ='https://breezyyblake.s3-us-west-1.amazonaws.com/DSC07848.jpg';
import ramen from '../../../dist/assets/Nishi_04.png';
import fd from '../../../dist/assets/fashiondomino.jpg';
import ride from '../../../dist/assets/ride.jpg';
import photo from '../../../dist/assets/DSC00386.jpg';



const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__container__left">
          <div className="landing__container__margin">
            <h1>Software Engineer</h1>
            <h1>UX/UI Designer</h1>
            <div className="line"></div>
            <h3>Cycling enthusiast and photographer</h3>
            <div className="button__container">
              <Link className="roundbutton black">
                Works
              </Link>
              <Link className="roundbutton white">
                Contact
              </Link>
            </div>

          </div>
          {/* <Link className="landing__cta cta">
            <span>View my work</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link> */}
        </div>
        <div className="landing__container__right">
          <div className="landing__container__overlay">
          </div>
        </div>
      </div>

      <section className="landing__about__container">
        <div className="landing__about__border">
          <div className="landing__about__col hero">
            <img src={hero} className="landing__about__hero" alt=""/>          
          </div>
          <div className="landing__about__col">
            <div className="landing__about__copy">
              <h2 className="header">To delight with 
                <br/>design & technology </h2>
                <p>Hi, my name is Blake and I am a software engineer and experience designer based in Los Angeles, CA. Having worked in both sides of the field, I am a strong believer in the multidisciplinary approach of melding technical aspects of engineering and qualitative analyses of designing to create memorable digital experiences. </p>
                <Link className="roundbutton black desktop">
                  Contact
                </Link>
            </div>
          </div>
          <div className="landing__about__col">
            <div className="landing__about__copy skills">
              <ul>
                <li>Brand Strategy</li>
                <li>Photography</li>
                <li>UX/UI Design</li>
                <li>Graphic Design</li>
                <li>Web Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="landing__break">
        <div className="landing__break__overlay">
          <h3>Let's work together</h3>
          <Link className="roundbutton white">
            Contact
          </Link>
        </div>
      </section>
    </div>
  )
};

export default Landing;

      {/* <section className="landing__works">
        <h2 className="header">Case Studies & Works</h2>
        <div className="landing__work">
          <div className="landing__work__items left">
            <Link className="landscape">
              <div className="overlay">
                <div className="overlay__items">
                  <div className="menu__numbers">01</div>
                  <h4>Fashion Domino</h4>
                </div>
              </div>
              <img src={fd} alt=""/>
            </Link>
            <Link to="/photography" className="portrait">
              <div className="overlay">
                <div className="overlay__items">
                  <div className="menu__numbers">03</div>
                  <h4>Photography</h4>
                </div>
              </div>
              <img src={photo} alt=""/>
            </Link>
          </div>
          <div className="landing__work__items right">
            <Link to="takopokeramen" className="portrait">
              <div className="overlay">
                <div className="overlay__items">
                  <div className="menu__numbers">02</div>
                  <h4>Tako Poke & Ramen</h4>
                </div>
              </div>              
              <img src={ramen} alt=""/>
            </Link>
            <Link to="ride" className="landscape">
              <div className="overlay">
                <div className="overlay__items">
                  <div className="menu__numbers">04</div>
                  <h4>Ride</h4>
                </div>
              </div>              
              <img src={ride} alt=""/>
            </Link>
          </div>
        </div>
        <Link className="cta" to="/works">            
          <span>See All</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </Link>
      </section> */}