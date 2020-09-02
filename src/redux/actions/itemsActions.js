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
    SORT_ITEMS,
    UPDATE_ITEMS
} from '../types'

// Add items to inventory - make sure it's always an array
export const addItemToInv = (items, gameFlow) => ({
    type: ADD_ITEM_TO_INV,
    payload: {
        items: Array.isArray(items) ? items : [items],
        gameFlow,
    }
})

// Remove inventory items
export const removeInvItems = items => ({
    type: REMOVE_INV_ITEMS,
    payload: items
})

// Unselect inventory items
export const unselectInvItems = () => ({
    type: UNSELECT_INV_ITEMS
})

// Set inventory item isSelected
export const setInvItemSelect = key => ({
    type: SET_INV_ITEM_SELECT,
    payload: key
})

// Unselect shop items
export const unselectShopItems = () => ({
    type: UNSELECT_SHOP_ITEMS
})

// Set shop item isSelected
export const setShopItemSelect = key => ({
    type: SET_SHOP_ITEM_SELECT,
    payload: key
})

// Reroll shop items
export const rerollShopItems = newItems => ({
    type: REROLL_ITEMS,
    payload: newItems
})

// Remove shop item
export const removeShopItem = item => ({
    type: REMOVE_SHOP_ITEM,
    payload: item
})

// Equip item
export const equipItem = (selectedItem, equippedItem) => ({
    type: EQUIP_ITEM,
    payload: {
        selectedItem,
        equippedItem
    }
})

// Set craftable item isSelected
export const setCraftableItemSelect = key => ({
    type: SET_CRAFTABLE_ITEM_SELECT,
    payload: key
})

// Unselect all craftable items
export const unselectCraftableItems = () => ({
    type: UNSELECT_CRAFTABLE_ITEMS,
})

// Remove drops from inventory
export const removeDropsFromInv = drops => ({
    type: REMOVE_DROPS_FROM_INV,
    payload: drops
})

// Sort items
export const sortItems = () => ({
    type: SORT_ITEMS
})

// Update items
export const updateItems = updatedItems => ({
    type: UPDATE_ITEMS,
    payload: updatedItems
})