import React from 'react';
import './home.scss';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__container__left">
          <h1>Software Engineer</h1>
          <h1>UX/UI Designer</h1>
          <h3>Cycling enthusiast and photographer</h3>
          <h4>BLAKE LEE</h4>
        </div>
        <div className="landing__container__right">
          <div className="landing__container__overlay"></div>

        </div>
      </div>
    </div>
  )
};

export default Landing;