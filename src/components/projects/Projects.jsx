import React from 'react'
import './projects.css'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import project6 from '../../assets/project6.png'


const Projects = () => {
    return (
        <section className="project-section" id="projects">
            <h3>My Recent Work</h3>
            <h2>Projects</h2>
            <div className="project-container">
                <article className="project-item">
                    <div className="project-item-image">
                        <img src={project2} alt="coffee website" />
                    </div>
                        <h3>E-commerce Website</h3>
                        <a href="https://github.com/pollypoe/portfolio-projects/tree/main/coffee-website" className='link-btn' target={'_blank'}  rel="noreferrer">GitHub</a>
                        <a href="https://raw.githack.com/pollypoe/portfolio-projects/main/coffee-website/index.html" className='link-btn-2' target={'_blank'}  rel="noreferrer">Live Demo</a>
                </article>
                <article className="project-item">
                    <div className="project-item-image">
                        <img src={project1} alt="candle subscription website" />
                    </div>
                        <h3>Landing Page</h3>
                        <a href="https://github.com/pollypoe/portfolio-projects/tree/main/candles-landing-page" className='link-btn' target={'_blank'}  rel="noreferrer">GitHub</a>
                        <a href="https://raw.githack.com/pollypoe/portfolio-projects/main/candles-landing-page/index.html" className='link-btn-2' target={'_blank'}  rel="noreferrer">Live Demo</a>
                </article>
                <article className="project-item">
                    <div className="project-item-image">
                        <img src={project3} alt="weather app" />
                    </div>
                        <h3>Weather App</h3>
                        <a href="https://github.com/pollypoe/portfolio-projects/tree/main/weather-app" className='link-btn' target={'_blank'}  rel="noreferrer">GitHub</a>
                        <a href="https://raw.githack.com/pollypoe/portfolio-projects/main/weather-app/index.html" className='link-btn-2' target={'_blank'}  rel="noreferrer">Live Demo</a>
                </article>
            </div>
            <div className="project-container">
                <article className="project-item">
                    <div className="project-item-image">
                        <img src={project4} alt="form validation" />
                    </div>
                        <h3>Form Validation</h3>
                        <a href="https://github.com/pollypoe/portfolio-projects/tree/main/form-validation" className='link-btn' target={'_blank'}  rel="noreferrer">GitHub</a>
                        <a href="https://raw.githack.com/pollypoe/portfolio-projects/main/form-validation/index.html" className='link-btn-2' target={'_blank'}  rel="noreferrer">Live Demo</a>
                </article>
                <article className="project-item">
                    <div className="project-item-image">
                        <img src={project5} alt="to do list app" />
                    </div>
                        <h3>To Do List</h3>
                        <a href="https://github.com/pollypoe/portfolio-projects/tree/main/todo-list" className='link-btn' target={'_blank'}  rel="noreferrer">GitHub</a>
                        <a href="https://raw.githack.com/pollypoe/portfolio-projects/main/todo-list/index.html" className='link-btn-2' target={'_blank'}  rel="noreferrer">Live Demo</a>
                </article>
                <article className="project-item">
                    <div className="project-item-image">
                        <img src={project6} alt="javascript calculator" />
                    </div>
                        <h3>Javascript Calculator</h3>
                        <a href="https://github.com/pollypoe/portfolio-projects/tree/main/js-calculator" className='link-btn' target={'_blank'}  rel="noreferrer">GitHub</a>
                        <a href="https://raw.githack.com/pollypoe/portfolio-projects/main/js-calculator/index.html" className='link-btn-2' target={'_blank'}  rel="noreferrer">Live Demo</a>
                </article>
            </div>
        </section>
    )
}

export default Projects