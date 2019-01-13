import React, { Component } from 'react';
import DriverForm from './DriverForm';
import AllDrivers from './AllDrivers';


class App extends Component {
    render() {
        return (
            <div className="App">
                <DriverForm />
                <AllDrivers />
            </div>
        );
    }
}
export default App;