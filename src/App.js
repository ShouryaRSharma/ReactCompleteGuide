import './App.scss';
import React, { Component } from 'react';
import Person from './Person/Person';


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
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   borderRadius: '2px',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

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
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.nameChangeHandler} click={this.switchNameHandler.bind(this, 'MAXIMO')}>My Hobbies: Racing</Person> */}
        </div> 
      );
    }

    return (
      <div className="App">
          <h1>REACT APP</h1>
          <button className="btn btn-dark" onClick={this.togglePersonsHandler}>Show Name</button>
          {persons}          
      </div>
    );
  }
}

export default App;
