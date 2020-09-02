import React from 'react'

export default ({ name, value, enemy }) => {
    
    const strongStatClass = () => {
        if (enemy && enemy.type === 'Boss' && (name === 'M-Armor:' || name === 'R-Armor:')) {
            const meleeArmor = enemy.meleeArmor
            const rangedArmor = enemy.rangedArmor
            const higherValue = Math.max(meleeArmor, rangedArmor)

            if(value === higherValue) return 'strong-stat'
        } 
        return ''
    }

    return (
        <li className={`stat-container ${strongStatClass()}`} >
            <p>{name}</p>
            <p>{value}</p>
        </li>
    )
}