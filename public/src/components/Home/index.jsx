import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

// assets
import darkgrid, { ReactComponent as DarkGrid } from '../../../dist/assets/blackgrid.svg';
import hero from '../../../dist/assets/DSC07848.jpg'

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
          {/* <h4>BLAKE LEE</h4> */}
          <div className="landing__container__overlay"></div>
        </div>
      </div>
      <section className="landing__about__container">
        <div className="landing__about__col">
          <img src={hero} className="landing__about__hero" alt=""/>
          {/* <img src={darkGrid} alt=""/> */}
        </div>
        <div className="landing__about__col">
          <div className="landing__about__copy">
            <h2>To delight with 
              <br/>design & technology </h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
          </div>
        </div>
        <div className="landing__about__col">
          <div className="landing__about__copy">
            <ul>
              <li>Brand Strategy</li>
              <li>UX/UI Design</li>
              <li>Web Development</li>
              <li>Product Photography</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Landing;