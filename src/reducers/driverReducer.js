const driverReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DRIVER':
            return state.concat([action.data]);
        case 'DELETE_DRIVER':
            return state.filter((driver) => driver.firstName !== action.firstName);
        default:
            return state;
    }
}
export default driverReducer;