import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './home.scss';

// assets
const hero ='https://breezyyblake.s3-us-west-1.amazonaws.com/DSC07848.jpg';
import reel from '../../../dist/assets/DSC00602 copy.jpg';
import ramen from '../../../dist/banners/tako.jpg';
import fd from '../../../dist/banners/fashiondomino.jpg';
import ride from '../../../dist/assets/ride.jpg';

const works = [
  {
    title: "Tako Poke + Ramen",
    image: ramen,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    link: "/takopokeramen"
  },
  {
    title: "Fashion Domino",
    image: fd,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    link: ""
  }
]

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__container__left">
          <div className="landing__container__margin">
            <h1>UX/UI Designer</h1>
            <h1>Photographer</h1>
            <div className="line"></div>
            <h3>Cycling enthusiast and web developer</h3>
            <div className="button__container">
              <Link className="roundbutton black space" to="/works">
                Works
              </Link>
              <Link className="roundbutton white" to="/photography">
                Photography
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
      <section className="landing__about__reel">
        <h2 className="header">To delight with 
          <br/>design & technology </h2>
          <div className="landing__reel__container">
            <img src={reel} alt="" />
          </div>
      </section>
      <section className="landing__works">
        <h2 className="header">Selected Works</h2>
        <div className="landing__works__container">
          <div className="landing__works__main">

          </div>
          <div className="landing__works__sub">
            
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
