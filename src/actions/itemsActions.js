import {
    ADD_ITEM_TO_INV
} from './types'

export const addItemToInv = item => ({
    type: ADD_ITEM_TO_INV,
    payload: item
})