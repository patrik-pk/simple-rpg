import { combineReducers } from 'redux'

import characterReducer from './characterReducer'
import dungeonReducer from './dungeonReducer'
import itemsReducer from './itemsReducer'
import playerReducer from './playerReducer'
import enemyReducer from './enemyReducer'
import gameReducer from './gameReducer'
import currencyReducer from './currencyReducer'

export default combineReducers({
    character: characterReducer,
    dungeon: dungeonReducer,
    items: itemsReducer,
    player: playerReducer,
    enemy: enemyReducer,
    game: gameReducer,
    currency: currencyReducer
})