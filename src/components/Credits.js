import React, { useState } from 'react'
import Menu from './Menu'

import creatureIcons from '../data/icons/creatureIcons'
import dropIcons from '../data/icons/dropIcons'
import equipIcons from '../data/icons/equipIcons'
import otherIcons from '../data/icons/otherIcons'

export default function Credits() {

    // Top Menu
    const [topMenuActive, setTopMenuActive] = useState(0)
    const topMenuData = ['Creatures', 'Drops', 'Equipment', 'Other']

    // Sidemenu (on the right)
    const [sideMenuActive, setSideMenuActive] = useState(0)
    const sideMenuData = [ 
        ['Aquatic', 'Avian', 'Dinosaur', 'Insect', 'Wildlife', 'Reptile'],
        [],
        ['Type 1', 'Type 2', 'Aquatic', 'Avian', 'Dinosaur', 'Insect', 'Wildlife', 'Reptile'],
        []
    ]

    // Reset sidemenu when changing top menu
    const topMenuOnClick = i => {
        setSideMenuActive(0)
        setTopMenuActive(i)
    }

    // Render
    return (
        <div className='credits'>
            <h3 className='heading'>Credits</h3>

            <Menu 
                data={topMenuData} 
                menuActive={topMenuActive} 
                itemOnClick={topMenuOnClick} 
                menuClass='credits-top-menu' 
            />

            <div className='content'>
                <ul className={`icons menu${topMenuActive}`}>{ renderIcons(topMenuActive, sideMenuActive) }</ul>
                <Menu 
                    data={sideMenuData[topMenuActive]} 
                    menuActive={sideMenuActive} 
                    itemOnClick={setSideMenuActive} 
                    menuClass='credits-sidemenu' 
                />
            </div>
        </div>
    )
}

// Render Icons
const renderIcons = (index1, index2) => {
    switch (index1) {
        case 0: return renderCreatures(index2)
        case 1: return renderDrops()
        case 2: return renderEquip(index2)
        case 3: return renderOthers()
        default: return
    }
}

// Render Creatures
const renderCreatures = index => {
    const creatureArr = Object.values(creatureIcons)
    const specieArr = Object.values(creatureArr[index])

    return specieArr.map(item => iconItem(item.name, item.icon, item.url))
}

// Render Drops
const renderDrops = () => {
    const dropArr = Object.values(dropIcons)

    return dropArr.map(item => iconItem(item.name, item.icon, item.url)) 
}

// Render Equip
const renderEquip = index => {
    const equipArr = Object.values(equipIcons)
     
    const typeArr = Object.values(equipArr[index])
    return typeArr.map(item => iconItem(item.displayedName, item.icon, item.url))
}

// Render Other
const renderOthers = () => {
    const otherArr = Object.values(otherIcons)

    return otherArr.map(item => iconItem(item.name, item.icon, item.url))
}

// Icon Item
const iconItem = (name, icon, link) => (
    <li key={name} className='icon-item'>
        <p className='name'>{name}</p>
        <div className='icon'>
            {icon.render()}
        </div>
        <a className='btn link active' href={link} target='_blank' rel="noopener noreferrer">Link</a>
    </li>
)
