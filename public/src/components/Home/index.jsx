import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimateSharedLayout, motion } from "framer-motion"
import ReactPlayer from 'react-player'
import './home.scss';

// assets
import ramen from '../../../dist/assets/works/tako_main.jpg';
import fd from '../../../dist/assets/works/fds_banner.jpg';
import nike from '../../../dist/master/yose.jpg'
import salonshoot from '../../../dist/assets/works/DSC00602wide.jpg';
import reel from '../../../dist/assets/photography/DSC01329-Enhanced.jpg';

let works = [
  {
    id: 1,
    title: "Tako Poke + Ramen",
    image: ramen,
    link: "/takopokeramen",
    isActive: false,
    description: "branding, photography, web"
  },
  {
    id: 2,
    title: "Fashion Domino",
    image: fd,
    link: "/fashiondomino",
    isActive: false,
    description: "graphic design, strategy"
  },
  {
    id: 3,
    title: "Riders Co",
    image: nike,
    link: "/ride",
    isActive: true,
    description: "branding, design, web"
  },
  {
    id: 4,
    title: "Oribe Hair Competition",
    image: salonshoot,
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
              light={reel} 
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
                  <img src={work.image}/>
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

        {/* {
              workList.map((work) => {
               return (
                <motion.div layout className={`landing__works__main ${work.isActive ? "active" : ""}`} 
                  animate={{width: ["0px", "600px"]}}
                >
                  <motion.img src={work.image} className={`works__hero ${work.isActive ? "hero-full" : "hero-shrunk"}`} onClick={() => changeView(work)} type="button"
                  />
                  <motion.div className="landing__works__copy" animate={{opacity: 1}}>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                    <Link className="roundbutton black space" to={`${work.link}`}>
                      View Project
                    </Link>
                  </motion.div>
                </motion.div>)
              })
            } */}
          {/* <Link className="landing__cta cta">
            <span>View my work</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link> */}

                    {/* <div className="landing__works__main">
              <img src={nike} alt="" className="works__hero"/>
            </div>
            <div className="landing__works__main full">
              <img src={ramen} alt="" className="works__hero"/>
              <div className="landing__works__copy">
                <h3>Tako Poke Ramen</h3>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                </p>
                <Link className="roundbutton black space" to={""}>
                  View Project
                </Link>
              </div>
            </div>
            <div className="landing__works__main">
              <img src={salonshoot} alt="" className="works__hero"/>
            </div>
            <div className="landing__works__main">
              <img src={fd} alt="" className="works__hero"/>
            </div> */}