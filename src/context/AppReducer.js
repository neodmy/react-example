import { ActionsTypes } from './Actions'

export default (state, action) => {
    const { type } = action;
    const actions = {
        [ActionsTypes.REMOVE_USER]: () => ({ users: state.users.filter(user => user.id !== action.payload) }),
        [ActionsTypes.ADD_USER]: () => ({ users: [...state.users, action.payload] }),
        [ActionsTypes.EDIT_USER]: () => {
            const updatedUser = action.payload;
            const updateUsers = state.users.map(user => {
                if(user.id === updatedUser.id) return updatedUser;
                return user;
            })
            return { users: updateUsers };
        },
        DEFAULT: () => state,
    };

    return (actions[type] || actions['DEFAULT'])();
}