import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Lock } from '../../resources/icons/lock.svg'

export default function SidemenuLink({ name, linkTo, isLocked, icon }) {

    if(isLocked) {
        return (
            <div className='nav-link locked'>
                <p className='link-name'>{name}</p>
                <div className='link-icon'>
                    <Lock />
                </div>
            </div>
        )
    } else {
        return (
            <Link className='nav-link' to={linkTo} >
                <p className='link-name'>{name}</p>
                {icon ?
                <div className="link-icon active">
                    { icon.render() }
                </div> : null
                }
            </Link>
        )
    }
}
