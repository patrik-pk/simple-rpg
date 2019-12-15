
export default function buyItem(props) {
    const selectedItems = props.shopItems.filter(item => item.isSelected)

    if (selectedItems.length === 1) {
        const selectedItem = selectedItems[0]
        const itemCost = selectedItem.goldValue

        if(props.invItems.length <= 35) {
            if (props.currency.gold >= itemCost) {
    
                // create copy of selected item and change some properties - push it to inventory
                let boughtItem = JSON.parse(JSON.stringify(selectedItem))
                boughtItem.destination = "Inventory"
                boughtItem.isSelected = false
                boughtItem.goldValue = Math.ceil(itemCost * 0.75)
                boughtItem.key = props.invItems.length
    
                let newInvItems = props.invItems
                newInvItems.push(boughtItem)
    
                // set type to Empty => returns an empty ItemComponent
                let newShopItems = props.shopItems
                newShopItems[selectedItem.key].isSelected = false
                newShopItems[selectedItem.key].type = "Empty"
    
                return {
                    invItems: newInvItems,
                    shopItems: newShopItems,
                    currency: {
                        gold: props.currency.gold - itemCost,
                        diamonds: props.currency.diamonds,
                        acquiredGold: null,
                        acquiredDiamonds: null
                    }
                }
            }
        }
    }
}