import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Opener = () => {
    return (
        <div className='text-center'>
            {/* <h3>Hello and welcome to</h3> */}
            <div className={ window.innerWidth < 768? 'display-5' : 'display-1'}>
                {' " '}
                <TypeAnimation
                    sequence={[
                        'Hello and Welcome to',
                        500,
                        'Smart Rent System',
                        10000
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    speed={150}
                    style={{ display: 'inline-block', color: "FireBrick" }}
                />
                {' " '}
            </div>
        </div>
    );
};

export default Opener;