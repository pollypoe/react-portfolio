import React from 'react'
import './about.css'
import img2 from '../../assets/img2.jpg'

const About = () => {
    return (
        <section className="about-section" id='about'>
            <div className="about-container">
                <div className="about-me-image">
                    <img src={img2} alt="About Image" />
                </div>
            </div>
            <div className="about-content">
                <h2>Let Me</h2>
                <h2>Introduce</h2>
                <h2>Myself</h2>
                <p>
                    I'm an aspiring front-end web developer that graduated with an Associates 
                    in Computer Information Systems and with a focus on web development.
                    I am an organized person that loves to learn new things and strives to challenge 
                    myself.
                
                
                </p>
            </div>
        </section>
    )
}


export default About