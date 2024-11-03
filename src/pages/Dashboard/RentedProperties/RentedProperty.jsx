import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const RentedProperty = ({ property }) => {
    
    return (
        <div className='col-3 p-2'>
            <div className="card align-items-center shadow">
                <img src={property.image} height={"100px"} className="" alt="..." />
                <div className="card-body text-center">
                    <p className="card-title">Property: {property.prprty}</p>
                </div>
                <div className="card-body text-center">
                    <p className="card-title">Booking Money /Two Month of Rent/: {property.rent*2}</p>
                </div>
                <div className="card-body text-center border-right border-dark">
                    <NavLink className="m-3" to={`/dashboard/addmaintenance/${property._id}`}><FontAwesomeIcon className='fs-2 text-danger' icon={faBrush} /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default RentedProperty;