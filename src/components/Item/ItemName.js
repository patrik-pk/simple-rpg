import React from 'react'
import { firstLetterUpperCase } from '../../shared/utils'

export default function ItemName({ isDrop, comparison, name, rarity, displayedName, level }) {

    if (isDrop) {
        const upperCaseName = firstLetterUpperCase(name)
        return (
            <div className='name-container'>
                <p id='name'>{upperCaseName}</p>
            </div>
        )
    } 
    else {
        const nameValue = `${rarity} ${displayedName} (${level})`
        const comparedValue = comparison && comparison.value
        const style = comparison && { color: comparison.color }

        return (
            <div className='name-container'>
                <p id='name'>{nameValue}</p>
                <p style={style}>{comparedValue}</p>
            </div>
        )
    }
}
