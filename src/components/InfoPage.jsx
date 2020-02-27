import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';


class InfoPage extends Component {
    state = {
        generalInfo: [],
        ready: false
    };

  componentDidMount() {
      Axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4502`).then(res => {
      console.log(res.data.leagues)    
      this.setState ({
              generalInfo: res.data.leagues,
              ready: true  
          });
        });
      }

      showAllInfo = () => {
        let allInfo = this.state.generalInfo[0]
        return (
            <div className="info-page">
             <img src = {allInfo.strLogo}/>
             <h3>Established {allInfo.intFormedYear}</h3>
             <p>The UEFA European Championship (known informally as the Euros) is the primary association football competition contested by the senior men's national teams of the members of the Union of European Football Associations (UEFA), determining the continental champion of Europe. Held every four years since 1960, in the even-numbered year between World Cup tournaments, it was originally called the UEFA European Nations' Cup, changing to the current name in 1968. Starting with the 1996 tournament, specific championships are often referred to in the form "UEFA Euro "; this format has since been retroactively applied to earlier tournaments.<br/>
             Prior to entering the tournament all teams other than the host nations (which qualify automatically) compete in a qualifying process. The championship winners earn the opportunity to compete in the following FIFA Confederations Cup, but are not obliged to do so.<br/>
             The 15 European Championship tournaments have been won by ten national teams: Germany and Spain each have won three titles, France has two titles, and Soviet Union, Italy, Czechoslovakia, Netherlands, Denmark, Greece and Portugal have won one title each. To date, Spain is the only team in history to have won consecutive titles, doing so in 2008 and 2012. It is the second most watched football tournament in the world after the FIFA World Cup. The Euro 2012 final was watched by a global audience of around 300 million.<br/> 
             The most recent championship, hosted by France in 2016, was won by Portugal, who beat France 1–0 in the final at the Stade de France in Saint-Denis after extra time. The final also attracted 284 million viewers which is the second most viewed game in European tournament history.<br/> 
             There were 55 national teams which entered the qualifying process, with Kosovo taking part for the first time. The group stage draw took place at the Convention Centre Dublin, Republic of Ireland, on 2 December 2018.</p>
             
             <h2>Trophy</h2>
             <img src = {allInfo.strTrophy}/>
             <p>The Henri Delaunay Trophy, which is awarded to the winner of the European Championship, is named in honour of Henri Delaunay, the first General Secretary of UEFA, who came up with the idea of a European championship but died five years prior to the first tournament in 1960.<br/>
             Since the first tournament it has been awarded to the winning team for them to keep for four years, until the next tournament. This trophy bore the words "Coupe d'Europe", "Coupe Henri Delaunay", and "Championnat d'Europe" on the front and a juggling boy on the back.<br/>
             For the 2008 tournament, the Henri Delaunay Trophy was remodelled to make it larger, as the old trophy was overshadowed by UEFA's other trophies such as the new European Champion Clubs' Cup. <br/>
             The new trophy, which is made of sterling silver, now weighs 8 kilograms (18 lb) and is 60 centimetres (24 in) tall, being 2 kilograms (4.4 lb) heavier and 18 centimetres (7.1 in) longer than the old one. <br/>
             The marble plinth that was serving as base was removed. The new silver base of the trophy had to be enlarged to make it stable. The names of the winning countries that had appeared on the plaques glued to the plinth are now engraved on the back of the trophy, under the word "Coupe Henri Delaunay" and are written in English rather than French its predecessor had.</p>

             <h3>Fanart</h3>
             <img src = {allInfo.strFanart1}/>
             <img src = {allInfo.strFanart2}/>
             <img src = {allInfo.strFanart3}/>
             <img src = {allInfo.strFanart4}/>

             <h3>Banner</h3>
             <img src = {allInfo.strBanner}/>

             <a href="https://www.uefa.com/uefaeuro/index.html"><img alt='' src="./images/webpage_128.png" className="facebook" /></a>
             <a href="https://www.facebook.com/uefacom"><img alt='' src="./images/facebook_128.png" className="facebook" /></a>
             <a href="https://twitter.com/UEFAcom"><img alt='' src="./images/twitter_128.png" className="facebook" /></a>
             <a href="https://www.youtube.com/user/UEFA"><img alt='' src="./images/youtube_128.png" className="facebook" /></a>

            </div>
        )

        // ((eachTeam, index) => {
        //     console.log(eachTeam.strTeamBadge)
        //     return(<div key={index}>    
        //     <img src = {eachTeam.strTeamBadge}/>
        //     <p>{eachTeam.tagline}</p>
        //     <p>{eachTeam.contributed_by}</p>
        //     </div>)
        // })
        // return showAllInfo
    }
  
      render() {
          return (
            <div>
              {/* {this.showAllInfo()} */}
              {this.state.ready? (this.showAllInfo()) : ("Loading...")}
            </div>
          );
        }
  
  }
  
  
  
  
  
  export default InfoPage;
 