import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Action from '../Action/Action'
import Stat from '../Stat/Stat'
import { firstLetterUpperCase } from '../../shared/utils'
import { ReactComponent as PlayerIcon } from '../../resources/icons/knight.svg'

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
                classVal: playerClass
            }, 
            enemy: { meleeDodgeChance, rangedDodgeChance }, 
            canAttack 
        } = props
    
        // HP Bar Styling
        const hpPercentage = (currentHp / maxHp) * 100
        const hpStyle = { width: `${hpPercentage > 0 ? hpPercentage : 0}%` }
    
        // Classes
        const critClass = receivedCrit ? 'crit' : ''
        const floatingDmgClass = damageTaken !== '' ? 'active' : ''
        const actionsClass = canAttack ? 'active' : ''

        // Map Bonuses
        const mappedBonuses = bonuses.map((bonus, i) => 
            <Stat key={bonus.name} name={`${firstLetterUpperCase(bonus.name)}:`} value={bonuses[i].value} />
        )

        // Render
        return(
            <div className={`character-container ${playerClass}`} id='player'>
    
                {/* Top - Image, Floating Damage */}
                <div className='top'>
    
                    {/* Icon */}
                    <PlayerIcon />
    
                    {/* Floating Damage */}
                    <p className={`floating-damage ${critClass} ${floatingDmgClass}`}>
                        {damageTaken}
                    </p>
    
                </div>

                {/* Middle - Info(hp, name, level) */}
                <div className='info'>

                    {/* Name */}
                    <p className='name'>Player ({currentLevel})</p>

                    {/* HP */}
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
                        { mappedBonuses }
                    </ul>
                </div>
    
                {/* Actions */}
                <div className={`actions ${actionsClass} ${playerClass}`}>

                    {/* Forfeit Button */}
                    <Link className='btn forfeit-btn active' to='/menu'>FF</Link>
                    
                    {/* Columns Container */}
                    <div className='columns-container'>

                        {/* Melee Column */}
                        <ul className='melee-column'>
                            <Action data={{ type: 'melee', strength: 'light', hitChanceMult: 0.2, icon: <ActionMelee/> }} dodge={meleeDodgeChance} />
                            <Action data={{ type: 'melee', strength: 'medium', hitChanceMult: 0.9, icon: <ActionMelee /> }} dodge={meleeDodgeChance} />
                            <Action data={{ type: 'melee', strength: 'strong', hitChanceMult: 1.8, icon: <ActionMelee /> }} dodge={meleeDodgeChance} />
                        </ul>
        
                        {/* Ranged Column */}
                        <ul className='ranged-column'>
                            <Action data={{ type: 'ranged', strength: 'light', hitChanceMult: 0.2, icon: <ActionRangedLight/> }} dodge={rangedDodgeChance} />
                            <Action data={{ type: 'ranged', strength: 'medium', hitChanceMult: 0.9, icon: <ActionRangedMedium/> }} dodge={rangedDodgeChance} />
                            <Action data={{ type: 'ranged', strength: 'strong', hitChanceMult: 1.8, icon: <ActionRangedStrong/> }} dodge={rangedDodgeChance} />
                        </ul>

                    </div>
    
                </div>
            </div>
        )
    } 
    else return null
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