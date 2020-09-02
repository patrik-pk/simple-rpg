import React from 'react'
import { ReactComponent as Coin } from '../../resources/icons/coin.svg'

export default ({ goldValue }) => {
    return goldValue ? (
        <div className='gold-value'>
            <p className='value'>{goldValue}</p>
            <div className='gold-icon'><Coin /></div>
        </div> 
    ) : null
}
