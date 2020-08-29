import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    response: '',
    ids: [],
    responseToPost: '',
  };
  
  componentDidMount() {
    this.getUser()
      .then(users => this.getUserInfo(users.items).then(
        user_info =>   this.setState({ 
          response: user_info
        })
      )
     
      )
      .catch(err => console.log(err));
  }
  
  getUser = async () => {
    const users = await fetch('/api/search?length=32');
    const body = await users.json();

    if (users.status !== 200) throw Error(body.message);
    let user_ids = [];

    for(let i=0; i<body.items.length; i++){
      user_ids.push(body.items[i].id);
    }
    console.log(user_ids);

    return body;

  };
  getUserInfo = async (users) => {
    console.log("users", users)
    const user_info = await fetch(`/api/profiles?ids=${users[0].id}&ids=${users[1].id}`);
    const body = await user_info.json();

    if (user_info.status !== 200) throw Error(body.message);
  

    // for(let i=0; i<body.items.length; i++){
    //   user_ids.push(body.items[i].id);
    // }
    console.log("user info", body);

    return body;

  };
 
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        {/* <p>{this.state}</p> */}
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;