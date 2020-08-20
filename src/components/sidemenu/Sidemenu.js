import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SidemenuLink from './SidemenuLink'
import levelTresholds from '../../data/levelTresholds'
import { ReactComponent as Logout } from '../../resources/icons/logout.svg'

function Sidemenu({ character: { experience, currentLevel, gold, diamonds } }) {

    // XP Bar Styling
    const xpPercentage = (experience / levelTresholds[currentLevel].xp) * 100
    const xpStyle = {
        background: 'linear-gradient(to right, rgb(255, 255, 255)'
            + xpPercentage + '%, rgb(35, 35, 35)'
            + xpPercentage + '%)'
    }

    // Replace with real Auth condition later
    const isLogged = true
    const loggedClass = isLogged ? 'active' : ''

    // Render
    return (
        <nav className='side-menu'>

            {/* CHARACTER INFO */}

            <div className={`character-info ${loggedClass}`}>
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

            { // Register & Login if isn't logged
            !isLogged ?
            <React.Fragment>
                <SidemenuLink name='Login' linkTo='/login' isLocked={false} /> 
                <SidemenuLink name='Register' linkTo='/register' isLocked={false} /> 
            </React.Fragment> 
            : null 
            }
            <SidemenuLink name='Classic Game' linkTo='/classic_game' isLocked={isLogged ? false : true} />
            <SidemenuLink name='Dungeon' linkTo='/dungeon' isLocked={true} />
            <SidemenuLink name='Inventory' linkTo='/inventory' isLocked={isLogged ? false : true} />
            <SidemenuLink name='Crafting' linkTo='/crafting' isLocked={isLogged ? false : true} />
            <SidemenuLink name='Home' linkTo='/' isLocked={isLogged ? false : true} />
            {/* Logout if is logged */}
            {isLogged ? <SidemenuLink name='Logout' linkTo='/' isLocked={false} icon={Logout} /> : null}
            
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

