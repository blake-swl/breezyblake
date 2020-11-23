import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from '../Util/scroll.jsx';

import Navigation from '../Navigation';
import Sidebar from '../Navigation/sidebar';
import Home from '../Home';
import Photography from '../Photography';
import Tako from '../CaseStudies/Tako';
import Works from '../Works';
import Footer from '../Footer';
import Contacts from '../Contacts/index.jsx';

const routes = [
  {path: '/', Component: Home},
  {path: '/photography', Component: Photography},
  {path: '/works', name: 'Case Studies', Component: Works},
  {path: '/contact', name: 'Contact', Component: Contacts},
  {path: '/takopokeramen', name: 'Tako Poke + Ramen', Component: Tako},
]
// {path: '/case-studies', name: 'Case Studies', Component: CaseStudies},
// {path: '/services', name: 'Services', Component: Services},
// {path: '/about-us', name: 'About Us', Component: About},
// {path: '/hike', name: 'Hike', Component: Hike}

const App = () => {
  return(
    <>
      <ScrollToTop/>
        <Navigation />
        <Sidebar/>
          <Switch>
            {routes.map(({path, Component}) => (
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        <Footer />
    </>
  )
}
export default App;