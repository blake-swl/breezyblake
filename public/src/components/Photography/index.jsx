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
import first from '../../../dist/assets/DSC09915.jpg'
import two from '../../../dist/assets/DSC08854.jpg'
import three from '../../../dist/assets/DSC08220.jpg'
import four from '../../../dist/assets/DSC08029.jpg'
import five from '../../../dist/assets/DSC07962.jpg'
import six from '../../../dist/assets/DSC07877.jpg'
import seven from '../../../dist/assets/DSC07888.jpg'
import eight from '../../../dist/assets/DSC07881.jpg'
import nine from '../../../dist/assets/DSC01258.jpg'
import ten from '../../../dist/assets/DSC01188.jpg'
import eleven from '../../../dist/assets/DSC01623.jpg'
import twelve from '../../../dist/assets/DSC00386.jpg'
import thirteen from '../../../dist/assets/DSC00602.jpg'
// import first from '../../../dist/assets/DSC09915.jpg'



const Photography = () => {

  return (
    <div className="photography__container">
      {/* <PhotoNav /> */}
      <div className="photography__banner">
        <h1 className="freight">Photography</h1>
      </div>
      <div className="photography__body">
        <h2>Selected Work</h2>
        <p>Based in Los Angeles, CA, I am a commercial product photographer with a passion for landscape and street photography. </p>
        <div className="row">
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
        </div>
      </div>
    </div>
  )
}

export default Photography;