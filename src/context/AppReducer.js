export default (state, action) => {
    switch(action.type) {
        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => user.id !== action.payload)
            }
        default:
            return state;
    }
}