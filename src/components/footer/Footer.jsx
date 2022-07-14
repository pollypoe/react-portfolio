import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Footer = () => {
    return (
        <IconContext.Provider value={{size: "1.8rem" }}>
        <footer>
            <h3><a href="#home"><img src={logo} className='logo footer-logo' alt='P logo'></img></a></h3>
            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="social-container footer-socials">
                <svg width="0" height="0">
                    <linearGradient id="color-gradient-2" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#274E13" offset="0%" />
                        <stop stopColor="#768F69" offset="100%" />
                    </linearGradient>
                </svg>
                <a href='https://github.com/pollypoe/portfolio-projects' target={'_blank'}>
                        <FaGithub className='social-btn' style={{ fill: "url(#color-gradient-2)" }} />
                    </a>
                    <a href='https://www.linkedin.com/in/polly-poeana-2862a01ba' target={'_blank'}>
                        <FaLinkedin className='social-btn' style={{ fill: "url(#color-gradient-2)" }} />
                    </a>
            </div>
            <div className="footer-copyright">
                <small>&copy; Polly Poeana. All right reserved.</small>
            </div>
        </footer>
        </IconContext.Provider>
    )
}

export default Footer