import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimateSharedLayout, motion } from "framer-motion"
import './home.scss';

// assets
const hero ='https://breezyyblake.s3-us-west-1.amazonaws.com/DSC07848.jpg';
import reel from '../../../dist/assets/DSC00602 copy.jpg';
import ramen from '../../../dist/assets/works/tako.jpg';
import fd from '../../../dist/assets/works/fashiondomino.jpg';
import nike from '../../../dist/assets/works/nikemockup.jpg'
import salonshoot from '../../../dist/assets/works/hair.jpg';


let works = [
  {
    id: 1,
    title: "Tako Poke + Ramen",
    image: ramen,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    link: "/takopokeramen",
    isActive: false
  },
  {
    id: 2,
    title: "Nike Brand",
    image: nike,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    link: "",
    isActive: true
  },
  {
    id: 3,
    title: "Oribe Hair Competition",
    image: salonshoot,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    link: "",
    isActive: false
  },
  {
    id: 4,
    title: "Fashion Domino",
    image: fd,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    link: "",
    isActive: false
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
          <div className="landing__container__overlay">
          </div>
        </div>
      </div>
      <section className="landing__about__reel">
        <h2 className="header">To delight with 
          <br/>design & technology </h2>
          <div className="landing__reel__container">
            <img src={reel} alt="" />
          </div>
      </section>
      <section className="landing__works">
        <h2 className="header">Selected Works</h2>
        <div className="landing__works__container">
          {workList.map((work => {
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
          }))}

        </div>
        <Link className="roundbutton black space" to="/works">
          See All
        </Link>
      </section>
      <section className="landing__break">
        <div className="landing__break__overlay">
          <h3>Let's work together</h3>
          <Link className="roundbutton white">
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