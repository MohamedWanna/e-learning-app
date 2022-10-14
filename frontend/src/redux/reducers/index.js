import { combineReducers } from 'redux'
import { sessionReducer } from './sessionReducer'
import userReducer from './userReducer'

export const rootReducer = combineReducers({sessionReducer,userReducer})