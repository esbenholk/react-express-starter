import React, { Component } from 'react';
import {User} from './user-grid.js';

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
      if(!users.items[i].picture){
        users.items[i].picture = "https://media.istockphoto.com/photos/abstract-gay-rainbow-flag-profile-picture-avatar-picture-id479382834?k=6&m=479382834&s=170667a&w=0&h=uN0apj0EDnLE_SkyaOiEJgad2iVhJCaT6CVQti4fGh0="
      }
    }
    return users;
  };

  getUserInfo = async (users) => {
    let params = ``;
    
    // concats user_ids in to query string

    for(let i=0; i<users.length; i++){
      params += `&ids=${users[i].id}`
    }

    const result = await fetch(`/api/profiles?ids=${params}`);
    const user_info = await result.json();

    if (result.status !== 200) throw Error(user_info.message);  

  

    // maps user_info array onto users array through ID match
  
    let complete_users = user_info.map((item, i) => Object.assign({}, item, users[i]));
    

    return complete_users;

  };
 
  render() {
   
      return (
        <div className="App">
          <header className="App-header">
          </header>
            {this.state.users.map((user) => (
                <User user={user}/>
             ))}
       
        </div>
      );
  }
}

export default App;

