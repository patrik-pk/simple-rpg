
// sets isSelected of specific item(par)
export default function itemHandleClick(par, props) {

    // if item has data
    if (par.state.hasData) {
        // if item isn't equipped or rendered in Game component
        if (par.state.data.destination !== "Equipped" && par.state.data.destination !== "Game") {
            // check destination - if it's item in Shop or in Inventory
            // if item is in Inventory => just set clicked item to selected
            if(par.state.data.destination === "Inventory") {
                const newItems = props.invItems
                newItems[par.state.data.key].isSelected = !newItems[par.state.data.key].isSelected
    
                return { invItems: newItems }
            }
            // if item is in Shop => unset selected for every item and set selected to clicked item
            if(par.state.data.destination === "Shop") {
                const newItems = props.shopItems
                const currentSelectedItems = props.shopItems.filter(item => item.isSelected)

                // If there is only one selected item and the clicked one is the selected one => unselect the clicked item
                if (currentSelectedItems.length === 1 && par.state.data.key === currentSelectedItems[0].key) {
                    currentSelectedItems[0].isSelected = false
                } else { // else unselect every item and select the clicked one
                    newItems.forEach(item => item.isSelected = false)
                    newItems[par.state.data.key].isSelected = true
                }

                return { shopItems: newItems }
            }
        }
    }
}