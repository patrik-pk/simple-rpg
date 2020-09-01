import React from 'react'

export default function ItemStat({ isDrop, comparison, stats }) {

    if (isDrop) return null

    const comparedValue = comparison && comparison.value
    const style = comparison && { color: comparison.color }

    return (
        <div className='stat-container'>
            <p>{stats.statName + ': ' + stats.value}</p>
            <p style={style}>{comparedValue}</p>
        </div>
    )
}
