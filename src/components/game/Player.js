import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Action from './Action'
import Stat from '../Stat'
import { ReactComponent as PlayerImage } from '../../resources/icons/creatures/target.svg'

// Action SVGs
import { ReactComponent as ActionMelee } from '../../resources/icons/actions/action_melee.svg'
import { ReactComponent as ActionRangedLight } from '../../resources/icons/actions/action_ranged_light.svg'
import { ReactComponent as ActionRangedMedium } from '../../resources/icons/actions/action_ranged_medium.svg'
import { ReactComponent as ActionRangedStrong } from '../../resources/icons/actions/action_ranged_strong.svg'

function Player(props) {

    // Render Component only if there is a Enemy
    if(props.enemy) {

        // Destructure From Props
        const { 
            currentLevel, 
            player: {
                currentHp,
                maxHp,
                armor,
                meleeDamage,
                rangedDamage,
                critChance,
                blockChance,
                bonuses,
                receivedCrit,
                damageTaken,
            }, 
            enemy: { meleeDodgeChance, rangedDodgeChance }, 
            canAttack 
        } = props
    
        // HP Bar Styling
        const hpPercentage = (currentHp / maxHp) * 100
        const hpStyle = { width: `${hpPercentage > 0 ? hpPercentage : 0}%` }
    
        // Crit Class
        const critClass = receivedCrit ? 'crit' : ''
    
        // Render
        return(
            <div className='character-container' id='player'>
    
                {/* Top - Image, Floating Damage */}
                <div className='top'>
    
                    <PlayerImage />
    
                    <p className={`floating-damage ${critClass}`} style={{display: damageTaken === '' ? 'none' : 'block'}}>
                        {damageTaken}
                    </p>
    
                </div>

                {/* Middle - Info(hp, name, level) */}
                <div className='info'>

                    <p className='name'>
                        Player ({currentLevel})
                    </p>

                    <div className='hp'>
                        <div className='hp-current' style={hpStyle}></div>
                        <div className='hp-max'></div>
                        <p className='hp-value'>{currentHp} / {maxHp}</p>
                    </div>

                </div>
    
                {/* Bottom - Stats */}
                <div className='stats'>
                    <ul>
                        <Stat name='HP:' value={maxHp} />
                        <Stat name='Armor:' value={armor} />
                        <Stat name='M-DMG:' value={meleeDamage} />
                        <Stat name='R-DMG:' value={rangedDamage} />
                        <Stat name='Crit(%):' value={critChance} />
                        <Stat name='Block(%):' value={blockChance} />
                    </ul>
                    <ul>
                        <Stat name='Beasts:' value={bonuses[0].value} />
                        <Stat name='Dragons:' value={bonuses[1].value} />
                        <Stat name='Insect:' value={bonuses[2].value} />
                        <Stat name='Monsters:' value={bonuses[3].value} />
                        <Stat name='Reptiles:' value={bonuses[4].value} />
                    </ul>
                </div>
    
                {/* Forfeit Button */}
                <div className='forfeit-container'>
                    <Link to='/menu'>FF</Link>
                </div>
    
                {/* Actions */}
                <div className='actions' style={{display: canAttack === true ? 'flex' : 'none'}}>
                    
                    <div className='melee-column'>
                        <Action data={{ id: 'ml', type: 'melee', strength: 'light', hitChangeMult: 0.2, icon: <ActionMelee/> }} dodge={meleeDodgeChance} />
                        <Action data={{ id: 'mm', type: 'melee', strength: 'medium', hitChangeMult: 0.9, icon: <ActionMelee /> }} dodge={meleeDodgeChance} />
                        <Action data={{ id: 'ms', type: 'melee', strength: 'strong', hitChangeMult: 1.8, icon: <ActionMelee /> }} dodge={meleeDodgeChance} />
                    </div>
    
                    <div className='ranged-column'>
                        <Action data={{ id: 'rl', type: 'ranged', strength: 'light', hitChangeMult: 0.2, icon: <ActionRangedLight/> }} dodge={rangedDodgeChance} />
                        <Action data={{ id: 'rm', type: 'ranged', strength: 'medium', hitChangeMult: 0.9, icon: <ActionRangedMedium/> }} dodge={rangedDodgeChance} />
                        <Action data={{ id: 'rs', type: 'ranged', strength: 'strong', hitChangeMult: 1.8, icon: <ActionRangedStrong/> }} dodge={rangedDodgeChance} />
                    </div>
    
                </div>
            </div>
        )
    } else return null
}

Player.propTypes = {
    currentLevel: PropTypes.number.isRequired,
    player: PropTypes.object.isRequired,
    enemy: PropTypes.object,
    canAttack: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    currentLevel: state.character.currentLevel,
    player: state.player,
    enemy: state.enemy,
    canAttack: state.game.canAttack
})

export default connect(mapStateToProps)(Player)