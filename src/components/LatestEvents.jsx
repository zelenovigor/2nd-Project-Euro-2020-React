import React, { Component } from "react";
import Axios from "axios";

import { Link } from "react-router-dom";

class LatestEvents extends Component {
  state = {
    newevents: [],
    ready: false
  };

  componentDidMount() {
    Axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4502`
    ).then(res => {
      console.log(res.data.events);
      this.setState({
        newevents: res.data.events,
        ready: true
      });
    });
  }

  showAllEvents = () => {
    let allEvents = this.state.newevents.map((eachEvent, index) => {
      console.log(eachEvent.idEvent);
      return (
        <div key={index}>
          <h2>{eachEvent.strEvent}</h2>
        </div>
      );
    });
    return allEvents;
  };

  render() {
    return (
      <div className="latest-event">
        {/* {this.showAllInfo()} */}
        {this.state.ready ? this.showAllEvents() : "Loading..."}
      </div>
    );
  }
}

export default LatestEvents;
