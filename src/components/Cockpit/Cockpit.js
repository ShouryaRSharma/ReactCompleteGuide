import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button `
  background-color: ${props => props.big ? '#23272b' : '#23272b'};
  transition: 0.2s;
  color: ${props => props.big ? '#fff' : '#ffd900'};
  &:hover {
    background-color: ${props => props.big ? 'black' : '#ffd900'};
    color: ${props => props.big ? '#ffd900' : 'black'};
    border: 1px solid ${props => props.big ? '#ffd900' : 'black'};
    box-shadow: 0px 2px 3px grey;
  }`;

const Cockpit = (props) => {
    const classes = [];

    if (props.persons.length <= 2) {
        classes.push('red');
    }
  
    if (props.persons.length <= 1 ) {
        classes.push('underline');
    }

    if (props.persons.length <= 0 ) {
        classes.push('big');
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <StyledButton big={props.alt} className="btn btn-dark" onClick={props.styleClick}>Show Name</StyledButton>
        </div>
        )
}

export default Cockpit;