import React from "react";
import Calculator from './Online-status.js';
import Mapper from './Location-map.js';
import './Online-status.css';


import './Single-user.css';

function Last_seen(props) {
  if(props.user.online_status === 1 ){
    return <div className="status_icon online_icon">
    </div>;
  } else{
    return <div className="status_icon offline_icon">
    </div>;
  }

}

export class User extends React.Component {
    
    render() {
      return <li className="user">
          <img className="profile-picture" src={this.props.user.picture.url} alt="profile pic missing"></img>
          <div className="information">
          <div className="details">
            <p>{this.props.user.personal.age} | {this.props.user.name}</p> 
            <Last_seen user={this.props.user}/>
          </div>
          <Mapper location={this.props.user.location}/>
          <Calculator user={this.props.user}/>

          <p>{this.props.user.headline}</p>
          </div>
         
         
      </li>
    }
  }



//   <p>{this.props.user.name}</p>
//   <p>{this.props.user.picture.url}</p>