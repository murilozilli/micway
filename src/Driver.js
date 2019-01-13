import React, { Component } from 'react';
import { connect } from 'react-redux';
class Driver extends Component {
    render() {
        return (
            <div className="driver">
                <h2 className="driver_title">{this.props.driver.firstName} {this.props.driver.lastName}</h2>
                <h2 className="driver_title">{this.props.driver.email}</h2>
                <div className="control-buttons">
                    <button className="edit"
                        onClick={() => this.props.dispatch({ type: 'EDIT_DRIVER', firstName: this.props.driver.firstName })}>
                        Edit</button>
                    <button className="delete"
                        onClick={() => this.props.dispatch({ type: 'DELETE_DRIVER', firstName: this.props.driver.firstName})}>
                            Delete</button>
                </div>
            </div>
        );
    }
}
export default connect()(Driver);