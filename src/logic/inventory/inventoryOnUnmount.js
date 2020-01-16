
export default function inventoryOnUnmount(props) {
    // set isSelected to false to all items on unmount

    const newInvItems = props.invItems.map(item => ({ ...item, isSelected: false }))
    const newShopItems = props.shopItems.map(item => ({ ...item, isSelected: false }))

    return {
        invItems: newInvItems, 
        shopItems: newShopItems
    }
}