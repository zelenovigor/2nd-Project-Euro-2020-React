import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Teams extends Component {

    showAllTeams = () => {
        let allTeams = this.props.allTeams.map((eachTeam, index) => {
            console.log(eachTeam.strTeamBadge)
            return(<div key={index}>    
            <Link to = {`/allTeams/${eachTeam.idTeam}`}><h1>{eachTeam.strTeam}</h1></Link>
            <img src = {eachTeam.strTeamBadge}/>
            <p>{eachTeam.tagline}</p>
            <p>{eachTeam.contributed_by}</p>
            </div>)
        })
        return allTeams
    }



    render() {
        console.log(this.props)
        return (
            <div>
                {this.showAllTeams()}
            </div>
        );
    }
}

export default Teams;