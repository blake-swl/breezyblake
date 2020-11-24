import React from 'react';
import { Link } from 'react-router-dom';
import './works.scss';

// assets
import ramen from '../../../dist/assets/Nishi_04.jpg';
import fd from '../../../dist/assets/fashiondomino.jpg';

const Works = () => {
  return(
    <div className="caseStudies__container">
      <div className="caseStudies">
        <div className="caseStudies__col">
          <h2>Tako Poke & Ramen</h2>
          <Link className="cta no__margin" to="/takopokeramen">
            <span>View my work</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>        
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
          <Link className="cta no__margin" to="/takopokeramen">
            <span>View my work</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>         
        </div>
      </div>
      <div className="caseStudies">
        <div className="caseStudies__col">
          <h2>Fashion Domino</h2>
          <Link className="cta no__margin" to="/takopokeramen">
            <span>View my work</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>         
        </div>
        <div className="caseStudies__col">
          <img src={fd} alt=""/>
        </div>
      </div>
    </div>
  )
}
export default Works;