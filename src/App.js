import React, { Component } from 'react';
import DriverForm from './DriverForm';
import AllDrivers from './AllDrivers';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar">
                    <h2 className="center">Micway - Drivers</h2>
                    <DriverForm />
                    <AllDrivers />
                </div>
            </div>
        );
    }
}
export default App;