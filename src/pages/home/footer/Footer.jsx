import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-white py-5' style={{ backgroundImage: `url("https://t4.ftcdn.net/jpg/06/80/65/75/240_F_680657507_vr6geDlVbMupg9s34dyzRYPhvK2gdMok.jpg")`, backgroundAttachment: "fixed" }}>

            <div className='text-center row g-0 justify-content-around px-5'>
                <Link className='col-md-3 fa-2x text-danger'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></Link>
                <Link className='col-md-3 fa-2x text-danger'><FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon></Link>
                <Link className='col-md-3 fa-2x text-danger'><FontAwesomeIcon icon={faGoogle} ></FontAwesomeIcon></Link>
                <Link className='col-md-3 fa-2x text-danger'><FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon></Link>
            </div>

            <div className='pt-5'>
                <h4 className='text-center text-danger'>Copyright 2024 @ SRS</h4>
            </div>

        </div>
    );
};

export default Footer;