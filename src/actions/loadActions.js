import { LOAD_STATE } from './types'

// Load state data from localStorage
export const loadState = state => ({
    type: LOAD_STATE,
    payload: state
})