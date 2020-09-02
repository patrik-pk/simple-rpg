import {
    ADD_DUNGEON
} from '../types'

// Add Dungeon
export const addDungeon = dungeonName => ({
    type: ADD_DUNGEON,
    payload: dungeonName
})