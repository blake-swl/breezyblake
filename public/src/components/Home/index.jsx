import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimateSharedLayout, motion } from "framer-motion"
import ReactPlayer from 'react-player'
import './home.scss';

import { IKImage } from 'imagekitio-react';
const urlEndpoint = "https://ik.imagekit.io/breezy/"

let works = [
  {
    id: 5,
    title: "Very J",
    image: "Breezyblake/veryj/movint_banner3_i8g3G6zmK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648529297657",
    link: "/veryj",
    isActive: false,
    description: "photography, graphic design"
  },
  {
    id: 1,
    title: "Tako Poke + Ramen",
    image: "Breezyblake/media/tako_main_KzWx3o7e3wK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642656188975",
    link: "/takopokeramen",
    isActive: false,
    description: "branding, photography, web"
  },
  {
    id: 2,
    title: "Fashion Domino",
    image: "Breezyblake/media/fds_banner_q7JgoVrngSZ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642656190668",
    link: "/fashiondomino",
    isActive: false,
    description: "graphic design, strategy"
  },
  // {
  //   id: 3,
  //   title: "Riders Co",
  //   image: "Breezyblake/media/yose_HqkgdFyiK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642656190046",
  //   link: "/ride",
  //   isActive: true,
  //   description: "branding, design, web"
  // },
  {
    id: 4,
    title: "Oribe Hair Competition",
    image: "Breezyblake/media/DSC00602wide_SGypNIM2O.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642656188778",
    link: "/one2one",
    isActive: false,
    description: "photography"
  },

]

const Landing = () => {
  
  const [workList, setToggle] = useState(works);
  const [width, changeWidth] = useState(0)


  const changeView = work => {
    if (work.isActive) return;

    setToggle(works.map(item => {
      item.isActive = item.id === work.id ? true : false;
      return item;
    }))
  }

  return (
    <div className="landing" >
      <div className="landing__container">
        <motion.div className="landing__container__left"
        animate={{y: ["200px", "0px"], opacity: 1}}
        initial={{opacity: 0}}
        >
          <div className="landing__container__margin">
            <h1>UX/UI Designer</h1>
            <h1>Photographer</h1>
            <div className="line"></div>
            <h3>Cycling enthusiast and web developer</h3>
            <div className="button__container">
              <Link className="roundbutton black space" to="/works">
                Works
              </Link>
              <Link className="roundbutton white" to="/photography">
                Photography
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="landing__container__right">
            <img className="border" src={"https://ik.imagekit.io/breezy/Breezyblake/media/DSC00877_hhIZkQIFd.jpg?updatedAt=1641261847855"} alt="" />
        </div>
      </div>
      <section className="landing__about__reel">
        <h2 className="header">To delight with 
          <br/>design & technology </h2>
          <div className="landing__reel__container">
            <ReactPlayer url="https://youtu.be/lTxhrEpZ4r0"
              light={"https://ik.imagekit.io/breezy/Breezyblake/photography/DSC01329-Enhanced_doOuQFB1cC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1640908830080"} 
              controls={false}
              width="100%"
              height="75%"
              className="reel"
            />
          </div>
      </section>
      <section className="landing__works">
        <h2 className="header">Selected Works</h2>
        {/* <div className="landing__works__container"> */}
          <div className="landing__works__main" >
            { workList.map((work => {
                return <div className="landing__work">
                <Link to={work.link} className="image__zoom">
                  <IKImage path={work.image} urlEndpoint={urlEndpoint}/>
                </Link>
                <div className="landing__text">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
            </div>
            }))}
          </div>
        <Link className="roundbutton black space" to="/works">
          See All
        </Link>
      </section>
      <section className="landing__break">
        <div className="landing__break__overlay">
          <h3>Let's work together</h3>
          <Link className="roundbutton white" to="/contact">
            Contact
          </Link>
        </div>
      </section>
    </div>
  )
};

export default Landing;
