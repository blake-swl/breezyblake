import React from 'react';
import PhotoNav from './photoNav';
import './photography.scss';

// assets
const skate = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC07711.jpg';
const dtla = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC00877.jpg';
const train = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC09157.jpg';
const window = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC00784.jpg';
const camp = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC08955.jpg';
const street = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC09838.jpg';
const station = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC05139-2.jpg';
const skate2 = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC04833-2.jpg';
const grimes = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC05663-2.jpg';
const malibu = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC04964.jpg';
const echopark = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC00673-2.jpg';
const park = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC03305.jpg';
const lightraildtla = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC00859-2.jpg';
const bell = 'https://breezyyblake.s3-us-west-1.amazonaws.com/DSC07848.jpg';


const Photography = () => {

  return (
    <div className="photography__container">
      {/* <PhotoNav /> */}
      <div className="photography__banner">
        <h1>Photography</h1>
      </div>
      <div className="photography__body">
        <h2>Selected Work</h2>
        <p>Based in Los Angeles, CA, I am a commercial product photographer with a passion for landscape and street photography. </p>
        <div className="row">
          <div className="col">
            <img src={grimes} alt=""/>
            <img src={station} alt=""/>
            <img src={street} alt=""/>
            <img src={park} alt=""/>
            <img src={window} alt=""/>
          </div>
          <div className="col">
            <img src={dtla} alt=""/>
            <img src={lightraildtla} alt=""/>
            <img src={skate2} alt=""/>
            <img src={camp} alt=""/>
            <img src={echopark} alt=""/>
          </div>
          <div className="col">
            <img src={skate} alt=""/>
            <img src={train} alt=""/>
            <img src={malibu} alt=""/>
            <img src={bell} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photography;