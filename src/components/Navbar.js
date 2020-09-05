import React from 'react';
import logo from '../logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt=""/>
            <ul className="nav__list">
                <li><a href="/" className="nav__link">Home</a></li>
                <li><a href="/" className="nav__link">About</a></li>
                <li><a href="/" className="nav__link">Tours</a></li>
            </ul>
        </nav>
    )
}
