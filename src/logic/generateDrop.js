import DropItem from './../data/DropItem'

export default function generateDrop(iconKey, destination, key, amount, name, icon, classes, goldValue) {
    return new DropItem(
        iconKey,
        destination,
        key,
        amount,
        name,
        icon,
        classes,
        goldValue,
    )
}