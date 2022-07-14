import React from 'react'
import './skills.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa'


const Skills = () => {
    return (
        <div className="skills-content">
            <h2>My Skills</h2>
            <h3></h3>
            <div className="skills-cards">
                <article className="skills-card">
                    <FaHtml5 className='skills-icon' />
                    <h5>HTML5</h5>
                    <small></small>
                </article>
                <article className="skills-card">
                    <FaCss3Alt className='skills-icon' />
                    <h5>CSS3</h5>
                    <small></small>
                </article>
                <article className="skills-card">
                    <FaReact className='skills-icon' />
                    <h5>React</h5>
                    <small></small>
                </article>
                <article className="skills-card">
                    <FaJs className='skills-icon' />
                    <h5>JavaScript</h5>
                    <small></small>
                </article>
                <article className="skills-card">
                    <FaBootstrap className='skills-icon' />
                    <h5>Bootstrap</h5>
                    <small></small>
                </article>
            </div>
        </div>
    )
}


export default Skills