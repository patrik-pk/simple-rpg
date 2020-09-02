import React from 'react'

import creatureIcons from '../../data/icons/creatureIcons'
import dropIcons from '../../data/icons/dropIcons'
import equipIcons from '../../data/icons/equipIcons'
import otherIcons from '../../data/icons/otherIcons'

// Render Icons
export default (index1, index2) => {
    switch (index1) {
        case 0: return logic.renderCreatures(index2)
        case 1: return logic.renderDrops()
        case 2: return logic.renderEquip(index2)
        case 3: return logic.renderOthers()
        default: return
    }
}

// Logic
const logic = {

    // Render Creatures
    renderCreatures: index => {
        const creatureArr = Object.values(creatureIcons)
        const specieArr = Object.values(creatureArr[index])
    
        return specieArr.map(item => logic.iconItem(item.name, item.icon, item.url))
    },
    
    // Render Drops
    renderDrops: () => {
        const dropArr = Object.values(dropIcons)
    
        return dropArr.map(item => logic.iconItem(item.name, item.icon, item.url))
    },
    
    // Render Equip
    renderEquip: index => {
        const equipArr = Object.values(equipIcons)
    
        const typeArr = Object.values(equipArr[index])
        return typeArr.map(item => logic.iconItem(item.displayedName, item.icon, item.url))
    },
    
    // Render Other
    renderOthers: () => {
        const otherArr = Object.values(otherIcons)
    
        return otherArr.map(item => logic.iconItem(item.name, item.icon, item.url))
    },
    
    // Icon Item
    iconItem: (name, icon, link) => (
        <li key={name} className='icon-item'>
            <p className='name'>{name}</p>
            <div className='icon'>
                {icon.render()}
            </div>
            <a className='btn link active' href={link} target='_blank' rel="noopener noreferrer">Link</a>
        </li>
    )
}