const driverReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DRIVER':
            return state.concat([action.data]);
        default:
            return state;
    }
}
export default driverReducer;