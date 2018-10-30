import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;
