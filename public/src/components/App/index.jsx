import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from '../Util/scroll.jsx';


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

const routes = [
  {path: '/', Component: Home},
  {path: '/photography', Component: Photography},
  {path: '/works', name: 'Case Studies', Component: Works},
  {path: '/contact', name: 'Contact', Component: Contacts},
  {path: '/about', name: 'About', Component: About},
  {path: '/takopokeramen', name: 'Tako Poke + Ramen', Component: Tako},
  {path: '/ride', name: 'Tako Poke + Ramen', Component: Hike},
]

const App = () => {
  return(
    <>
      <ScrollToTop/>
        <Navigation />
        <Sidebar/>
        <Switch>
          {routes.map(({path, Component}) => (
            <Route exact path={path} key={path} component={Component} />
          ))}
        </Switch>
        <Footer />
    </>
  )
}
export default App;