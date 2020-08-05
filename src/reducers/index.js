import { combineReducers } from 'redux'
import characterReducer from './characterReducer'
import dungeonReducer from './dungeonReducer'

export default combineReducers({
    character: characterReducer,
    dungeon: dungeonReducer
})