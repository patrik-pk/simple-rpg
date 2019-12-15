
import calculatePlayerStats from "../calculatePlayerStats"


export default function equipItem(props) {
    
    const selectedItems = props.invItems.filter(item => item.isSelected)

    if (selectedItems.length === 1) {

        let selectedItem = selectedItems[0]
        const selectedItemKey = selectedItem.key

        let replacedItem = null
        let replacedItemIndex = null

        // Loop equippedItems until the types match
        // and assign the items that will be replaced
        props.equippedItems.forEach((item, index) => {
            if (item.type === selectedItem.type) {
                replacedItem = item
                replacedItemIndex = index
            }
        })

        // replacedItem = equipped item that should be replaced
        // selectedItem = item that player selected and should now be equipped

        // New Inventory Items
        replacedItem.isEquipped = false
        replacedItem.key = selectedItem.key
        replacedItem.destination = "Inventory"
        replacedItem.isSelected = false

        let newInvItems = props.invItems
        newInvItems[selectedItemKey] = replacedItem

        // New Equipped Items
        selectedItem.isEquipped = true
        selectedItem.isSelected = false
        selectedItem.destination = "Equipped"
        selectedItem.key = replacedItemIndex

        let newEquippedItems = props.equippedItems
        newEquippedItems[replacedItemIndex] = selectedItem

        const newPlayer = calculatePlayerStats(newEquippedItems)

        return {
            equippedItems: newEquippedItems,
            invItems: newInvItems,
            player: newPlayer
        }
    }
}