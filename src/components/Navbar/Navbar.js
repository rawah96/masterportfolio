import React, {useEffect, useState, useRef} from 'react'
import './Navbar.css'
import sig from './sig.svg'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    const myref = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const top = () => {
        window.scrollTo(0, 0)
    }
    return (
        <nav className='nav'>
            <Link to='/masterportfolio'>
                <img src={sig} id="sig" ref={myref} onClick={top}/>
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
