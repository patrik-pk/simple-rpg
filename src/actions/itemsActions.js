import {
    ADD_ITEM_TO_INV,
    REMOVE_INV_ITEMS,
    UNSELECT_INV_ITEMS,
    SET_INV_ITEM_SELECT,
    UNSELECT_SHOP_ITEMS,
    SET_SHOP_ITEM_SELECT,
    REROLL_ITEMS,
    REMOVE_SHOP_ITEM,
    EQUIP_ITEM,
    SET_CRAFTABLE_ITEM_SELECT,
    UNSELECT_CRAFTABLE_ITEMS,
    REMOVE_DROPS_FROM_INV,
    SORT_ITEMS
} from './types'

// ADD ITEM TO INV
export const addItemToInv = item => ({
    type: ADD_ITEM_TO_INV,
    payload: item
})

// REMOVE INVENTORY ITEMS
export const removeInvItems = items => ({
    type: REMOVE_INV_ITEMS,
    payload: items
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

// EQUIP ITEM
export const equipItem = (selectedItem, equippedItem) => ({
    type: EQUIP_ITEM,
    payload: {
        selectedItem,
        equippedItem
    }
})

// SET CRAFTABLE ITEM ISSELECT
export const setCraftableItemSelect = key => ({
    type: SET_CRAFTABLE_ITEM_SELECT,
    payload: key
})

// UNSELECT ALL CRAFTABLE ITEMS
export const unselectCraftableItems = () => ({
    type: UNSELECT_CRAFTABLE_ITEMS,
})

// REMOVE DROPS FROM INVENTORY
export const removeDropsFromInv = drops => ({
    type: REMOVE_DROPS_FROM_INV,
    payload: drops
})

// SORT ITEMS
export const sortItems = () => ({
    type: SORT_ITEMS
})