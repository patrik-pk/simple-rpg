import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import DungeonItem from './DungeonItem'
import EnemyCard from './classic_game/EnemyCard'
import bosses from '../data/bosses'

function Dungeon({ dungeon, currentLevel }) {

    // Map Dungeon Items
    // const dungeonItems = () => {
    //     // Dungeon is a array of objects, these objects have two 
    //     // properties - type (string of dungeon name) and current (number representing the current boss). 
    //     return dungeon.map((item, i) => {
    //         return <DungeonItem 
    //             key={i}
    //             // if current < 5, return boss from data/bosses.js (array of arrays),
    //             // else return 'Finished'
    //             boss={dungeon[i].current < 5 ? bosses[i][dungeon[i].current] : 'Finished'} 
    //             dungeonName={item.type.charAt(0).toUpperCase() + item.type.slice(1)} 
    //             count={dungeon[i].current} 
    //         />
    //     })
    // }

    const dungeonItems = dungeon.map((item, i) => {
        console.log(item)
        //return <EnemyCard  />
        if(item.current >= 5) {
            return <p>{item.type} Finished</p> // replace with a component
        } else {
            // return EnemyCard component with enemy from bosses.js, which is a
            // nested array with first index representing specie and the second one actual boss
            return <EnemyCard key={item.type} enemy={bosses[i][item.current]} />
        }
    })


    return (
        <div className='dungeon'>

            {/* Heading */}
            <h3 className='heading'>Dungeon</h3>

            {/* Dungeon Menu */}
            <div className='dungeon-menu'>
                <ul className='menu-items'>
                    <li className='menu-item'>
                        <p>Aquatic</p>
                    </li>
                    <li className='menu-item active'>
                        <p>Avian</p>
                    </li>
                    <li className='menu-item'>
                        <p>Dinosaur</p>
                    </li>
                    <li className='menu-item'>
                        <p>Insect</p>
                    </li>
                    <li className='menu-item'>
                        <p>Wildlife</p>
                    </li>
                    <li className='menu-item'>
                        <p>Reptile</p>
                    </li>
                </ul>
            </div>

            {/* Boss Section */}
            <div className='boss-section'>
                {/* { dungeonItems() } */}

                {/* Arrow left & arrow right? */}
                {/* <EnemyCard /> */}
                { dungeonItems[0] }
            </div>
                        
        </div>
    )
}

Dungeon.propTypes = {
    currentLevel: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    currentLevel: state.character.currentLevel,
    dungeon: state.dungeon
})

export default connect(mapStateToProps)(Dungeon)