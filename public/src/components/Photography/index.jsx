import React from 'react';
import PhotoNav from './photoNav';
import './photography.scss';
import { IKImage } from 'imagekitio-react';
const urlEndpoint = "https://ik.imagekit.io/breezy/"


import photos from './photos';

const banner = "https://ik.imagekit.io/breezy/Breezyblake/photography/DSC01329-Enhanced_doOuQFB1cC.jpg?updatedAt=1640908830080";



const Photography = () => {

  return (
    <div className="photography__container">
      {/* <PhotoNav /> */}
      <div className="photography__banner">
        {/* <h1 className="freight">Photography</h1> */}
        <img src={banner} className="border" alt="" />
      </div>
      <div className="photography__body">
        <h2>Selected Work</h2>
        <p>Based in Los Angeles, CA, I am a lifestyle and portrait photograher with a passion for landscape and street photography. </p>
        {/* {
            photos.map(photo => {
              return photo.aerial.map(link => {
                // console.log(link)
                return <div className="row">
                  <div className="col">
                    {link.links.map((image, i) => {
                      return <img src={image} alt={link.name} key={i}/>
                    })}
                  </div>
                </div>
              })
            })
          } */}
        {/* <div className="row">
          {
              photos.map(photo => {
                return photo.aerial.map(link => {
                  return <div className="col">
                      <img src={link.links} alt={link.name} />
                    </div>
                  // </div>
                })
              })
            }

        </div> */}
          {
            photos.map(photo => {
              return photo.portraits.map(link => {
                // console.log(link)
                return <div className="row">
                  <div className="col">
                    {link.links.map((image, i) => {
                      return <IKImage urlEndpoint={urlEndpoint} path={image} alt={link.name} key={i}/>
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