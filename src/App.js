import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Awards, Menu} from './container';

const App = () => {
    return(
        <div>
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
