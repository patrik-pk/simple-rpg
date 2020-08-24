import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import EnemyCard from './classic_game/EnemyCard'
import bosses from '../data/bosses'

function Dungeon({ dungeon }) {

    // Dungeon Menu
    const [menuActive, setMenuActive] = useState(0)

    // Map Menu Items
    const mappedMenuItems = dungeon.map((specie, i) => {
        const current = specie.current < 5 ? `${specie.current + 1} / 5` : 'Finished'
        return (
            <li key={specie.type} className={`menu-item ${menuActive === i ? 'active' : ''}`} onClick={() => setMenuActive(i)}>
                <p>{specie.type}</p>
                <p>{current}</p>
            </li>
        )
    })

    // Map Dungeon Items
    const dungeonItems = dungeon.map((item, i) => {
        if(item.current >= 5) {
            return <p>{item.type} Finished</p> // replace with a component
        } else {
            // return EnemyCard component with enemy from bosses.js, which is a
            // nested array with first index representing specie and the second one actual boss
            return <EnemyCard key={item.type} enemy={bosses[i][item.current]} />
        }
    })


    return (
        <div className='dungeon'>

            {/* Heading */}
            <h3 className='heading'>Dungeon</h3>

            {/* Dungeon Menu */}
            <div className='dungeon-menu'>
                <ul className='menu-items'>
                    { mappedMenuItems }
                </ul>
            </div>

            {/* Boss Section */}
            <div className='boss-section'>
                {/* Arrow left & arrow right? */}
                { dungeonItems[menuActive] }
            </div>
                        
        </div>
    )
}

Dungeon.propTypes = {
    dungeon: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    dungeon: state.dungeon
})

export default connect(mapStateToProps)(Dungeon)