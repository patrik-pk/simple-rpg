import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Stat from '../Stat'

function Enemy(props) {

    const enemy = props.enemy

    // Render Component only if there is a Enemy
    if(enemy) {
    
        const hp_percentage = (enemy.currentHp / enemy.maxHp) * 100
    
        // HP bar fill
        const hpStyle = {
            background: 'linear-gradient(to right, rgb(220, 0, 0)' 
            + hp_percentage + '%, rgb(75, 0, 0)' 
            + hp_percentage + '%)'
        }
    
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
     
        const bossClass = enemy.type === 'Boss' ? 'boss' : ''
        const critClass = enemy.receivedCrit ? ' crit' : ''

        return (
            <div className='character_container' id='enemy'>
    
                {/* Enemy Top */}
                <div className='top_container'>
    
                    {/* Image */}
                    <img alt='' src={enemy.currentEnemy.imgSrc}/>
    
                    {/* Info - name, level, hp */}
                    <div className='info'>
                        <p className={'name ' + bossClass}>{enemy.currentEnemy.name} ({enemy.level})</p>
                        <p className='hp' style={hpStyle}>{enemy.currentHp}/{enemy.maxHp}</p>
                    </div>
    
                    {/* Floating Damage */}
                    <p className={'floating_damage' + critClass} id='fl_dmg_enemy' style={{ display: enemy.damageTaken === '' ? 'none' : 'block' }}>
                        {enemy.damageTaken}
                    </p>
    
                    {/* Art By */}
                    <div className='art_by'>
                        <p>Art by:</p>
                        <a href={enemy.currentEnemy.artByUrl} target='_blank' rel='noopener noreferrer'>{enemy.currentEnemy.artBy}</a>
                    </div>
                    
                </div>
    
                {/* Enemy Bottom - Stats */}
                <div className='stats'>
                    <div className='wrapper'>
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