import React, { Component } from 'react';
import User from './user-component.js';

import './App.css';

class App extends Component {
  state = {
    ids: [],
    users: [],
  };
  
  componentDidMount() {
    this.getUser()
      .then(users => this.getUserInfo(users.items).then(
        complete_users =>   {
          this.setState({ 
            users: complete_users
          })
          console.log("complete users", complete_users)
        })
     
      )
      .catch(err => console.log(err));
  }
  
  getUser = async () => {
    const result= await fetch('/api/search?length=32');
    const users = await result.json();

    if (result.status !== 200) throw Error(users.message);
    let user_ids = [];

    for(let i=0; i<users.items.length; i++){
      user_ids.push(users.items[i].id);
    }
    return users;
  };

  getUserInfo = async (users) => {
    let params = ``;
    for(let i=0; i<users.length; i++){
      params += `&ids=${users[i].id}`
    }

    const result = await fetch(`/api/profiles?ids=${params}`);
    const user_info = await result.json();

    if (result.status !== 200) throw Error(user_info.message);  
  
    let complete_users = user_info.map((item, i) => Object.assign({}, item, users[i]));

    return complete_users;

  };
 
  render() {
      return (
        <div className="App">
          <header className="App-header">
          </header>
          <User props={this.state.ids}/>
        </div>
      );
  }
}

export default App;