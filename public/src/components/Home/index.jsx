import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__container__left">
          <h1>Software Engineer</h1>
          <h1>UX/UI Designer</h1>
          <div className="line"></div>
          <h3>Cycling enthusiast and photographer</h3>
          <Link className="landing__cta">See More</Link>
          <h4>BLAKE LEE</h4>
        </div>
        <div className="landing__container__right">
          <div className="landing__container__overlay"></div>
        </div>
      </div>
      <section className="landing__about__container">
        <div className="col">

        </div>
        <div className="col">

        </div>
        <div className="col">
          
        </div>
      </section>
    </div>
  )
};

export default Landing;