import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';

const Header = () => {
    return (
        <div className='app__header app__wrapper section_padding' id='home'>
            <div className='app__wrapper_info'>
                <SubHeading />
                <h1 className='app__header-h1'>The Key To Fine Dining</h1>
                <p className='p__opensans' style={{ margin: '2rem 0'}}>Call to action or attention getter</p>
                <button type='button' className='custom__button'>Explore Menu</button>
            </div>
        </div>
    )
}

export default Header;
