import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Switch, Link, Route
import {Switch, Link, Route} from 'react-router-dom'

// import axios
import axios from 'axios'; 

// import components
import Teams from './components/Teams';
import Team from './components/Team';
import Home from './components/Home';
import InfoPage from './components/InfoPage';
import UpcomingEvents from './components/UpcomingEvents';
import LatestEvents from './components/LatestEvents';




class App extends Component {

  state = {     
    teams: [],
  }

  async componentDidMount(){
    // console.log('didMount')
    let res = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4502`)
    // since 5 teams were not in the original api, had to add them separately
    let ukraine = await axios.get("https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133915")
    let netherlands = await axios.get("https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133905")
    let wales = await axios.get("https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=135982")
    let ireland = await axios.get("https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133911")
    let turkey = await axios.get("https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=135985")

    console.log(res, ukraine, netherlands, wales, ireland, turkey);
    this.setState({
      teams: [...res.data.teams, ...ukraine.data.teams,...netherlands.data.teams, ...wales.data.teams, ...ireland.data.teams, ...turkey.data.teams]
    })
  }

  render() {
    return (
      <div className="App">                       
      <nav>
      <Link to='/'>Home</Link>
      <Link to='/Teams'>Teams</Link>
      <Link to='/InfoPage'>InfoPage</Link>
      <Link to='/UpcomingEvents'>UpcomingEvents</Link>
      <Link to='/LatestEvents'>LatestEvents</Link>
      </nav>



      <Switch>
        <Route exact path='/' render={props => <Home/>}/>
        <Route exact path='/allTeams/:id' render={props => <Team {...props}/>} />
        <Route exact path ='/Teams' render={props => <Teams {...props} allTeams = {this.state.teams} />}/>
        <Route exact path ='/InfoPage' render={props => <InfoPage {...props} InfoPage/>}/>
        <Route exact path ='/UpcomingEvents' render={props => <UpcomingEvents {...props} UpcomingEvents/>}/>
        <Route exact path ='/LatestEvents' render={props => <LatestEvents {...props} LatestEvents/>}/>


      </Switch> 

      

      </div>
    );
  }
}

export default App;