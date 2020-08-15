import DropItem from './../data/DropItem'

export default function generateDrop(destination, key, amount, name, icon, goldValue) {

    return new DropItem(
        destination,
        key,
        amount,
        name,
        icon,
        goldValue,
    )
}