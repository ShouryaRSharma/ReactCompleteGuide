import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Aux from '../../../hoc/Auxiliary';
import classes from './Person.scss';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElement.current.focus();
        console.log('Checking to see if context is authenticated... ' + this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        return (

            // JSX Rules: Adjacent JSX elements must be wrapped in a closing tag. Can't have adjacent root elements.
            // This can be fixed by creating the elements as arrays. Put a comma after each one.
            // However, each element must have a unique key. Eg.
            // <p key="1">test</p>,
            // <p key="2">Test2</p>


            // Uses our higher order component to wrap adjacent elements with a top level element.
            // <Aux>
            //     <p >I'm {this.props.name} and I am {this.props.age} years old! <br /> {this.props.children}</p>
            //     <input className="form-control" onChange={this.props.change} value={this.props.name} type="text"></input>
            //     <button className="btn btn-danger" onClick={this.props.click}>Close</button>
            // </Aux>

            <Aux>
                <div className=" mt-3 container Person">
                    {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>}
                    <p >I'm {this.props.name} and I am {this.props.age} years old! <br /> {this.props.children}</p>
                    <input ref={this.inputElement} className="form-control" onChange={this.props.change} value={this.props.name} type="text"></input>
                    <button className="btn btn-danger" onClick={this.props.click}>Close</button>
                </div>
            </Aux>
        )   
    }
}

Person.propTypes = {
    click: PropTypes.func, 
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, classes.Person);
