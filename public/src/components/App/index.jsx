import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import Sidebar from '../Navigation/sidebar';
import Home from '../Home';
import Photography from '../Photography';
import Tako from '../CaseStudies/Tako';

const routes = [
  {path: '/', name: 'Home', Component: Home},
  // {path: '/case-studies', name: 'Case Studies', Component: CaseStudies},
  {path: '/photography', name: 'Approach', Component: Photography},
  // {path: '/services', name: 'Services', Component: Services},
  // {path: '/about-us', name: 'About Us', Component: About},
  {path: '/case-studies/takopokeramen', name: 'Tako Poke + Ramen', Component: Tako},
  // {path: '/hike', name: 'Hike', Component: Hike}

]

const App = () => {
  return(
    <div>
      <Navigation />
      <Sidebar/>
        {routes.map(({path, Component}) => {
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        })}
      {/* <Switch> */}
        {/* <Route exact path="/" render={props => <Home {...props} />}/>
        <Route exact path="/photography" render={props => <Photography {...props} />}/> */}
        {/* <Route exact path="/works" render={props => <Works {...props} />}/> */}
      {/* </Switch> */}
    </div>
  )
}
export default App;