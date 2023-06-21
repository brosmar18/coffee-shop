import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className='headtext__cormorant'>About Us</h1>
                <img src={images.spoon} alt='about_spoon' className='spoon__img' />
                <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium consequatur incidunt quos impedit sit, nobis non laudantium voluptatum maxime adipisci earum vero! Sit quos et recusandae aperiam iste repellendus.</p>
                <button type='button' className='custom__button'>Know More</button>
            </div>
            <div className='app__aboutus-content_knife flex__center'>
                <img src={images.knife} alt='about_knife' />
            </div>
            <div className='app__aboutus-content_history'>
                <h1 className='headtext__cormorant'>Our History</h1>
                <img src={images.spoon} alt='about_spoon' className='spoon__img' />
                <button type='button' className='custom__button'>Know More</button>
            </div>
        </div>
    )
}

export default AboutUs;
