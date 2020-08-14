import DropItem from './../data/DropItem'

export default function generateDrop(destination, key, icon, goldValue) {

    return new DropItem(
        destination,
        key,
        icon,
        goldValue,
    )
}