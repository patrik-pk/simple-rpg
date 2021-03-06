import dropIcons from './icons/dropIcons'

class DropItem {
    constructor(
        iconKey = 'small-feather',
        destination = 'Inventory',
        key = 1,
        amount = 1,
        name = 'small feather',
        icon = dropIcons.smallFeather.icon,
        classes = [],
        goldValue = 7.5,
        isSelected = false,
        type = 'drop'
    ) {
        this.iconKey = iconKey
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