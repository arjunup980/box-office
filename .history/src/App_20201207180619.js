import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navs from './components/Navs';
import Home from './pages/Home';



function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          This is 404 page
</Route>
      </Switch>
    </div>
  );
}

export default App;
