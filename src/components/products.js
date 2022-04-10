
// Import statements comes here.
import React, { Component } from 'react';

// You need to extend the functionality of `Component` to the class created.
class className extends Component {
    constructor() {
        super();

// A state can hold anything dynamically. For example here randomVar is any    variable.
        this.state = {
            randomVar: ""
            }
        }
// This function renders a component
    render() {

        // Whatever is returned is rendered
        return (
            <div>
                <p>Hello World yo!</p>
            </div>
        )
    }
}

export default className;