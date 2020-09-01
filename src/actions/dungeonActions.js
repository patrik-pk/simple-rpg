import {
    ADD_DUNGEON
} from './types'

// ADD DUNGEON
export const addDungeon = dungeonName => ({
    type: ADD_DUNGEON,
    payload: dungeonName
})