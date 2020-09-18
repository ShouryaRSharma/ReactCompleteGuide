import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount()');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return(
            this.props.persons.map((person, index) => {
                return <ErrorBoundary key={person.id}><Person 
                change={(event) => this.props.changed(event, person.id)} 
                click={() => this.props.clicked(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id}/></ErrorBoundary>
            })
        )
    }
}

export default Persons;