import React from 'react';
import Opener from './Opener/Opener';
import Benefits from './Benefits/Benefits';
import CTA from './CTA/CTA';

const Home = () => {
    return (
        <div>
            <Opener></Opener>
            <br />
            <Benefits></Benefits>
            <br />
            <CTA></CTA>
        </div>
    );
};

export default Home;