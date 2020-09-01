import {
    ADD_DUNGEON,
    LOAD_STATE
} from '../actions/types'

const initialState = [
    { type: 'Aquatic', current: 0 },
    { type: 'Avian', current: 0 },
    { type: 'Dinosaur', current: 0 },
    { type: 'Insect', current: 0 },
    { type: 'Wildlife', current: 0 },
    { type: 'Reptile', current: 0 },
]

export default (state = initialState, action) => {
    switch(action.type) {

        // Add Dungeon
        case ADD_DUNGEON:
            return state.map(item => {
                if(item.type === action.payload) item.current += 1
                return item
            })

        // Load State
        case LOAD_STATE:
            return action.payload.dungeon

        // Default
        default:
            return state
    }
}