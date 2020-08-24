import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SidemenuLink from './SidemenuLink'
import levelTresholds from '../../data/levelTresholds'

function Sidemenu({ character: { experience, currentLevel, gold, diamonds } }) {

    // XP Bar Styling
    const xpPercentage = (experience / levelTresholds[currentLevel].xp) * 100
    const xpStyle = {
        background: 'linear-gradient(to right, rgb(255, 255, 255)'
            + xpPercentage + '%, rgb(35, 35, 35)'
            + xpPercentage + '%)'
    }

    // Render
    return (
        <nav className='side-menu'>

            {/* CHARACTER INFO */}

            <div className='character-info'>

                {/* Icon */}
                <div className='character-icon'>

                </div>

                {/* Info - name, currency, level */}
                <div className='level-container'>
                    <div>
                        <p className='name'>Player ({currentLevel})</p>
                        <p>G: {gold} D: {diamonds}</p>
                    </div>
                    <div className="xp-bar" style={xpStyle}></div>
                </div>

            </div>

            {/* LINKS */}
            <SidemenuLink name='Classic Game' linkTo='/classic_game' isLocked={false} />
            <SidemenuLink name='Dungeon' linkTo='/dungeon' isLocked={false} />
            <SidemenuLink name='Inventory' linkTo='/inventory' isLocked={false} />
            <SidemenuLink name='Crafting' linkTo='/crafting' isLocked={false} />
            <SidemenuLink name='Home' linkTo='/' isLocked={false} />
            
        </nav>
    )
}

Sidemenu.propTypes = {
    character: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    character: state.character
})

export default connect(mapStateToProps)(Sidemenu)

