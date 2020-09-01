import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Lock } from '../../resources/icons/lock.svg'

export default function SidemenuLink({ name, linkTo, isLocked, icon }) {

    // Some links should be locked before logging in, but since there is
    // no authentification implemented (yet), it's not used.
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
                <div className='link-icon active'>
                    { icon.render() }
                </div> : null
                }
            </Link>
        )
    }
}
