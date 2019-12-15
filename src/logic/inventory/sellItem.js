
export default function sellItem(props) {
    const selectedItems = props.invItems.filter(item => item.isSelected)
    
    if(selectedItems.length > 0) {
        let goldVal = 0
        selectedItems.forEach(item => {
            goldVal += item.goldValue
        })
    
        const newItems = props.invItems.filter(item => !item.isSelected)
        newItems.forEach((item, index) => { item.key = index })
    
        return {
            invItems: newItems,
            currency: {
                gold: props.currency.gold + goldVal,
                diamonds: props.currency.diamonds,
                acquiredGold: null,
                acquiredDiamonds: null
            }
        }
    }
}