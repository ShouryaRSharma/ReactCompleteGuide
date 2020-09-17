import React from 'react';

import './Person.scss';

const person = (props) => {
    return (
        <div className="container Person mt-3">
            <p >I'm {props.name} and I am {props.age} years old! <br /> {props.children}</p>
            <input className="form-control" onChange={props.change} value={props.name} type="text"></input>
            <button className="btn btn-danger" onClick={props.click}>Close</button>
        </div>
    )   
}

export default person;
