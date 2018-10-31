import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import axios from 'axios';
import Header from './Header';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      selectedState: '',
      data: false,
      stateSenateData: [],
      stateHouseData: []
    };
    this.mapHandler = this.mapHandler.bind(this);
  }

  async mapHandler(e) {
    await this.setState({ selectedState: e.target.dataset.name });
    const state = this.state.selectedState;
    const urlS = `https://api.propublica.org/congress/v1/members/senate/${state}/current.json`;
    const urlH = `https://api.propublica.org/congress/v1/members/house/${state}/current.json`;

    await axios
      .get(urlS, {
        headers: { 'X-API-Key': 'D6RcdBv0VgQc7gVVFxUO97umVSHtbwgzUlywB67p ' }
      })
      .then(response => {
        this.setState({ data: true, stateSenateData: response.data.results });
      })
      .catch(error => {
        console.log('error 3 ' + error);
      });

    await axios
      .get(urlH, {
        headers: { 'X-API-Key': 'D6RcdBv0VgQc7gVVFxUO97umVSHtbwgzUlywB67p ' }
      })
      .then(response => {
        this.setState({ data: true, stateHouseData: response.data.results });
      })
      .catch(error => {
        console.log('error 3 ' + error);
      });
  }

  render() {
    return (
      <div className="home">
        <Header />

        <div className={this.state.data ? 'dub-homeBod' : 'sing-homeBod'}>
          <USAMap onClick={this.mapHandler} />
          {this.state.data ? (
            <div className="state-info">
              <div className="senators">
                <div className="column-title">Senators</div>
                <div className="members-list">
                  {this.state.stateSenateData.map(member => {
                    return (
                      <div key={member.first_name} className="member">
                        {`${member.first_name}  ${member.last_name}`}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="house">
                <div className="column-title">House</div>
                <div className="members-list">
                  {this.state.stateHouseData.map(member => {
                    return (
                      <div key={member.first_name} className="member">
                        {`${member.first_name}  ${member.last_name}`}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
