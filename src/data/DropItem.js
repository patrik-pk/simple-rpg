import dropIcons from './icons/dropIcons'

class DropItem {
    constructor(
        destination = 'Inventory',
        key,
        amount = 1,
        name = 'small feather',
        icon = dropIcons.SmallFeather,
        goldValue = 10,
        isSelected = false,
        type = 'drop'
    ) {
        this.destination = destination
        this.key = key
        this.amount = amount
        this.name = name
        this.icon = icon
        this.goldValue = goldValue
        this.isSelected = isSelected
        this.type = type
    }
}

export default DropItem