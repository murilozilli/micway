import React, { Component } from 'react';
import { connect } from 'react-redux';
import Driver from './Driver';
import EditComponent from './EditComponent';

class AllDrivers extends Component {
    render() {
        return (
            <div>
                <h1>All Drivers</h1>
                {this.props.drivers.map((driver) => (
                    <div key={driver.firstName}>
                        {driver.editing ? <EditComponent driver={driver} key={driver.firstName} /> :
                            <Driver key={driver.firstName} driver={driver} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        drivers: state
    }
}
export default connect(mapStateToProps)(AllDrivers);