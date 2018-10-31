import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div>RepMe</div>
        <div className="login">login</div>
      </div>
    );
  }
}

export default Home;
