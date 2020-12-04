import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from '../Util/scroll.jsx';
import { AnimatedRoute, spring } from 'react-router-transition'
import { CSSTransition } from 'react-transition-group';

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
// {path: '/case-studies', name: 'Case Studies', Component: CaseStudies},
// {path: '/services', name: 'Services', Component: Services},
// {path: '/about-us', name: 'About Us', Component: About},
// {path: '/hike', name: 'Hike', Component: Hike}


// const App = () => {

//   const [isVisible, setIsVisible] = useState(false);
//   return(
//     <>
//       <ScrollToTop/>
//         <Navigation />
//         <Sidebar/>
//           <Switch>
//             <CSSTransition classNames="slide" timeout={300} in={true}>
//               {routes.map(({path, Component}) => (
//                 <Route key={path} exact path={path}>
//                   <Component />
//                 </Route>
//               ))}
//             </CSSTransition>
//           </Switch>
//         <Footer />
//     </>
//   )
// }
// export default App;
const App = () => {
  function glide(val) {
    return spring(val, {
      stiffness: 174,
      damping: 24,
    });
  }
  
  function slide(val) {
    return spring(val, {
      stiffness: 125,
      damping: 16,
    });
  }
  
  const pageTransitions = {
    atEnter: {
      offset: 100,
    },
    atLeave: {
      offset: glide(-100),
    },
    atActive: {
      offset: glide(0),
    },
  };
  return(
    <>
      <ScrollToTop/>
        <Navigation />
        <Sidebar/>
          <Switch>
            {routes.map(({path, Component}) => (
              // <Route exact path={path} key={path}>
              //   {Component}
              // </Route>
              <AnimatedRoute key={path} exact path={path} component={Component}
              // className="switch"
              {...pageTransitions}
              style={{transform: `translateX(100%)`}}
              // mapStyles={(styles) => ({
              //   transform: `translateX(${styles.offset}%)`,
              // })}
              // pathname={this.props.location.pathname}
              // atEnter={{ opacity: 0 }}
              // atLeave={{ opacity: 2 }}
              // atActive={{ opacity: 1 }}
              // mapStyles={styles => {
              //   if(styles.opacity > 1){
              //     return { display: 'none'}
              //   }
              //   return { opacity: styles.opacity}
              // }}
            
              />
              
            ))}
          </Switch>
        <Footer />
    </>
  )
}
export default App;