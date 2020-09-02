import { combineReducers } from 'redux'

import characterReducer from './characterReducer'
import itemsReducer from './itemsReducer'
import dungeonReducer from './dungeonReducer'
import gameReducer from './gameReducer'
import playerReducer from './playerReducer'
import enemyReducer from './enemyReducer'

export default combineReducers({
    character: characterReducer,
    items: itemsReducer,
    dungeon: dungeonReducer,
    game: gameReducer,
    player: playerReducer,
    enemy: enemyReducer,
})