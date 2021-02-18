import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Bhumi', age: 29},
      {name: 'Steph', age: 9},
    ]
  }

  //Event Handler, a class property which have a function which can execute
  swithNameHandler = () => {
    // console.log("ckjdhud ejkuihm");
    // this.state.persons[0].name = 'Maximillian'; // Don't use this
    this.setState({
      persons: [
      {name: 'Maxton', age: 28},
      {name: 'Bhumi saxena', age: 29},
      {name: 'Steph', age: 9
    },
    ]
  })
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I am React Learning guide</h1>
       <button onClick={this.swithNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
       <div>Another Person <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My work is good</Person></div>
      </div>
    );
  }
}

export default App;
