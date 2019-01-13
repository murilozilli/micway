import React, { Component } from 'react';
import {connect} from 'react-redux';

class DriverForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const firstName = this.getFirstName.value;
        const lastName =  this.getLastName.value;
        const email =  this.getEmail.value;
        const dob =  this.getDOB.value;
        const data = {
            firstName,
            lastName,
            email,
            dob,
            editing: false
        }
        this.props.dispatch({
            type:'ADD_DRIVER',
            data});
        this.getFirstName.value = '';
        this.getLastName.value = '';
        this.getDOB.value = '';
        this.getEmail.value = '';
    }
	render() {
		return (
		<div className="driver-container">
		  <h1 className="driver_heading">Create Driver</h1>
		  <form className="form" onSubmit={this.handleSubmit}>
			<input required type="file" placeholder="Upload Profile Picture" /><br /><br />
		    <input required type="text" ref={(input)=>this.getFirstName = input} placeholder="Enter First Name" /><br /><br />
		    <input required type="text" ref={(input)=>this.getLastName = input} placeholder="Enter Last Name" /><br /><br />
			<input required type="date" ref={(input)=>this.getDOB = input} placeholder="Enter DOB" /><br /><br />
			<input required type="email" ref={(input)=>this.getEmail = input} placeholder="Enter Email" /><br /><br />
			<input required type="file" placeholder="Upload Drivers License" /><br /><br />
		    <button>Create Driver</button>
		  </form>
		</div>
	    );
	}
}
export default connect()(DriverForm);