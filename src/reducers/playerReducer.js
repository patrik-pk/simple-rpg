import {

} from '../actions/types'

const initialState = {
    currentHp: 0,
    maxHp: 0,
    armor: 0,
    meleeDamage: 0,
    rangedDamage: 0,
    critChance: 0,
    blockChance: 0,
    bonuses: [
        { name: "beasts", value: 0 },
        { name: "dragons", value: 0 },
        { name: "insect", value: 0 },
        { name: "monsters", value: 0 },
        { name: "reptiles", value: 0 },
    ],
    damageTaken: "",
    receivedCrit: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        default: 
            return state
    }
}