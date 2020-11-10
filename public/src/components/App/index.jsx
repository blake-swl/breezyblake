import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation'
import Home from '../Home';
import Photography from '../Photography';

const App = () => {
  return(
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />}/>
        <Route exact path="/photography" render={props => <Photography {...props} />}/>
        {/* <Route exact path="/works" render={props => <Works {...props} />}/> */}
      </Switch>
    </div>
  )
}
export default App;