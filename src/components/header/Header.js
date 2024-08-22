import React from 'react'
import './header.css'
import Logo from '../../assets/svg/Logo'
import MenuIcon from '../../assets/svg/MenuIcon'
import ActiveHeart from '../../assets/svg/ActiveHeart'
import CartIcon from '../../assets/svg/CartIcon'
import SearchIcon from '../../assets/svg/SearchIcon'
import UserIcon from '../../assets/svg/UserIcon'

function Header() {
    return (
        <>
            <header className="header">
                <div className="header-top">
                    <div className="header-left">
                        <div className='menu-icon'><MenuIcon /></div>
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
                <nav className="nav-menu">
                    <a href="#shop">SHOP</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#stories">STORIES</a>
                    <a href="#about">ABOUT</a>
                    <a href="#contact">CONTACT US</a>
                </nav>
            </header>
        </>
    )
}

export default Header