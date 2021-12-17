import React from 'react';
import { withRouter } from 'react-router-dom';
import './case.scss';
import hair from '../../../dist/assets/DSC00602.jpg';
import comp1 from '../../../dist/assets/tako/composite1.jpg'
import stitch from '../../../dist/assets/tako/stitch2.jpg';
import menuItems from '../../../dist/assets/tako/menu-items.png';



const Tako = () => {
  return (
    <section className="case-page">
      <div className="case-banner" style={{background: `url(${hair}) 50% 50%`, backgroundSize: 'cover'}}>
        <div className="case-banner-overlay">
          <h2>One 2 One</h2>
          <span>Every Day Fashion</span>
        </div>
      </div>
      <div className="case-summary container">
        <div className="case-summary-divider row">
          <div className="case-summary-left">
            <p>
              At Fashion Domino, we prioriti
            </p>
            <div className="case-mission--images">
            </div>
          </div>
          <div className="case-summary-right">
            <h4>Services Provided</h4>
            <p>Creative Direction</p>
            <p>Photography</p>
            <p>Editing</p>
          </div>
        </div>
      </div>
      {/* <div className="case-photo first" style={{background: `url(${comp1}) 50% 50%`, backgroundSize: 'cover'}}>
      </div> */}
      {/* <div className="case-summary container">
        <div className="case-summary-divider row">
          <div className="case-summary-left">
          </div>
        </div>
      </div> */}
      {/* <div className="case-photo second" style={{background: `url(${stitch}) 50% 50%`, backgroundSize: 'cover'}}> </div>
      <div className="case-photo third" style={{background: `url(${menuItems}) 50% 50%`, backgroundSize: 'cover'}}> </div>
      <div className="case-summary container">
        <div className="case-summary-divider row">
          <div className="case-summary-left">
            <div className="case-mission">
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
};

export default withRouter(Tako);
{/* <div className="case-mission-header">
  Solution
</div>
<div className="case-mission-statement">
We developed a modern website that showcased Tako Poke + Ramen's values through story telling highlighted by its visual aesthetic. In order to achieve this, we focused on capturing vibrant imagery that highlighted the final food product, as well as taking customers on a visceral journey in food preparation. By focusing on the food and its creation process, we brought the dine-in experience into the customers’ homes that would not otherwise exist.           
</div> */}