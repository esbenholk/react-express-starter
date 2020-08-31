import React from "react";
import Calculator from './date-calculator.js';


export class User extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
      return <div className="user">
          <img src={this.props.user.picture.url} alt="profile pic missing"></img>
          <p>{this.props.user.name}</p>
          <p>{this.props.user.personal.age}</p>
          <Calculator user={this.props.user}/>
      </div>
    }
  }



//   <p>{this.props.user.name}</p>
//   <p>{this.props.user.picture.url}</p>