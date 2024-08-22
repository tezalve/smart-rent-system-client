import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import './PropertyCard.css'

const PropertyCard = ({ property }) => {

    const { user } = useContext(AuthContext);

    const handleSelect = () => {
        toast.success(`Successfully booked ${property.size + " " + property.building_name + " " + property.flat_name}`)
    }

    return (
        <div className='col-md-12 p-5'>
            <div className={property.availability == 0 ? "card flex-row align-items-center bg-danger" : "card flex-row align-items-center"}>
                <img src={property.image} height={"100px"} className="" alt="..." />
                <div className="card-body text-center">
                    <h6 className="card-title">Building: {property.building_name}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Flat: {property.flat_name}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Size: {property.size}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Location: {property.location}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Availability: {property.availability}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Rent: ${property.rent}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <a className={ property.availability == 0 ? "btn disabled" : "btn"} onClick={handleSelect}><FontAwesomeIcon className='plus' icon={faCirclePlus} /></a>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;