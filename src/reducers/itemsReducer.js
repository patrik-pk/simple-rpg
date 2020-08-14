import startingItems from '../data/startingItems'
import EquipItem from '../data/EquipItem'
import DropItem from '../data/DropItem'
import {
    ADD_ITEM_TO_INV,
    SET_INV_ITEM_SELECT,
    UNSELECT_SHOP_ITEMS,
    SET_SHOP_ITEM_SELECT,
    UNSELECT_INV_ITEMS,
    REROLL_ITEMS,
    REMOVE_SHOP_ITEM,
    REMOVE_INV_ITEMS,
    EQUIP_ITEM
} from '../actions/types'

const initialState = {
    equippedItems: startingItems,
    invItems: [
        new EquipItem('Inventory', 0),
        new EquipItem('Inventory', 1),
        new DropItem('Inventory', 2),

    ],
    shopItems: [
        { type: "Empty", key: 0 },
        { type: "Empty", key: 1 },
        { type: "Empty", key: 2 },
    ],
}

export default (state = initialState, action) => {
    switch(action.type) {

        // Add Item To Inventory
        case ADD_ITEM_TO_INV:
            return {
                ...state,
                invItems: [...state.invItems, action.payload]
            }

        // Unselect Inventory Items
        case UNSELECT_INV_ITEMS:
            return {
                ...state,
                invItems: state.invItems.map(item => {
                    item.isSelected = false
                    return item
                })
            }

        // Set Inventory Item isSelected
        case SET_INV_ITEM_SELECT:
            return {
                ...state,
                invItems: state.invItems.map(item => {
                    if(item.key === action.payload) item.isSelected = !item.isSelected
                    return item
                })
            }

        // Unselect Shop Items
        case UNSELECT_SHOP_ITEMS:
            return {
                ...state,
                shopItems: state.shopItems.map(item => {
                    item.isSelected = false
                    return item
                })
            }

        // Set Shop Item isSelected
        case SET_SHOP_ITEM_SELECT:
            return {
                ...state,
                shopItems: state.shopItems.map(item => {
                    if(item.key === action.payload) item.isSelected = !item.isSelected
                    return item
                })
            }

        // Reroll Shop Items
        case REROLL_ITEMS:
            return {
                ...state,
                shopItems: action.payload
            }

        // Remove Shop Item
        case REMOVE_SHOP_ITEM:
            return {
                ...state,
                shopItems: state.shopItems.map(item => {
                    if(item.key === action.payload.key) {
                        return { type: 'Empty', key: action.payload.key }
                    } else return item
                })
            }

        // Remove Inventory Items
        case REMOVE_INV_ITEMS:

            // create an array of all the keys in payload items that will be removed
            const mappedPayloadKeys = action.payload.map(payloadItem => payloadItem.key)

            // filter out all the items that include one of the mapped payload id
            const newItems = state.invItems.filter(item => !mappedPayloadKeys.includes(item.key))

            // Add correct keys to items
            newItems.forEach((item, i) => item.key = i)

            return {
                ...state,
                invItems: newItems
            }

        // Equip Item
        case EQUIP_ITEM:
            const { selectedItem, equippedItem } = action.payload

            return {
                ...state,
                equippedItems: state.equippedItems.map(item => {
                    // if equipped type matches the selected type, replace equipped with selected
                    if(item.type === selectedItem.type) {
                        const newItem = selectedItem
                        newItem.destination = 'Equipped'
                        newItem.isSelected = false
                        newItem.key = item.key

                        return newItem
                    } 
                    else return item
                }),
                invItems: state.invItems.map(item => {
                    // find the selected item, and replace it with the equipped one
                    if(item.key === selectedItem.key) {
                        const newItem = equippedItem
                        newItem.destination = 'Inventory'
                        newItem.key = item.key
                        newItem.isSelected = false

                        return newItem
                    } 
                    else return item
                })
            }

        // Default
        default:
            return state
    }
}