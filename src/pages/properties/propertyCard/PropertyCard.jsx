import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const PropertyCard = ({ property }) => {

    const { user } = useContext(AuthContext);

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
                <div className="card-body text-center">
                    <h6 className="card-title">Size: {property.size}</h6>
                </div>
                <div className="card-body text-center">
                    <h6 className="card-title">Location: {property.location}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center">
                    <h6 className="card-title">Availability: {property.availability}</h6>
                </div>
                <div className="vr"></div>
                <div className="card-body text-center border-right border-dark">
                    <h6 className="card-title">Rent: ${property.rent}</h6>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;