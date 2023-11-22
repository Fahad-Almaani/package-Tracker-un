import React from 'react'
import './Navbar.css'
// import logo from './icon.svg'
export default function Navbar() {
    return (
        <header>
            <img src="icon.svg" alt="logo" className='logo' height={40} />

            <nav>
                <ul className='nav_links'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Track Package</a></li>
                    <li><a href="">New Package</a></li>
                </ul>
            </nav>
            <button href="" className='cta'>cta</button>
        </header>
    )
}
