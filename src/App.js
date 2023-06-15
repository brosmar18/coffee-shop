import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Awards, Menu} from './container';
import { NavBar } from './components';

const App = () => {
    return(
        <div>
            <NavBar />
            <Header />
            <AboutUs />
            <Menu />
            <Chef />
            <Intro />
            <Awards />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
    )
}

export default App;
