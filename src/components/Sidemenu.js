import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidemenu() {
    return (
        <nav className='side-menu'>
            <div className="character-info">
                Fotka, expy, ...
            </div>
            <Link className='nav-link' to='/game'>Classic Game</Link>
            <Link className='nav-link' to='/dungeon'>Dungeon</Link>
            <Link className='nav-link' to='/inventory'>Inventory</Link>
            <Link className='nav-link' to='/menu'>Menu</Link>
        </nav>
    )
}

