import React, { Component } from 'react';

import './Person.scss';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className="container Person mt-3">
                <p >I'm {this.props.name} and I am {this.props.age} years old! <br /> {this.props.children}</p>
                <input className="form-control" onChange={this.props.change} value={this.props.name} type="text"></input>
                <button className="btn btn-danger" onClick={this.props.click}>Close</button>
            </div>
        )   
    }
}

export default Person;
