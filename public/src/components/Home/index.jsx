import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimateSharedLayout, motion } from "framer-motion"
import ReactPlayer from 'react-player'
import './home.scss';

// assets
import ramen from '../../../dist/assets/works/tako_main.jpg';
import fd from '../../../dist/assets/works/fds_banner.jpg';
import nike from '../../../dist/assets/works/ride.jpg'
import salonshoot from '../../../dist/assets/works/DSC00602.jpg';
import reel from '../../../dist/assets/photography/DSC01329-Enhanced.jpg';

let works = [
  {
    id: 1,
    title: "Tako Poke + Ramen",
    image: ramen,
    description: "We developed a modern website that showcased Tako Poke + Ramen's values through story telling highlighted by its visual aesthetic. In order to achieve this, we focused on capturing vibrant imagery that highlighted the final food product, as well as taking customers on a visceral journey in food preparation. By focusing on the food and its creation process, we brought the dine-in experience into the customers’ homes that would not otherwise exist.",
    link: "/takopokeramen",
    isActive: false,
    color: "#BEB082",
    position: "flex-start",
    img_position: "45%"
  },
  {
    id: 2,
    title: "Riders Co",
    image: nike,
    description: "Our goal is to create a seamless experience for users, from casual outdoor enthusiasts to seasoned veterans, a platform that will provide quick, user aggregated and curated destinations while integrating fitness tracking solutions that we all come to appreciate.",
    link: "/ride",
    isActive: true,
    color: "#82A7BE",
    position: "flex-end",
    img_position: "-10%"
  },
  // {
  //   id: 3,
  //   title: "Oribe Hair Competition",
  //   image: salonshoot,
  //   // description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  //   link: "",
  //   isActive: false,
  //   color: "#BEB082"

  // },
  {
    id: 4,
    title: "Fashion Domino",
    image: fd,
    description: "Fashion Domino is the premium Los Angeles based Wholesale Fashion Marketplace that connects wholesale clothing, accessories, handbags, shoes and cosmetics manufacturers & distributors with buyers from across the USA and the whole globe.",
    link: "/fashiondomino",
    isActive: false,
    color: "#BE8290",
    position: "flex-start",
    img_position: "45%"
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
        <div className="landing__works__container">
          <div className="landing__works__main" >
            { workList.map((work => {
                return <div className="landing__work" style={{background: `${work.color}`}}>
                <img className="shadow" src={work.image}/>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <Link className="roundbutton black space" to={work.link}>View Project</Link>
            </div>
            }))}
          </div>
          {/* {workList.map((work => {
            return <div className={`landing__works__main ${work.isActive ? "active" : ""}`}>
              <motion.img className={`works__hero ${work.isActive ? "hero-full" : "hero-shrunk"}`} src={work.image} alt="" onClick={() => changeView(work)}
                animate={{width: width + "320px"}}
                // onClick={() => changeView(width)}
              />
              <div className="landing__works__copy">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <Link className="roundbutton black space" to={work.link}>View Project</Link>
              </div>
            </div>
          }))} */}

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