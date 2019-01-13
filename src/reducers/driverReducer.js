const driverReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DRIVER':
            return state.concat([action.data]);
        case 'DELETE_DRIVER':
            return state.filter((driver) => driver.firstName !== action.firstName);
        case 'EDIT_DRIVER':
            return state.map((driver) => driver.firstName === action.firstName ? { ...driver, editing: !driver.editing } : driver)
        case 'UPDATE':
            return state.map((driver) => {
                if (driver.firstName === action.firstName) {
                    return {
                        ...driver,
                        firstName: action.data.firstName,
                        lastName: action.data.lastName,
                        email: action.data.email,
                        dob: action.data.dob,
                        editing: !driver.editing
                    }
                } else return driver;
            })
        default:
            return state;
    }
}
export default driverReducer;