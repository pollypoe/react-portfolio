import React from 'react'
import './nav.css'
import logo from '../../assets/logo.png'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
        <header>
            <h3><a href="#home"><img src={logo} className='logo' alt='P logo'></img></a></h3>
            <nav ref={navRef}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Nav