import dropIcons from './icons/dropIcons'

class DropItem {
    constructor(
        destination = 'Inventory',
        key = 1,
        amount = 1,
        name = 'small feather',
        icon = dropIcons.SmallFeather,
        classes,
        goldValue = 10,
        isSelected = false,
        type = 'drop'
    ) {
        this.destination = destination
        this.key = key
        this.amount = amount
        this.name = name
        this.icon = icon
        this.classes = classes
        this.goldValue = goldValue
        this.isSelected = isSelected
        this.type = type
    }
}

export default DropItem