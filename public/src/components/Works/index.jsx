import React from 'react';
import { Link } from 'react-router-dom';
import './works.scss';

// assets
import ramen from '../../../dist/banners/tako.jpg';
// import fd from '../../../dist/banners/fashiondomino.jpg';
import ride from '../../../dist/assets/ride.jpg';

const works = [
  {
    title: "Tako Poke + Ramen",
    image: ramen,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    link: "/takopokeramen"
  },
  // {
  //   title: "Fashion Domino",
  //   image: fd,
  //   description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  //   link: ""
  // }
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
      {/* <section className="caseStudy">
        <div className="caseStudy__banner">
          <img src={ramen} alt=""/>
        </div>
        <div className="caseStudy__description">
          <h1 className="header works">Tako Poke + Ramen</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
          <Link className="roundbutton black">
            See my work
          </Link>
        </div>
      </section> */}
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