import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Stat from '../Stat/Stat'

const Enemy = ({ enemy }) => {

    // Render component only if there is a enemy
    if(enemy) {
    
        // Destructure props
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
            difficulty 
        } = enemy

        // Current hp bar (div) styling
        const hpPercentage = (currentHp / maxHp) * 100
        const hpStyle = { width: `${hpPercentage > 0 ? hpPercentage : 0}%` }
    
        // Specie
        const specieName = specie.charAt(0).toUpperCase() + specie.slice(1)

        // Difficulty
        const difficultyVal = () => {
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
        const floatingDmgClass = damageTaken !== '' ? 'active' : ''

        // Render
        return (
            <div className={`character-container ${specie}`} id='enemy'>
    
                {/* Top - Image, Floating Damage */}
                <div className='top'>
    
                    {/* Icon */}
                    { icon.render() }
    
                    {/* Floating Damage */}
                    <p className={`floating-damage ${critClass} ${floatingDmgClass}`}>
                        {damageTaken}
                    </p>
                    
                </div>

                {/* Middle - Info (hp, name, level) */}
                <div className='info'>

                    {/* Name & Level */}
                    <p className={`name ${bossClass}`}>
                        {name} ({level})
                    </p>

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
                        <Stat name='M-Armor:' value={meleeArmor} enemy={enemy} />
                        <Stat name='R-Armor:' value={rangedArmor} enemy={enemy} />
                        <Stat name='M-DG(%):' value={Math.round(meleeDodgeChance)} />
                        <Stat name='R-DG(%):' value={Math.round(rangedDodgeChance)} />
                    </ul>

                    <ul>
                        <Stat name='Strength:' value={damage} />
                        <Stat name='Crit(%):' value={critChance} />
                        <Stat name='Diff:' value={difficultyVal()} />
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