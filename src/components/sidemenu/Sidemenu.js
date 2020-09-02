import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SidemenuLink from './SidemenuLink'
import levelTresholds from '../../shared/data/levelTresholds'
import { ReactComponent as PlayerIcon } from '../../resources/icons/knight.svg'
import { ReactComponent as Coin } from '../../resources/icons/coin.svg'
import { ReactComponent as Dice } from '../../resources/icons/dice.svg'

const Sidemenu = ({ character: { experience, currentLevel, gold, rolls } }) => {

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

            {/* Character Info */}

            <div className='character-info'>

                {/* Icon */}
                <div className='character-icon'>
                    <PlayerIcon />
                </div>

                {/* Info - name, currency, level */}
                <div className='level-container'>
                    <div className='top-container'>
                        <p className='name'>Player ({currentLevel})</p>
                        <div className='currency'>
                            <p className='gold'>{gold} <Coin/></p>
                            <p className='rolls'>{rolls} <Dice/></p>
                        </div>
                    </div>
                    <div className="xp-bar" style={xpStyle}></div>
                </div>

            </div>

            {/* Links */}
            <SidemenuLink name='Classic Game' linkTo='/classic_game' />
            <SidemenuLink name='Dungeon' linkTo='/dungeon' />
            <SidemenuLink name='Inventory' linkTo='/inventory' />
            <SidemenuLink name='Crafting' linkTo='/crafting' />
            <SidemenuLink name='Credits' linkTo='/credits' />
            <SidemenuLink name='Load & Save' linkTo='/load_and_save' />
            <SidemenuLink name='Home' linkTo='/' />
            
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

