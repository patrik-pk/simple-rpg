import {

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
        default:
            return state
    }
}