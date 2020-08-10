import React from 'react'
import background from '../resources/container_bg.jpg'
import '../styles/container/container.css'

export default function Container({ page, sectionClass }) {

    const bg_style = {
        backgroundImage: 'url(' + background + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <section className={`container ${sectionClass ? sectionClass : ''}`} style={bg_style}>
            <div className='box'>
                { page }
            </div>
        </section>
    )
}