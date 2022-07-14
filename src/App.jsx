import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/Projects.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
    return (
        <>
            <Nav />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default App