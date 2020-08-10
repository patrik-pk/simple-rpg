import React from 'react'

function Stat({ name, value, enemy }) {
    // This is a simple Stat Component render in
    // Inventory and Game(for both Player and Enemy)

    
    // Set the higher Armor stat of the Boss to red color
    const bossClass = () => {
        if(enemy !== undefined) {
            const type = enemy.type
            if (type === 'Boss') {
                if(name === 'M-Armor:' || name==='R-Armor:') {
                    const meleeArmor = enemy.meleeArmor
                    const rangedArmor = enemy.rangedArmor
                    const higherValue = Math.max(meleeArmor, rangedArmor)

                    if(value === higherValue) return 'boss'
                } 
            } 
        } 
        return ''
    }

    return (
        <li className={`stat-container ${bossClass()}`} >
            <p>{name}</p>
            <p>{value}</p>
        </li>
    )
}

export default Stat