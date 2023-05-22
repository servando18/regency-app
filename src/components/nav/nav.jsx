import React, { useState } from 'react'
import './nav.css'
import regency from '../../assets/regency.png'



const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav === '#' ? 'active' : ''}><img src={regency} /></a>
        </nav>
    )
}

export default Nav