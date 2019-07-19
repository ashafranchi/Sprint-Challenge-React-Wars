import React, { Component } from 'react';
import './App.css';
import Characters from "./components/Characters";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/")
  }

  getCharacters = URL => {
    fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      this.setState({ people: data.results });
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Characters characters={this.state.people}/>
      </div>
    );
  }
}


export default App;
