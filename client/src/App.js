import React, { Component } from 'react';
import {User} from './user-grid.js';
import {Calculator} from './date-calculator.js';

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
    

  
    for(let i=0; i<users.items.length; i++){   
      if(!users.items[i].picture){
        users.items[i].picture = {url: "data:image/png;base64,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"}
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

