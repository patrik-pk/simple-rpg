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
            player, 
            enemy: { meleeDodgeChance, rangedDodgeChance }, 
            canAttack 
        } = props
    
        // HP bar fill
        const hp_percentage = (player.currentHp / player.maxHp) * 100
        const hpStyle = {
            background: 'linear-gradient(to right, rgb(220, 0, 0)'
                + hp_percentage + '%, rgb(75, 0, 0)'
                + hp_percentage + '%)'
        }
    
        const critClass = player.receivedCrit ? ' crit' : ''
    
        return(
            <div className='character_container' id='player'>
    
                {/* Top - Image, Floating Damage */}
                <div className='top_container'>
    
                    <PlayerImage />
    
                    <p className={'floating_damage' + critClass} style={{display: player.damageTaken === '' ? 'none' : 'block'}}>
                        {player.damageTaken}
                    </p>
    
                </div>

                {/* Middle - Info(hp, name, level) */}
                <div className='info'>

                    <p className='name'>
                        Player ({currentLevel})
                    </p>

                    <div className='hp' style={hpStyle}>
                        <p className='value'>
                            {player.currentHp} / {player.maxHp}
                        </p>
                    </div>

                </div>
    
                {/* Bottom - Stats */}
                <div className='stats'>
                    <ul>
                        <Stat name='HP:' value={player.maxHp} />
                        <Stat name='Armor:' value={player.armor} />
                        <Stat name='M-DMG:' value={player.meleeDamage} />
                        <Stat name='R-DMG:' value={player.rangedDamage} />
                        <Stat name='Crit(%):' value={player.critChance} />
                        <Stat name='Block(%):' value={player.blockChance} />
                    </ul>
                    <ul>
                        <Stat name='Beasts:' value={player.bonuses[0].value} />
                        <Stat name='Dragons:' value={player.bonuses[1].value} />
                        <Stat name='Insect:' value={player.bonuses[2].value} />
                        <Stat name='Monsters:' value={player.bonuses[3].value} />
                        <Stat name='Reptiles:' value={player.bonuses[4].value} />
                    </ul>
                </div>
    
                {/* Forfeit Button */}
                <div className='forfeit_container'>
                    <Link to='/menu'><div>FF</div></Link>
                </div>
    
                {/* Actions */}
                <div className='actions' style={{display: canAttack === true ? 'flex' : 'none'}}>
                    
                    <div className='melee_column'>
                        <Action data={{ id: 'ml', type: 'melee', strength: 'light', icon: <ActionMelee/> }} dodge={meleeDodgeChance} gameManager={props.gameManager} />
                        <Action data={{ id: 'mm', type: 'melee', strength: 'medium', icon: <ActionMelee /> }} dodge={meleeDodgeChance} gameManager={props.gameManager} />
                        <Action data={{ id: 'ms', type: 'melee', strength: 'strong', icon: <ActionMelee /> }} dodge={meleeDodgeChance} gameManager={props.gameManager} />
                    </div>
    
                    <div className='ranged_column'>
                        <Action data={{ id: 'rl', type: 'ranged', strength: 'light', icon: <ActionRangedLight/> }} dodge={rangedDodgeChance} gameManager={props.gameManager} />
                        <Action data={{ id: 'rm', type: 'ranged', strength: 'medium', icon: <ActionRangedMedium/> }} dodge={rangedDodgeChance} gameManager={props.gameManager} />
                        <Action data={{ id: 'rs', type: 'ranged', strength: 'strong', icon: <ActionRangedStrong/> }} dodge={rangedDodgeChance} gameManager={props.gameManager} />
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