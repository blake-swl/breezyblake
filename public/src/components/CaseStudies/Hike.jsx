import React from 'react';
import { withRouter } from 'react-router-dom';
import './case.scss';


import banner from '../../../dist/assets/works/riderco/hike.jpg'
import styleguide from '../../../dist/assets/works/riderco/styleguide.jpg'
import stills from '../../../dist/assets/works/riderco/stills.jpg'
import screencap from '../../../dist/assets/works/riderco/screencap.jpg'

const Hike = () => {
  return (
    <section className="case-page">
      <div className="case-banner" style={{background: `url(${banner}) 50% 50% fixed`, backgroundSize: 'cover'}}>
        <div className="case-banner-overlay">
          <h2>Riders Co.</h2>
          <span>Simplifying Outdoors</span>
        </div>
      </div>
      <div className="case-summary container">
        <div className="case-summary-divider row">
          <div className="case-summary-left">
            <p>
              COMING SOON
            </p>
            <div className="case-mission">
              <div className="case-mission-header">
                Mission
              </div>
              <div className="case-mission-statement">
              Doing a search on the App Store, we found that there’s a lack of applications that provide seamless integration of location/trail discoverability and fitness/activity tracking. There are activity tracking focused apps (Strava, Nike Run) and exploration/discovery apps (All Trails). As a user, what services are available for me to select the type of activity (hiking, running, biking?), popular destination for that activity, and monitor my activity levels?              </div>
            </div>
            <div className="case-mission">
              {/* <div className="case-mission-header">
                Challenge
              </div>
              <div className="case-mission-statement">
              Our objective is to create a one stop application that blends explorability and discoverability of places with richness of health monitoring features available with our devices (Apple Watch, calorie tracking, logging miles, etc). Our goal is to create a seamless experience for users, from casual outdoor enthusiasts to seasoned veterans, a platform that will provide quick, user aggregated and curated destinations while integrating fitness tracking solutions that we all come to appreciate.               </div> */}
              <div className="case-mission-statement">
              </div>
            </div>
          </div>
          <div className="case-summary-right">
            <h4>Services</h4>
            <p>Market Research</p>
            <p>Product Design</p>
            <p>Product Development</p>
            <p>Social Media Marketing</p>
          </div>
        </div>
      </div>
      <div className="case-photo first" style={{background: `url(${stills}) 50% 50%`, backgroundSize: 'cover'}}>
      </div>
      <div className="case-summary container">
        <div className="case-summary-divider row">
          <div className="case-summary-left">
            <div className="case-mission">
              <div className="case-mission-header">
                Solution
              </div>
              <div className="case-mission-statement">
              Our objective is to create a one stop application that blends explorability and discoverability of places with richness of health monitoring features available with our devices (Apple Watch, calorie tracking, logging miles, etc). Our goal is to create a seamless experience for users, from casual outdoor enthusiasts to seasoned veterans, a platform that will provide quick, user aggregated and curated destinations while integrating fitness tracking solutions that we all come to appreciate.               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="case-photo second" style={{background: `url(${styleguide}) 50% 50%`, backgroundSize: 'cover'}}> </div>
      <div className="case-photo second" style={{background: `url(${screencap}) 50% 50%`, backgroundSize: 'cover'}}> </div>

      {/* <div className="case-summary container">
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

export default withRouter(Hike);
{/* <div className="case-mission-header">
  Solution
</div>
<div className="case-mission-statement">
We developed a modern website that showcased Tako Poke + Ramen's values through story telling highlighted by its visual aesthetic. In order to achieve this, we focused on capturing vibrant imagery that highlighted the final food product, as well as taking customers on a visceral journey in food preparation. By focusing on the food and its creation process, we brought the dine-in experience into the customers’ homes that would not otherwise exist.           
</div> */}