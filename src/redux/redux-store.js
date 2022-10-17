import {combineReducers, applyMiddleware} from 'redux'
import { legacy_createStore as createStore} from 'redux'


import profileReducer from './reducer-profile'
import dialogsReducer from './reducer-dialogs'
import sidebarReducer from './reducer-sidebar'
import usersReducer from './reducer-users'
import authReducer from './reducer-auth'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';

const reducers= combineReducers({
    profileReducer, //the same name and property
    dialogsReducer,
    sidebarReducer,
    usersPage: usersReducer, //property is diferent because
    auth: authReducer,
    form: formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
