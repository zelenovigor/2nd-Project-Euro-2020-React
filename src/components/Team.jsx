import React, { Component } from 'react';
import Axios from 'axios';

class Team extends Component {
    state = {
        team1: {},
        ready: false
    };
componentDidMount() {
    console.log(this.props)
    Axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${this.props.match.params.idTeam}`
    ).then(singleTeam => {
        this.setState({
          team1: singleTeam,
          ready: true
        }); ///to receive new singleTeam
      });
    }

    // this.props.match.params.id
    //console.log(this.props)
    //console.log(this.props.allTeams)

    render() {
        console.log(this.state);
        //to get all data about single team
        return (
          <div>
            {this.state.ready ? (
              <li>
                <img src={this.state.team1.data.strTeamBadge} />
                <br />
                {this.state.team1.data.strTeam}
                <br />
                {this.state.team1.data.strAlternate}
                <br />
                {this.state.team1.data.intFormedYear}
                <br />
                {this.state.team1.data.strStadium}
                <img src={this.state.team1.data.strStadiumThumb} />
                <br />
                {this.state.team1.data.strStadiumDescription}
                <br />
                {this.state.team1.data.strStadiumLocation}
                <br />
                {this.state.team1.data.strStadiumCapacity}
                <br />
                {this.state.team1.data.strDescriptionEN}
                <br />
              </li>
            ) : (
              "Loading"
            )}
          </div>
        );
      }

}

  


export default Team;