import { combineReducers } from 'redux'
import characterReducer from './characterReducer'

export default combineReducers({
    character: characterReducer
})