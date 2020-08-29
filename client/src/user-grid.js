import React from "react";


export class User extends React.Component {
constructor(props){
    super(props)
    console.log(props.user.picture.url);
}
    render() {
      return <div>
          <img src={this.props.user.picture.url}></img>
      </div>
    }
  }



//   <p>{this.props.user.name}</p>
//   <p>{this.props.user.picture.url}</p>