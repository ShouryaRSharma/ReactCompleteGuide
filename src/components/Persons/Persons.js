import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Persons = (props) => {
    return(
        props.persons.map((person, index) => {
            return <ErrorBoundary><Person 
            
            change={(event) => props.changed(event, person.id)} 
            click={() => props.clicked(index)} 
            name={person.name} 
            age={person.age} 
            key={person.id}/></ErrorBoundary>
          })
    )
}

export default Persons;