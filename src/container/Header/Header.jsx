import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className='app__header app__wrapper section_padding' id='home'>
                <div className='app__wrapper_info'>
                    <SubHeading />
                    <h1 className='app__header-h1'>Where the Sun Shines on Every Cup</h1>
                    <p className='p__opensans' style={{ margin: '2rem 0' }}>Explore our menu and let your tastebuds rejoice at Cafe del Sol</p>
                    <button type='button' className='custom__button'>Menu</button>
                </div>
            </div>

            <div className='app__header-img'>
                <img src={images.welcome} alt='header_img' />
            </div>
        </>
    )
}

export default Header;
