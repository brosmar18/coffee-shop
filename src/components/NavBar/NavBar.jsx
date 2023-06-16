import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { images } from '../../constants';


import './NavBar.css';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='app__navbar'>
            <div className="app__navbar-logo">
                <img src={images.gericht} alt='logo' />
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href='/'>Home</a></li>
                <li className="p__opensans"><a href='/'>About</a></li>
                <li className="p__opensans"><a href='/'>Menu</a></li>
                <li className="p__opensans"><a href='/'>Awards</a></li>
                <li className="p__opensans"><a href='/'>Contact</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href='/' className="p__opensans">Log In</a>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li><a href='/' onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href='/' onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href='/' onClick={() => setToggleMenu(false)}>Menu</a></li>
                            <li><a href='/' onClick={() => setToggleMenu(false)}>Awards</a></li>
                            <li><a href='/' onClick={() => setToggleMenu(false)}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar;
