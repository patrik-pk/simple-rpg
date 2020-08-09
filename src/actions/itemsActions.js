import {
    ADD_ITEM_TO_INV,
    UNSELECT_INV_ITEMS,
    SET_INV_ITEM_SELECT,
    UNSELECT_SHOP_ITEMS,
    SET_SHOP_ITEM_SELECT,
    REROLL_ITEMS,
    REMOVE_SHOP_ITEM
} from './types'

// ADD ITEM TO INV
export const addItemToInv = item => ({
    type: ADD_ITEM_TO_INV,
    payload: item
})

// UNSELECT INVENTORY ITEMS
export const unselectInvItems = () => ({
    type: UNSELECT_INV_ITEMS
})

// SET INVENTORY ITEM ISSELECTED
export const setInvItemSelect = key => ({
    type: SET_INV_ITEM_SELECT,
    payload: key
})

// UNSELECT SHOP ITEMS
export const unselectShopItems = () => ({
    type: UNSELECT_SHOP_ITEMS
})

// SET SHOP ITEM ISSELECTED
export const setShopItemSelect = key => ({
    type: SET_SHOP_ITEM_SELECT,
    payload: key
})

// REROLL SHOP ITEMS
export const rerollShopItems = newItems => ({
    type: REROLL_ITEMS,
    payload: newItems
})

// REMOVE SHOP ITEM
export const removeShopItem = item => ({
    type: REMOVE_SHOP_ITEM,
    payload: item
})