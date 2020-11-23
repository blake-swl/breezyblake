import React from 'react';
import { Link } from 'react-router-dom';
import './works.scss';

// assets
import darkgrid from '../../../dist/assets/darkgrid.png';
import lightgrid from '../../../dist/assets/lightgrid.png';
import hero from '../../../dist/assets/DSC07848.jpg'
import ramen from '../../../dist/assets/Nishi_04.png';
import fd from '../../../dist/assets/fashiondomino.jpg';

const Works = () => {
  return(
    <div className="caseStudies__container">
      <div className="caseStudies">
        <div className="caseStudies__col">
          <h2>Tako Poke & Ramen</h2>
          <Link to='/takopokeramen' className="button">View</Link>
        </div>
        <div className="caseStudies__col">
          <img src={ramen} alt=""/>
        </div>
      </div>
      <div className="caseStudies">
        <div className="caseStudies__col">
          <img src={fd} alt=""/>
        </div>
        <div className="caseStudies__col">
          <h2>Fashion Domino</h2>
          <button className="button">View</button>
        </div>
      </div>
      <div className="caseStudies">
        <div className="caseStudies__col">
          <h2>Fashion Domino</h2>
          <button className="button">View</button>
        </div>
        <div className="caseStudies__col">
          <img src={fd} alt=""/>
        </div>
      </div>
    </div>
  )
}
export default Works;