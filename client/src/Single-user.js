import React from "react";
import Calculator from './Online-status.js';
import Mapper from './Location-map.js';


import './Single-user.css';


export class User extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
      return <div className="user">
          <img className="profile-picture" src={this.props.user.picture.url} alt="profile pic missing"></img>
          <div className="details">
          <p>{this.props.user.name}</p>
          <p>{this.props.user.personal.age}</p>
          <p>{this.props.user.headline}</p>
          <Calculator user={this.props.user}/>
          <Mapper location={this.props.user}/>
          </div>
      </div>
    }
  }



//   <p>{this.props.user.name}</p>
//   <p>{this.props.user.picture.url}</p>