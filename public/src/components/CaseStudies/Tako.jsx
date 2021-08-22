import React from 'react';
import { withRouter } from 'react-router-dom';
import './case.scss';
import tako from '../../../dist/assets/tako/takobanner.jpg';
import comp1 from '../../../dist/assets/tako/composite1.jpg'
import stitch from '../../../dist/assets/tako/stitch2.jpg';
import menuItems from '../../../dist/assets/tako/menu-items.png';

const Tako = () => {
  return (
    <section className="case-page">
      <div className="case-banner" style={{background: `url(${tako}) 50% 50%`, backgroundSize: 'cover'}}>
        <div className="case-banner-overlay">
          <h2>Tako Poke + Ramen</h2>
          <span>Bringing the mouth-water to your steps</span>
        </div>
      </div>
      <div className="case-summary container">
        <div className="case-summary-divider row">
          <div className="case-summary-left">
            <p>
              Tako Poke + Ramen serves mouth-watering selections of Japanese ramen and Hawaiian inspired poke bowls operating from a cloud kitchen, a dining room-less, delivery only kitchen compound. So how do you brand and recreate the dine-in experience of the restaurant to stay-at-home customers? This is where we came in.
            </p>
            <div className="case-mission">
              <div className="case-mission-header">
                Mission
              </div>
              <div className="case-mission-statement">
              Tako Poke + Ramen entrusted us to create a cohesive visual narrative that exemplified their commitment to quality and exceptional taste.
              </div>
            </div>
            <div className="case-mission">
              <div className="case-mission-header">
                Challenge
              </div>
              <div className="case-mission-statement">
              Unlike a traditional brick & mortar or a dine-in restaurant, a cloud kitchen lacks qualitative aspects of interior design that convey its attitudes towards specific values it holds. Traditionally, much can be taken away by stepping inside a restaurant.              
              </div>
              <div className="case-mission-statement">
              Tako Poke + Ramen's cloud kitchen business model presented an especially important focus on quantitative, analytically driven design that would convert web impressions into direct sales.              
              </div>
            </div>
          </div>
          <div className="case-summary-right">
            <h4>Services</h4>
            <p>Digital Strategy</p>
            <p>Website Design</p>
            <p>Website Development</p>
            <p>Product Photography</p>
            <p>Social Media Marketing</p>
          </div>
        </div>
      </div>
      <div className="case-photo first" style={{background: `url(${comp1}) 50% 50%`, backgroundSize: 'cover'}}>
      </div>
      <div className="case-summary container">
        <div className="case-summary-divider row">
          <div className="case-summary-left">
            <div className="case-mission">
              <div className="case-mission-header">
                Solution
              </div>
              <div className="case-mission-statement">
              We developed a modern website that showcased Tako Poke + Ramen's values through story telling highlighted by its visual aesthetic. In order to achieve this, we focused on capturing vibrant imagery that highlighted the final food product, as well as taking customers on a visceral journey in food preparation. By focusing on the food and its creation process, we brought the dine-in experience into the customers’ homes that would not otherwise exist.           
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="case-photo second" style={{background: `url(${stitch}) 50% 50%`, backgroundSize: 'cover'}}> </div>
      <div className="case-photo third" style={{background: `url(${menuItems}) 50% 50%`, backgroundSize: 'cover'}}> </div>
      <div className="case-summary container">
        <div className="case-summary-divider row">
          <div className="case-summary-left">
            <div className="case-mission">
              {/* <div className="case-mission-header">
                Solution
              </div>
              <div className="case-mission-statement">
              We developed a modern website that showcased Tako Poke + Ramen's values through story telling highlighted by its visual aesthetic. In order to achieve this, we focused on capturing vibrant imagery that highlighted the final food product, as well as taking customers on a visceral journey in food preparation. By focusing on the food and its creation process, we brought the dine-in experience into the customers’ homes that would not otherwise exist.           
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default withRouter(Tako);