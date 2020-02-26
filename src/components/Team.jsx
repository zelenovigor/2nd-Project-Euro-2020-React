import React, { Component, Fragment } from 'react';
import Axios from 'axios';
// import Switch, Link, Route
// import { Link } from 'react-router-dom'
class AbsoluteRedirect extends React.Component {

  constructor(props){
      super(props)
  }

  componentDidMount(){
      window.location = this.props.to
  }

  render(){
      return null
  }

}
class Team extends Component {
    state = {
        team1: {},
        ready: false
    };
componentDidMount() {
    console.log(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${this.props.match.params.id}`)
    Axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${this.props.match.params.id}`
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
    redirect = () => {
      return <AbsoluteRedirect to={ this.state.team1.data.teams[0].strYoutube } />
    }
    render() {
        //to get all data about single team
        return (
          <div>
            {this.state.ready ? (
              <Fragment>
              {console.log(this.state.team1.data.teams[0].strYoutube)}
                <img alt="" src={this.state.team1.data.teams[0].strTeamLogo} />
                <br />
                <img alt="" src={this.state.team1.data.teams[0].strTeamBadge} />
                <br />
                {this.state.team1.data.teams[0].strDescriptionEN}
                <br />
                <img alt="" src={this.state.team1.data.teams[0].strTeamJersey} />
                <br />
                Nicknames: {this.state.team1.data.teams[0].strAlternate}
                <br />
                <img alt="" src={this.state.team1.data.teams[0].strTeamBanner} />
                <br />
                First game played: {this.state.team1.data.teams[0].intFormedYear}
                <br />
                Stadium: {this.state.team1.data.teams[0].strStadium}
                <br />
                Stadium capacity: {this.state.team1.data.teams[0].intStadiumCapacity}
                <br />
                Stadium
                <img alt="" src={this.state.team1.data.teams[0].strStadiumThumb} />
                <br />
                {this.state.team1.data.teams[0].strStadiumDescription}
                <br />
                Location: {this.state.team1.data.teams[0].strStadiumLocation}
                <br />
                Fanart
                <img alt="" src={this.state.team1.data.teams[0].strTeamFanart1} />
                <br />
                <img alt="" src={this.state.team1.data.teams[0].strTeamFanart2} />
                <br />
                <img alt="" src={this.state.team1.data.teams[0].strTeamFanart3} />
                <br />
                <img alt="" src={this.state.team1.data.teams[0].strTeamFanart4} />
                <br /> 
                <a target="blank" href={this.state.team1.data.teams[0].strWebsite}>
                <img alt="" src='/webpage_128.png' className='youtubeIcon'/> </a>
                <a target="blank" href={this.state.team1.data.teams[0].strYoutube}>
                <img alt="" src='/youtube_128.png' className='youtubeIcon'/> </a>
                <a target="blank" href={this.state.team1.data.teams[0].strFacebook}>
                <img alt="" src='/facebook_128.png' className='youtubeIcon'/> </a>
                <a target="blank" href={this.state.team1.data.teams[0].strInstagram}>
                <img alt="" src='/instagram_128.png' className='youtubeIcon'/> </a>
      
                      
                  {/* strWebsite: "www.thefa.com",
                    strFacebook: "www.facebook.com/EnglandTeam",
                    strTwitter: "twitter.com/fa",
                    strInstagram: "www.instagram.com/england", */}
                <br />
              </Fragment>) : ("Loading")
            }
          </div>
        );
      }

}





export default Team;