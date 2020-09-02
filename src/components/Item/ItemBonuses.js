import React from 'react'
import { firstLetterUpperCase } from '../../shared/utils'

export default ({ isDrop, comparison, bonuses }) => {
    return (
        <div className='bonuses'>
            { isDrop ? null : bonuses.map((bonus, i) => {
                const { name, value } = bonus
                const comparedValue = comparison && comparison[i].value 
                const style = comparison && { color: comparison[i].color }
        
                return (
                    <div key={i} className='bonus-container'>
                        <p>{firstLetterUpperCase(name) + ': ' + value}</p>
                        <p style={style}>{comparedValue}</p>
                    </div>
                )
            }) }
        </div>
    )
    
}
