import React from 'react';
import PhotoNav from './photoNav';
import './photography.scss';

import photos from './photos';



const Photography = () => {

  return (
    <div className="photography__container">
      {/* <PhotoNav /> */}
      <div className="photography__banner">
        {/* <h1 className="freight">Photography</h1> */}
      </div>
      <div className="photography__body">
        <h2>Selected Work</h2>
        <p>Based in Los Angeles, CA, I am a lifestyle and portrait photograher with a passion for landscape and street photography. </p>
          {
            photos.map(photo => {
              return photo.portraits.map(link => {
                console.log(link)
                return <div className="row">
                  <div className="col">
                    {link.links.map((image, i) => {
                      return <img src={image} alt={link.name} key={i}/>
                    })}
                  </div>
                </div>
              })
            })
          }
      </div>
    </div>
  )
}

export default Photography;