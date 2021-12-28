import React from 'react';
import { Link } from 'react-router-dom';
import './works.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
// import 'swiper/less/pagination';
import 'swiper/swiper.min.css'
import SwiperCore, {
  Mousewheel,Pagination
} from 'swiper';

// assets
import ramen from '../../../dist/banners/tako.jpg';
import fd from '../../../dist/assets/works/fashiondomino.jpg';
import ride from '../../../dist/assets/ride.jpg';
import hair from '../../../dist/assets/works/hair.jpg';

import halloween from '../../../dist/assets/works/mockups/universal.jpg'
import blogpost from '../../../dist/assets/works/mockups/blogpost.jpg'
// import dodgers from '../../../dist/assets/works/mockups/dodgers.jpg'
import gloves from '../../../dist/assets/works/mockups/gloves.jpg'
import nishimenu from '../../../dist/assets/works/mockups/nishimenu.jpg'
import hike from '../../../dist/assets/works/mockups/hike.jpg'


SwiperCore.use([Mousewheel,Pagination]);

const works = [
  {
    title: "Tako Poke + Ramen",
    image: ramen,
    description: "We developed a modern website that showcased Tako Poke + Ramen's values through story telling highlighted by its visual aesthetic. In order to achieve this, we focused on capturing vibrant imagery that highlighted the final food product, as well as taking customers on a visceral journey in food preparation. By focusing on the food and its creation process, we brought the dine-in experience into the customers’ homes that would not otherwise exist.",
    link: "/takopokeramen"
  },
  {
    title: "Fashion Domino",
    image: fd,
    description: "Fashion Domino is the premium Los Angeles based Wholesale Fashion Marketplace that connects wholesale clothing, accessories, handbags, shoes and cosmetics manufacturers & distributors with buyers from across the USA and the whole globe.",
    link: "/fashiondomino"
  },
  {
    title: "Riders Co.",
    image: hike,
    description: "Our goal is to create a seamless experience for users, from casual outdoor enthusiasts to seasoned veterans, a platform that will provide quick, user aggregated and curated destinations while integrating fitness tracking solutions that we all come to appreciate.",
    link: "/ride"
  },
  {
    title: "One 2 One Salon Shoot",
    image: hair,
    // description: "At Fashion Domino, we prioritized efficiency and qua",
    link: "/one2one"
  },
]


const Works = () => {
  return(
    // <Swiper
    //   direction={'vertical'}
    //   mousewheel={true}
    //   slidesPerView={1} spaceBetween={30}
    //   pagination={{
    //     "clickable": true
    //   }}
    // >
    <div>
      <div className="caseStudies__container">
        {works.map((work => {
          return <SwiperSlide>
            <div className="caseStudy">
              <div className="caseStudy__banner">
                <img src={`${work.image}`} alt=""/>
              </div>
              <div className="caseStudy__description">
                <h1 className="header works">{work.title}</h1>
                <p>{work.description}</p>
                <Link className="roundbutton black" to={work.link}>
                  See my work
                </Link>
              </div>

            </div>
          </SwiperSlide>
        }))}
      <SwiperSlide>
        <div className="caseMockups">
          <h1 className='header works'>Mockups</h1>
          <ul className="caseMockups__grid">
            <img src={halloween} alt="" />
            <img src={blogpost} alt="" />
            {/* <img src={dodgers} alt="" /> */}
            <img src={gloves} alt="" />
            <img src={nishimenu} alt="" />
            <img src={hike} alt="" />
          </ul>
        </div>
      </SwiperSlide>
      </div>
    {/* // </Swiper> */}
    </div>
    )
  }
  export default Works;
  // <div className="caseStudies__container">
  //   <div className="caseStudies">
  //     <div className="caseStudies__col">
  //       <h2>Tako Poke & Ramen</h2>
  //       <Link className="roundbutton black" to="/takopokeramen">
  //         Case Study
  //       </Link>       
  //     </div>
  //     <div className="caseStudies__col">
  //       <img src={ramen} alt=""/>
  //     </div>
  //   </div>
  //   <div className="caseStudies">
  //     <div className="caseStudies__col">
  //       <img src={fd} alt=""/>
  //     </div>
  //     <div className="caseStudies__col">
  //       <h2>Fashion Domino</h2>
  //       <Link className="roundbutton black">
  //         Case Study
  //       </Link>       
  //     </div>
  //   </div>
  //   <div className="caseStudies">
  //     <div className="caseStudies__col">
  //       <h2>Hike</h2>
  //       <Link className="roundbutton black">
  //         Case Study
  //       </Link>
  //       {/* <Link className="cta no__margin" to="/ride">
  //         <span>View my work</span>
  //         <svg width="13px" height="10px" viewBox="0 0 13 10">
  //           <path d="M1,5 L11,5"></path>
  //           <polyline points="8 1 12 5 8 9"></polyline>
  //         </svg>
  //       </Link>          */}
  //     </div>
  //     <div className="caseStudies__col">
  //       <img src={ride} alt=""/>
  //     </div>
  //   </div>
  // </div>