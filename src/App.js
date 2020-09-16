import React, { Component } from 'react';
import styled from 'styled-components';

import './App.scss';
import Person from './Person/Person';


const StyledButton = styled.button `
  background-color: ${props => props.alt ? '#23272b' : '#23272b'};
  transition: 0.2s;
  color: ${props => props.alt ? '#fff' : '#ffd900'};
  &:hover {
    background-color: ${props => props.alt ? 'black' : '#ffd900'};
    color: ${props => props.alt ? '#ffd900' : 'black'};
    border: 1px solid ${props => props.alt ? '#ffd900' : 'black'};
    box-shadow: 0px 2px 3px grey;
  }

`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Joseph', age: 28 },
      { id: 2, name: 'Eilidh', age: 29 },
      { id: 3, name: 'Henry', age: 26 },
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( 
      {persons: persons}
    )
  }

  deletePersonHandler = (index) => {
    // Lines 28 and 29 create a copy of the array of persons
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const classes = [];

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* maps array of JS elements. MAKE SURE TO ALWAYS ADD A KEY*/}
          {this.state.persons.map((person, index) => {
            return <Person 
            
            change={(event) => this.nameChangeHandler(event, person.id)} 
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age} 
            key={person.id}/>
          })}
        </div> 
        
      );


      
      
    }

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <=1 ) {
      classes.push('underline');
    }

    return (
      <div className="App">
          <h1>REACT APP</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <StyledButton alt={this.state.showPersons} className="btn btn-dark" onClick={this.togglePersonsHandler}>Show Name</StyledButton>
          {persons}          
      </div>
    );
  }
}

export default App;
