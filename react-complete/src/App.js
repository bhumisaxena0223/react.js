import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = () => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Bhumi', age: 29 }, 
      { name: 'Steph', age: 9 },
    ],
  })
  const [otherState] = useState('value of some other state');

  console.log(personsState, otherState);
  //Event Handler, a class property which have a function which can execute
  const swithNameHandler = () => {
    // console.log("ckjdhud ejkuihm");
    // personsState.persons[0].name = 'Maximillian'; // Don't use this
    setPersonsState({
      persons: [
        { name: 'Maxton', age: 28 },
        { name: 'Bhumi saxena', age: 29 },
        {
          name: 'Steph', age: 9
        },
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I am React Learning guide</h1>
      <button onClick={swithNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
      <div>Another Person <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> My work is good</Person></div>
    </div>
  );
}

export default app;