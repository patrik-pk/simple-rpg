import React, { useState } from 'react'

import Menu from '../Menu/Menu'
import renderIcons from './renderIcons'

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

