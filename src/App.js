import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

state = {
  loading: true,
  person: null
}

async componentDidMount (){
  const url = "https://api.randomuser.me/";
  const request = await fetch(url);
  const data = await request.json();
  this.setState({
    loading: false,
    person: data.results[0]
  });
}


  render(){
  return (
    <div className="App">
    <h1>Random Users</h1>
    {this.state.loading || !this.state.person ?
    (<div>loading...</div>) :
    (<div>
  <div>{this.state.person.name.first}</div>
  <div>{this.state.person.name.last}</div>
  <img src={this.state.person.picture.large}/>
  <div>{this.state.person.location.state}, {this.state.person.location.country}</div>
  </div>)
}
</div>

  );
}
}

export default App;
