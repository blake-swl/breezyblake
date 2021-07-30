import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './home.scss';
import { scrollContainer } from '../Util/smoothscroll';
// assets
const hero ='https://breezyyblake.s3-us-west-1.amazonaws.com/DSC07848.jpg';
import reel from '../../../dist/assets/DSC00602 copy.jpg';
import ramen from '../../../dist/assets/works/tako.jpg';
import fd from '../../../dist/assets/works/fashiondomino.jpg';
import nike from '../../../dist/assets/works/nikemockup.jpg'
import salonshoot from '../../../dist/assets/works/hair.jpg';


const works = [
  {
    title: "Tako Poke + Ramen",
    image: ramen,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    link: "/takopokeramen",
    toggle: false
  },
  {
    title: "Nike Brand",
    image: nike,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    link: "",
    toggle: true
  },
  {
    title: "Oribe Hair Competition",
    image: salonshoot,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    link: "",
    toggle: false
  },
  {
    title: "Fashion Domino",
    image: fd,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    link: "",
    toggle: false
  },
]

const Landing = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle)
  
  return (
    <div className="landing" >
      <div className="landing__container">
        <div className="landing__container__left">
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
        </div>
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
            {
              works.map(work => {
               return <div className="landing__works__main">
                 <img src={work.image} className="works__hero" onClick={() => setToggle(!!true)}/>
                 <div className="landing__works__copy">
                   <h3>{work.title}</h3>
                   <p>{work.description}</p>
                   <Link className="roundbutton black space" to={`${work.link}`}>
                    View Project
                   </Link>
                 </div>
              </div>
              })
            }
        </div>
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

          {/* <Link className="landing__cta cta">
            <span>View my work</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link> */}