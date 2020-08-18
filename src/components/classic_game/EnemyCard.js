import React from 'react'

import { ReactComponent as Enemy } from '../../resources/icons/creatures/reptiles/dragon.svg'
import { ReactComponent as Drop } from '../../resources/icons/drop/small_soul.svg'
import { ReactComponent as Attack } from '../../resources/icons/attack.svg'

export default function EnemyCard(props) {
    return (
        <div className='enemy-card'>

            {/* Top */}
            <div className='top'>
                <p className='name'>Enemy (0)</p>
                <button>Info</button>
                <button type='button'>Attack</button>
            </div>

            {/* Enemy Icon */}
            <div className='icon'>
                <Enemy />
            </div>

            {/* Possible Drop Items */}
            <ul className='possible-drops'>

                <li className="drop-container">
                    <Drop />
                </li>

                <li className='drop-container'>
                    <Attack />
                </li>

                <li className="drop-container">
                    <Drop />
                </li>

            </ul>

        </div>
    )
}
