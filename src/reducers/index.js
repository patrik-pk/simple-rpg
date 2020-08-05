import { combineReducers } from 'redux'
import characterReducer from './characterReducer'
import dungeonReducer from './dungeonReducer'
import itemsReducer from './itemsReducer'

export default combineReducers({
    character: characterReducer,
    dungeon: dungeonReducer,
    items: itemsReducer
})