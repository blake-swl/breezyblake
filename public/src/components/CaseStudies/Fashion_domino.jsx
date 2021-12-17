import React from 'react';
import { withRouter } from 'react-router-dom';
import './case.scss';
import fds from '../../../dist/assets/fds_banner.jpg';
import comp1 from '../../../dist/assets/tako/composite1.jpg'
import stitch from '../../../dist/assets/tako/stitch2.jpg';
import menuItems from '../../../dist/assets/tako/menu-items.png';
import americanAble from '../../../dist/assets/works/fashiondomino/american_able.jpg'
import pinkNote from '../../../dist/assets/works/fashiondomino/pink_note.jpg'
import hayden from '../../../dist/assets/works/fashiondomino/hayden.jpg'
import hemThread from '../../../dist/assets/works/fashiondomino/hem_thread.jpg'
import korca from '../../../dist/assets/works/fashiondomino/korca.jpg'
import redlolly from '../../../dist/assets/works/fashiondomino/red_lolly.jpg'



const Tako = () => {
  return (
    <section className="case-page">
      <div className="case-banner" style={{background: `url(${fds}) 50% 50%`, backgroundSize: 'cover'}}>
        <div className="case-banner-overlay">
          <h2>Fashion Domino</h2>
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
              <img src={hemThread} alt="Hem & Thread banner designed by Blake Lee" className="case-mission__images"/>
              @Hem & Thread
              <img src={korca} alt="Korca banner designed by Blake Lee" className="case-mission__images"/>
              @Korca
              <img src={americanAble} alt="American Able banner designed by Blake Lee" className="case-mission__images"/>
              @American Able
              <img src={pinkNote} alt="Pink Note banner designed by Blake Lee" className="case-mission__images"/>
              @Pink Note
              <img src={hayden} alt="Hayden banner designed by Blake Lee" className="case-mission__images"/>
              @Hayden Los Angeles
              <img src={redlolly} alt="Red Lolly banner designed by Blake Lee" className="case-mission__images"/>
              @Red Lolly
            </div>
          </div>
          <div className="case-summary-right">
            <h4>Services Provided</h4>
            <p>Banners</p>
            <p>Email Newsletter</p>
            <p>Social Media Marketing</p>
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