import React from 'react'
import PropTypes from 'prop-types'

export default function Menu({ data, menuActive, itemOnClick, menuClass }) {

    // Mapped Menu Items
    const mappedMenuItems = data.map((item, i) => {

        // current is only for dungeon menu
        const current = menuClass === 'dungeon-menu' && (item.current < 5 
            ? `${item.current + 1} / 5` 
            : 'Finished')

        const itemText = menuClass === 'dungeon-menu'
            ? item.type
            : item

        return (
            <li key={i} className={`menu-item ${menuActive === i ? 'active' : ''}`} onClick={() => itemOnClick(i)}>
                <p>{itemText}</p>
                { current && <p>{current}</p> }
            </li>
        )
    })

    // Active Class
    const activeClass = mappedMenuItems.length !== 0 ? 'active' : ''

    // Render
    return (
        <div className={`menu ${menuClass} ${activeClass}`}>
            <ul className='menu-items'>
                { mappedMenuItems }
            </ul>
        </div>
    )
}

Menu.propTypes = {
    data: PropTypes.array.isRequired,
    menuActive: PropTypes.number.isRequired,
    itemOnClick: PropTypes.func.isRequired,
    menuClass: PropTypes.string,
}
