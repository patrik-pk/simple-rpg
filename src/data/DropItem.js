import dropIcons from './icons/dropIcons'

class DropItem {
    constructor(
        destination = 'Inventory',
        key,
        type = 'feather',
        icon = dropIcons.Feather,
        goldValue = 10,
        isSelected = false,
        itemType = 'drop'
    ) {
        this.destination = destination
        this.key = key
        this.type = type
        this.icon = icon
        this.goldValue = goldValue
        this.isSelected = isSelected
        this.itemType = itemType
    }
}

export default DropItem