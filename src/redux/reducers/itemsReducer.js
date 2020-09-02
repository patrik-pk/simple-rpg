import startingItems from '../../data/startingItems'
import craftableItems from '../../data/craftable_items/craftableItems'
import sortItemsValues from '../../data/sortItemsValues'
import { deepCopy } from '../../shared/utils'
import {
    ADD_ITEM_TO_INV,
    REMOVE_INV_ITEMS,
    SET_INV_ITEM_SELECT,
    UNSELECT_SHOP_ITEMS,
    SET_SHOP_ITEM_SELECT,
    UNSELECT_INV_ITEMS,
    REROLL_ITEMS,
    REMOVE_SHOP_ITEM,
    EQUIP_ITEM,
    SET_CRAFTABLE_ITEM_SELECT,
    UNSELECT_CRAFTABLE_ITEMS,
    REMOVE_DROPS_FROM_INV,
    SORT_ITEMS,
    UPDATE_ITEMS,
    LOAD_STATE
} from '../types'

const initialState = {
    inventoryRows: 7,
    equippedItems: startingItems,
    invItems: [],
    shopItems: [
        { type: 'Empty', key: 0 },
        { type: 'Empty', key: 1 },
        { type: 'Empty', key: 2 },
        { type: 'Empty', key: 3 },
    ],
    craftableItems: craftableItems
}

export default (state = initialState, action) => {
    switch(action.type) {

        // Add Item(s) To Inventory (always an array)
        case ADD_ITEM_TO_INV:

            const newInventoryItems = deepCopy(state.invItems)
            const gameFlow = action.payload.gameFlow > 1 ? action.payload.gameFlow : 1

            // loop throgh action.payload items
            action.payload.items.forEach(item => {
                // if item is equip item, just push it to the Array
                if(item.type === 'equip') {
                    newInventoryItems.push(item)
                }
                // if item is drop
                if(item.type === 'drop') {
                    // find if there is a drop with same name as payload drop, meaning player has the same drop in inventory
                    const matchingDrop = state.invItems.find(invItem => invItem.name === item.name)
                    // if there is such drop
                    if(matchingDrop) {
                        // set newAmount to inventory drop amount + payload drop amount
                        const newAmount = matchingDrop.amount + item.amount
                        
                        // update amount and goldValue of the matching drop in inventory
                        newInventoryItems[matchingDrop.key].amount = newAmount 
                        newInventoryItems[matchingDrop.key].goldValue = Math.round(7.5 * newAmount * gameFlow) 
                    }
                    // else just push the item to the array 
                    else {
                        newInventoryItems.push(item)
                    }
                }
            })

            return {
                ...state,
                invItems: newInventoryItems
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

        // Equip Item
        case EQUIP_ITEM:
            const { selectedItem, equippedItem } = action.payload

            return {
                ...state,
                equippedItems: state.equippedItems.map(item => {
                    // if equipped type matches the selected type, replace equipped with selected
                    if(item.name === selectedItem.name) {
                        const newItem = Object.assign({}, selectedItem)
                        //const newItem = selectedItem
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
                        const newItem = Object.assign({}, equippedItem)
                        //const newItem = equippedItem
                        newItem.destination = 'Inventory'
                        newItem.key = item.key
                        newItem.isSelected = false

                        return newItem
                    } 
                    else return item
                })
            }

        // Set Craftable Item isSelected
        case SET_CRAFTABLE_ITEM_SELECT:

            const newCraftableItems = deepCopy(state.craftableItems)
            
            newCraftableItems.forEach(levelType => {
                levelType.forEach(rarityType => {
                    rarityType.forEach(item => {
                        if (item.item.key === action.payload) {
                            item.item.isSelected = !item.item.isSelected
                        }
                    })
                })
            })

            return {
                ...state,
                craftableItems: newCraftableItems
            }

        // Unselect All Craftable Items
        case UNSELECT_CRAFTABLE_ITEMS:

            const unselectedCraftableItems = deepCopy(state.craftableItems)

            unselectedCraftableItems.forEach(levelType => {
                levelType.forEach(rarityType => {
                    rarityType.forEach(item => {
                        item.item.isSelected = false
                    })
                })
            })

            return {
                ...state,
                craftableItems: unselectedCraftableItems
            }

        // Remove Drops From Inventory
        case REMOVE_DROPS_FROM_INV:

            const newInvItems = []
            const mappedPayloadNames = action.payload.map(drop => drop.name)

            // loop through invItems
            state.invItems.forEach(invItem => {
                // if invItem is drop and its name is included in payload
                if (invItem.type === 'drop' && mappedPayloadNames.includes(invItem.name)) {
                    // get the index of that payload
                    const payloadIndex = mappedPayloadNames.indexOf(invItem.name)
                    // if invItem amount is higher than matching payload amount
                    if(invItem.amount > action.payload[payloadIndex].amount) {
                        // substract invItem amount by payload amount push it 
                        // to the array, if it isn't, don't add anything (remove the drop)
                        invItem.amount -= action.payload[payloadIndex].amount
                        newInvItems.push(invItem)
                    }
                } 
                // if one of those is false, just push the invItem to the array
                else newInvItems.push(invItem)
            })

            // re-assign proper keys
            newInvItems.forEach((item, i) => item.key = i)

            return {
                ...state,
                invItems: newInvItems
            }

        // Sort Items
        case SORT_ITEMS:

            // Loop through invItems and map them
            const itemsToSort = state.invItems.map(item => {

                // equip items are compared by their rarities, drop items are compared by their names
                const comparedVal = item.type === 'equip' ? item.rarity : item.name

                // get the index of that comparedVal from sortItemsValues, which is an
                // array containing all the rarities and drop names 
                // (e.g. 'mythic' is at index 0, while 'common' is at index 11)
                const sortIndex = sortItemsValues.indexOf(comparedVal)

                // return the item itself along with the sortIndex
                return { item, sortIndex }
            })

            // simple compare function for sortIndexes
            function compare(a, b) {
                if (a.sortIndex > b.sortIndex) return 1
                if (b.sortIndex > a.sortIndex) return -1
            }

            // sort the items
            const sortedItems = itemsToSort.sort(compare)

            // map them, return only the item and re-assign the keys
            const mappedItems = sortedItems.map((obj, i) => {
                const item = obj.item
                item.key = i
                return item
            })

            // finally return the mapped items
            return {
                ...state,
                invItems: mappedItems
            }

        // Update Items
        case UPDATE_ITEMS:
            return {
                ...state,
                craftableItems: action.payload.craftableItems,
                invItems: action.payload.invItems,
                equippedItems: action.payload.equippedItems,
            }

        // Load State
        case LOAD_STATE:
            return action.payload.items

        // Default
        default:
            return state
        }
}