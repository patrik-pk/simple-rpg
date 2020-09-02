import rerollEnemies from '../../shared/rerollEnemies'
import equipIcons from '../../shared/data/icons/equipIcons'
import dropIcons from '../../shared/data/icons/dropIcons'

// Assign Proper Icons
export default loadedState => {

    // Create array of equip icons out of nested icons object
    const equipArr = []
    let tempArr = Object.values(equipIcons)
    tempArr.forEach(type => {
        const typeArr = Object.values(type)
        equipArr.push(...typeArr)
    })

    // Create array of equip iconKeys from that icons array
    const mappedEquipIconKeys = equipArr.map(icon => icon.iconKey)

    // Create array of drop icon and array of drop iconKeys
    const dropArr = Object.values(dropIcons)
    const mappedDropIconKeys = dropArr.map(drop => drop.iconKey)

    // Loop through craftableItems and assign proper icon to each
    loadedState.items.craftableItems.forEach(type => {
        type.forEach(specie => {
            specie.forEach(item => {
                const index = mappedEquipIconKeys.indexOf(item.item.iconKey)
                item.item.icon = equipArr[index].icon
            })
        })
    })

    // Do the same with equippedItems
    loadedState.items.equippedItems.forEach(item => {
        const index = mappedEquipIconKeys.indexOf(item.iconKey)
        item.icon = equipArr[index].icon
    })

    // Shop Items
    loadedState.items.shopItems.forEach(item => {
        if (item.type === 'Empty') return

        if (item.type === 'equip') {
            const index = mappedEquipIconKeys.indexOf(item.iconKey)
            item.icon = equipArr[index].icon
        } else {
            const index = mappedDropIconKeys.indexOf(item.iconKey)
            item.icon = dropArr[index].icon
        }
    })

    // Inventory Items
    loadedState.items.invItems.forEach(item => {
        if (item.type === 'equip') {
            const index = mappedEquipIconKeys.indexOf(item.iconKey)
            item.icon = equipArr[index].icon
        } else {
            const index = mappedDropIconKeys.indexOf(item.iconKey)
            item.icon = dropArr[index].icon
        }
    })

    // Reroll Enemies
    loadedState.game.classicEnemies = rerollEnemies(loadedState.character.currentLevel)

    // Return updated state
    return loadedState
}