import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Star } from '../resources/icons/star.svg'

export default function HomePage() {

    const [stars, setStars] = useState('?')

    // Fetch stars on my repo and assing them to 'stars' state
    useEffect(() => {
        fetch(`https://api.github.com/repos/patrik-pk/simple-rpg?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
            .then(response => response.json())
            .then(data => setStars(data.watchers_count))
    }, [setStars])

    // Render
    return (
        <div className='home-page'>

            <div className='content'>

                <div className='headings'>
                    <h2 className='main-heading'>Welcome to <span className='colorized'>Simple RPG</span></h2>
                    <h4 className='sub-heading'>Made with React.js & Redux</h4>
                </div>

                <div className='continue'>
                    <Link className='btn continue-link active2' to='/inventory'>Continue</Link>
                </div>

            </div>
            
            <div className='corner'>

                <a 
                className='github-link' 
                href='https://github.com/patrik-pk/simple-rpg' 
                target='_blank' 
                rel="noopener noreferrer"
                >
                    <div className='star-icon'>
                        <Star />
                    </div>
                    <p className='github-text'>Github</p>
                    <p className='amount'>{stars}</p>
                </a>

            </div>
        </div>
    )
}
