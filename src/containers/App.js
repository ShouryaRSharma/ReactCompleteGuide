import React, { Component } from 'react';

// Modular CSS is already included in react-scripts 2.x and higher. In order to use these scripts, import the following way:
// import classes from './app.module.css'; 
// Note: This requires the css file to be renamed to .module.css as well.
import classes from './App.module.scss';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import styled from 'styled-components';

const ToggleButton = styled.button `
  background-color: ${props => props.alt ? '#dc3545' : ''};
  border: ${props => props.alt ? '#dc3545' : '#1e7e34'};
  transition: 0.2s;
  &:hover {
    background-color: ${props => props.alt ? '#dc3545' : '#218838'};
    border: ${props => props.alt ? '#dc3545' : '#1e7e34'};
    box-shadow: 0px 2px 3px grey;
  }
  &:focus {
    background-color: ${props => props.alt ? '#dc3545' : '#218838'};
    border: ${props => props.alt ? '#dc3545' : '#1e7e34'};
    box-shadow: 0px 2px 3px grey;
  }
  `;
// Class based component
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Joseph', age: 28 },
      { id: 2, name: 'Eilidh', age: 29 },
      { id: 3, name: 'Henry', age: 26 },
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return this.state;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

  toggleCockpitHandler = () => {
    const doesShow = this.state.showCockpit;
    this.setState({
      showCockpit: !doesShow
    });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangeHandler} />
        </div> 
      );
    }

    return (
      <Aux>
        <div className="container Person mt-3">
        <ToggleButton className="btn btn-success" alt={this.state.showCockpit} onClick={this.toggleCockpitHandler}>Toggle Cockpit</ToggleButton>
        {this.state.showCockpit ? 
        <Cockpit title={this.props.appTitle} styleClick={this.togglePersonsHandler} alt={this.state.showPersons} personsLength={this.state.persons.length}/> 
        : null}
        </div>
        {persons}          
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
