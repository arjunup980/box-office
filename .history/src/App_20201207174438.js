import React from 'react';
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
</Route>

      <Route path="/start">
        This is start page
</Route>
    </Switch>
  );
}

export default App;
