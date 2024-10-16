import React from 'react';
import { NavLink } from 'react-router-dom';

const CTA = () => {
    return (
        <div className='d-flex justify-content-around'>
            <NavLink className='p-2 btn text-white' to={'/dashboard'} style={{backgroundColor : 'firebrick'}}>List Your Property Now!</NavLink>
            <NavLink className='p-2 btn text-white' to={"/properties"} style={{backgroundColor : 'firebrick'}}>Find your dream property!</NavLink>
        </div>
    );
};

export default CTA;