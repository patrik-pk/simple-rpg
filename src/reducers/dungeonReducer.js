import {

} from '../actions/types'

const initialState = [
    { type: 'avians', current: 0 },
    { type: 'dinosaurs', current: 0 },
    { type: 'insect', current: 0 },
    { type: 'wildlife', current: 0 },
    { type: 'reptiles', current: 0 },
    { type: 'aquatic', current: 0 },
]

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}