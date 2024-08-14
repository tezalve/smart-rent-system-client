import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <Image src="https://media.tenor.com/PXOXwsJKbSYAAAAC/where-you.gif"></Image>
            <br />
            <Link to={'/'}>Back To Home</Link>
        </div>
    );
};

export default NotFound;