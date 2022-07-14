import React from 'react'
import './header.css'
import { Typewriter } from 'react-simple-typewriter'
import img1 from '../../assets/img1.jpg'
import resume from '../../assets/resume.pdf'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Header = () => {
    return (
        <IconContext.Provider value={{size: "1.8rem" }}>
        <div className='name' id='home'>
            <div className="left-container">
            <h1>Hi,</h1>
            <h2>My name is Polly</h2>
            <span className='typewriter'>
                <Typewriter
                loop
                cursor
                typeSpeed={200}
                deleteSpeed={60}
                delaySpeed={1000}
                words={['Web Developer', 'Strives for creativity', 'Loves to learn']}
                />
            </span>
            <div className="social-container">
                <a href="#contact" class="link-btn">Contact Me</a>
                <a href={resume} class="link-btn-2"target={'_blank'}  rel="noreferrer">Check Resume</a><br>
                </br><svg width="0" height="0">
                        <linearGradient id="color-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#8C5332" offset="0%" />
                            <stop stopColor="#ba9784" offset="100%" />
                        </linearGradient>
                    </svg>
                    <a href='https://github.com/pollypoe/portfolio-projects' target={'_blank'}  rel="noreferrer">
                        <FaGithub className='social-btn' style={{ fill: "url(#color-gradient)" }} />
                    </a>
                    <a href='https://www.linkedin.com/in/polly-poeana-2862a01ba' target={'_blank'}  rel="noreferrer">
                        <FaLinkedin className='social-btn' style={{ fill: "url(#color-gradient)" }} />
                    </a>
            </div>
            </div>
            <div className="right-container">
            <img src={img1} className='header-img' alt='girl working on computer'></img>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Header