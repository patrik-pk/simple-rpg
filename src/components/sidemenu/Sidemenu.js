import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SidemenuLink from './SidemenuLink'
import levelTresholds from '../../data/levelTresholds'

function Sidemenu({ character: { experience, currentLevel, gold, diamonds } }) {

    // XP Bar Styling
    const xpPercentage = (experience / levelTresholds[currentLevel].xp) * 100
    const xpStyle = {
        background: 'linear-gradient(to right, rgb(0, 191, 255)'
            + xpPercentage + '%, rgb(0, 37, 122)'
            + xpPercentage + '%)'
    }

    // Locked - this will come from state later on
    const locked = {
        classicGame: false,
        dungeon: true,
        inventory: false,
        menu: false,
    }

    const { classicGame, dungeon, inventory, menu } = locked

    // Render
    return (
        <nav className='side-menu'>

            {/* Character Info */}
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

            {/* Links */}
            <Link className='nav-link' to='/game'>
                <p className='link-name'>Classic Game</p>
                { classicGame ? <p className='locked'>Locked</p> : null }
            </Link>

            <Link className='nav-link locked' to='/dungeon'>
                <p className='link-name'>Dungeon</p>
                { dungeon ? <p className='locked'>Locked</p> : null }
            </Link>

            <Link className='nav-link' to='/inventory'>
                <p className='link-name'>Inventory</p>
                { inventory ? <p className='locked'>Locked</p> : null }
            </Link>

            <Link className='nav-link' to='/menu'>
                <p className='link-name'>Menu</p>
                { menu ? <p className='locked'>Locked</p> : null }
            </Link>
            
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

