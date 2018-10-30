import React, { Component } from 'react';
import USAMap from 'react-usa-map';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  mapHandler(e) {
    console.log(e.target.dataset.name);
  }

  statesCustomConfig(e) {}
  render() {
    return (
      <div className="home">
        <div className="us-map">
          <USAMap
            customize={this.statesCustomConfig()}
            onClick={this.mapHandler}
          />
        </div>
      </div>
    );
  }
}

export default Home;
