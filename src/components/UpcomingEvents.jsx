import React, { Component } from "react";
import Axios from "axios";

import { Link } from "react-router-dom";

class UpcomingEvents extends Component {
  state = {
    newevents: [],
    ready: false
  };

  componentDidMount() {
    Axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4502&s=1920`
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
      console.log(eachEvent);
      return (
        <Link class="event" key={index} to={'#'} >
          <h2>
            <Link to={`/allTeams/${eachEvent.idHomeTeam}`}>{eachEvent.strHomeTeam} </Link>
             vs 
             <Link to={`/allTeams/${eachEvent.idAwayTeam}`}> {eachEvent.strAwayTeam}</Link>
        </h2>

          <h2>{eachEvent.dateEvent}</h2>

        </Link>
      );
    });
    return allEvents;
  };

  render() {
    return (
      <div className="upcoming-event">
        {/* {this.showAllInfo()} */}
        {this.state.ready ? this.showAllEvents() : "Loading..."}
      </div>
    );
  }
}

export default UpcomingEvents;
