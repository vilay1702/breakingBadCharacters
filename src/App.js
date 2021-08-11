import React from 'react';
import Main from './Main';
import Character from './Character';
import Error from './Error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/characters/:id/:name"><Character/></Route>
        <Route path="*" component={Error}/>
      </Switch>
    </Router>
  );
}

export default App
