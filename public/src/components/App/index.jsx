import React, { useState, useRef, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from '../Util/scroll.jsx';
import SmoothScroll from '../Util/smoothscroll';
import './global.scss'


import Navigation from '../Navigation';
import Sidebar from '../Navigation/sidebar';
import Home from '../Home';
import Photography from '../Photography';
import Works from '../Works';
import Footer from '../Footer';
import Contacts from '../Contacts/index.jsx';
import About from '../About';
import Tako from '../CaseStudies/Tako';
import Hike from '../CaseStudies/Hike'
import Temp from '../Temporary';
import Fashion_domino from '../CaseStudies/Fashion_domino.jsx';
import one2one from '../CaseStudies/one2one.jsx';
import veryj from '../CaseStudies/veryj.jsx';


// const routes = [
//   {path: '/', Component: Home},
//   {path: '/photography', Component: Photography},
//   {path: '/works', name: 'Case Studies', Component: Works},
//   {path: '/contact', name: 'Contact', Component: Contacts},
//   {path: '/about', name: 'About', Component: About},
//   {path: '/takopokeramen', name: 'Tako Poke + Ramen', Component: Tako},
//   {path: '/ride', name: 'Tako Poke + Ramen', Component: Hike},
// ]
const routes = [
  {path: '/', Component: Home},
  {path: '/photography', Component: Photography},
  {path: '/works', name: 'Case Studies', Component: Works},
  {path: '/contact', name: 'Contact', Component: Contacts},
  {path: '/about', name: 'About', Component: About},
  {path: '/takopokeramen', name: 'Tako Poke + Ramen', Component: Tako},
  {path: '/fashiondomino', name: 'Fashion Domino', Component: Fashion_domino},
  {path: '/ride', name: 'Riders Co.', Component: Hike},
  {path: '/one2one', name: 'One 2 One Salon Shoot', Component: one2one},
  {path: '/veryj', name: 'Very J', Component: veryj},

]


const App = () => {


  return(
    <div className="app">
      {/* <Temp/> */}
      <ScrollToTop/>
      <Navigation />
      {/* <Photography /> */}
      <Sidebar/>
        <Switch>
            {routes.map(({path, Component}) => (
              <Route exact path={path} key={path} component={Component} />
              ))}
        </Switch>
        <Footer />

    </div>
  )
}
export default App;