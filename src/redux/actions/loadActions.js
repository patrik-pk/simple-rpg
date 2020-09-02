import { RESET_STATE, LOAD_STATE } from '../types'

// Reset state
export const resetState = () => ({
    type: RESET_STATE
})

// Load state data from local storage
export const loadState = state => ({
    type: LOAD_STATE,
    payload: state
})