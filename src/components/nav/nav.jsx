import React, { useState } from 'react'
import './nav.css'
import {SlHome} from 'react-icons/sl'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav === '#' ? 'active' : ''}><SlHome /></a>
        </nav>
    )
}

export default Nav