import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  mapHandler(e) {
    console.log(e.target.dataset.name);
  }

  test() {
    const url =
      'https://api.propublica.org/congress/v1/115/senate/members.json';
    axios
      .get(url, {
        headers: { 'X-API-Key': 'D6RcdBv0VgQc7gVVFxUO97umVSHtbwgzUlywB67p ' }
      })
      .then(response => {
        // If request is good...
        console.log(response.data);
      })
      .catch(error => {
        console.log('error 3 ' + error);
      });
  }
  render() {
    return (
      <div className="home">
        <USAMap onClick={this.mapHandler} />
        <button onClick={this.test} />
      </div>
    );
  }
}

export default Home;
