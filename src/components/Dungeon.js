import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import EnemyCard from './classic_game/EnemyCard'
import Menu from './Menu'
import bosses from '../data/bosses'

function Dungeon({ dungeon }) {

    // Dungeon Menu Active (handled in Menu.js component)
    const [menuActive, setMenuActive] = useState(0)

    // Map Dungeon Items
    const dungeonItems = dungeon.map((item, i) => {
        if(item.current >= 5) {
            return <p>{item.type} Finished</p> // replace with a component
        } else {
            // return EnemyCard component with enemy from bosses.js, which is a
            // nested array with first index representing specie and the second one actual boss
            return <EnemyCard propClass='dungeon' key={item.type} enemy={bosses[i][item.current]} />
        }
    })

    return (
        <div className='dungeon'>

            {/* Heading */}
            <h3 className='heading'>Dungeon</h3>

            {/* Dungeon Menu */}
            <Menu data={dungeon} menuActive={menuActive} itemOnClick={setMenuActive} menuClass='dungeon-menu' />

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