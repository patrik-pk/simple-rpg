import React from 'react'
import tips from '../data/tips'

export default function HomePage() {

    const randomTip = tips[Math.floor(Math.random() * tips.length)]

    return (
        <div className='home-page'>
            Home
            <div className='tip'>
                <p>TIP: {randomTip}</p>
            </div>
        </div>
    )
}
