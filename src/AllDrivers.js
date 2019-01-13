import React, { Component } from 'react';
import { connect } from 'react-redux';
import Driver from './Driver';

class AllDrivers extends Component {
    render() {
        return (
            <div>
                <h1>All Drivers</h1>
                {this.props.drivers.map((driver) => <Driver key={driver.firstName} post={driver} />)}
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