import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const firstName = this.getFirstName.value;
        const lastName = this.getLastName.value;
        const email = this.getEmail.value;
        const dob = this.getDOB.value;
        const data = {
            firstName,
            lastName,
            email,
            dob
        }
        this.props.dispatch({ type: 'UPDATE', firstName: this.props.driver.firstName, data: data })
    }
    render() {
        return (
            <div className="driver">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getFirstName = input}
                        defaultValue={this.props.driver.firstName} placeholder="Enter First Name" /><br /><br />
                    <input required type="text" ref={(input) => this.getLastName = input}
                        defaultValue={this.props.driver.lastName} placeholder="Enter Last Name" /><br /><br />
                    <input required type="date" ref={(input) => this.getDOB = input}
                        defaultValue={this.props.driver.dob} placeholder="Enter DOB" /><br /><br />
                    <input required type="email" ref={(input) => this.getEmail = input}
                        defaultValue={this.props.driver.email} placeholder="Enter Email" /><br /><br />
                    
                    <button>Update Driver</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);