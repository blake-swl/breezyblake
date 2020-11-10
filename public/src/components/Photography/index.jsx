import React from 'react';
import PhotoNav from './photoNav';
import './photography.scss';

// assets
import skate from '../../../dist/assets/DSC07711-2.jpg';
import dtla from '../../../dist/assets/DSC00877.jpg';
import train from '../../../dist/assets/DSC09157.jpg';
import window from '../../../dist/assets/DSC00784.jpg';

const Photography = () => {

  return (
    <div className="photography__container">
      <PhotoNav />
      <div className="photography__banner">
        <h1>Photography</h1>
      </div>
      <div className="photography__body">
        <div className="photography__body__left">
          <h2>Emotional Storytelling</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
        </div>
        <div className="photography__body__right">
          <img src={skate} alt=""/>
          <img src={dtla} alt=""/>
          <img src={train} alt=""/>
          <img src={window} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Photography;