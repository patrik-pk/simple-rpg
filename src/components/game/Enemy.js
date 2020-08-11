import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Stat from '../Stat'

import { ReactComponent as EnemyIcon } from '../../resources/icons/creatures/dragon.svg'

function Enemy(props) {

    const enemy = props.enemy

    // Render Component only if there is a Enemy
    if(enemy) {
    
        // HP bar fill
        const hp_percentage = (enemy.currentHp / enemy.maxHp) * 100
        const hpStyle = {
            background: 'linear-gradient(to right, rgb(220, 0, 0)' 
            + hp_percentage + '%, rgb(75, 0, 0)' 
            + hp_percentage + '%)'
        }
    
        // Specie
        const specie = () => {
            switch(enemy.currentEnemy.specie) {
                case 'beasts': return 'Beast';
                case 'dragons': return 'Dragon';
                case 'insect': return 'Insect';
                case 'monsters': return 'Monster';
                case 'reptiles': return 'Reptile';
                default: break;
            }
        }
    
        // Difficulty
        const difficulty = () => {
            if(enemy.type === 'Boss') return 'Boss'
            else {
                switch(enemy.difficulty) {
                    case 1: return 'Easy'
                    case 2: return 'Med'
                    case 3: return 'Hard'
                    default: break;
                }
            }
        }
     
        // Classes
        const bossClass = enemy.type === 'Boss' ? 'boss' : ''
        const critClass = enemy.receivedCrit ? ' crit' : ''

        // Render
        return (
            <div className='character_container' id='enemy'>
    
                {/* Top - Image, Floating Damage */}
                <div className='top_container'>
    
                    <EnemyIcon />
    
                    <p className={'floating_damage' + critClass} style={{ display: enemy.damageTaken === '' ? 'none' : 'block' }}>
                        {enemy.damageTaken}
                    </p>
                    
                </div>

                {/* Middle - Info (hp, name, level) */}
                <div className='info'>

                    <p className={`name ${bossClass}`}>
                        {enemy.currentEnemy.name} ({enemy.level})
                    </p>

                    <div className='hp' style={hpStyle}>
                        <p className='value'>
                            {enemy.currentHp} / {enemy.maxHp}
                        </p>
                    </div>

                </div>

                {/* Bottom - Stats */}
                <div className='stats'>
                    <ul>
                        <Stat name='HP:' value={enemy.maxHp} />
                        <Stat name='M-Armor:' value={enemy.meleeArmor} enemy={enemy} />
                        <Stat name='R-Armor:' value={enemy.rangedArmor} enemy={enemy} />
                        <Stat name='M-DG(%):' value={Math.round(enemy.meleeDodgeChance)} />
                        <Stat name='R-DG(%):' value={Math.round(enemy.rangedDodgeChance)} />
                    </ul>

                    <ul>
                        <Stat name='Strength:' value={enemy.damage} />
                        <Stat name='Crit(%):' value={enemy.critChance} />
                        <Stat name='Diff:' value={difficulty()} />
                        <Stat name='Spec:' value={specie()} />
                    </ul>
                </div>
    
            </div>
        )
    } else return null 
}

Enemy.propTypes = {
    enemy: PropTypes.object,
}

const mapStateToProps = state => ({
    enemy: state.enemy
})

export default connect(mapStateToProps)(Enemy)