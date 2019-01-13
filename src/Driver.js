import React, { Component } from 'react';
import { connect } from 'react-redux';
class Driver extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.driver.firstName} {this.props.driver.lastName}</h2>
                <h2>{this.props.driver.email}</h2>
                <button>Edit</button>
                <button
                    onClick={() => this.props.dispatch({ type: 'DELETE_DRIVER', firstName: this.props.driver.firstName})}>
                    Delete</button>
            </div>
        );
    }
}
export default connect()(Driver);