// import React from 'react';

// import { SubHeading } from '../../components';
// import { images } from '../../constants';
// import './Header.css';

// const Header = () => {
//     return (
//         <>
//             <div className='app__header app__wrapper section_padding' id='home'>
//                 <div className='app__wrapper_info'>
//                     <SubHeading title="Chase the new flavor"/>
//                     <h1 className='app__header-h1'>Where the Sun Shines on Every Cup</h1>
//                     <p className='p__opensans' style={{ margin: '2rem 0' }}>Ready to experience the burst of sunshine in every bite and sip? Our delicious Mexican-inspired breakfast and lunch, coupled with the finest coffee, await you. Click on our 'Menu' button and embark on a tantalizing journey of flavors at Cafe del Sol today!</p>
//                     <button type='button' className='custom__button'>Menu</button>
//                 </div>
//             </div>

//             <div className='app__header-img'>
//                 <img src={images.welcome} alt='header_img' />
//             </div>
//         </>
//     )
// }

// export default Header;
import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Cafe Del Sol" />
      <h1 className="app__header-h1">Where the Sun Shines on Every Cup</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Ready to experience the burst of sunshine in every bite and sip? Our delicious Mexican-inspired breakfast and lunch, coupled with the finest coffee, await you. Click on our 'Menu' button and embark on a tantalizing journey of flavors at Cafe del Sol today!</p>
      <button type="button" className="custom__button">Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;