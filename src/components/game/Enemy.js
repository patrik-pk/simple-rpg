import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Stat from '../Stat'

function Enemy(props) {

    const enemy = props.enemy

    // Render Component only if there is a Enemy
    if(enemy) {
    
        // Destructure From Props
        const { 
            currentHp, 
            maxHp,
            meleeArmor,
            rangedArmor,
            meleeDodgeChance,
            rangedDodgeChance,
            damage,
            critChance, 
            level, 
            enemyType: { name, specie, icon }, 
            type, 
            receivedCrit, 
            damageTaken, 
        } = enemy

        // HP bar fill
        const hp_percentage = (currentHp / maxHp) * 100
        const hpStyle = {
            background: 'linear-gradient(to right, rgb(220, 0, 0)' 
            + hp_percentage + '%, rgb(75, 0, 0)' 
            + hp_percentage + '%)'
        }
    
        // Specie
        const specieName = specie.charAt(0).toUpperCase() + specie.slice(1)

        // Difficulty
        const difficulty = () => {
            if(type === 'Boss') return 'Boss'
            else {
                switch(difficulty) {
                    case 1: return 'Easy'
                    case 2: return 'Med'
                    case 3: return 'Hard'
                    default: break;
                }
            }
        }
     
        // Classes
        const bossClass = type === 'Boss' ? 'boss' : ''
        const critClass = receivedCrit ? ' crit' : ''

        // Render
        return (
            <div className='character_container' id='enemy'>
    
                {/* Top - Image, Floating Damage */}
                <div className='top_container'>
    
                    { icon.render() }
    
                    <p className={'floating_damage' + critClass} style={{ display: damageTaken === '' ? 'none' : 'block' }}>
                        {damageTaken}
                    </p>
                    
                </div>

                {/* Middle - Info (hp, name, level) */}
                <div className='info'>

                    <p className={`name ${bossClass}`}>
                        {name} ({level})
                    </p>

                    <div className='hp' style={hpStyle}>
                        <p className='value'>
                            {currentHp} / {maxHp}
                        </p>
                    </div>

                </div>

                {/* Bottom - Stats */}
                <div className='stats'>
                    <ul>
                        <Stat name='HP:' value={maxHp} />
                        <Stat name='M-Armor:' value={meleeArmor} enemy={enemy} />
                        <Stat name='R-Armor:' value={rangedArmor} enemy={enemy} />
                        <Stat name='M-DG(%):' value={Math.round(meleeDodgeChance)} />
                        <Stat name='R-DG(%):' value={Math.round(rangedDodgeChance)} />
                    </ul>

                    <ul>
                        <Stat name='Strength:' value={damage} />
                        <Stat name='Crit(%):' value={critChance} />
                        <Stat name='Diff:' value={difficulty()} />
                        <Stat name='Spec:' value={specieName} />
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