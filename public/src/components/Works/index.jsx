import React from 'react';
import { Link } from 'react-router-dom';
import './works.scss';

// assets
import ramen from '../../../dist/banners/tako.jpg';
import fd from '../../../dist/assets/works/fashiondomino.jpg';
import ride from '../../../dist/assets/ride.jpg';
import hair from '../../../dist/assets/works/hair.jpg';

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
    description: "At Fashion Domino, we prioritized efficiency and qua",
    link: "/fashiondomino"
  },
  {
    title: "One 2 One Salon Shoot",
    image: hair,
    description: "At Fashion Domino, we prioritized efficiency and qua",
    link: "/one2one"
  },
]


const Works = () => {
  return(
    <div className="caseStudies__container">
      {works.map((work => {
        return <section className="caseStudy">
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
        </section>
      }))}
      <section>
        hello
      </section>
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