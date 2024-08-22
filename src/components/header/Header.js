import React, { useState } from 'react'
import './header.css'
import Logo from '../../assets/svg/Logo'
import MenuIcon from '../../assets/svg/MenuIcon'
import ActiveHeart from '../../assets/svg/ActiveHeart'
import CartIcon from '../../assets/svg/CartIcon'
import SearchIcon from '../../assets/svg/SearchIcon'
import UserIcon from '../../assets/svg/UserIcon'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <>
            <header className="header">
                <div className="header-top">
                    <div className="header-left">
                        <div className='menu-icon' onClick={toggleMenu}><MenuIcon /></div>
                        <div className="logo"><Logo /></div>
                    </div>
                    <div className="header-center">
                        <h1>LOGO</h1>
                    </div>
                    <div className="header-right">
                        <div className="icon search"><SearchIcon /></div>
                        <div className="icon heart"><ActiveHeart /></div>
                        <div className="icon cart"><CartIcon /></div>
                        <div className="icon user"><UserIcon /></div>
                    </div>
                </div>
                <nav className={`nav-menu menu ${isOpen ? 'open' : ''}`}>
                    <a href="home" onClick={closeMenu}>SHOP</a>
                    <a href="skills" onClick={closeMenu}>SKILLS</a>
                    <a href="stories" onClick={closeMenu}>STORIES</a>
                    <a href="about" onClick={closeMenu}>ABOUT</a>
                    <a href="contact" onClick={closeMenu}>CONTACT US</a>
                </nav>
            </header>
        </>
    )
}

export default Header