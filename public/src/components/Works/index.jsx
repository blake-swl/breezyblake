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

import { IKImage } from 'imagekitio-react';
const urlEndpoint = "https://ik.imagekit.io/breezy/"
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
  // {
  //   title: "One 2 One Salon Shoot",
  //   image: hair,
  //   // description: "At Fashion Domino, we prioritized efficiency and qua",
  //   link: "/one2one"
  // },
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
            <IKImage path={"Breezyblake/mockups/universal_CZ5ekCi7oJg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642121167781"} alt="" urlEndpoint={urlEndpoint}/>
            <IKImage path={"Breezyblake/mockups/blogpost_UHKnZgcoB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642121168025"} alt="" urlEndpoint={urlEndpoint}/>
            <IKImage path={"Breezyblake/mockups/dodgers_PgRWtS3li.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642121168066"} alt="" urlEndpoint={urlEndpoint}/>
            <IKImage path={"Breezyblake/mockups/gloves_-Dl4jeTRu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642121166675"} alt="" urlEndpoint={urlEndpoint}/>
            <IKImage path={"Breezyblake/mockups/nishimenu_KYmCqvGrcn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642121168055"} alt="" urlEndpoint={urlEndpoint}/>
            <IKImage path={"Breezyblake/mockups/hike_dEP5a422A.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642121168069"} alt="" urlEndpoint={urlEndpoint}/>
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