import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-brand'><Link to='/'>Portfolio</Link></div>
                <div className='navbar-links'>
                    <Link to='/' >Home</Link>
                    <Link to='/skills'>Skills</Link>
                    <Link to='projects'>Projects</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className='social-icons'>
                    <a href='https://www.linkedin.com/in/manas-78b6b6212/'><i className="fa-brands fa-linkedin" style={{ color: "#ffffff" }} /></a>
                    <a href='https://github.com/Manas15-coder'><i className="fa-brands fa-github" style={{ color: "#ffffff" }} /></a>
                </div>
                <button className='sidebar-toggle-1' onClick={toggleSidebar}>{isOpen ? 'X' : '☰'}</button>
            </nav>
            {/*mobile navbar*/}
            <div className={`mobile-nav ${isOpen ? 'open' : ' '}`}>
                <button className='sidebar-toggle-2' onClick={toggleSidebar}>{isOpen ? 'X' : '☰'}</button>
                <ul>
                    <li><Link to='/' onClick={toggleSidebar}>Home</Link></li>
                    <li><Link to='/skills' onClick={toggleSidebar}>Skills</Link></li>
                    <li><Link to='projects' onClick={toggleSidebar}>Projects</Link></li>
                    <li><Link to='/contact' onClick={toggleSidebar}>Contact</Link></li>
                </ul>

            </div>
        </>
    )
}

export default Navbar
