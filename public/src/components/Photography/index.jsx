import React from 'react';
import PhotoNav from './photoNav';
import './photography.scss';


import chelsea__rooftop1 from '../../../dist/assets/photography/DSC01484.jpg'
import chelsea__rooftop2 from '../../../dist/assets/photography/DSC01372.jpg'
import chelsea__rooftop3 from '../../../dist/assets/photography/DSC01394.jpg'
import jamie__dam1 from '../../../dist/assets/photography/DSC03152.jpg'
import jamie__dam2 from '../../../dist/assets/photography/DSC02929.jpg'
import jamie__dam3 from '../../../dist/assets/photography/DSC02406.jpg'
import photos from './photos';



const Photography = () => {

  // for (let i = 0; i < photos.length; i++) {
  //   console.log(photos[i].portraits)
  // }
  return (
    <div className="photography__container">
      {/* <PhotoNav /> */}
      <div className="photography__banner">
        {/* <h1 className="freight">Photography</h1> */}
      </div>
      <div className="photography__body">
        <h2>Selected Work</h2>
        <p>Based in Los Angeles, CA, I am a lifestyle and portrait photograher with a passion for landscape and street photography. </p>
        {/* <div className="row">
          {
            photos.map(photo => {
              return photo.portraits.map(link => {
                  {link.links.map(image => {
                    return <img src={image} alt="" />
                  })}
              })
            })
          }
        </div> */}
          {
            photos.map(photo => {
              return photo.portraits.map(link => {
                return <div className="row">
                  <div className="col">
                    {link.links.map(image => {
                      return <img src={image} />
                    })}
                  </div>
                </div>
              })
            })
          }
        {/* <div className="row">
          <div className="col">
            <img src={five} alt=""/>
            <img src={three} alt=""/>
            <img src={eleven} alt=""/>
            <img src={first} alt=""/>
            <img src={window} alt=""/>
          </div>
          <div className="col">
            <img src={nine} alt=""/>
            <img src={six} alt=""/>
            <img src={four} alt=""/>
            <img src={seven} alt=""/>
            <img src={echopark} alt=""/>
          </div>
          <div className="col">
            <img src={thirteen} alt=""/>
            <img src={twelve} alt=""/>
            <img src={two} alt=""/>
            <img src={bell} alt=""/>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Photography;