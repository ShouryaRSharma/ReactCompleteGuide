import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import AuthContext from '../../context/auth-context';

const StyledButton = styled.button `
  background-color: ${props => props.big ? '#23272b' : '#23272b'};
  transition: 0.2s;
  color: ${props => props.big ? '#fff' : '#ffd900'};
  &:hover {
    background-color: ${props => props.big ? 'black' : '#ffd900'};
    color: ${props => props.big ? '#ffd900' : 'black'};
    border: 1px solid ${props => props.big ? '#ffd900' : 'black'};
    box-shadow: 0px 2px 3px grey;
  }
  &:focus {
    background-color: ${props => props.big ? 'black' : '#ffd900'};
    color: ${props => props.big ? '#ffd900' : 'black'};
    border: 1px solid ${props => props.big ? '#ffd900' : 'black'};
    box-shadow: 0px 2px 3px grey;
  }
  `;

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    useEffect(() => {
        toggleBtnRef.current.click();
    }, []);

    // Combines componentDidMount and componentDidUpdate
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // HTTP request...
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);

        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect()');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work in useEffect()');
        }
    })

    const classes = [];

    if (props.personsLength <= 2) {
        classes.push('red');
    }
  
    if (props.personsLength <= 1 ) {
        classes.push('underline');
    }

    if (props.personsLength <= 0 ) {
        classes.push('big');
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <div className="btn-group">
            <StyledButton ref={toggleBtnRef} big={props.alt} className="btn btn-dark" onClick={props.styleClick}>Show Name</StyledButton>
            <AuthContext.Consumer>
                { (context) => 
                    <StyledButton className="btn btn-dark" onClick={context.login}>Log in</StyledButton>
                    
                }
            </AuthContext.Consumer>
            </div>
        </div>
    )
}

export default React.memo(Cockpit);