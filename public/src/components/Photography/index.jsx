import React from 'react';
import PhotoNav from './photoNav';
import './photography.scss';

// assets
import skate from '../../../dist/assets/DSC07711.jpg';
import dtla from '../../../dist/assets/DSC00877.jpg';
import train from '../../../dist/assets/DSC09157.jpg';
import window from '../../../dist/assets/DSC00784.jpg';
import camp from '../../../dist/assets/DSC08955.jpg';
import street from '../../../dist/assets/DSC09838.jpg';
import station from '../../../dist/assets/DSC05139-2.jpg';
import skate2 from '../../../dist/assets/DSC04833-2.jpg';
import grimes from '../../../dist/assets/DSC05663-2.jpg';
import malibu from '../../../dist/assets/DSC04964.jpg';
import echopark from '../../../dist/assets/DSC00673-2.jpg';
import park from '../../../dist/assets/DSC03305.jpg';
import lightraildtla from '../../../dist/assets/DSC00859-2.jpg';
import bell from '../../../dist/assets/DSC07848.jpg';


const Photography = () => {

  return (
    <div className="photography__container">
      <PhotoNav />
      <div className="photography__banner">
        <h1>Photography</h1>
      </div>
      <div className="photography__body">
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
          {/* <div className="col">
            <img src={window} alt=""/>
            <img src={skate} alt=""/>
            <img src={street} alt=""/>
            <img src={skate2} alt=""/>
          </div> */}
        </div>
        {/* <div className="photography__body__left">
          <h2>Emotional Storytelling</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
        </div>
        <div className="photography__body__right">
        </div> */}
      </div>
    </div>
  )
}

export default Photography;