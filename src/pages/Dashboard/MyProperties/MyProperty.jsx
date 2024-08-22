import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MyProperty.css';

const MyProperty = ( property ) => {
    
    const prprty = property.property;
    const handleApprove = () => {
        const status = "approved";
        // fetchUser(status);
    }

    const handleDeny = () => {
        const status = "denied";
        // fetchUser(status);
    }

    return (
        <div className='col-12 p-2 '>
            <div className="card align-items-center text-white" style={{ backgroundImage: `url(${prprty.image})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition: "center" }}>
                <div className="card-body text-center">
                    <p className="card-title">Class: {prprty.building_name}</p>
                </div>

                <div className="card-body text-center">
                    <p className="card-title">Instructor name: {prprty.flat_name}</p>
                </div>

                <div className="card-body text-center">
                    <p className="card-title">Available Seats: {prprty.availability}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <p className="card-title">Price: ${prprty.rent}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <p className="card-title">Status: {prprty.status}</p>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <a className={prprty.status == "pending" || !prprty.status ? "btn" : "btn disabled"} onClick={handleApprove}><FontAwesomeIcon className='fs-2 text-success' icon={faThumbsUp} /></a>
                </div>

                <div className="card-body text-center border-right border-dark">
                    <a className={prprty.status == "pending" || !prprty.status ? "btn" : "btn disabled"} onClick={handleDeny}><FontAwesomeIcon className='fs-2 text-danger' icon={faThumbsDown} /></a>
                </div>
            </div>
        </div>
    );
};

export default MyProperty;