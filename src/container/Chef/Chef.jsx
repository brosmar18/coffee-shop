import React from 'react';

import { SubHeading } from '../../components'; 
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {
    return (
        <div>
            <div>
                <img src={images.chef} alt='chef' />
            </div>
            <div>
                <SubHeading title="Chef's Word" />
                <h1>What we belive in</h1>
            </div>
            <div>
                <div>
                    <img src={images.quote} alt="quote" />
                </div>
            </div>
        </div>
    )
}

export default Chef;
