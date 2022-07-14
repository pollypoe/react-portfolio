import React from 'react'
import './contact.css'
import { GrMail } from 'react-icons/gr'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_v6frtp6', 'template_64dnzbq', form.current, 'KvUahhidUy2s8IlR_')
        e.target.reset()
      };
    return (
        <section className="contact-section" id='contact'>
            <h3>Get In Touch</h3>
            <h2>Contact Me</h2>
            <div className="contact-container">
                <article className="contact-option">
                    <GrMail className='email-icon'/>
                    <h4>Email</h4>
                    <h5>pollypoeana@gmail.com</h5>
                    <a href="mailto:ppoeana@hotmail.com" className='email-link'>Send a message</a>
                </article>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Enter your full name' required />
                    <input type="email" name='email' placeholder='Enter your email' required />
                    <textarea name="message" rows="7" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='submit-btn'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact