import {
    ADD_DUNGEON
} from './types'

// ADD DUNGEON
export const addDungeon = index => ({
    type: ADD_DUNGEON,
    payload: index
})