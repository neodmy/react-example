import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';
import { ActionsTypes } from './Actions';

const initialState = {
    users: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    const removeUser = (id) => {
        dispatch({
            type: ActionsTypes.REMOVE_USER,
            payload: id,
        })
    };

    const addUser = (user) => {
        dispatch({
            type: ActionsTypes.ADD_USER,
            payload: user,
        })
    };

    const editUser = (user) => {
        dispatch({
            type: ActionsTypes.EDIT_USER,
            payload: user,
        })
    }

    return (
        <GlobalContext.Provider value={{ 
            users: state.users,
            removeUser,
            addUser,
            editUser
            }}>
            {children}
        </GlobalContext.Provider>
    )
}