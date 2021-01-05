import React from 'react'
import './Navbar.css'
import sig from './sig.svg'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className='nav'>
            <Link to='/masterportfolio'>
                <img src={sig} />
            </Link>
            <ul>
                <li>
                    <Link to="/education">Education</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar
