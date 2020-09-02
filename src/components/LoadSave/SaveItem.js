import React from 'react'

export default ({ id, date, level, onLoad, onDelete }) => {
    return id === 'empty'
        ? 
        <li className='save-item empty'>
            <p className='empty-text'>Empty</p>
        </li>
        :
        <li className='save-item'>
            <div className='save-info'>
                <p className='level'>Level {level}</p>
                <p className='date'>{date}</p>
            </div>
            <div className='item-options'>
                <button className='btn load-btn active2' onClick={() => onLoad(id)}>Load</button>
                <button className='btn load-btn active2' onClick={() => onDelete(id)}>Delete</button>
            </div>
        </li>
}
