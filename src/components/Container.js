import React from 'react'
import background from '../resources/container_bg.jpg'
import '../styles/container/container.css'

export default function Container({ page, pageClass }) {

    const pgClass = pageClass ? pageClass : ''
    const bgUrl = 'url(' + background + ')'

    return (
        <section className={`container ${pgClass}`} style={{ backgroundImage: bgUrl }}>
            <div className='box'>
                { page }
            </div>
        </section>
    )
}